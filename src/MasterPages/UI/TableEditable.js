import React from 'react';
import {IoMdAddCircleOutline,IoMdTrash,IoMdCreate,IoMdSave,IoMdCloseCircle} from 'react-icons/io';
import './TableEditable.css';

class TableEditable extends React.Component{
    state={
        rows: [{}],
        checked:false
    };
    handleChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
          [name]: value
        };
        this.setState({
          rows
        });
    };
    handleAddRow = () => {
        const item = {
          name: "",
          mobile: ""
        };
        this.setState({
          rows: [...this.state.rows, item]
        });
    };
    handleRemoveRow = () => {
        this.setState({
          rows: this.state.rows.slice(0, -1)
        });
    };

    handleCheckbox = (event) =>{
        this.setState({checked:true});
        document.querySelector('#chkBxValues').setAttribute('checked', this.state.checked);
    }

    renderInput = (obj,idx) =>{
        switch(obj.type){
            case 'checkbox':{
                return ( <input
                        type='checkbox'
                        value=''
                        id='chkBxValues'
                        defaultChecked={this.state.checked}
                        onChange={this.handleChange(idx)}
                        /> )
            }
            case 'select':{
                return (
                    <select className='form-control form-control-sm select-name'>
                        <option>#1</option>
                        <option>#2</option>
                        <option>#3</option>
                        <option>#4</option>
                        <option>#5</option>
                    </select>
                )
            }
            case 'text':{
                return(
                    <input type='text' value=''
                        onchange={this.handleChange(idx)} className='form-control form-control-sm'/>
                )
            }
        }
    };
    render(props){
        return(
            <div>
                <table
                className='table table-bordered table-hover table-sm'
                id='tab_logic'>
                    <thead>
                        <tr>
                            {
                                this.props.header.map(obj =>{
                                    if(obj.type == 'checkbox'){
                                        return (
                                            <th style={{verticalAlign:'middle'}}>
                                                <input type='checkbox' value='' id='chkbxHead'
                                                 onClick={this.handleCheckbox} 
                                                 defaultChecked={this.state.checked}/>
                                            </th>
                                        );
                                    } else {
                                        return (
                                            <th id={obj.columnName}>{obj.displayValue}</th>
                                        );
                                    }
                                })

                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.rows.map((item, idx) =>{
                               return( <tr>
                                    {
                                        this.props.header.map((obj, idx )=>{
                                            //console.log(obj.type);
                                            return (
                                                <td style={{verticalAlign:'middle'}}>
                                                        {this.renderInput(obj,idx)}
                                                </td>
                                            );
                                        })
                                    }
                                </tr>
                               )
                            })
                        }
                    </tbody>
                </table>
                <table>
                    <tr>
                        <td><span><a href='#' onClick={this.handleRemoveRow}><IoMdTrash/></a></span></td>
                        <td><span><a href='#' onClick={this.handleAddRow}><IoMdAddCircleOutline/></a></span></td>
                        <td><span><a href='#' onClick={this.handleAddRow}><IoMdCreate/></a></span></td>
                        <td><span><a href='#' onClick={this.handleAddRow}><IoMdSave/></a></span></td>
                        <td><span><a href='#' onClick={this.handleAddRow}><IoMdCloseCircle/></a></span></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default TableEditable;