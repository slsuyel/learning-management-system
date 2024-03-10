import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../home/Footer'
import ScrollToTop from './../components/ScrollToTop';


export default function WithOutnavbar() {
  return (
    <ScrollToTop>
      <Header />

      <div style={{ paddingTop: '58px' }} className=''>
        <Outlet />
      </div>

      {/* <Footer /> */}
    </ScrollToTop>
  )
}
