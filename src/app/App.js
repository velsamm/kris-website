import React, { Suspense } from 'react'
import './App.css'

import Header from './components/Header'
import Subheader from './components/Subheader'
import WhoAmI from './components/WhoAmI'
import Services from './components/Services'
import ContactMe from './components/ContactMe'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Loader from './components/Loader'

const App = () => (
    <Suspense fallback={Loader}>
        <div>
            <Header />
            <Subheader />
            <WhoAmI />
            <Services />
            <ContactMe />
            <Contacts />
            <Footer />
        </div>
    </Suspense>
)

export default App
