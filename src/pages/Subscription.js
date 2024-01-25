import React from 'react';
import Breadcrumb from '../assets/breadcrumb.png';

const Subscription = () => {
  return (
    <>
      <div className='text-center'>
        <img className="w-full h-full sticky  object-cover  " src={Breadcrumb} alt="breadcrumb" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-900 text-center">
          <h1 className="text-5xl font-semibold mb-2 ">Our Subscription Plans</h1>
          <ol className='flex justify-center items-center'>
  <li>
    <a className="text-black font-semibold" href='https://www.hamroqrmenu.com/'>Home /</a>
  </li>
  <li className='font-semibold mx-2 text-blue-900 '>
    Subscription Plans
  </li>
</ol>
        </div>
      </div>
      <div>

      <div className='bg-white md:py-11 px-11 mt-10 text-center'>
        <h1 className="text-3xl text-blue-900 font-semibold">Simple plans. <span className='text-red-700 '>Fix Pricing.</span></h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:px-8 px-5 py-16">
        <div className='bg-blue-100 p-6 rounded-lg '>
          <h2 className='text-2xl font-semibold mb-4'>Bronze</h2>
          <div className='mb-4  font-semibold text-center'>
            <span className='text-blue-900'>NPR. 500</span>
            <span className='text-red-900'><i> Monthly</i></span>
          </div>
          <div>
            <ul className="list-none pl-0 ">
              <li>Advance Dashboard Panel</li>
              <li>Unlimited scans</li>
              <li>Live update of QR scans</li>
              <li>Banner Advertisement</li>
              <li>Push Notification</li>
              <li>Payment Gateway</li>
              <li>Renew and Upgrade Subscription Plan</li>
              <li>Reports</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div className='mt-6'>
            <a href='https://www.hamroqrmenu.com/user/login' className='btn font-semibold bg-blue-950 hover:bg-red-900 text-white  px-4 py-2 rounded'>
              Subscribe Now
            </a>
          </div>
        </div>
      
      <div className='col-lg-4 col-md-6 col-sm-12'>
      <div className='bg-blue-100 p-6 rounded-lg '>
        <div className='text-2xl font-semibold mb-4'>Silver</div>
        <div className='mb-4  font-semibold text-center'>
          <span className='text-blue-900'>NPR. 3000</span>
          <span className='text-red-900'><i>Quaterly</i></span>
        </div>
        <div>
          <ul>
          <li> Advance Dashboard Panel</li>
    <li>Unlimited scans</li>
    <li>Live update of QR scans</li>
    <li>Banner Advertisement</li>
    <li>Push Notification</li>
    <li>Payment Gateway</li>
    <li>Renew and Upgrade Subscription Plan</li>
    <li>Reports</li>
    <li>Reviews</li>
          </ul>
        </div>
        <div className='mt-3'>
          <a href='https://www.hamroqrmenu.com/user/login' className='btn bg-blue-950 hover:bg-red-900 font-semibold text-white  px-4 py-2 rounded'>Subscribe Now</a>
        </div>
</div>
      </div>
      <div>
      <div className='col-lg-4 col-md-6 col-sm-12'>
      <div className='bg-blue-100 p-6 rounded-lg '>
      <div className='flex justify-between'>
        <div className='text-2xl font-semibold mb-4'>Gold</div>
        
        <div className='text-2xl font-semibold mb-4'>15.00 % off</div>
        </div>
      <div className='font-semibold mb-4 text-blue-900 text-center'>
        <span>NPR. 6000</span>
        <span>NPR. 5100</span>
        <span className='text-red-900'><i>Annually</i></span>
        
      </div>
      <div>
        <ul>
        <li> Advance Dashboard Panel</li>
    <li>Unlimited scans</li>
    <li>Live update of QR scans</li>
    <li>Banner Advertisement</li>
    <li>Push Notification</li>
    <li>Payment Gateway</li>
    <li>Renew and Upgrade Subscription Plan</li>
    <li>Reports</li>
    <li>Reviews</li>
        </ul>
      </div>
      <div className='mt-3'>
        <a href='https://www.hamroqrmenu.com/user/login' className='btn font-semibold bg-pink-950 hover:bg-red-900 text-white px-4 py-2 rounded'>Subscribe Now</a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Subscription;
