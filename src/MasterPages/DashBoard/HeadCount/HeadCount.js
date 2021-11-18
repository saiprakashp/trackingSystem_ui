import React from 'react';
import './HeadCount.css';
import '../../../Styles/MasterCss.css';

const HeaderCount = (props) => {
    return <div className="borderDiv">
        <table className="m-1 table-b">
            <thead>
            <tr>
                <th scope="col" className="text-dark text-center" colSpan={6}>{props.title} ({props.hc})</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td scope="col">Onboard</td>
                <td> {props.on}</td>
                <td scope="col">Selected</td>
                <td> {props.sel}</td>
                <td scope="col">LTA</td>
                <td> {props.lta}</td>

            </tr>
            <tr>
                <td scope="col">Induction</td>
                <td> {props.ind}</td>
                <td scope="col">Open</td>
                <td> {props.op}</td>
                <td scope="col">Notice Period</td>
                <td> {props.np}</td>

            </tr>
            </tbody>
        </table>
    </div>
};

export default HeaderCount;
