import React from 'react'

import ServiceBlock from './ServiceBlock'
import ServicesDisclaimer from './Disclaimer'
import ServicesTables from './ServicesTables'

import blockchainImg from '../../assets/images/blockchain-img.png'
import webImg from '../../assets/images/web-img.png'
import jurItImg from '../../assets/images/jur-it-img.png'
import potrebImg from '../../assets/images/potrebImg.png'
import columnsImg from '../../assets/images/columnsImg.png'
import corpImg from '../../assets/images/corpImg.png'
import regTermIPImg from '../../assets/images/reg-term-ip-img.png'
import buySellImg from '../../assets/images/buy-sell-img.png'

const servicesList = [
    {
        imgSrc: blockchainImg,
        textContent: 'Блокчейн и цифровые финансовые активы',
    },
    {
        imgSrc: webImg,
        textContent: 'Ограничение доступа к веб-сайтам',
    },
    {
        imgSrc: jurItImg,
        textContent: 'Комплексное сопровождение IT-проектов',
    },
    {
        imgSrc: potrebImg,
        textContent: 'Услуги по делам о защите прав потребителей',
    },
    {
        imgSrc: columnsImg,
        textContent: 'Судебные споры',
    },
    {
        imgSrc: corpImg,
        textContent: 'Корпоративное сопровождение',
    },
    {
        imgSrc: regTermIPImg,
        textContent:
            'Регистрация \\ ликвидация юридических лиц и индивидуальных предпринимателей',
    },
    {
        imgSrc: buySellImg,
        textContent:
            'Юридическое сопровождение сделок купли-продажи объектов недвижимости',
    },
]

const ServicesBlocksComponent = () => (
    <div className="container-fluid custom-padding" id="services-nav">
        <div className="row pt-5">
            <div className="col d-flex justify-content-center align-items-center">
                <label className="text-center font-weight-bold h3">
                    УСЛУГИ
                </label>
            </div>
        </div>
        <div className="row">
            {servicesList.map((service) => (
                <div key={service.textContent} className="col-sm-4 mx-auto">
                    <ServiceBlock {...service} />
                </div>
            ))}
        </div>
    </div>
)

const Services = () => (
    <React.Fragment>
        <ServicesBlocksComponent />
        <ServicesDisclaimer />
        <ServicesTables />
    </React.Fragment>
)

export default Services
