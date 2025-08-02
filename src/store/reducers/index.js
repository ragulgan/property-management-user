import { combineReducers } from 'redux'
import {
  loginReducer,
  loginStoreKey,
  registerReducer,
  registerStoreKey,
  otpReducer,
  otpStoreKey
} from './landLordsLogin'
import {
  dropzoneReducer,
  dropzoneStoreKey
} from '../../utils/dropzone/redux/reducer'
import {
  PropertylistStoreKeys,
  PropertylistReducers,
  PropertyAddStoreKey,
  PropertyAddReducer,
  editPropertysStoreKey,
  editPropertyReducer,
  updatePropertyStoreKey,
  updatePropertyReducer,
  PropertydeleteStoreKey,
  PropertydeleteReducer
} from './Property'
import {
  LeasesListlistStoreKeys,
  LeasesListlistReducers,
  LeasesListAddStoreKey,
  LeasesListAddReducer,
  editLeasesListsStoreKey,
  editLeasesListReducer,
  updateLeasesListStoreKey,
  updateLeasesListReducer,
  LeasesListdeleteStoreKey,
  LeasesListdeleteReducer
} from './Leases'
import {
  CitylistStoreKeys,
  CitylistReducers,
  CityAddStoreKey,
  CityAddReducer,
  editCityStoreKey,
  editCityReducer,
  updateCityStoreKey,
  updateCityReducer,
  CitydeleteStoreKey,
  CitydeleteReducer
} from './city'
import {
  StatelistStoreKeys,
  StatelistReducers,
  StateAddStoreKey,
  StateAddReducer,
  editStateStoreKey,
  editStateReducer,
  updateStateStoreKey,
  updateStateReducer,
  StatedeleteStoreKey,
  StatedeleteReducer
} from './state'
import {
  CountrylistStoreKeys,
  CountrylistReducers,
  CountryAddStoreKey,
  CountryAddReducer,
  editCountryStoreKey,
  editCountryReducer,
  updateCountryStoreKey,
  updateCountryReducer,
  CountrydeleteStoreKey,
  CountrydeleteReducer
} from './country'
import {
  PropertieslistStoreKeys,
  PropertieslistReducers,
  PropertiesAddStoreKey,
  PropertiesAddReducer,
  editPerpertiesStoreKey,
  editPerpertiesReducer,
  updatePropertiesStoreKey,
  updatePropertiesReducer,
  PropertiesdeleteStoreKey,
  PropertiesdeleteReducer
} from './propertyType'
import {
  TransactionslistReducers,
  TransactionslistStoreKeys,
  TransactionsAddStoreKey,
  TransactionsAddReducer,
  editTransactionssStoreKey,
  editTransactionsReducer,
  updateTransactionsStoreKey,
  updateTransactionsReducer,
  TransactionsdeleteStoreKey,
  TransactionsdeleteReducer

} from './Transactions'
import {
  PaymentslistReducers,
  PaymentslistStoreKeys,
  PaymentsAddStoreKey,
  PaymentsAddReducer,
  editPaymentssStoreKey,
  editPaymentsReducer,
  updatePaymentsStoreKey,
  updatePaymentsReducer,
  PaymentsdeleteStoreKey,
  PaymentsdeleteReducer
} from './Payments'

import {
  PropertyDoclistReducers,
  PropertyDoclistStoreKeys,
  PropertyDocAddStoreKey,
  PropertyDocAddReducer,
  editPropertysDocStoreKey,
  editPropertyDocReducer,
  updatePropertyDocStoreKey,
  updatePropertyDocReducer,
  PropertyDocdeleteStoreKey,
  PropertyDocdeleteReducer
} from './propertyDocument'

import {
  PropertyDocumentTypelistStoreKeys,
  PropertyDocumentTypelistReducers,
  PropertyDocumentTypeAddStoreKey,
  PropertyDocumentTypeAddReducer,
  editPropertyDocumentTypesStoreKey,
  editPropertyDocumentTypeReducer,
  updatePropertyDocumentTypeStoreKey,
  updatePropertyDocumentTypeReducer,
  PropertyDocumentTypedeleteStoreKey,
  PropertyDocumentTypedeleteReducer
} from './propertyDocumentType'

