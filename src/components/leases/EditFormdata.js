import _ from 'lodash'
import dayjs from 'dayjs';

export const setPropertyEditData = (data) => {
  if (!_.isEmpty(data)) {
    return {
      landLordId: data && data.landLord && data.landLord.id ? data.landLord.id : '',
      propertyId: data && data.id ? data.id : '',
      address: data.address,
      buildingNoOrStreetName: data.buildingNoOrStreetName,
      propertyOwnerName: data.propertyOwnerName,
      propertySizeOrSquareFootage: data.propertySizeOrSquareFootage,
      surveyNo: data.surveyNo,
      cityId: data && data.city && data.city.cityName ? data.city.cityName : '--',
      countryId: data && data.country && data.country.countryName ? data.country.countryName : '--',
      stateId: data && data.state && data.state.stateName ? data.state.stateName : '--',
      propertyTypeId: data && data.propertyType && data.propertyType.propertyType ? data.propertyType.propertyType : '--',
      propertyStatus: data.propertyStatus,
    }
  }
}

export const setLeasePropertyEditData = (data) => {
  if (!_.isEmpty(data)) {
    return {
      landLordId: data && data.propertyId && data.propertyId.landLord && data.propertyId.landLord.id ? data.propertyId.landLord.id : '',
      propertyId: data && data.propertyId && data.propertyId.id ? data.propertyId.id : '',
      address: data && data.propertyId && data.propertyId.address ? data.propertyId.address : '',
      buildingNoOrStreetName: data && data.propertyId && data.propertyId.buildingNoOrStreetName ? data.propertyId.buildingNoOrStreetName : '',
      propertyOwnerName: data && data.propertyId && data.propertyId.propertyOwnerName ? data.propertyId.propertyOwnerName : '',
      propertySizeOrSquareFootage: data && data.propertyId && data.propertyId.propertySizeOrSquareFootage ? data.propertyId.propertySizeOrSquareFootage : '',
      surveyNo: data && data.propertyId && data.propertyId.surveyNo ? data.propertyId.surveyNo : '',
      cityId: data && data.propertyId && data.propertyId.city && data.propertyId.city.cityName ? data.propertyId.city.cityName : '',
      countryId: data && data.propertyId && data.propertyId.country && data.propertyId.country.countryName ? data.propertyId.country.countryName : '',
      stateId: data && data.propertyId && data.propertyId.state && data.propertyId.state.stateName ? data.propertyId.state.stateName : '',
      propertyTypeId: data && data.propertyId && data.propertyId.propertyType && data.propertyId.propertyType.propertyType ? data.propertyId.propertyType.propertyType : '',
      propertyStatus: data && data.propertyId && data.propertyId.propertyStatus ? data.propertyId.propertyStatus : '',
    }
  }
}

export const setLeaseEditData = (data) => {
  if (!_.isEmpty(data)) {
    return {
      amount: String(data.amount),
      endDate: data.endDate ? dayjs(data.endDate) : '',
      lateFeeInfo: data.lateFeeInfo,
      leaseStatus: data.leaseStatus,
      leaseTerm: data.leaseTerm,
      leaseType: data.leaseType,
      lessorName: data.lessorName,
      mainResponsibilities: data.mainResponsibilities,
      moveInDate: data.moveInDate ? dayjs(data.moveInDate) : '',
      propertyId: data.propertyId && data.propertyId.id,
      securityDepositAmount: data.securityDepositAmount,
      startDate: data.startDate ? dayjs(data.startDate) : '',
    }
  }
}

export const setLeaseDocumentTypeEditData = (data) => {
  if (!_.isEmpty(data)) {
    return {
      type: data.type,
      name: data.name,
      description: data.description,
      leaseId: data.leaseId,
      upload: data.upload
    }
  }
}
