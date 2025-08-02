import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RegisterActions } from '../../store/actions'
import routeConfig from '../../routing/routeConfig'
import _ from 'lodash'
import { REGEX, RESPONSE_STATUS, USER_MANAGEMENT_ERROR, USER_MANAGEMENT_VALIDATION } from '../../utils/constants'
import { connect } from 'react-redux'
import Otp from './Otp'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

function Registration(props) {
  const { RegisterDispatch, loading, registerData, clearRegister } = props
  const [formData, setFormData] = useState({
    mobileNumber: '',
    emailId: '',
    firstName: '',
    lastName: ''
  })
  const [errors, setErrors] = useState({
    mobileNumber: '',
    emailId: '',
    firstName: '',
    lastName:''
  })
  const [otpField, setOtpField] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [type, setType] = useState('SIGNUP')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = {}
    if (_.isEmpty(formData.emailId)) {
      errors.emailId = USER_MANAGEMENT_ERROR.USER_EMAIL
      document.getElementById('emailId').focus()
    }else if (!REGEX.EMAIL.test(formData.emailId)) {
      errors.emailId = USER_MANAGEMENT_VALIDATION.USER_EMAIL
      document.getElementById('emailId').focus()
    }
    if (_.isEmpty(formData.mobileNumber)) {
      errors.mobileNumber = USER_MANAGEMENT_ERROR.USER_PHONE
      document.getElementById('mobileNumber').focus()
    } else  if (!REGEX.PHONE_NUMBER_1.test(formData.mobileNumber)) {
      errors.mobileNumber = USER_MANAGEMENT_VALIDATION.USER_PHONE
      document.getElementById('mobileNumber').focus()
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
      RegisterDispatch(formData)
    }
  }

  const handleChange = (e) => {
    if(e.target.name === 'mobileNumber') {
      setPhoneNumber(e.target.value)
    }
    const { name, value } = e.target
    formData[name] = value
    setFormData(formData)
    setErrors({ ...errors, [name]: '' })
  }

  useEffect(() => {
    if (registerData && registerData.status === RESPONSE_STATUS.SUCCESS) {
      clearRegister()
      setOtpField(true)
    }
    else if (registerData.status === RESPONSE_STATUS.ERROR) {
      Toastify({
        text: registerData && registerData.message,
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
      setOtpField(false)
      clearRegister()
    }
  }, [registerData])

  return (
    <>
      <Otp show={otpField}  setOtpField={setOtpField} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} type={type} setType={setType} response={registerData}/>
      {
        !otpField ? (
          <form
          className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
          noValidate
          id='kt_login_signup_form'
        >
            <h1 className='text-dark login-head'>
              Join Us Today !</h1>
          <div className='login-para mb-10'>
            Fill the form below to create an account
          </div>
          <div className="fv-row mb-5">
            <div className="position-relative mb-2">
              <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 start-0 ms-8"
                id="basic-addon1">
                <i className="bi bi-person fs-1" />
              </span>
              <input
                placeholder='Enter First Name'
                className='form-control form-control-lg ps-15'
                onChange={(e) => handleChange(e)}
                type='text'
                name='firstName'
                id='firstName'
                autoComplete='off'
                onKeyPress={(e) => {
                  const regex = REGEX.TEXT;
                  if (!regex.test(e.key) || formData.firstName.length >= 30) {
                    e.preventDefault();
                  }
                }} />
            </div>
            {errors.firstName && (
              <div className='fv-plugins-message-container text-danger'>
                <span role='alert text-danger'>{errors.firstName}</span>
              </div>
            )}
          </div>
          <div className="fv-row mb-5">
            <div className="position-relative mb-2">
              <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 start-0 ms-8"
                id="basic-addon1">
                <i className="bi bi-person fs-1" />
              </span>
              <input
                placeholder='Enter Last Name'
                className='form-control form-control-lg ps-15'
                onChange={(e) => handleChange(e)}
                type='text'
                name='lastName'
                id='lastName'
                autoComplete='off'
                onKeyPress={(e) => {
                  const regex = REGEX.TEXT;
                  if (!regex.test(e.key) || formData.lastName.length >= 30) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
            {errors.lastName && (
              <div className='fv-plugins-message-container text-danger'>
                <span role='alert text-danger'>{errors.lastName}</span>
              </div>
            )}
          </div>
          <div className="fv-row mb-5">
            <div className="position-relative mb-2">
              <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 start-0 ms-8"
                id="basic-addon1">
                <i className="bi bi-telephone fs-1" />
              </span>
              <input
                 placeholder='Enter Mobile Number'
                 className='form-control form-control-lg ps-15'
                 onChange={(e) => handleChange(e)}
                 maxLength={10}
                 type='text'
                 name='mobileNumber'
                 id='mobileNumber'
                 autoComplete='off'
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
             {errors.mobileNumber && (
               <div className='fv-plugins-message-container text-danger'>
                 <span role='alert text-danger'>{errors.mobileNumber}</span>
               </div>
             )}
          </div>
          <div className="fv-row mb-10">
            <div className="position-relative mb-2">
              <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 start-0 ms-8"
                id="basic-addon1">
                <i className="bi bi-envelope fs-1" />
              </span>
              <input
                 placeholder='Enter Email Address'
                 className='form-control form-control-lg ps-15'
                 onChange={(e) => handleChange(e)}
                 type='text'
                 name='emailId'
                 id='emailId'
                 autoComplete='off'
                 onKeyPress={(e) => {
                  if (formData.emailId.length >= 50) {
                    e.preventDefault();
                  }
                }}
               />
             </div>
             {errors.emailId && (
               <div className='fv-plugins-message-container text-danger'>
                 <span role='alert text-danger'>{errors.emailId}</span>
               </div>
             )}
          </div>
          <div className='text-center'>
            <button
              type='submit'
              className='btn btn-lg btn-login w-100 mb-5'
              disabled={loading}
              onClick={handleSubmit}
            >
              {!loading && <span className='indicator-label'>Register</span>}
              {loading && (
                <span className='indicator-progress' style={{ display: 'block' }}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2' />
                </span>
              )}
            </button>
            <div className='d-flex justify-content-between'>
              <div className='d-flex flex-stack mb-2 mt-4'>
                <label className='form-label login-link-text text-dark fs-6 mb-0'>
                  Already have an account?
                </label>
                <Link
                  to={routeConfig.auth}
                  className='link-primary fs-6 login-link'
                  style={{ marginLeft: '5px' }}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </form>
        ):
        null
      }
    </>
  )
}

const mapStateToProps = state => {
  const { registerStore } = state
  return {
    registerData: registerStore && registerStore.registerData ? registerStore.registerData : {},
    loading: registerStore && registerStore.loading ? registerStore.loading : false
  }
}

const mapDispatchToProps = dispatch => ({
  RegisterDispatch: (data) => dispatch(RegisterActions.Register(data)),
  clearRegister: () => dispatch(RegisterActions.clearRegister())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration)