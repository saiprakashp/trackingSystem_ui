import React, {useState} from "react";
import {genericSpinned} from "../../UI/loaderComponent";
import * as styles from "../../../Utils/constants/GenericStyledClasses";
import * as title from "../../../Utils/constants/UIConstants";
import {genericAlert} from "../../UI/errorComponenet";
import submit from "../../../resources/images/Submit.png";

const UploadTfs = (props) => {

    const [errorMessage, seterrorMessage] = useState(null);
    const [errorClasses, seterrorClasses] = useState('alert alert-warning alert-dismissible fade show vis-hide ');
    const [lodaerComp, setlodaerComp] = useState(genericSpinned(styles.SPIINER_HIDE));
    const [selectedFile, setSelectedFile] = useState(null);

    let hideCurrentLoader = (status) => {
        let errorClasses = '';
        if (status === 'ok') {
            seterrorMessage('Your Data has been Loaded/ Saved Successfully');
            seterrorClasses('alert alert-success alert-dismissible fade show vis-show');
        } else {
            seterrorMessage('Unable to Save/ Load Data...');
            seterrorClasses('alert alert-danger alert-dismissible fade show vis-show');
        }

        setlodaerComp(genericSpinned(styles.SPIINER_HIDE))
    };
    let uploadFile = (event) => {
        console.log('SAVE FILE')
    };
    let saveFile = (event) => {
        setSelectedFile(event.target.files[0])
    }

    return <div className="container bg-white">
        <div className="card mt-2 mr-1 ml-2  text-center border-0 ">
            <div className="card-body">
                <div className="row ml-2 mt-2">
                    <div className="col-sm-5">
                        <h5 className="card-title text-left font-weight-bold">{title.TFS_DATA_UPLOAD}:</h5>
                    </div>
                    <div className="col-sm-2">
                        <div className="text-right">{lodaerComp}</div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col">{genericAlert(errorMessage, errorClasses)}</div>
                </div>

                <div className="mt-1">

                    <div className="row ml-2 mt-1  mr-2">
                        <div className="col-sm-12 col-md-5 mt-1">
                            <label className={'text-left t-b mr-1'} htmlFor={'essFile'}>TFS Data Upload</label>
                            <input className='float-right' type="file" id={'essFile'} onChange={saveFile} />
                        </div>
                        <div className=" col-sm-12  col-md-3 ">
                            <img src={submit} onClick={uploadFile}  className='img-thumbnail float-left w40 h30'
                                 alt={'Save Template'}/>
                        </div>

                    </div>
                    <div className="row ml-4 mt-2  mr-2">
                        <div className="col-sm float-left text-left">
                            <ul className="list-group text-danger font-weight-bolder list-group-flush">
                                <li className="">
                                    Note: Spread sheet should contain the following headers in same order...
                                </li>
                                <li className=""> TFS Epic</li>
                                <li className=""> TFS Release ID</li>
                                <li className=""> TFS Project Name</li>
                                <li className=""> TFS Pillar</li>
                                <li className=""> TFS Platform</li>
                                <li className=""> TFS Project Manager</li>
                                <li className=""> TFS Start date</li>
                                <li className=""> TFS Planned Implementation date</li>
                                <li className=""> TFS Status</li>
                                <li className=""> Approved Total LOE</li>
                                <li className=""> Add #N/A for ignore</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default UploadTfs;
