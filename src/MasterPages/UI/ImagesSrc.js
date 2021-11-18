import React from 'react';

import classes from './Input.css';

const input = (props) => {
    let classIn = [];
    if (classes.InputElement) {
        classIn = props.classes;
        classIn += classes.InputElement;
    } else if (props.classes) {
        props.classes.map(c => {
            classIn.push(c);
        })

    }
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
        case ('textarea'):
            inputElement = <textarea
                id={props.id}
                className={classIn.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case ('select'):
            inputElement = (

                <select
                    id={props.id}
                    className={classIn.join(' ')}
                    onChange={props.changed}
                    value={props.value}
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
        case ('img'):
            inputElement = (
                <img src={props.src} alt={props.alt}
                     className={classIn.join(' ')}
                     onClick={props.clicked} />
                    );

                    break;

                    }

                    return (
                    <div className={classes.Input}>
                        <label className={classes.Label}>{props.label}</label>
                        {inputElement}
                    </div>
                    );

                    };

                    export default input;
