import React from 'react';
import classes from './Input.css';
import delete_red from '../../resources/images/delete_red.png';
import add_row from '../../resources/images/add_row.png';
import go from '../../resources/images/go.png';
import download from '../../resources/images/download.jpg';
import save from '../../resources/images/save.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import GetAppIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import CachedIcon from '@material-ui/icons/Cached';
import SearchIcon from '@material-ui/icons/Search';


const input = (props) => {
    let classIn = [];
    if (props.classes) {
        classIn = [classes.InputElement, ...props.classes];
    } else {
        classIn.push('form-check-input float-left');
    }

    let getImageType = (imgType) => {
        if (imgType === 'delete_red') {
            return delete_red;
        }
        if (imgType === 'add_row') {
            return add_row;
        }
        if (imgType === 'go') {
            return go;
        }
        if (imgType === 'save') {
            return save;
        }
        if (imgType === 'download') {
            return download;
        }
    };

    let inputElement = null;
    switch (props.elementType) {
        case ('text'):
            inputElement = <input
                id={props.id}
                className={classIn.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case ('float'):
            inputElement = <input
                id={props.id}
                className={classIn.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                type="number"
                step="0.1"
            />;
            break;

        case ('button'):
            inputElement = <button
                type={'button'}
                id={props.id}
                className={classIn.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onClick={props.changed}
            >{props.btnVal}</button>;
            break;
        case ('email'):
            inputElement = <input
                id={props.id}
                type='email'
                className={classIn.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case ('number'):
            inputElement = <input
                id={props.id}
                className={classIn.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case ('date'):
            inputElement = <input
                id={props.id}
                className={classIn.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                placeholder="YYYY-MM-DD"
                required
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            />;
            break;
        case ('file'):
            inputElement = <input
                id={props.id}
                className={classIn.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />;
            break;

        case ('textarea'):
            inputElement = <textarea
                id={props.id}
                className={classIn.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case ('checkbox'):
            inputElement = <input
                id={props.id}
                type={'checkbox'}
                className={classIn.join(' ')}
                {...props.elementConfig}
                checked={props.checked}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case ('select'):
            let val = props.value;
            if (!isNaN(props.value)) {
                val = props.value;
            }
            inputElement = (
                <select
                    id={props.id}
                    className={classIn.join(' ')}
                    onChange={props.changed}
                    value={val}
                    {...props.addAttrib}
                >
                    {props.elementConfig.options.map(option => {
                        return <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    })}
                </select>
            );
            break;
        case ('blank'):
            inputElement = (
                <p></p>
            );
            break;

        case ('expand'):
            inputElement = <ExpandMoreIcon id={props.id}
                                           className={classIn.join(' ')}
                                           onClick={props.changed}
                                           {...props.elementConfig} />/* <a
                id={props.id}
                className={classIn.join(' ')}
                onClick={props.changed}
                {...props.elementConfig}
            ></a>*/;
            break;
        case ('deExpand'):
            inputElement = <ExpandLessIcon id={props.id}
                                           className={classIn.join(' ')}
                                           onClick={props.changed}
                                           {...props.elementConfig}  />/*<a
                id={props.id}
                className={classIn.join(' ')}
                onClick={props.changed}
                {...props.elementConfig}
            ></a>*/;
            break;
        case ('edit'):
            inputElement = <EditIcon id={props.id}
                                     className={classIn.join(' ')}
                                     onClick={props.changed}
                                     {...props.elementConfig}  />/*<a
                id={props.id}
                className={classIn.join(' ')}
                onClick={props.changed}
                {...props.elementConfig}
            ></a>*/;
            break;
        case ('delete'):
            inputElement = <DeleteIcon id={props.id}
                                       className={classIn.join(' ')}
                                       onClick={props.changed}
                                       {...props.elementConfig}  />/*<a
                id={props.id}
                className={classIn.join(' ')}
                onClick={props.changed}
                {...props.elementConfig}
            ></a>*/;
            break;
        case ('insert'):
            inputElement = <AddIcon id={props.id}
                                    className={classIn.join(' ')}
                                    onClick={props.changed}
                                    {...props.elementConfig}  />/*<a
                id={props.id}
                className={classIn.join(' ')}
                onClick={props.changed}
                {...props.elementConfig}
            ></a>*/;
            break;
        case ('download'):
            inputElement = <GetAppIcon id={props.id}
                                       className={classIn.join(' ')}
                                       onClick={props.changed}
                                       {...props.elementConfig}  />/*<a
                id={props.id}
                className={classIn.join(' ')}
                onClick={props.changed}
                {...props.elementConfig}
            ></a>*/;
            break;
        case ('copy'):
            inputElement = <FileCopyIcon id={props.id}
                                         className={classIn.join(' ')}
                                         onClick={props.changed}
                                         {...props.elementConfig}  />/*<a
                id={props.id}
                className={classIn.join(' ')}
                onClick={props.changed}
                {...props.elementConfig}
            ></a>*/;
            break;
        case ('reload'):
            inputElement = <CachedIcon id={props.id}
                                       className={classIn.join(' ')}
                                       onClick={props.changed}
                                       {...props.elementConfig}  />/*<a
                id={props.id}
                className={classIn.join(' ')}
                onClick={props.changed}
                {...props.elementConfig}
            ></a>*/;
            break;
        case ('search'):
            inputElement = <SearchIcon id={props.id}
                                       className={classIn.join(' ')}
                                       onClick={props.changed}
                                       {...props.elementConfig}
                                       value={props.value}
            />/*<a
                id={props.id}
                className={classIn.join(' ')}
                onClick={props.changed}
                {...props.elementConfig}
            ></a>*/;
            break;

        case ('img'):
            inputElement = (
                <img src={getImageType(props.src)}
                     alt={props.alt}
                     className={classIn.join(' ')}
                     id={props.id}
                     onClick={props.imgclick}/>
            );

            break;

    }

    return (
        <div className={[classes.Input].join(' ')}>

            {(props.elementType != 'expndec') ?
                <label className="form-check-label float-left" htmlFor={props.id}> {props.label}
                </label> : null} {inputElement}
        </div>
    );

};

export default input;
