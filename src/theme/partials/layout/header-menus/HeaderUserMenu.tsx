/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unsetLocalStorage, getLocalStorage, removeLocalStorage, setLocalStorage } from '../../../../utils/helper';
import { SESSION } from '../../../../utils/constants'
import _ from 'lodash'
import { toAbsoluteUrl } from '../../../helpers';

const HeaderUserMenu: FC = () => {
  const dispatch = useDispatch();
  const logout = () => {
    removeLocalStorage(SESSION.TOKEN)
    setLocalStorage("logut",  "true")
    window.location.href = '/';
  };

  const [visibilityState, setVisibilityState] = useState('visible')
  const show = getLocalStorage("logut")

  useEffect(() => {
    setVisibilityState(document.visibilityState)
  }, [document.visibilityState])

  useEffect(() =>{
    if(visibilityState !== "visible"){
      unsetLocalStorage()
      window.location.href = '/';
    }
  },[visibilityState])

  console.log("per, formance.navigation.type", performance.navigation.type)

  useEffect(() => {
    window.onbeforeunload = function (event) {
      if (performance.navigation.type === 1) {
        return null; 
      }
      if(performance.navigation.type === 0){
        setLocalStorage("logut",  "true")
      }
    };
  }, []);
  
  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-175px" data-kt-menu="true" style={{top:'4%'}}>
      <div className="menu-item">
        <Link to='/settings' className="menu-link px-5">
          <img src={toAbsoluteUrl('/media/avatars/menubar/setting.svg')} alt="Setting" className='mr-3'/>
          Setting
        </Link>
        <a onClick={logout} className="menu-link px-5">
        <img src={toAbsoluteUrl('/media/avatars/menubar/logOut.svg')} alt="Setting" className='mr-3'/>
          Log Out
        </a>
      </div>
    </div>
  );
};

export { HeaderUserMenu };