import {
  SettingslistStoreKeys,
  SettingslistReducers,
  SettingsAddStoreKey,
  SettingsAddReducer,
  editSettingssStoreKey,
  editSettingsReducer,
  updateSettingsStoreKey,
  updateSettingsReducer,
  SettingsdeleteStoreKey,
  SettingsdeleteReducer
} from './Settings'

import {
  LeaselistStoreKeys,
  LeaselistReducers,
  LeaseAddStoreKey,
  LeaseAddReducer,
  editLeasesStoreKey,
  editLeaseReducer,
  updateLeaseStoreKey,
  updateLeaseReducer,
  LeasedeleteStoreKey,
  LeasedeleteReducer
} from './leaseType'

import {
  LeaseDocumentlistStoreKeys,
  LeaseDocumentlistReducers,
  LeaseDocumentAddStoreKey,
  LeaseDocumentAddReducer,
  editLeaseDocumentsStoreKey,
  editLeaseDocumentReducer,
  updateLeaseDocumentStoreKey,
  updateLeaseDocumentReducer,
  LeaseDocumentdeleteStoreKey,
  LeaseDocumentdeleteReducer
} from './documentLeaseType'

import {
  LeaseDoclistStoreKeys,
  LeaseDoclistReducers,
  LeaseDocAddStoreKey,
  LeaseDocAddReducer,
  editLeasesDocStoreKey,
  editLeaseDocReducer,
  updateLeaseDocStoreKey,
  updateLeaseDocReducer,
  LeaseDocdeleteStoreKey,
  LeaseDocdeleteReducer
} from './leaseDocument'
import {
  ProfilelistStoreKeys,
  ProfilelistReducers,
  updateProfileStoreKey,
  updateProfileReducer,
  MultifileAddStoreKey,
  MultifileAddReducer,
  ImageDeleteStoreKey,
  ImageDeleteReducer,
} from './Profile'
import {
  PropertySurveyNolistStoreKeys,
  PropertySurveyNolistReducers,
} from './surveyNumber'

