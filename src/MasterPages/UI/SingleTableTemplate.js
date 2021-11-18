import React, {Component} from "react";
import Input from '../UI/Input';
import '../../Styles/MasterCss.css';
import * as pagerConstatnts from '../../Utils/constants/PagerConstants';
import noData from "./NoDataComponent";

class SingleTableTemplate extends Component {

    state = {
        data: null,
        changedData: [],
        length: 0
    }
    pagerVal = pagerConstatnts.PAGE_SIZE_LIMIT;
    newData = '';
    searchData = null;
    searchCriteria = 'eq';

    componentDidMount() {

        if (this.props.data != null) {

            let data = this.props.data;
            data.changedData =
                (data != null && data.rows != null && data.rows.elementData != null &&
                    data.rows.elementData.tab_td != null) ? data : null;
            this.newData = data;
            this.setState({
                changedData: data.changedData,
                data: this.props.data,
                dataLen: (data && data.rows) ? data.rows.elementData.tab_td.length : -1,
                manageData: this.props.manageData,
                dataIndexs: [],
                ...this.props.data
            });

        }
    }

    checkAll = (event) => {
        let pos = -1;
        let localSate = this.state;
        let type = event.target.id.substr(3, event.target.id.length);
        let approveFlag = false;
        let rejectFlag = false;
        let approvedTotal = 0;
        let rejectedTotal = 0;
        if (type.toLowerCase() === 'approve') {
            approveFlag = true;
        } else if (type.toLowerCase() === 'reject') {
            rejectFlag = true;
        }
        localSate.data.columns.elementData.map((data, index) => {
            if (data.id === event.target.id) {
                localSate.data.columns.elementData[index].checked = !data.checked;
            }
        });
        if (approveFlag || rejectFlag) {
            localSate.data.rows.elementData.tab_td.map((data, index) => {
                data.map((o, i) => {
                    if (approveFlag && o.id.substr(0, 3).toLowerCase() === 'app') {
                        approvedTotal += 1;
                        if (o.checked) {
                            approvedTotal = 0;
                        }
                        rejectedTotal = 0;
                        o.checked = !o.checked;
                    } else if (rejectFlag && o.id.substr(0, 3).toLowerCase() === 'rej') {
                        rejectedTotal += 1;
                        if (o.checked) {
                            rejectedTotal = 0;
                        }
                        o.checked = !o.checked;
                        approvedTotal = 0;
                    } else if (rejectFlag && o.id.substr(0, 3).toLowerCase() === 'app') {
                        o.checked = false;
                        rejectedTotal = 0;
                        approvedTotal = 0;
                    } else if (!approveFlag && o.id.substr(0, 3).toLowerCase() === 'rej') {
                        o.checked = false;
                        rejectedTotal = 0;
                        approvedTotal = 0;
                    }
                });
            });
        } else {
            localSate.data.rows.elementData.tab_td.map((data, ind) => {
                data.map((o, i) => {

                    if (o.id === event.target.id) {
                        pos = ind;

                        o.checked = (o.checked) ? !o.checked : true;
                        localSate.currentPosition = pos;
                        if (o.checked) {
                            localSate.dataIndexs.push(ind)
                        } else {
                            localSate.dataIndexs = (localSate.dataIndexs) ? localSate.dataIndexs.filter((index, val) => {
                                return !index == ind;
                            }) : localSate.dataIndexs;
                        }
                        return true;
                    }
                });
            });
        }
        localSate.rejectSelection = rejectedTotal;
        localSate.approveSelection = approvedTotal;
        localSate.currentPosition = pos;
        this.setState(localSate);
    };

