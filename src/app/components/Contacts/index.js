import React, { lazy } from 'react'

import EnvelopIcon from '../../icons/Envelope'
import Instagram from '../../icons/Instagram'
import LocationIcon from '../../icons/Location'

import {
    MAIL,
    INSTAGRAM,
    ADDRESS_MOSCOW,
} from '../../constants'

const YaMap = lazy(() => import('./YaMap'))

const Contacts = () => {
    const address = [55.835483, 37.633293]

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
                                <EnvelopIcon color="#ffffff" /> {MAIL}
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col custom-contacts-details font-weight-bold ">
                                <div className="container-fluid m-0 p-0">
                                    <div className="row">
                                        <div className="col my-2">
                                            <LocationIcon />{' '}
                                            <span>
                                                {ADDRESS_MOSCOW}
                                            </span>{' '}
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
                    <YaMap address={address} />
                </div>
            </div>
        </div>
    )
}

export default Contacts
