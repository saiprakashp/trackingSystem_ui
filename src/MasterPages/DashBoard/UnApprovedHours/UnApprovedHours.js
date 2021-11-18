import React from 'react';
import '../../../Styles/MasterCss.css';
import './UnApprovedHours.css';

const UnApprovedHours = (props) => (<div id="unapprvdiv" className="borderDiv">
        <table className="m-1 table-b">
            <thead>
            <tr>
                <th scope="col" className="text-dark text-center" colSpan={2}>{props.title}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="text-center" colSpan={2}><a>{props.unap}</a></td>
            </tr>
            <tr>
                <td className="text-center" colSpan={2}></td>
            </tr>
            </tbody>
        </table>
    </div>
);
export default UnApprovedHours;