export default function createReducer() {
  const rootReducer = combineReducers({
    [otpStoreKey]: otpReducer,
    [registerStoreKey]: registerReducer,
    [loginStoreKey]: loginReducer,
    [dropzoneStoreKey]: dropzoneReducer,
    //transaction key
    [TransactionslistStoreKeys]: TransactionslistReducers,
    [TransactionsAddStoreKey]: TransactionsAddReducer,
    [editTransactionssStoreKey]: editTransactionsReducer,
    [updateTransactionsStoreKey]: updateTransactionsReducer,
    [TransactionsdeleteStoreKey]: TransactionsdeleteReducer,
    //payments key
    [PaymentslistStoreKeys]: PaymentslistReducers,
    [PaymentsAddStoreKey]: PaymentsAddReducer,
    [editPaymentssStoreKey]: editPaymentsReducer,
    [updatePaymentsStoreKey]: updatePaymentsReducer,
    [PaymentsdeleteStoreKey]: PaymentsdeleteReducer,
    //setting Add profile key
    [SettingslistStoreKeys]: SettingslistReducers,
    [SettingsAddStoreKey]: SettingsAddReducer,
    [editSettingssStoreKey]: editSettingsReducer,
    [updateSettingsStoreKey]: updateSettingsReducer,
    [SettingsdeleteStoreKey]: SettingsdeleteReducer,

    // LeaseType setting
    [LeaselistStoreKeys]: LeaselistReducers,
    [LeaseAddStoreKey]: LeaseAddReducer,
    [editLeasesStoreKey]: editLeaseReducer,
    [updateLeaseStoreKey]: updateLeaseReducer,
    [LeasedeleteStoreKey]: LeasedeleteReducer,
    // Property module
    [PropertylistStoreKeys]: PropertylistReducers,
    [PropertyAddStoreKey]: PropertyAddReducer,
    [editPropertysStoreKey]: editPropertyReducer,
    [updatePropertyStoreKey]: updatePropertyReducer,
    [PropertydeleteStoreKey]: PropertydeleteReducer,
    // Lease module
    [LeasesListlistStoreKeys]: LeasesListlistReducers,
    [LeasesListAddStoreKey]: LeasesListAddReducer,
    [editLeasesListsStoreKey]: editLeasesListReducer,
    [updateLeasesListStoreKey]: updateLeasesListReducer,
    [LeasesListdeleteStoreKey]: LeasesListdeleteReducer,

    // lease document
    [LeaseDoclistStoreKeys]: LeaseDoclistReducers,
    [LeaseDocAddStoreKey]: LeaseDocAddReducer,
    [editLeasesDocStoreKey]: editLeaseDocReducer,
    [updateLeaseDocStoreKey]: updateLeaseDocReducer,
    [LeaseDocdeleteStoreKey]: LeaseDocdeleteReducer,

    [CitylistStoreKeys]: CitylistReducers,
    [CityAddStoreKey]: CityAddReducer,
    [editCityStoreKey]: editCityReducer,
    [updateCityStoreKey]: updateCityReducer,
    [CitydeleteStoreKey]: CitydeleteReducer,
    [StatelistStoreKeys]: StatelistReducers,
    [StateAddStoreKey]: StateAddReducer,
    [editStateStoreKey]: editStateReducer,
    [updateStateStoreKey]: updateStateReducer,
    [StatedeleteStoreKey]: StatedeleteReducer,
    [CountrylistStoreKeys]: CountrylistReducers,
    [CountryAddStoreKey]: CountryAddReducer,
    [editCountryStoreKey]: editCountryReducer,
    [updateCountryStoreKey]: updateCountryReducer,
    [CountrydeleteStoreKey]: CountrydeleteReducer,
    [PropertieslistStoreKeys]: PropertieslistReducers,
    [PropertiesAddStoreKey]: PropertiesAddReducer,
    [editPerpertiesStoreKey]: editPerpertiesReducer,
    [updatePropertiesStoreKey]: updatePropertiesReducer,
    [PropertiesdeleteStoreKey]: PropertiesdeleteReducer,

    [PropertyDoclistStoreKeys]: PropertyDoclistReducers,
    [PropertyDocAddStoreKey]: PropertyDocAddReducer,
    [editPropertysDocStoreKey]: editPropertyDocReducer,
    [updatePropertyDocStoreKey]: updatePropertyDocReducer,
    [PropertyDocdeleteStoreKey]: PropertyDocdeleteReducer,

    // setting propertydocument type
    [PropertyDocumentTypelistStoreKeys]: PropertyDocumentTypelistReducers,
    [PropertyDocumentTypeAddStoreKey]: PropertyDocumentTypeAddReducer,
    [editPropertyDocumentTypesStoreKey]: editPropertyDocumentTypeReducer,
    [updatePropertyDocumentTypeStoreKey]: updatePropertyDocumentTypeReducer,
    [PropertyDocumentTypedeleteStoreKey]: PropertyDocumentTypedeleteReducer,

    //setting leasedocument type
    [LeaseDocumentlistStoreKeys]: LeaseDocumentlistReducers,
    [LeaseDocumentAddStoreKey]: LeaseDocumentAddReducer,
    [editLeaseDocumentsStoreKey]: editLeaseDocumentReducer,
    [updateLeaseDocumentStoreKey]: updateLeaseDocumentReducer,
    [LeaseDocumentdeleteStoreKey]: LeaseDocumentdeleteReducer,

    //myprofile
    [ProfilelistStoreKeys]: ProfilelistReducers,
    [updateProfileStoreKey]: updateProfileReducer,
    [MultifileAddStoreKey]: MultifileAddReducer,
    [PropertySurveyNolistStoreKeys]: PropertySurveyNolistReducers,
    [ImageDeleteStoreKey]: ImageDeleteReducer
  })

  return rootReducer
}