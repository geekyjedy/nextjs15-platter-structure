import Footer from '@/components/Footer/page'
import Header from '@/components/Header/page'
import SideBar from '@/components/Sidebar/page'
import React from 'react'

const AdminLayout = ({children}) => {
  return (
    <div>
    <Header />
    {children}
    <SideBar />
    <Footer />
    </div>
  )
}

export default AdminLayout  