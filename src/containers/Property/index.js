import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddPropertyTab from '../../components/Property/AddPropertyTab'
import Property from '../../components/Property/Property'
import { PageTitle } from '../../theme/layout/core'

function Homes() {
  return (
    <>
      <Switch>
        <Route path='/properties'>
          <PageTitle breadcrumbs={Property}>Property</PageTitle>
          <Property />
        </Route>
        <Route path='/add-property'>
          <AddPropertyTab />
        </Route>
        <Route path='/edit-property/:id'>
          <AddPropertyTab />
        </Route>
      </Switch>
    </>
  )
}

export default Homes