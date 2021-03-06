import React from 'react'

import PhoneIcon from '../../icons/PhoneIcon'
import EnvelopIcon from '../../icons/Envelope'
import Instagram from '../../icons/Instagram'
import YaMap from './YaMap'
import LocationIcon from '../../icons/Location'

const Contacts = () => (
    <div
        className="container-fluid custom-contacts custom-padding"
        id="contacts-nav"
    >
        <div className="row m-auto">
            <div className="col d-flex flex-column justify-content-center ">
                <div className="container">
                    <div className="row">
                        <div className="col mt-4 mt-lg-0 mb-3 h5 font-weight-bold">
                            <label>КОНТАКТЫ</label>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col custom-contacts-details font-weight-bold ">
                            <PhoneIcon color="#ffffff" /> +7 909 123 45 67
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col custom-contacts-details font-weight-bold ">
                            <EnvelopIcon color="#ffffff" /> mail@mail.com
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col custom-contacts-details font-weight-bold ">
                            <LocationIcon />{' '}
                            <label>г.Краснодар, ул.Садовая 159</label>
                        </div>
                    </div>
                    <div className="row m-2">
                        <div className="col custom-contacts-details font-weight-bold ">
                            <a
                                className="custom-white-text"
                                type="button"
                                href="https://www.instagram.com/novikova_law"
                            >
                                <Instagram color="#ffffff" /> novikova_law
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <YaMap />
            </div>
        </div>
    </div>
)

export default Contacts
