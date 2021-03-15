import React from 'react'

import PhoneIcon from '../../icons/PhoneIcon'
import EnvelopIcon from '../../icons/Envelope'
import Instagram from '../../icons/Instagram'

import { PHONE, MAIL, INSTAGRAM, PHONE_LINK } from '../../constants'

const Header = () => (
    <div className="container-fluid custom-padding custom-header d-flex">
        <div className="row w-100">
            <div className="col col-md-12 col-lg-6 my-auto text-center text-lg-left ">
                <label>
                    <PhoneIcon />
                    <a className="custom-white-text" href={PHONE_LINK}>
                        {PHONE}
                    </a>
                </label>
                <label className="d-none d-md-inline">
                    {/*<label className="ml-1 ml-sm-2 ml-lg-0 ml-xl-2  d-none d-md-inline">*/}
                    <EnvelopIcon />
                    <span className="ml-2 custom-white-text">{MAIL}</span>
                </label>
            </div>
            <div className="col col-md-12 col-lg-6 m-auto d-flex justify-content-md-center justify-content-lg-end align-items-center">
                <div className="text-center w-100">
                    <a
                        className="custom-white-text"
                        type="button"
                        href={`https://www.instagram.com/${INSTAGRAM}`}
                        target="_blank"
                    >
                        <Instagram /> {INSTAGRAM}
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default Header
