import React, {useState} from 'react';
import * as title from '../../../Utils/constants/UIConstants';
import '../../../Styles/MasterCss.css';
import {genericSpinned} from "../../UI/loaderComponent";
import * as styles from "../../../Utils/constants/GenericStyledClasses";
import {genericAlert} from "../../UI/errorComponenet";
import submit from "../../../resources/images/Submit.png";

const EssDataFeed = (props) => {
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

    return (

        <div className="container bg-white">
            <div className="card mt-2 mr-1 ml-2  text-center border-0 ">
                <div className="card-body">
                    <div className="row ml-2 mt-2">
                        <div className="col-sm-5">
                            <h5 className="card-title text-left font-weight-bold">{title.ESS_FEED}:</h5>
                        </div>
                        <div className="col-sm-2">
                            <div className="text-right">{lodaerComp}</div>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col">{genericAlert(errorMessage, errorClasses)}</div>
                    </div>

                    <div className="">

                        <div className="row mt-1 mb-2  mr-2">
                            <div className="col-sm-12 col-md-4 mt-2">
                                <label className='text-left t-b mr-1 font-weight-bold f-12'
                                       htmlFor={'essFile'}>{title.ESS_FILE}: </label>
                                <input type="file" id={'essFile'} onChange={saveFile} value={selectedFile}/>
                            </div>
                            <div className="col-sm-12 col-md-2">
                                <img src={submit} onClick={uploadFile} className='img-thumbnail h30 w-30'
                                     alt={'Save Template'}/>
                            </div>

                        </div>
                        <div className="row ml-4 mt-1  mr-2">
                            <div className="col-sm text-left text-danger font-weight-bolder">
                                <p className="">Note: Spread sheet should contain the following headers...
                                </p>
                                <p className=""> . SIGNUM</p>
                                <p className=""> . Target Hours</p>
                                <p className=""> . Charged Hours</p>
                                <p className=""> . Month</p>
                                <p className=""> . Year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default EssDataFeed;
