import React from 'react'
import './App.css'

import Header from './components/Header'
import Subheader from './components/Subheader'
import WhoAmI from './components/WhoAmI'
import Services from './components/Services'
import ContactMe from './components/ContactMe'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

const App = () => (
    <div>
        <Header />
        <Subheader />
        <WhoAmI />
        <Services />
        <ContactMe />
        <Contacts />
        <Footer />
    </div>
)

export default App
