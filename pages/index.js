import React from 'react'
import Layout from '../components/Layout'
import WelcomeSection from '../components/WelcomeSection'
import ProjectSection from '../components/ProjectsSection'
import ContactForm from '../components/ContactForm'
import References from '../components/References'





const index = () => {
    return (
        <div>
            <Layout>
                <WelcomeSection/>
                <ProjectSection/>
                <References/>
                <ContactForm/>
                
                
            </Layout>
            
        </div>
    )
}

export default index
