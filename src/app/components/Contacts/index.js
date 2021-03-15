import React, { lazy, useState } from 'react'

import PhoneIcon from '../../icons/PhoneIcon'
import EnvelopIcon from '../../icons/Envelope'
import Instagram from '../../icons/Instagram'
import LocationIcon from '../../icons/Location'

import {
    PHONE,
    MAIL,
    INSTAGRAM,
    ADDRESS_KRASNODAR,
    ADDRESS_MOSCOW,
    PHONE_LINK,
} from '../../constants'
import SearchIcon from '../../icons/SearchIcon'

const YaMap = lazy(() => import('./YaMap'))

const Contacts = () => {
    const [addressState, setAddressState] = useState([55.835483, 37.633293])

    const handleSwitchAddress = (city) => {
        switch (city) {
            case 'msk':
                return setAddressState([55.835483, 37.633293])
            case 'krd':
                return setAddressState([45.040932, 38.994])
            default: {
            }
        }
    }

    return (
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
                                <PhoneIcon color="#ffffff" />{' '}
                                <a
                                    className="custom-white-text"
                                    href={PHONE_LINK}
                                >
                                    {PHONE}
                                </a>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col custom-contacts-details font-weight-bold ">
                                <EnvelopIcon color="#ffffff" /> {MAIL}
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col custom-contacts-details font-weight-bold ">
                                <LocationIcon />{' '}
                                <label
                                    onClick={() => handleSwitchAddress('msk')}
                                >
                                    {ADDRESS_MOSCOW}
                                </label>{' '}
                                <button
                                    onClick={() => handleSwitchAddress('msk')}
                                    type="button"
                                    className="btn btn-outline-primary"
                                >
                                    <SearchIcon color="white" />
                                </button>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col custom-contacts-details font-weight-bold ">
                                <LocationIcon />{' '}
                                <label
                                    onClick={() => handleSwitchAddress('krd')}
                                >
                                    {ADDRESS_KRASNODAR}
                                </label>
                                <button
                                    onClick={() => handleSwitchAddress('krd')}
                                    type="button"
                                    className="btn btn-outline-primary"
                                >
                                    <SearchIcon color="white" />
                                </button>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col custom-contacts-details font-weight-bold ">
                                <a
                                    className="custom-white-text"
                                    type="button"
                                    href={`https://www.instagram.com/${INSTAGRAM}`}
                                >
                                    <Instagram color="#ffffff" /> {INSTAGRAM}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <YaMap address={addressState} />
                </div>
            </div>
        </div>
    )
}

export default Contacts
