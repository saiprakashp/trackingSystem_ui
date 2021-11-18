import React ,{ useState } from 'react';
import '../../../../Styles/MasterCss.css';
import Save from '../../../../resources/images/save.png';
import $ from 'jquery';
import {genericAlert} from '../../../UI/errorComponenet';
// import {ServicesUtil} from '../../../../Services/ServicesUtil';
const  ChangePass = (props) =>{
    const [errorMessage, seterrorMessage] = useState('');
    const [errorClasses, seterrorClasses] = useState('alert alert-warning alert-dismissible fade vis-hide ');
    let changePassword = (event) =>{
          if(chechSimilar()){
               // submit form
          }
           
        };
     let chechSimilar=()=>{
         if($('#newPass').val() !== $('#rePass').val()){
             seterrorMessage('New Password and ReType password should be same');
             seterrorClasses('alert alert-danger alert-dismissible fade show vis-show');
             return false;
         }else{
             seterrorMessage('New Password has been updated');
             seterrorClasses('alert alert-success alert-dismissible fade show vis-show');
             // axios srvice call
             return true;
         }
     }
        return (
                <div className="masterBorder bg-white">
                   <div className={'container'}>
                      <div className="card mt-2 mr-1 ml-2 text-center border-0 ">
                         <div className="card-body">
                            <h5 className="card-title text-left font-weight-bold"> Change password</h5>
                             {genericAlert(errorMessage,errorClasses)}  
                            <div className={'row mt-1 '}>
                               <div className={'col text-right t-b f-13'}>Current Password:</div>
                               <div className={'col text-left f-13'}>
                                  <input   
                                     type='text'
                                     placeholder= 'Current Password'
                                     id="password"
                                     className= 'w-ft height20' 
                                     />
                               </div>
                            </div>
                            <div className={'row mt-1 '}>
                               <div className={'col text-right t-b f-13'}>New Password:</div>
                               <div className={'col text-left f-13'}>
                                  <input   
                                     type='password'
                                     placeholder= 'New Password'
                                     id="newPass"
                                         onBlur={chechSimilar}
                                         className= 'w-ft height20' 
                                     />
                               </div>
                            </div>
                            <div className={'row mt-1 '}>
                               <div className={'col text-right t-b f-13'}>ReType Passs:</div>
                               <div className={'col text-left f-13'}>
                                  <input   
                                     type='text'
                                     placeholder= 'ReType Pass'
                                     id="rePass"
                                      onBlur={chechSimilar}
                                         className= 'w-ft height20' 
                                     />
                               </div>
                            </div>
                            <a href="#" className="btn float-sm-right"><img src={Save} onClick={changePassword} className='img-fluid' /> </a>
                         </div>
                      </div>
                   </div>
                </div>
        )
}
export default ChangePass;
