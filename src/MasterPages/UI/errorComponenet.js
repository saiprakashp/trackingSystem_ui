import React from 'react';
import '../../Styles/MasterCss.css';
import $ from 'jquery';

export const genericAlert = (errorMessage, ecl) => {
let classes=[]=[ecl,'fadeIn'];

    $(".alert-success").fadeTo(4000, 500).hide(500, function () {
        $(".alert-success").hide(500);
    });
    $(".alert-warning").fadeTo(4000, 500).hide(500, function () {
        $(".alert-warning").hide(500);
    });
    return <div className={  classes.join(' ') } role="alert">
        <span>{errorMessage}</span>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>;
};
