import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { FallbackView } from '../theme/partials'
import routeConfig from './routeConfig'

export function PrivateRoutes() {

  const Property = lazy(() => import('../containers/Property/index'))
  const AddProperty = lazy(() => import('../containers/Property/index'))
  const Transactions = lazy(() => import('../containers/Transactions/index'))
  const Payments = lazy(() => import('../containers/Payments/index'))
  const Leases = lazy(() => import('../containers/leases/index'))
  const AddLeases = lazy(() => import('../containers/leases/index'))
  const Settings = lazy(() => import('../containers/Settings/index'))
  const dashboard = lazy(() => import('../containers/dashboard/index'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path={routeConfig.dashboard} component={dashboard} />
        <Route path={routeConfig.Property} component={Property} />
        <Route path={routeConfig.AddProperty} component={AddProperty} />
        <Route path={routeConfig.EditProperty} component={AddProperty} />
        <Route path={routeConfig.Transactions} component={Transactions} />
        <Route path={routeConfig.payments} component={Payments} />
        <Route path={routeConfig.leases} component={Leases} />
        <Route path={routeConfig.AddLeases} component={AddLeases} />
        <Route path={routeConfig.editLease} component={AddLeases} />
        <Route path={routeConfig.Settings} component={Settings} />
      </Switch>
    </Suspense>
  )
}