import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import routeConfig from '../../routing/routeConfig'
import { LoginActions } from '../../store/actions'
import { REGEX, RESPONSE_STATUS, USER_MANAGEMENT_ERROR, USER_MANAGEMENT_VALIDATION, SESSION } from '../../utils/constants'
import _ from 'lodash'
import Otp from './Otp'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

function Login(props) {
  const { loginDispatch, loading, loginData, clearLogin } = props
  const [otpField, setOtpField] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [type, setType] = useState('LOGIN')
  const [formData, setFormData] = useState({
    mobileNumber: ''
  })
  const [errors, setErrors] = useState({
    mobileNumber: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = {}
    if (_.isEmpty(formData.mobileNumber)) {
      errors.mobileNumber = USER_MANAGEMENT_ERROR.USER_PHONE
      document.getElementById('mobileNumber').focus()
    } else if (!REGEX.PHONE_NUMBER_1.test(formData.mobileNumber)) {
      errors.mobileNumber = USER_MANAGEMENT_VALIDATION.USER_PHONE
      document.getElementById('mobileNumber').focus()
    }
    setErrors(errors)
    if (_.isEmpty(errors)) {
      loginDispatch(formData)
    }
  }

  const handleChange = (e) => {
    setPhoneNumber(e.target.value)
    const { name, value } = e.target
    formData[name] = value
    setFormData(formData)
    setErrors({ ...errors, [name]: '' })
  }

  useEffect(() => {
    if (loginData && loginData.status === RESPONSE_STATUS.SUCCESS) {
      setOtpField(true)
    }
    else if (loginData.status === RESPONSE_STATUS.ERROR) {
      Toastify({
        text: loginData && loginData.message,
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
      clearLogin()
    }
  }, [loginData])

  return (
    <>
      <Otp show={otpField} setOtpField={setOtpField} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} type={type} setType={setType} response={loginData}/>
      {
        !otpField ?
          <>
            <div className='mt-15'>
              <h1 className='login-head'>
                login
              </h1>
            </div>
            <div className='login-para mb-10'>
              Login in to your account to continue
            </div>
            <form>
              <div className="fv-row mb-10">
                <div className="position-relative mb-3">
                  <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 start-0 ms-8"
                    id="basic-addon1">
                    <i className="bi bi-telephone fs-1" />
                  </span>
                  <input
                    placeholder='Enter Mobile Number'
                    className='form-control form-control-lg ps-15'
                    onChange={(e) => handleChange(e)}
                    type='mobileNumber'
                    name='mobileNumber'
                    id='mobileNumber'
                    autoComplete='off'
                    maxLength={10}
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
              <div className='text-center'>
                <button
                  type='submit'
                  id='kt_sign_in_submit'
                  className='btn btn-lg btn-login w-100 mb-8'
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {!loading && <span className='indicator-label'>Login</span>}
                  {loading && (
                    <span className='indicator-progress' style={{ display: 'block' }}>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2' />
                    </span>
                  )}
                </button>
                <div className='d-flex justify-content-between mt-n5'>
                  <div className='d-flex flex-stack mb-2 mt-4'>
                    <label className='form-label text-dark mb-0 login-link-text'>
                      Don’t have an account?
                    </label>
                    <Link
                      to={routeConfig.registration}
                      className='login-link'
                      style={{ marginLeft: '5px' }}
                    >
                      Register here
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </> : null}
    </>
  )
}

const mapStateToProps = state => {
  const { loginStore } = state
  return {
    loginData: loginStore && loginStore.login ? loginStore.login : {},
    loading: loginStore && loginStore.loading ? loginStore.loading : false
  }
}

const mapDispatchToProps = dispatch => ({
  loginDispatch: (data) => dispatch(LoginActions.login(data)),
  clearLogin: () => dispatch(LoginActions.clearLogin())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)