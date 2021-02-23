import React from 'react'

import Logo from '../../icons/Logo'

const Subheader = () => (
    <div className="container-fluid custom-subheader">
        <div className="row">
            <div className="col">
                <Logo width={400} height={200} />
            </div>
            <div className="col mt-5">
                <nav className="navbar navbar-expand-lg ">
                    <button
                        className="navbar-toggler"
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
                            <li className="nav-item mx-4">
                                <a
                                    className="nav-link custom-nav-link"
                                    href="#whoami-nav"
                                >
                                    Обо мне
                                </a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link" href="#services-nav">
                                    Услуги
                                </a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link" href="#">
                                    Отзывы
                                </a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link" href="#">
                                    Клиенты
                                </a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link" href="#contacts-nav">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        <div className="row justify-content-center">
            <div className="col-sm-auto">
                <div className="row">
                    <label className="custom-subheader-name">
                        KRISTINA NOVIKOVA
                    </label>
                </div>
                <div className="row justify-content-center">
                    <label className="text-center custom-subheader-services">
                        профессиональные
                        <br />
                        юридические консультации
                    </label>
                </div>
                <div className="row mt-5 justify-content-center">
                    <button className="btn btn-primary">Контакты</button>
                </div>
            </div>
        </div>
    </div>
)

export default Subheader
