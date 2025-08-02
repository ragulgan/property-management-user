import React from 'react'
import { toAbsoluteUrl } from '../../theme/helpers'

const Dashboard = () => {
  return (
    <div className='row'>
        <div className='col-sm-8'>
            <div className='row row-cols-3'>
                <div className='col'>
                    <div className='dashboard-card-1 p-5 d-flex justify-content-between align-items-center'>
                        <div>
                            <div className='card-head'>Properties</div>
                            <div className='card-total mt-2'>2500</div>
                        </div>
                        <img alt='Logo' src={toAbsoluteUrl('/media/avatars/dashboard/property.svg')} className='img-fluid'/>
                    </div>
                </div>
                <div className='col'>
                    <div className='dashboard-card-2 p-5 d-flex justify-content-between align-items-center'>
                        <div>
                            <div className='card-head'>Leases</div>
                            <div className='card-total mt-2'>1500</div>
                        </div>
                        <img alt='Logo' src={toAbsoluteUrl('/media/avatars/dashboard/lease.svg')} className='img-fluid'/>
                    </div>
                </div>
                <div className='col'>
                    <div className='dashboard-card-3 p-5 d-flex justify-content-between align-items-center'>
                        <div>   
                            <div className='card-head'>Landlords</div>
                            <div className='card-total mt-2'>500</div>
                        </div>
                        <img alt='Logo' src={toAbsoluteUrl('/media/avatars/dashboard/landlord.svg')} className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-sm-3'>
        </div>
    </div>
  )
}

export default Dashboard