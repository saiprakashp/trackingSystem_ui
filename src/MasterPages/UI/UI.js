import React from "react";

export const UI = (props) => {
    let inputType = '';
    switch (props.type) {
        case 'text':
            inputType = <input className={props.elemClasses.join(' ')}  {...props.elemConfig} />;
            break;
        case 'password':
            inputType = <input className={props.elemClasses.join(' ')}  {...props.elemConfig} />;
            break;
        case 'select':
            inputType = <input className={props.elemClasses.join(' ')}  {...props.elemConfig} />;
            break;
        case 'textarea':
            inputType =  <input className={props.elemClasses.join(' ')}  {...props.elemConfig} />;
            break;
    }
    return (
        {inputType}
    )

};
