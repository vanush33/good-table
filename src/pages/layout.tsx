import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='app'>
     <Header />
     <div className="content">
        <Outlet />
     </div>
     <Footer />
    </div>
  )
}
