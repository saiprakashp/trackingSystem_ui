import React from 'react';

export const  setAuthUser = (props)=>
{
    localStorage.setItem('id_token', JSON.stringify(props.data));
};
export const  getAuthUser = (props)=>
{
   return localStorage.getItem('id_token');
};


