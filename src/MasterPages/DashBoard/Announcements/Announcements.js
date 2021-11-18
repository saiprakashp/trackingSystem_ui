import React from 'react';
import '../../../Styles/MasterCss.css';


const Announcements = (props) => {
    let data = <tr>
        <td className="text-dark">Data</td>
    </tr>;

    return (
        <div className="borderDiv">
            <table className="m-1 table-b">
                <thead>
                <tr>
                    <th colSpan={2}>{props.title}</th>
                </tr>
                </thead>
                <tbody>
                {data}
                </tbody>
            </table>

        </div>
    )
};
export default Announcements;
