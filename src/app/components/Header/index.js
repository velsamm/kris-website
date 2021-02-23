import React from 'react'

import PhoneIcon from '../../icons/PhoneIcon'
import EnvelopIcon from '../../icons/Envelope'
import Instagram from '../../icons/Instagram'

const Header = () => (
    <div className="container-fluid custom-padding custom-header">
        <div className="row">
            <div className="col d-flex align-items-center">
                <label className="ml-2">
                    <PhoneIcon />
                    <span className="ml-2 custom-white-text">
                        +7 909 123 45 67
                    </span>
                </label>
                <label className="ml-5">
                    <EnvelopIcon />
                    <span className="ml-2 custom-white-text">
                        mail@mail.com
                    </span>
                </label>
            </div>
            <div className="col d-flex justify-content-end align-items-center">
                <div className="pr-2">
                    <Instagram />
                </div>
                <div>
                    <button className="btn btn-primary">Консультация</button>
                </div>
            </div>
        </div>
    </div>
)

export default Header
