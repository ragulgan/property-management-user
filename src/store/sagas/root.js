import { all } from 'redux-saga/effects'
import { fetchLoginWatcher } from './landLordsLogin'
import { fetchUploadWatcher } from '../../utils/dropzone/redux/saga'
import { fetchpropertyWatcher } from './Property'
import { fetchleasesListWatcher } from './Leases'
import { fetchtransactionsWatcher } from './Transactions'
import { fetchpaymentsWatcher } from './Payments'
import { fetchcountryWatcher } from './country'
import { fetchstateWatcher } from './state'
import { fetchcityWatcher } from './city'
import { fetchpropertiesWatcher } from './propertyType'
import { fetchpropertyDocWatcher } from './propertyDocument'
import { fetchsettingsWatcher } from './Settings'
import { fetchleaseWatcher } from './leaseType'
import { fetchpropertyDocumentTypeWatcher } from './propertyDocumentType'
import { fetchLeaseDocumentWatcher } from './documentLeaseType'
import { fetchleaseDocWatcher } from './leaseDocument'
import { fetchProfileWatcher } from './Profile'
import { fetchPropertySurveyNoWatcher } from './surveyNumber'


export default function* rootSaga() {
  yield all([
    fetchPropertySurveyNoWatcher(),
    fetchLoginWatcher(),
    fetchUploadWatcher(),
    fetchpropertyWatcher(),
    fetchleasesListWatcher(),
    fetchtransactionsWatcher(),
    fetchpaymentsWatcher(),
    fetchcountryWatcher(),
    fetchstateWatcher(),
    fetchcityWatcher(),
    fetchpropertiesWatcher(),
    fetchpropertyDocWatcher(),
    fetchsettingsWatcher(),
    fetchleaseWatcher(),
    fetchLeaseDocumentWatcher(),
    fetchpropertyDocumentTypeWatcher(),
    fetchleaseDocWatcher(),
    fetchProfileWatcher()
  ])
}