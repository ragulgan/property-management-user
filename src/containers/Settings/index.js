import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { PageTitle } from '../../theme/layout/core'
import AddProfileSettingTab from '../../components/Settings/AddProfileSettingTab'

function Setting() {
  return (
    <>
      <Switch>
        <Route path='/settings'>
          <PageTitle breadcrumbs={AddProfileSettingTab}>Settings</PageTitle>
          <AddProfileSettingTab />
        </Route>
      </Switch>
    </>
  )
}

export default Setting