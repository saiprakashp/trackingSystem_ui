import React from "react";

 const  authContexts = React.createContext({
    loginValid: false,
    allowdLinks:[],
    validateUser: ()=>{}
});
export default authContexts;
