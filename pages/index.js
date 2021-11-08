import React from 'react'
import Layout from '../components/Layout'
import WelcomeSection from '../components/WelcomeSection'

import ContactForm from '../components/ContactForm'


const index = () => {
    return (
        <div>
            <Layout>
                <WelcomeSection/>
                
                <ContactForm/>
            </Layout>
            
        </div>
    )
}

export default index
