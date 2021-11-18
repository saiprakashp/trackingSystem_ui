import React from 'react';
import '../../../Styles/MasterCss.css';

const RecentlyChangedProj = (props) => {
    let data = null;
    if (props.recentlyCharged) {
        data = props.recentlyCharged.map((val, index) => {
            return <tr key={index}>
                <td>{val.data} </td>
                <td>{val.value}</td>
            </tr>
        });
    }
    return (<div className="borderDiv">
            <table className="m-1 table-b">
                <thead>
                <tr>
                    <th scope="col" colSpan={2}>{props.title}</th>
                </tr>
                </thead>
                <tbody>
                {data}
                </tbody>
            </table>
        </div>
    )

};
export default RecentlyChangedProj;
