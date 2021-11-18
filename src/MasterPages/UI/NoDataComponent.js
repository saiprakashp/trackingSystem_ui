import React from "react";

const table_classes = ['table', 'table-light', ' table-sm', 'tabCustom'];
const thead_classes = ["thead-light"];
const tbody_classes = [""];
const noData = <table className={table_classes.join(' ')}>
        <tbody>
        <tr>
            <td className='text-center font-weight-bold '>
                <h5>No Data to View.</h5>
            </td>
        </tr>

        </tbody>
    </table>

;
export default noData;
