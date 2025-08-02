import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../../components/dashboard/Dashboard'
import { PageTitle } from '../../theme/layout/core'

function Setting() {
  return (
    <>
      <Switch>
        <Route path='/dashboard'>
          <PageTitle breadcrumbs={Dashboard}>Dashboard</PageTitle>
          <Dashboard />
        </Route>
      </Switch>
    </>
  )
}

export default Setting