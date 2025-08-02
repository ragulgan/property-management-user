import React, { useState, useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import _ from 'lodash'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddMyProfile from './MyProfile/AddMyProfile'

function AddProfileSettingTab(props) {

  return (
    <>
      <div className='mb-5'>
        <h4 className='fw-bolder fs-3 text-dark-800 border-bottom-2 border-gray-200'>Settings</h4>
      </div>
      <div className='container-fixed'>
        <div className='card px-10 py-5'>
          <div className='card-body'>
            <Tabs
              defaultActiveKey="My Profile"
              transition={false}
              id="noanim-tab-example"
              className="mb-3 my-profile"
              fill
            >
              <Tab eventKey="My Profile" title="My Profile">
                <AddMyProfile />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div >
    </>
  )
}

export default AddProfileSettingTab