import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../home/Footer'
import ScrollToTop from './../components/ScrollToTop';


export default function WithOutnavbar() {
  return (
    <ScrollToTop>
      <Header />

      <div className="mt-5 pt-5 container">
        <Outlet />
      </div>

      <Footer />
    </ScrollToTop>
  )
}
