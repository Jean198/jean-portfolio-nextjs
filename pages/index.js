import React from 'react'
import Layout from '../components/Layout'
import WelcomeSection from '../components/WelcomeSection'
import ProjectSection from '../components/ProjectsSection'
import ContactForm from '../components/ContactForm'


const index = () => {
    return (
        <div>
            <Layout>
                <WelcomeSection/>
                <ProjectSection/>
                <ContactForm/>
            </Layout>
            
        </div>
    )
}

export default index
