import React from 'react';
import Pagination from 'react-js-pagination';
import TableEditable from './TableEditable';
import './CustomTable.css';

class CustomTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header: props.header.columnHeader.header,
            data: props.header.columnData.data,
            rows: props.header.columnData.data.length,
            rowsPerPage: props.rowsPerPage,
            start:0,
            end:props.rowsPerPage,
            activePage:1,
            shwHidePagination:props.paginationActive,
            previousEle:null
        };
        //if(props.rowExpand === 'undefined')props.rowExpand = false;
        var element = props.rowExpand ? this.state.header[1].columnName : this.state.header[0].columnName;
        this.state.data.sort((a,b) => Reflect.get(a,element).localeCompare(Reflect.get(b,element)));
    }

    handlePageChange(pageNumber) {
        let pageStart = (this.state.rowsPerPage)*(pageNumber-1);
        let pageEnd = this.state.rowsPerPage * pageNumber;
        if(pageEnd >= this.state.rows){
            pageEnd = this.state.rows;
        }
        this.setState({
            activePage: pageNumber,
            start:pageStart,
            end:pageEnd
        });
    }
    handleNumRecordsPerPage(event){
        let rows = event.target.value;
        let pageStart = (rows) * (this.state.activePage -1);
        let pageEnd = rows * this.state.activePage;
        this.setState({
            rowsPerPage: rows,
            start: pageStart,
            end: pageEnd
        });
    }

    sortOrder = (event) =>{
        var ele = document.querySelector('#'+event.target.id);
        if(this.state.previousEle != null && ele.id != this.state.previousEle.id){
            var prev = document.querySelector('#'+this.state.previousEle.id);
            prev.className='fa fa-fw fa-caret-down sortable';
            prev.setAttribute('order','asc');
        }
        this.setState({previousEle:ele});
        if(ele.className.indexOf('fa-caret-down') != -1){
            ele.className = 'fa fa-fw fa-caret-up sortable active';
        }else{
            ele.className = 'fa fa-fw fa-caret-down sortable active';
        }
        var data = this.state.data;
        var sortEle = ele.parentElement.id;
        var sortType = ele.getAttribute('sortType');
        if(sortType == null) sortType = 'String';
        var order = ele.getAttribute('order');
        if(sortType === 'String'){
            if(order == 'asc'){
                data.sort((a,b) => Reflect.get(a,sortEle).localeCompare(Reflect.get(b,sortEle)));
                ele.setAttribute('order','desc');
            }else{
                data.sort((a,b) => Reflect.get(b,sortEle).localeCompare(Reflect.get(a,sortEle)));
                ele.setAttribute('order','asc');
            }
        }else{
            if(order == 'asc'){
                data.sort((a,b) => Reflect.get(a,sortEle) - Reflect.get(b,sortEle));
                ele.setAttribute('order','desc');
            }else{
                data.sort((a,b) => Reflect.get(b,sortEle) - Reflect.get(a,sortEle));
                ele.setAttribute('order','asc');
            }
        }
        this.setState({data:data});
    }

    buildTable(data, start, end){
        const trs=[];
        let k = 0;
        const coulms = [
            {columnName: 'col-0', displayValue: '', type:'checkbox'},
            {columnName: 'col-1', displayValue: 'Resource Name', type:'select'},
            {columnName: 'col-2', displayValue: 'Jan', type:'text'},
            {columnName: 'col-3', displayValue: 'Feb', type:'text'},
            {columnName: 'col-3', displayValue: 'Mar', type:'text'},
            {columnName: 'col-3', displayValue: 'Apr', type:'text'},
            {columnName: 'col-3', displayValue: 'May', type:'text'},
            {columnName: 'col-3', displayValue: 'June', type:'text'},
            {columnName: 'col-3', displayValue: 'July', type:'text'},
            {columnName: 'col-3', displayValue: 'Aug', type:'text'},
            {columnName: 'col-3', displayValue: 'Sep', type:'text'},
            {columnName: 'col-3', displayValue: 'Oct', type:'text'},
            {columnName: 'col-3', displayValue: 'Nov', type:'text'},
            {columnName: 'col-3', displayValue: 'Dec', type:'text'}
        ];

        data.slice(start,end).map(obj =>{
            k++;
            trs.push(
                <tr className='collapsed' data-target={'#demo'+k} data-toggle='collapse'>
                    {this.props.rowExpand && 
                        <td className='expand-button'></td>
                    }
                    {
                        Object.values(obj).map((value , key) =>{
                            return(
                            <td>
                                {value}
                            </td>
                            )
                        })
                        
                    }
                </tr>
            );
        if(this.props.rowExpand){
            trs.push(
                <tr id={'demo'+k} className='hiddenRow collapse'>
                    <td></td>
                    <td colspan='6'>
                        <TableEditable header={coulms}/>
                    </td>
                </tr>
            );
        }
        });
        return trs;
    }
    render(props){
        let headerLen = this.state.header.length;
        let start = this.state.start;
        let end = this.state.end;
        const table = this.buildTable(this.state.data, start, end);
        let numRecordsPerPage = (
            <select onChange={this.handleNumRecordsPerPage.bind(this)} className='form-control form-control-sm custom-select custom-select-sm'>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
            </select>
        );
        return (
            <div className='container'>
                {this.state.shwHidePagination &&
                    <div className='container-fluid'> 
                        <table> 
                            <tr>
                            <td>Show &nbsp;</td>
                            <td>{numRecordsPerPage}</td>
                            <td>&nbsp; entries</td>
                            </tr>
                        </table>
                    </div>
                }
                <div className='table-responsive'>
                    <table id='customDataTable' cellSpacing='0' className='table table-striped table-bordered table-sm'>
                        <thead>
                        <tr>
                            {
                                this.state.header.map((obj,key) =>{
                                    if(this.props.rowExpand && key == 1){
                                        key = 0;
                                    }
                                    return (
                                        <th id={obj.columnName}>{obj.displayValue} 
                                            {obj.sortColumn &&
                                                <i
                                                 id={'icon-'+key}
                                                 onClick={this.sortOrder}
                                                 sortBy={obj.columnName}
                                                 sortType={obj.sortType}
                                                 order={key == 0?'desc':'asc'}
                                                 className={key == 0?'fa fa-fw fa-caret-up sortable active':'fa fa-fw fa-caret-down sortable'}
                                                 />
                                            }
                                        </th>
                                    );
                                })

                            }
                        </tr>
                        </thead>
                        <tbody>
                            {table}
                        </tbody>
                    </table>   
                    { this.state.shwHidePagination &&
                    <div id='customPagination' className='container'>
                        <table style={{width:100+'%'}}> 
                            <tr>
                                <td colspan='7'>
                                    <p><h7>Showing {this.state.start} to {this.state.end} of {this.state.rows} entries</h7></p>
                                </td>
                                <td align='right'>
                                    <Pagination
                                        prevPageText='prev'
                                        nextPageText='next'
                                        firstPageText='first'
                                        lastPageText='last'
                                        innerClass='pagination float-right'
                                        itemClass='page-item'
                                        linkClass='page-link'
                                        activePage={this.state.activePage}
                                        itemsCountPerPage={this.state.rowsPerPage}
                                        totalItemsCount={this.state.rows}
                                        onChange={this.handlePageChange.bind(this)} >
                                    </Pagination>
                                </td>
                            </tr>
                        </table>	
                    </div>
                    }
                </div>
            </div>
        ); 
    }
}
export default CustomTable;