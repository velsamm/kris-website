import React from 'react'

import Logo from '../../icons/Logo'

const Subheader = () => (
    <div className="container-fluid custom-subheader ">
        <div className="row">
            <div className="col">
                <Logo width={200} height={100} />
            </div>
            <div className="col d-flex justify-content-end">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <button
                        id="toggler-button"
                        className="navbar-toggler ml-auto"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a
                                    className="nav-link custom-nav-link text-right text-lg-center"
                                    href="#whoami-nav"
                                >
                                    Обо мне
                                </a>
                            </li>
                            <li className="nav-item ml-lg-3">
                                <a
                                    className="nav-link text-right text-lg-center"
                                    href="#services-nav"
                                >
                                    Услуги
                                </a>
                            </li>
                            <li className="nav-item ml-lg-3">
                                <a
                                    className="nav-link text-right text-lg-center"
                                    href="#"
                                >
                                    Отзывы
                                </a>
                            </li>
                            <li className="nav-item ml-lg-3">
                                <a
                                    className="nav-link text-right text-lg-center"
                                    href="#"
                                >
                                    Клиенты
                                </a>
                            </li>
                            <li className="nav-item ml-lg-3">
                                <a
                                    className="nav-link text-right text-lg-center"
                                    href="#contacts-nav"
                                >
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col text-center">
                <label className="custom-subheader-name">
                    KRISTINA NOVIKOVA
                </label>
            </div>
        </div>
        <div className="row">
            <div className="col text-center">
                <label className=" custom-subheader-services">
                    профессиональные
                    <br />
                    юридические консультации
                </label>
            </div>
        </div>
        <div className="row">
            <div className="col mt-5 text-center">
                <button className="btn btn-primary">Контакты</button>
            </div>
        </div>
    </div>
)

export default Subheader
