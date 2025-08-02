const API_URL = 'https://property.shenll.in/api/v1/user'

const serviceList = {
  login: `${API_URL}/auth`,
  otp:`${API_URL}/auth/verifyOtp`,
  property: `${API_URL}/property`,
  leaseType: `${API_URL}/leaseType`,
  city: `${API_URL}/city`,
  state: `${API_URL}/state`,
  country: `${API_URL}/country`,
  propertyType: `${API_URL}/propertyType`,
  propertyDocument: `${API_URL}/propertyDocument`,
  propertyDocumentType: `${API_URL}/propertyDocType`,
  leasedocumentType: `${API_URL}/leaseDocType`,
  leases: `${API_URL}/leases`,
  leaseDocument: `${API_URL}/leaseDocument`,
  upload: `${API_URL}/upload`,
  imageDelete: `${API_URL}/upload/file`,
  surveyNo: `${API_URL}/property`,
  customer: `${API_URL}/customer`,

  transaction: 'https://run.mocky.io/v3/fa37facf-8bec-4f8a-9b8f-0945ecd5eb7c',
  payment: 'https://run.mocky.io/v3/fce4b122-0fe7-4ae7-b80e-bbd7962851cb',
  setting: 'https://run.mocky.io/v3/1096c022-bd82-40ad-b505-903ab36e24b7',
  settingRole: 'https://run.mocky.io/v3/6b16285a-8e6c-4c9a-bd4a-fcae3b0f6486'
}
export default serviceList