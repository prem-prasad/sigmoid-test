import Navbar from 'components/ui-components/navbar'
import React from 'react'
import "./styles.scss"

 const FullLayout = (props)=> {
        return (
            <div className="layout-container">
                <Navbar />
                {props.children}
                {/* <Footer /> */}
            </div>
        )
}
export default FullLayout