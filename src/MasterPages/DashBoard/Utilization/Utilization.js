import React from 'react';


const Utilization = (props) => {
    let data = null;
    if (props.utilization) {
        data = props.utilization.map((utilization, index) => {
            return <tr key={index}>
                <td>{utilization.month}</td>
                <td>{utilization.headCount}</td>
                <td>{utilization.targetHrs}</td>
                <td>{utilization.essHrs}</td>
                <td>{utilization.ptsHrs}</td>
                <td>{utilization.percent}</td>
            </tr>
        });
    }
    return (
        <div className="borderDiv customTab p-1 table-responsive">
          <div scope="col"  className="thclone m-1">
              {props.title}
          </div>
            <table className="m-auto  table  table-c">
                <thead>
                <tr>
                    <th scope="col" className="border-right b-b-none border-light">{props.month}</th>
                    <th scope="col" className="border-right b-b-none border-light">{props.hc}</th>
                    <th scope="col" className="border-right b-b-none border-light">{props.th}</th>
                    <th scope="col" className="border-right b-b-none border-light">{props.eh}</th>
                    <th scope="col" className="border-right b-b-none border-light">{props.ph}</th>
                    <th scope="col" className='b-b-none'>{props.percent}</th>
                </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
        </div>
    )

};
export default Utilization;
