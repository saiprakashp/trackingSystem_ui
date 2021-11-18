/* eslint-disable no-use-before-define */
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    label: {
        display: 'block',
        'margin-left': '4%',
        color: '#2779aa'
    },
    input: {
        width: 'fit-content',
        'margin-left': '5%',
        'margin-right': '5%',
    },
    listbox: {
        width: '50%',
        'align-items': 'center',
        float: 'start',
        'margin-left': '17%',
        padding: 0,
        zIndex: 1,
        position: 'absolute',
        listStyle: 'none',
        overflow: 'auto',
        maxHeight: 300,
        border: '1px solid rgba(0,0,0,.45)',
        '& li[data-focus="true"]': {
            backgroundColor: '#4a8df6',
            color: 'black',
            cursor: 'pointer',
        },
        '& li:active': {
            backgroundColor: '#2977f5',
            color: 'black',
        }, '& li': {
            backgroundColor: 'white',
            color: 'black',
        },
    },
}));

export default function UseAutocomplete(props) {
    const changed=(event)=>{
    }
    return (
        <div className={''}>
            <label className="form-check-label  t-b text-left" htmlFor={props.id}><span
                className={props.classes}>{props.title}</span></label>
            <Autocomplete
                id={props.id}
                red={props.ref}
                options={props.data}
                getOptionLabel={(option) => option.title}
                style={{...useStyles.input}}
                onChange={(e) => {
                 return    props.changed != null ? props.changed(e) : changed
                }}
                renderInput={(params) => <TextField {...params} variant="outlined"/>}
            /></div>
    );
}

