import React from 'react'

import PhoneIcon from '../../icons/PhoneIcon'
import EnvelopIcon from '../../icons/Envelope'
import Instagram from '../../icons/Instagram'

const Header = () => (
    <div className="container-fluid custom-padding custom-header d-flex">
        <div className="row w-100">
            <div className="col-md-12 col-lg-6 my-auto text-center text-lg-left ">
                <label>
                    <PhoneIcon />
                    <span className="custom-white-text">+7 909 123 45 67</span>
                </label>
                <label className="ml-1 ml-sm-2 ml-lg-0 ml-xl-2">
                    <EnvelopIcon />
                    <span className="ml-2 custom-white-text">
                        mail@mail.com
                    </span>
                </label>
            </div>
            <div className="col-md-12 col-lg-6 ml-auto my-auto d-flex justify-content-md-center justify-content-lg-end align-items-center">
                <div className="text-center w-100">
                    <a
                        className="custom-white-text"
                        type="button"
                        href="https://www.instagram.com/novikova_law"
                    >
                        <Instagram /> novikova_law
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default Header