    changeTableData = () => {
        let data = this.state;
        if (this.pagerVal === 'Next') {
            let pagerLen = pagerConstatnts.PAGER_LIST.length;
            if (data.pagerValue !== pagerConstatnts.PAGER_LIST[pagerLen - 2]) {
                data.pagerValue = pagerConstatnts.PAGER_LIST.indexOf(data.pagerValue) + 1;
                this.pagerVal = data.pagerValue;
            }
        } else if (this.pagerVal === 'Previous') {
            if (data.pagerValue !== pagerConstatnts.PAGER_LIST[2]) {
                data.pagerValue = pagerConstatnts.PAGER_LIST.indexOf(data.pagerValue) - 1;
                this.pagerVal = data.pagerValue;
            }
        } else {
            data.pagerValue = this.pagerVal;
        }
        this.setState(data)
    }
    headerPager = (props) => {
        return <div className={'row mt-1'}>
            <div className='col-sm-12 col-md-6 mr-sm-10 '>
                <nav aria-label="Pager Nav" className=''>

                    {pagerConstatnts.PAGER_LIST.map((p, index) => {
                        return <ul key={index} className="pagination justify-content-center float-right">
                            <li className="page-item t-b">
                                <a className="page-link t-b" name={p} onClick={e => {
                                    this.pagerVal = e.target.name;
                                    this.changeTableData();
                                }} tabIndex="-1" aria-disabled="true">{p}</a>
                            </li>
                        </ul>
                    })}
                </nav>
            </div>
            <div className="col-sm-12 col-md-3 text-left ml-sm-15 float-left t-b ">
                <select
                    className="ml-sm-5  pagination justify-content-center input-group w-20
                    float-left custom-select w-20 h-70 dropdownPager "
                    id="pagerDropDown">
                    <option value='20' className='t-b'>20</option>
                    {pagerConstatnts.PAGER_LIST_DROPDOWN.map((p, index) => {
                        return <option  className='t-b' value={p} onClick={e => {
                            this.pagerVal = e.target.value;
                            this.changeTableData();
                        }} key={p}>{p}</option>

                    })}   </select>
            </div>
            <div className="col-sm-12 col-md float-right mr-3 text-primary ">

                <span className='text-right float-right t-b'>  View 1
                - {this.pagerVal} of {(this.state.changedData.rows.elementData && this.state.changedData.rows.elementData.tab_td) ? (this.state.changedData.rows.elementData.tab_td.length) : 0}
           </span></div>
        </div>

    }
    footerPager = (props) => {

        return <div className={'row'}>
            <nav aria-label="Page navigation example" className={' col-sm-12 col-md-6 '}>

                {pagerConstatnts.PAGER_LIST.map((p, index) => {
                    return <ul key={index} className="pagination justify-content-center float-right">
                        <li className="page-item">
                            <a className="page-link text-primary" name={p} onClick={e => {
                                this.pagerVal = e.target.name;
                                this.changeTableData();
                            }} tabIndex="-1" aria-disabled="true">{p}</a>
                        </li>
                    </ul>
                })}

            </nav>
            <div className="pagination justify-content-cente input-group w-20 col-sm-1 float-left">
                <select className="custom-select w-20 h-70 dropdownPager text-primary" id="pagerDropDown">
                    <option value='20'>20</option>
                    {pagerConstatnts.PAGER_LIST_DROPDOWN.map((p, index) => {
                        return <option value={p} onClick={e => {
                            this.pagerVal = e.target.value;
                            this.changeTableData();
                        }} key={p}>{p}</option>

                    })}   </select>
            </div>
            <div className="col-sm mr-4 text-primary text-right">
                View 1
                - {this.pagerVal} of {(this.state.changedData.rows.elementData && this.state.changedData.rows.elementData.tab_td) ? (this.state.changedData.rows.elementData.tab_td.length) : 0}
            </div>
        </div>

    }

