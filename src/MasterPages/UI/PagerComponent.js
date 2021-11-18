import React from "react";
import * as pagerConstatns from "../../Utils/constants/PagerConstants";

const Pager = (props) => {
    return <div className={'row'}>
        <nav aria-label="Page navigation example" className={' col-sm-6 '}>
            <ul className="pagination justify-content-center float-right">
                <li className="page-item">
                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                </li>

                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
        <div className="input-group  w-20 col-sm-2 float-left">
            <select className="custom-select w-20" id="pagerDropDown">
                <option selected={false} value="1">One</option>
                <option selected={false} value="2">Two</option>
                <option selected={false} value="3">Three</option>
            </select>
        </div>
    </div>
}
export default  Pager;
