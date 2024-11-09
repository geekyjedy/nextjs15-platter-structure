import Footer from '@/components/Footer/page'
import Header from '@/components/Header/page'
import React from 'react'

const UserLayout = ({children}) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}

export default UserLayout