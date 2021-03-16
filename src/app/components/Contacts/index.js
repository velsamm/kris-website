import React, { lazy, useState } from 'react'

import PhoneIcon from '../../icons/PhoneIcon'
import EnvelopIcon from '../../icons/Envelope'
import Instagram from '../../icons/Instagram'
import LocationIcon from '../../icons/Location'

import {
    PHONE1,
    PHONE2,
    MAIL,
    INSTAGRAM,
    ADDRESS_KRASNODAR,
    ADDRESS_MOSCOW,
    PHONE1_LINK,
    PHONE2_LINK,
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
                    <div className="container py-5">
                        <div className="row">
                            <div className="col mt-4 mt-lg-0 mb-3 h5 font-weight-bold">
                                <h1>КОНТАКТЫ</h1>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col custom-contacts-details font-weight-bold ">
                                <PhoneIcon color="#ffffff" />{' '}
                                <a
                                    className="custom-white-text"
                                    href={PHONE1_LINK}
                                >
                                    {PHONE1}
                                </a>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col custom-contacts-details font-weight-bold ">
                                <PhoneIcon color="#ffffff" />{' '}
                                <a
                                    className="custom-white-text"
                                    href={PHONE2_LINK}
                                >
                                    {PHONE2}
                                </a>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col custom-contacts-details font-weight-bold ">
                                <EnvelopIcon color="#ffffff" /> {MAIL}
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col custom-contacts-details font-weight-bold ">
                                <div className="container-fluid m-0 p-0">
                                    <div className="row">
                                        <div className="col my-2">
                                            <LocationIcon />{' '}
                                            <span
                                                onClick={() =>
                                                    handleSwitchAddress('msk')
                                                }
                                            >
                                                {ADDRESS_MOSCOW}
                                            </span>{' '}
                                            <button
                                                onClick={() =>
                                                    handleSwitchAddress('msk')
                                                }
                                                type="button"
                                                className="btn btn-outline-primary"
                                            >
                                                <SearchIcon color="white" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row ml-4">
                                        <div className="col">
                                            <p>Как добраться?</p>

                                            <p>
                                                На метро:
                                                <br />
                                                <ul>
                                                    <li>
                                                        м. ВДНХ —> пешком 15
                                                        минут / на 533 автобусe
                                                        / на электробусе от
                                                        главного входа
                                                    </li>
                                                    <li>
                                                        м. Ботанический сад —>
                                                        пешком 15 минут / на 533
                                                        автобусe
                                                    </li>
                                                </ul>
                                            </p>

                                            <p>
                                                На такси:
                                                <br />
                                                <ul>
                                                    <li>
                                                        Бесплатный заезд на
                                                        территорию ВДНХ на
                                                        машинах Яндекс Такси с
                                                        желтыми номерами,
                                                        остановка «Липовая
                                                        аллея»
                                                    </li>
                                                </ul>
                                            </p>

                                            <p>
                                                На автомобиле:
                                                <br />
                                                <ul>
                                                    <li>
                                                        Бесплатная парковка,
                                                        ориентир «ул.
                                                        Сельскохозяйственная,
                                                        17к7» —> пешком 3 минуты
                                                        через территорию РГСУ{' '}
                                                        <a href="https://yandex.ru/maps/-/CCUQuPAotD">
                                                            https://yandex.ru/maps/-/CCUQuPAotD
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Платная парковка на
                                                        территории ВДНХ: пн-пт ‐
                                                        700 рублей, сб‐воскр -
                                                        1100 рублей.{' '}
                                                        <a href="https://yandex.ru/maps/-/CCUQuPE9WC">
                                                            https://yandex.ru/maps/-/CCUQuPE9WC
                                                        </a>
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col custom-contacts-details font-weight-bold ">
                                <LocationIcon />{' '}
                                <span
                                    onClick={() => handleSwitchAddress('krd')}
                                >
                                    {ADDRESS_KRASNODAR}
                                </span>
                                <button
                                    onClick={() => handleSwitchAddress('krd')}
                                    type="button"
                                    className="btn btn-outline-primary"
                                >
                                    <SearchIcon color="white" />
                                </button>
                            </div>
                        </div>
                        <div className="row my-3">
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