    table_classes = ['table','tabl-custom','table-bordered-custom', 'table-responsive-sm', ' table-sm', 'tabCustom',
        ((this.state.changedData && this.state.changedData.tableClass) ? this.state.changedData.tableClass : '')];
    thead_classes = (this.state.changedData && this.state.changedData.columns && this.state.changedData.columns.elementStyles) ?
        ["thead-light t-b", ...this.state.changedData.columns.elementStyles] : ["thead-light"];
    tbody_classes = (this.state.changedData && this.state.changedData.rows && this.state.changedData.rows.elemntStyles)
        ? [...this.state.changedData.rows.elemntStyles, ""] : [''];
    tableHead = () => {
        let data = (this.state.changedData && this.state.changedData.columns && this.state.changedData.columns.elementData) ?
            <thead className={this.thead_classes.join(' ')}>
            <tr>
                {
                    this.state.changedData.columns.elementData.map((head, index) => {
                        return <th key={index} name={head.name} className='t-b' id={head.id} scope={head.scope} colSpan={1}>
                            {
                                (head.type != null && head.type !== 'tab') ?
                                    <Input
                                        id={head.id}
                                        classes={head.classes}
                                        elementConfig={head.elementConfig}
                                        value={head.value}
                                        label={head.label}
                                        checked={head.checked}
                                        changed={this.checkAll}
                                        elementType={head.type}
                                    />
                                    : head.title
                            }
                        </th>
                    })}
            </tr>


            </thead> : (null)
        return data;
    };
    tableBoady = () => {
        return (this.state.changedData && this.state.changedData.rows && this.state.changedData.rows.elementData && this.state.changedData.rows.elementData.tab_td) ?
            <tbody className={this.tbody_classes.join(' ')}>
            {

                this.state.changedData.rows.elementData.tab_td.slice(0, this.pagerVal)
                    .map((row, index) => {

                        return <tr key={index} id={'tab_tr_' + index}>{

                            Object.values(row).map((ic, index) => {

                                return <td key={index} name={ic.name} id={ic.id} className={ic.classes.join(' ')}>

                                    <div className="  mr-1 text-center">
                                        {(ic.type != null && ic.type !== 'tab') ?
                                            <Input
                                                id={ic.id}
                                                classes={ic.classes}
                                                elementConfig={ic.elementConfig}
                                                value={ic.value}
                                                checked={ic.checked}
                                                label={ic.label}
                                                changed={this.checkAll}
                                                elementType={ic.type}
                                            />
                                            : ic.value
                                        }</div>
                                    {/* {(ic.type != null && ic.type !== 'tab') ?
                                            <div className="col-xs"><span className='text-justify'> </span></div> : null
                                        }*/}

                                </td>
                            })
                        }</tr>
                    })

            }
            </tbody> : <tbody>
            <tr>
                <td className='text-center font-weight-bold '>
                    <h5>No Data to View.</h5>
                </td>
            </tr>

            </tbody>
    };

    performSearch = (e) => {
        if (this.searchData != null) this.state.manageData('search', this.searchCriteria, this.searchData)
    };

