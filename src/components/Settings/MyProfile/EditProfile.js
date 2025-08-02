import _ from 'lodash'
import dayjs from 'dayjs';

export const setProfileEditData = (data) => {
  if (!_.isEmpty(data)) {
    return {
        firstName: data && data.firstName ? data.firstName : '',
        lastName: data && data.lastName ? data.lastName : '',
        emailId: data && data.emailId ? data.emailId : '',
        mobileNumber: data && data.mobileNumber ? data.mobileNumber : '',
        dob: data.dob ? dayjs(data.dob) : '',
        image: data.image ? data.image : '',
        alternativeMobileNumber: data.alternativeMobileNumber ? data.alternativeMobileNumber : '',
        address: data && data.address,
    }
  }
}