import React, { useState, useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { connect } from 'react-redux'
import _ from 'lodash'
import { STATUS_RESPONSE, DATE, PROFILE_URL, REGEX, DROPZONE_IMAGE_NAME_TYPES, FILE_FORMAT_TYPE, USER_MANAGEMENT_VALIDATION, USER_MANAGEMENT_ERROR } from '../../../utils/constants'
import { DateSelector } from '../../../theme/layout/components/DateSelector'
import dayjs, { Dayjs } from 'dayjs';
import { profileActions, updateprofileActions } from '../../../store/actions'
import { UploadActions } from '../../../utils/dropzone/redux/action'
import { setProfileEditData } from './EditProfile'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { toAbsoluteUrl } from '../../../theme/helpers'
import Dropzone from '../../../utils/dropzone/Dropzone'

const endOfQ12022 = dayjs().subtract(18, 'year');
const startOfQ12022 = dayjs().subtract(50, 'year');

function AddMyProfile(props) {
  const {
    ProfileDetail,
    updateProfile,
    clearProfilelistDispatch,
    clearDropzoneImage,
    saveupdateProfileResponse,
    dropzoneImage
  } = props

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    mobileNumber: '',
    dob: '',
    address: '',
    alternativeMobileNumber: '',
    image: [],
  })
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    mobileNumber: '',
    alternativeMobileNumber: '',
    emailId: '',
    address: '',
  })
  const [selectedOptions, setSelectedOptions] = useState();
  const [status, setSelectStatus] = useState('')
  const [defaultImages, setDefaultImages] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
    setSelectedOptions({ ...selectedOptions, [e.target.name]: e.target.value })
  }

  const handleProfile = (e) => {
    const errors = {}
    if (_.isEmpty(formData.address)) {
      errors.address = USER_MANAGEMENT_ERROR.USER_ADDRESS
      document.getElementById('address').focus()
    }
    if (!formData.dob) {
      errors.dob = USER_MANAGEMENT_ERROR.DOB
      document.getElementById('dob').focus()
    }
    if (formData.alternativeMobileNumber && !REGEX.PHONE_NUMBER.test(formData.alternativeMobileNumber)) {
      errors.alternativeMobileNumber = USER_MANAGEMENT_VALIDATION.USER_PHONE
      document.getElementById('alternativeMobileNumber').focus()
    } if (formData.mobileNumber.length === 10 && formData.mobileNumber === formData.alternativeMobileNumber) {
      errors.alternativeMobileNumber = USER_MANAGEMENT_VALIDATION.USER_SAME_PHONE_NUMBER
      document.getElementById('alternativeMobileNumber').focus()
    } else if (formData.alternativeMobileNumber && !REGEX.MOBILE_NUMBER_VALID.test(formData.alternativeMobileNumber)) {
      errors.alternativeMobileNumber = USER_MANAGEMENT_VALIDATION.USER_VALID_PHONE_NUMBER;
      document.getElementById('alternativeMobileNumber').focus()
    }
    if (_.isEmpty(formData.mobileNumber)) {
      errors.mobileNumber = USER_MANAGEMENT_ERROR.PHONE_NUMBER
      document.getElementById('mobileNumber').focus()
    } else if (formData.mobileNumber && !REGEX.MOBILE_NUMBER_VALID.test(formData.mobileNumber)) {
      errors.mobileNumber = USER_MANAGEMENT_VALIDATION.USER_VALID_PHONE_NUMBER;
      document.getElementById('mobileNumber').focus()
    }
    if (_.isEmpty(formData.emailId)) {
      errors.emailId = USER_MANAGEMENT_ERROR.USER_EMAIL
      document.getElementById('emailId').focus()
    } else if (!REGEX.EMAIL.test(formData.emailId)) {
      errors.emailId = USER_MANAGEMENT_VALIDATION.USER_EMAIL
      document.getElementById('emailId').focus()
    }
    if (_.isEmpty(formData.lastName)) {
      errors.lastName = USER_MANAGEMENT_ERROR.USER_LNAME
      document.getElementById('lastName').focus()
    }
    if (_.isEmpty(formData.firstName)) {
      errors.firstName = USER_MANAGEMENT_ERROR.USER_FNAME
      document.getElementById('firstName').focus()
    }

    setErrors(errors)
    if (_.isEmpty(errors)) {
      formData.dob = dayjs(formData.dob).format('YYYY-MM-DD')
      updateProfile(formData)
    }
  }

  useEffect(() => {
    if (ProfileDetail && ProfileDetail.code === 200) {
      const data = setProfileEditData(ProfileDetail.data)
      setFormData(data)
      setDefaultImages( ProfileDetail.data && ProfileDetail.data.image)
    }
  }, [ProfileDetail])

  useEffect(() => {
    if (dropzoneImage.code === 200) {
      const imageData = [{
        displayName: dropzoneImage && dropzoneImage.data && dropzoneImage.data[0].displayName,
        filePath: dropzoneImage && dropzoneImage.data && dropzoneImage.data[0].filePath,
        id: dropzoneImage && dropzoneImage.data && dropzoneImage.data[0].id
      }]
      setFormData({ ...formData, image: imageData })
      setDefaultImages(imageData)
    }
  }, [dropzoneImage]);


  useEffect(() => {
    if (saveupdateProfileResponse && saveupdateProfileResponse.status === STATUS_RESPONSE.SUCCESS_MSG) {
      Toastify({
        text: saveupdateProfileResponse && saveupdateProfileResponse.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: '#22BB33'

        },
      }).showToast()
      clearProfilelistDispatch()
      clearDropzoneImage()
    } else if (saveupdateProfileResponse && saveupdateProfileResponse.status === STATUS_RESPONSE.ERROR_MSG) {
      Toastify({
        text: saveupdateProfileResponse && saveupdateProfileResponse.message,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#bb2124",
        },
      }).showToast();
    }
  }, [saveupdateProfileResponse])

  return (
    <>
      <div className='form-group row mb-4'>
        <div className='col-lg-4 mt-5'>
          <label className='fw-bolder fs-6 text-gray-800 mb-1'>
            Manage Your Profile
          </label>
          <div>
            <label class="fs-6 text-muted">Personalize your account settings and information</label>
          </div>
          <div className='mt-5'>
            <label className='form-label'>
              First Name
            </label>
            <div className='w-100 mb-5'>
              <input
                placeholder='First Name'
                className='form-control form-control-lg ps-4 mb-4 placeHolder'
                value={`${formData.firstName}` || ''}
                type='text'
                name='firstName'
                id='firstName'
                autoComplete='off'
                onChange={(e) => handleChange(e)}
                onKeyPress={(e) => {
                  const regex = REGEX.TEXT;
                  if (!regex.test(e.key) || formData.firstName.length >= 30) {
                    e.preventDefault();
                  }
                }} />
                {errors.firstName && (
                  <div className='fv-plugins-message-container text-danger mb-4'>
                    <span role='alert text-danger'>{errors.firstName}</span>
                  </div>
                )}
            </div>
            <label className='form-label'>
              Last Name
            </label>
            <div className='w-100 mb-5'>
              <input
                placeholder='Last Name'
                className='form-control form-control-lg ps-4 mb-4 placeHolder'
                value={`${formData.lastName}` || ''}
                type='text'
                name='lastName'
                id='lastName'
                autoComplete='off'
                onChange={(e) => handleChange(e)}
                onKeyPress={(e) => {
                  const regex = REGEX.TEXT;
                  if (!regex.test(e.key) || formData.lastName.length >= 30) {
                    e.preventDefault();
                  }
                }} />
                {errors.lastName && (
                  <div className='fv-plugins-message-container text-danger mb-4'>
                    <span role='alert text-danger'>{errors.lastName}</span>
                  </div>
                )}
            </div>
            <label className='form-label'>
              Email Id
            </label>
            <div className='w-100 mb-5'>
              <input
                placeholder='Email Id'
                className='form-control form-control-lg ps-4 mb-4 placeHolder'
                value={formData.emailId || ''}
                type='text'
                name='emailId'
                id='emailId'
                autoComplete='off'
                maxLength={50}
                onChange={(e) => handleChange(e)}
                onKeyPress={(e) => {
                  if (formData.emailId.length >= 50) {
                    e.preventDefault();
                  }
                }}
                />
                 {errors.emailId && (
                  <div className='fv-plugins-message-container text-danger mb-4'>
                    <span role='alert text-danger'>{errors.emailId}</span>
                  </div>
                )}
            </div>
            <label className='form-label'>
              Phone Number
            </label>
            <div className='w-100 mb-5'>
              <input
                placeholder='Phone Number'
                className='form-control form-control-lg ps-4 mb-4 placeHolder'
                value={formData.mobileNumber || ''}
                type='text'
                name='mobileNumber'
                id='mobileNumber'
                autoComplete='off'
                onChange={(e) => handleChange(e)}
                onKeyPress={(e) => {
                  const key = e.key;
                  const currentValue = e.target.value;
                  const regex = REGEX.NUMERIC_DIGITS
                  const updatedValue = currentValue + key;
                  if (!regex.test(updatedValue) || updatedValue.length > 10) {
                    e.preventDefault();
                  }
                }}
              />
              {errors.mobileNumber && (
                  <div className='fv-plugins-message-container text-danger mb-4'>
                    <span role='alert text-danger'>{errors.mobileNumber}</span>
                  </div>
                )}
            </div>
            <label className='form-label'>
              Alternative Mobile Number
            </label>
            <div className='w-100 mb-5'>
              <input
                placeholder='Alternative Mobile No'
                className='form-control form-control-lg ps-4 mb-4 placeHolder'
                value={formData.alternativeMobileNumber || ''}
                type='text'
                name='alternativeMobileNumber'
                id='alternativeMobileNumber'
                autoComplete='off'
                onChange={(e) => handleChange(e)}
                onKeyPress={(e) => {
                  const key = e.key;
                  const currentValue = e.target.value;
                  const regex = REGEX.NUMERIC_DIGITS
                  const updatedValue = currentValue + key;

                  if (!regex.test(updatedValue) || updatedValue.length > 10) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
            <label className='form-label'>
              D.O.B
            </label>
            <div className='w-100 mb-5'>
              <DateSelector
                className='date-picker-edit'
                name='dob'
                id='dob'
                views={['year', 'month', 'day']}
                selected={formData.dob || ''}
                onChange={(date) => {
                  setFormData((values) => ({
                    ...values,
                    dob: date && date.$d
                  }))
                }}
                sx={{ width: "100%" }}
                format={DATE.DATE_ONLY}
                minDate={startOfQ12022}
                maxDate={endOfQ12022}
              />
            </div>
            {errors.dob && (
                <div className='fv-plugins-message-container text-danger mb-4'>
                  <span role='alert text-danger'>{errors.dob}</span>
                </div>
              )}
            <label className='form-label'>
              Address
            </label>
            <div className='w-100 mb-5'>
              <textarea
                placeholder='Address'
                className='form-control form-control-lg ps-4 mb-4 placeHolder'
                value={formData.address || ''}
                type='text'
                name='address'
                id='address'
                autoComplete='off'
                rows={2}
                maxLength={100}
                onChange={(e) => handleChange(e)}
                onKeyPress={(e) => {
                  const regex = REGEX.ALPHA_NUMERIC_SPECIAL_CHARS
                  if (!regex.test(e.key) || formData.address && formData.address.length >= 100) {
                    e.preventDefault();
                  }
                }}
              />
              {errors.address && (
                  <div className='fv-plugins-message-container text-danger mb-4'>
                    <span role='alert text-danger'>{errors.address}</span>
                  </div>
                )}
            </div>
          </div>
        </div>
        <div className='col-lg-6 my-5 text-center'>
          <div className='rounded mx-auto mt-5'>
            <label className='font-size-xs font-weight-light mb-4 form-label w-100 mt-5'>
              Profile Picture
            </label>
            <Dropzone
              defaultImages={defaultImages}
              type={DROPZONE_IMAGE_NAME_TYPES.IMAGE}
              multiple={false}
              thumbnail={false}
              maxFileSize="5"
              name={`${DROPZONE_IMAGE_NAME_TYPES.IMAGE.toLowerCase()}`}
              flag={DROPZONE_IMAGE_NAME_TYPES.IMAGE}
              formatType={FILE_FORMAT_TYPE}
              escriptMasterDataType={'Landlord'}
              id='Landlord'
            />
          </div>
        </div>
        <div className='col-lg-12 mt-7 text-center'>
          <button className='btn btn-blue py-2 m-2' onClick={handleProfile}>Update Profile</button>
          <button className='btn btn-blue-outline py-2 m-2'>Reset</button>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const { ProfilelistStore, updateProfileStore, dropzoneStore } = state;
  return {
    ProfileDetail: ProfilelistStore && ProfilelistStore.getAllProfile ? ProfilelistStore.getAllProfile : '',
    saveupdateProfileResponse: updateProfileStore && updateProfileStore.saveupdateProfileResponse ? updateProfileStore.saveupdateProfileResponse : '',
    dropzoneImage:
      dropzoneStore && dropzoneStore.dropzoneImage ? dropzoneStore.dropzoneImage : [],
  }
}
const mapDispatchToProps = dispatch => ({
  getProfilelistDispatch: (data) =>
    dispatch(profileActions.getprofilelist(data)),
  clearProfilelistDispatch: () =>
    dispatch(updateprofileActions.clearupdateprofile()),
  updateProfile: (params) => dispatch(updateprofileActions.updateprofile(params)),
  dropzoneImageAddDispatch: (data) =>
    dispatch(UploadActions.uploadImage(data)),
  clearDropzoneImage: () =>
    dispatch(UploadActions.uploadImageError())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMyProfile)