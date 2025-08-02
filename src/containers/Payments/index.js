import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Payments from '../../components/Payments/Payments'
import { PageTitle } from '../../theme/layout/core'

function Homes() {
  return (
    <>
      <Switch>
        <Route path='/payments'>
          <PageTitle breadcrumbs={Payments}>Payments</PageTitle>
          <Payments />
        </Route>
        {/* <Route path='/land-lords/add'>
        <PageTitle breadcrumbs={landlords}>Add Landlords</PageTitle>
        <AddUser />
      </Route> */}
      </Switch>
    </>
  )
}

export default Homes