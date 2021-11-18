import React, {Component} from "react";
import Input from '../UI/Input';
import '../../Styles/MasterCss.css';
import * as pagerConstatnts from "../../Utils/constants/PagerConstants";

class TableExpandTemplates extends Component {

    state = {
        data: null,
        changedData: [],
        length: 0
    }
    pagerVal = pagerConstatnts.PAGE_SIZE_LIMIT;
    newData = '';
    table_classes = ['table', 'table-borderless', 'table-responsive-xs', 'table-responsive-sm', ' table-sm', 'tabCustom',
        ((this.state.changedData && this.state.changedData.tableClass) ? this.state.changedData.tableClass : '')];
    thead_classes = (this.state.changedData && this.state.changedData.columns && this.state.changedData.columns.elementStyles) ?
        ["thead-light", ...this.state.changedData.columns.elementStyles] : ["thead-light"];
    tbody_classes = (this.state.changedData && this.state.changedData.rows && this.state.changedData.rows.elemntStyles)
        ? [...this.state.changedData.rows.elemntStyles, ""] : [''];
    suGrid_table_classes = ['table', 'table-bordered', 'table-responsive-xs', ' table-sm', 'tabCustom', 'tabCustomSubgrid'];
    subgrid_thead_classes = [this.thead_classes, ...(this.state.changedData && this.state.changedData.subGridData && this.state.changedData.subGridData.columns
        && this.state.changedData.subGridData.columns.elementStyles) ? this.state.changedData.subGridData.columns.elementStyles : ['']];
    tbody_sub_classes = (this.state.changedData && this.state.changedData.subGridData && this.state.changedData.subGridData.rows &&
        this.state.changedData.subGridData.rows.elemntStyles)
        ? [...this.state.changedData.subGridData.rows.elemntStyles, ""] : [''];

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
                dataLen: data.rows.elementData.tab_td.length,
                ...this.props.data
            });

        }
    }

    checkAll = (event) => {
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
                    } else if (!rejectFlag && o.id.substr(0, 3).toLowerCase() === 'app') {
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
            localSate.data.rows.elementData.tab_td.map((data, index) => {
                data.map((o, i) => {
                    if (o.id === event.target.id) {
                        o.checked = true;
                    }
                });
            });
        }
        localSate.rejectSelection = rejectedTotal;
        localSate.approveSelection = approvedTotal;
        this.setState(localSate)
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
        //     this.loadData();
    }
    Pager = (props) => {

        return <div className={'row'}>
            <nav aria-label="Page navigation example" className={' col-sm-6 '}>

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

    tableHead = () => {
        let data = (this.state.changedData && this.state.changedData.columns && this.state.changedData.columns.elementData) ?
            <thead className={this.thead_classes.join(' ')}>

            <tr>
                {
                    this.state.changedData.columns.elementData.map((head, index) => {
                        return <th key={index} name={head.name} id={head.id} scope={head.scope} colSpan={1}>
                            {
                                (head.type != null && head.type !== 'tab') ?
                                    <Input
                                        id={head.id}
                                        classes={head.classes}
                                        elementConfig={head.elementConfig}
                                        value={head.value}
                                        label={head.label}
                                        checked={head.checked}
                                        changed={eval(head.changed)}
                                        elementType={head.type}
                                    />
                                    : head.title
                            }
                        </th>
                    })}
            </tr>


            </thead> : <thead className={thead_classes.join(' ')}>
            <tr>
                {constants.BLANK}
            </tr>
            </thead>;
        return data;
    };
    i = 0;

    subGridtableBoady = () => (this.state.changedData.subGridData && this.state.changedData.subGridData.rows &&
        this.state.changedData.subGridData.rows.elementData && this.state.changedData.subGridData.rows.elementData.tab_td)
        ? <tbody className={this.tbody_sub_classes.join(' ')}>
        {this.state.changedData.subGridData.rows.elementData.tab_td.map((row, index) => {
            this.i++;
            return (<tr key={index + this.i} id={'tab_tr_' + (index + this.i)}>{
                Object.values(row).map((ic, index) => {
                    return <td key={index} name={ic.name} id={ic.id} className={ic.classes.join(' ')}>
                        <span
                            className='text-center'>

                            {(ic.type != null && ic.type !== 'tab') ?
                                <Input
                                    id={ic.id}
                                    classes={ic.classes}
                                    elementConfig={ic.elementConfig}
                                    value={ic.value}
                                    checked={ic.checked}
                                    label={ic.label}
                                    changed={ic.changed}
                                    elementType={ic.type}
                                />
                                : ic.value
                            }</span>

                    </td>
                })
            }</tr>)
        })
        }
        </tbody> : <tbody className={tbody_sub_classes.join(' ')}>
        <tr>
            <td>{constants.NO_DATA}</td>
        </tr>
        </tbody>;
    i = 0;
    subGridtableHead = () => (this.state.changedData.subGridData && this.state.changedData.subGridData.columns
        && this.state.changedData.subGridData.columns.elementData) ?
        <thead
            className={this.subgrid_thead_classes.join(' ')}>
        <tr>
            {
                (this.state.changedData.subGridData.columns.elementData).map((head, index) => {
                    return <th key={index} name={head.name} id={head.id} scope={head.scope}>
                        {
                            (head.type != null && head.type !== 'tab') ?
                                <Input
                                    id={head.id}
                                    classes={head.classes}
                                    elementConfig={head.elementConfig}
                                    value={head.value}
                                    label={head.label}
                                    checked={head.checked}
                                    changed={head.changed}
                                    elementType={head.type}
                                />
                                : head.title
                        }
                    </th>
                })}
        </tr>
        </thead> : null;
    subGridBasedtable = () => {
        return <tr key="100000">
            <td></td>
            <td colSpan={(this.state.changedData.rowlen) ? this.state.changedData.rowlen : 1}>
                <table className={this.suGrid_table_classes.join(' ')}>
                    {this.subGridtableHead()}
                    {this.subGridtableBoady()}
                </table>
            </td>
        </tr>;

        //   this.i++;
        /*   data += <tr key={index + this.i} id={'tab_tr_' + (index + this.i)}>{
               Object.values(row).map((ic, index) => {
                   return <td key={index} name={ic.name} id={ic.id} className={ic.classes.join(' ')}>
                       <span
                           className='text-center'>
                       {(ic.type != null && ic.type !== 'tab') ?
                           <Input
                               id={ic.id}
                               classes={ic.classes}
                               elementConfig={ic.elementConfig}
                               value={ic.value}
                               checked={ic.checked}
                               label={ic.label}
                               changed={ic.changed}
                               elementType={ic.type}
                           />
                           : ic.value
                       }</span>
                   </td>
               })
           }</tr>*/
        // return data;

    };

    tableBoady = () => {
        return (this.state.changedData.rows.elementData && this.state.changedData.rows.elementData.tab_td) ?
            <tbody className={[...this.tbody_classes].join(' ')}>
            {this.state.changedData.rows.elementData.tab_td.slice(0, this.pagerVal).map((row, index) => {
                this.i++;

                return (this.state.changedData.showSubGrid && index === (this.state.changedData.subgridPosition + 1)) ? this.subGridBasedtable() :
                    <tr key={index + this.i} id={'tab_tr_' + (index + this.i)}>{
                        Object.values(row).map((ic, index) => {
                            return <td key={index} name={ic.name} id={ic.id} className={ic.classes.join(' ')}>
                    <span
                        className='text-center'>
                    {(ic.type != null && ic.type !== 'tab') ?
                        <Input
                            id={ic.id}
                            classes={ic.classes}
                            elementConfig={ic.elementConfig}
                            value={ic.value}
                            checked={ic.checked}
                            label={ic.label}
                            changed={ic.changed}
                            elementType={ic.type}
                        />
                        : ic.value
                    }</span>
                            </td>
                        })
                    }</tr>
            })
            }
            </tbody> : <tbody className={[, ...tbody_classes].join(' ')}>
            <tr>
                <td>{constants.NO_DATA}</td>
            </tr>
            </tbody>;
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
                    this.Pager()
                    : null
            }
            <table className={this.table_classes.join(' ')}>
                {this.tableHead()}
                {this.tableBoady()}
            </table>
            {this.state.changedData && this.state.changedData.isFooterReq ?
                <div className="card-footer text-muted">
                </div> : null
            }
        </div>
    }

    render() {
        if (this.props.data.rows.elementData.tab_td.length != ((this.state.changedData.rows) ? this.state.changedData.rows.length : 0)) {
            this.state.changedData = this.props.data;
        } else if (this.props.data.showSubGrid) {
            this.state.changedData = this.props.data;
        }
        return this.loadData();
    }
};
export default TableExpandTemplates;
