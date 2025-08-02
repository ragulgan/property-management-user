import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Transactions from '../../components/Transactions/Transactions'
import { PageTitle } from '../../theme/layout/core'

function Homes() {
  return (
    <>
      <Switch>
        <Route path='/transaction'>
          <PageTitle breadcrumbs={Transactions}>Transactions</PageTitle>
          <Transactions />
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