    loadData = () => {
        return <div className="">
            {(this.state.download) ?
                <div className="row mr-4 mt-2 mb-2">
                    <div className="col-sm ">
                        <Input
                            src={'download'}
                            elementType={'img'}
                            classes={['wp-20', 'hp-20', 'float-right']}
                            alt={'Download'}
                            imgclick={this.state.downloadNow}
                            id={this.state.downloadId}
                        />
                    </div>
                </div>

                : null}

            {
                (this.state.changedData && this.state.changedData.isheadReq) ?
                    this.headerPager()
                    : null
            }
            <table className={this.table_classes.join(' ')}>
                {this.tableHead()}
                {this.tableBoady()}
            </table>
            {this.state.changedData && this.state.changedData.isFooterReq ?
                <div className="card-footer text-muted">
                    <div className="row">
                        <div className="col-sm-12 col-md-2 float-left">

                            {(this.state.insertOk) ? <div className="col-xs float-left">
                                <Input
                                    elementType={'insert'}
                                    classes={['wp-20', 'hp-20', 'ml-1', 'text-primary', 'float-right']}
                                    changed={() => (this.state.manageData) ? this.state.manageData('insert', this.state.dataIndexs, null) : null}
                                />

                            </div> : null}
                            {(this.state.editOk) ? <div className="col-xs float-left">
                                <Input
                                    elementType={'edit'}
                                    classes={['wp-20', 'text', 'ml-1', 'text-warning', 'hp-20', 'float-right']}
                                    changed={() => (this.state.manageData) ? this.state.manageData('edit', this.state.dataIndexs, null) : null}
                                />

                            </div> : null}
                            {(this.state.deleteOk) ? <div className="col-xs float-left">
                                <Input
                                    elementType={'delete'}
                                    classes={['wp-20', 'ml-1', 'text-danger', 'hp-20', 'float-right']}
                                    changed={() => (this.state.manageData) ? this.state.manageData('delete',
                                        null, this.state.dataIndexs) : null}
                                />

                            </div> : null}
                            {(this.state.copyOk) ? <div className="col-xs float-left">
                                <Input
                                    elementType={'copy'}
                                    classes={['wp-20', 'ml-1', 'text-primary', 'hp-20', 'float-right']}
                                    changed={() => (this.state.manageData) ? this.state.manageData('copy', this.state.dataIndexs, null) : null}
                                />

                            </div> : null}
                            {(this.state.reloadOk) ? <div className="col-xs float-left border-left border-grey">
                                <Input
                                    elementType={'reload'}
                                    classes={['wp-20', 'ml-1', 'text-primary', 'hp-20', 'float-right']}
                                    changed={() => (this.state.manageData) ? this.state.manageData('reload', this.state.dataIndexs, null) : null}
                                />
                            </div> : null}
                            {(this.state.searchOk) ? <div className="col-xs float-left">
                                <Input
                                    elementType={'search'}
                                    elementConfig={{'data-toggle': "modal", 'data-target': "#myModal"}}
                                    classes={['wp-20', 'ml-1', 'hp-20', 'float-right']}
                                />
                            </div> : null}
                            {(this.state.downloadOk) ? <div className="col-xs float-left">
                                <Input
                                    src={'download'}
                                    elementType={'img'}
                                    classes={['wp-20', 'ml-1', 'hp-20', 'float-right']}
                                    alt={'Download'}
                                    imgclick={this.state.downloadNow}
                                    id={this.state.downloadId}
                                />
                            </div> : null}
                        </div>

                        {/*
                            (this.state.changedData && this.state.changedData.isheadReq) ?
                                <div className="col-sm-12 col-md">
                                    {this.footerPager()}
                                </div> : null*/
                        }
                    </div>
                </div>
                : null
            }
            <div className="container   modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">

                    <div className="modal-content">
                        <h5 className={'text-left ml-2'}>Search</h5>
                        <div className="row p-3">
                            <div className="col-sm-12 col-md-6">
                                <Input
                                    elementType={'select'}
                                    elementConfig={{
                                        options: [
                                            {value: 'eq', selected: true, displayValue: 'equal'},
                                            {value: 'ne', selected: true, displayValue: 'not equal'},
                                            {value: 'bw', selected: true, displayValue: 'begins with'},
                                            {
                                                value: 'bn',
                                                selected: true,
                                                displayValue: 'does not begin with'
                                            },
                                            {value: 'ew', selected: true, displayValue: 'ends with'},
                                            {
                                                value: 'en',
                                                selected: true,
                                                displayValue: 'does not end with'
                                            },
                                            {value: 'cn', selected: true, displayValue: 'contains'},
                                            {
                                                value: 'nc',
                                                selected: true,
                                                displayValue: 'does not contain'
                                            },
                                            {value: 'nu', selected: true, displayValue: 'is null'},
                                            {value: 'nn', selected: true, displayValue: 'is not null'},
                                            {value: 'in', selected: true, displayValue: 'is in'},
                                            {value: 'ni', selected: true, displayValue: 'is not in'},
                                        ]
                                    }}
                                    classes={['ml-1']}
                                    changed={e => {
                                        this.searchCriteria = e.target.value
                                    }}
                                    label={'Search Type'}
                                />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <Input
                                    elementType={'text'}
                                    classes={['ml-1']}
                                    changed={e => {
                                        this.searchData = e.target.value
                                    }}
                                    label={'Search Text'}
                                />
                            </div>

                        </div>
                        <div className="modal-body">


                        </div>

                        <div className="modal-footer">
                            <Input
                                elementType={'button'}
                                classes={['btn btn-default']}
                                elementConfig={{
                                    'data-dismiss': 'modal'
                                }}
                                btnVal={'Close'}
                            />
                            <Input
                                elementType={'button'}
                                classes={['btn btn-primary']}
                                elementConfig={{
                                    'data-dismiss': 'modal'
                                }}
                                btnVal={'Search'}
                                changed={this.performSearch}
                            />

                        </div>
                    </div>

                </div>
            </div>

        </div>
    }

    render() {
        if (this.props.data === null) {
            return noData;
        }
        if (this.props.data && this.props.data.rows && this.props.data.rows.elementData.tab_td.length != ((this.state.changedData.rows) ? this.state.changedData.rows.length : 0)) {
            this.state.changedData = this.props.data;
        }
        return this.loadData();
    }
};
export default SingleTableTemplate;

