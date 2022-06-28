import React from 'react'

import EnvelopIcon from '../../icons/Envelope'
import Instagram from '../../icons/Instagram'

import { MAIL, INSTAGRAM } from '../../constants'

const Header = () => (
    <div className="container-fluid custom-padding custom-header d-flex">
        <div className="row w-100">
            <div className="col col-md-12 col-lg-6 my-auto text-center text-lg-left ">
                <label className="d-none d-md-inline">
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
