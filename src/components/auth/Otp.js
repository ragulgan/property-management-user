import React, { useState, useEffect } from 'react'
import { OtpActions } from '../../store/actions'
import _ from 'lodash'
import { RESPONSE_STATUS, SESSION } from '../../utils/constants'
import { connect } from 'react-redux'
import OtpInput from 'react-otp-input';
import { setLocalStorage } from '../../utils/helper'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

function OTP(props) {
  const { OtpDispatch, loading, otpData, clearOtp, show, setOtpField, phoneNumber, setPhoneNumber, type, setType, response } = props
  const [otp, setOtp] = useState('')
  const FCM = localStorage.getItem('FCM') ? localStorage.getItem('FCM') : ''

  const handleOtpSubmit = (e) => {
    e.preventDefault()
    if (otp.length === 4) {
      const payload = {
        code: otp,
        mobileNumber: phoneNumber,
        type: type,
        fcmToken: FCM
      }
      OtpDispatch(payload)
    }
  }

  const handleResend = () => {
    setOtp('')
  }

  useEffect(() => {
    if (response.status === RESPONSE_STATUS.SUCCESS) {
      Toastify({
        text: response && response.message,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#22bb33",
        },
      }).showToast();
    }
  }, [response])

  useEffect(() => {
    if (otpData && otpData.data && otpData.data.token && otpData.status === RESPONSE_STATUS.SUCCESS) {
      setLocalStorage(SESSION.TOKEN, otpData.data.token)
      window.location = '/dashboard'
      clearOtp()
      setPhoneNumber('')
      setType('')
    }
    else if (otpData.status === RESPONSE_STATUS.ERROR) {
      Toastify({
        text: otpData && otpData.message,
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
      setOtpField(true)
      clearOtp()
    }
  }, [otpData])


  return (
    <>
      {show ?
        <>
          <form
            className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
            noValidate
            id='kt_otp_signup_form'
          >
            <div className='mb-8'>
              <h1 className='text-dark mb-3 login-head'>OTP Verification</h1>
            </div>
            <div className='login-para mb-5'>
              An otp has been sent to your mobile number please verifiy it below
            </div>
            <div className='fv-row mb-15 otp-field mt-20 d-flex justify-content-center'>
              <OtpInput
                value={otp}
                shouldAutoFocus
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <div className='text-center'>
              <button
                type='submit'
                id='kt_sign_up_submit'
                className='btn btn-lg btn-login  w-100 mb-5'
                disabled={loading}
                onClick={handleOtpSubmit}
              >
                {!loading && <span className='indicator-label'>Verify</span>}
                {loading && (
                  <span className='indicator-progress' style={{ display: 'block' }}>
                    Please wait...{' '}
                    <span className='spinner-border spinner-border-sm align-middle ms-2' />
                  </span>
                )}
              </button>
            </div>
          </form>
          <div className='d-flex justify-content-center mt-5'>
            <div className='d-flex flex-stack mb-2 mt-2'>
              <button className='btn btn-outline fs-6 border-0' onClick={handleResend}>
                Resend OTP
              </button>
            </div>
          </div></> : null}
    </>
  )
}

const mapStateToProps = state => {
  const { otpStore } = state
  return {
    otpData: otpStore && otpStore.otpData ? otpStore.otpData : {},
    loading: otpStore && otpStore.loading ? otpStore.loading : false
  }
}

const mapDispatchToProps = dispatch => ({
  OtpDispatch: (data) => dispatch(OtpActions.Otp(data)),
  clearOtp: () => dispatch(OtpActions.clearOtp())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OTP)