import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='' >
            <NavBar />
            <div className='flex flex-col gap-8' >
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout