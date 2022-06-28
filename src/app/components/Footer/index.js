import React from 'react'

import EnvelopIcon from '../../icons/Envelope'
import Logo from '../../icons/Logo'
import { MAIL } from '../../constants'

const Footer = () => (
    <div className="container-fluid custom-footer custom-padding custom-white-text">
        <div className="row align-items-center">
            <div className="col">
                <div>
                    <label>
                        <Logo width={64} height={64} /> Copyright @{' '}
                        {new Date().getFullYear()} NOVIKOVA KRISTINA. Все права
                        защищены
                    </label>
                </div>
            </div>
            <div className="col d-flex">
                <div className="mr-5">
                    <EnvelopIcon /> {MAIL}
                </div>
            </div>
        </div>
    </div>
)

export default Footer
