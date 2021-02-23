import React from 'react'

import ServiceBlock from './ServiceBlock'
import ServicesDisclaimer from './Disclaimer'
import ServicesTables from './ServicesTables'

const servicesList = [
    {
        imgSrc: '',
        textContent: 'Блокчейн и цифровые финансовые активы',
    },
    {
        imgSrc: '',
        textContent: 'Ограничение доступа к веб-сайтам',
    },
    {
        imgSrc: '',
        textContent: 'Комплексное сопровождение IT-проектов',
    },
    {
        imgSrc: '',
        textContent: 'Услуги по делам о защите прав потребителей',
    },
    {
        imgSrc: '',
        textContent: 'Судебные споры',
    },
    {
        imgSrc: '',
        textContent: 'Корпоративное сопровождение',
    },
    {
        imgSrc: '',
        textContent:
            'Регистрация \\ ликвидация юридических лиц и индивидуальных предпринимателей',
    },
    {
        imgSrc: '',
        textContent:
            'Юридическое сопровождение сделок купли-продажи объектов недвижимости',
    },
]

const ServicesBlocksComponent = () => (
    <div className="container-fluid custom-padding" id="services-nav">
        <div className="row pt-5">
            <div className="col d-flex justify-content-center align-items-center">
                <label className="text-center custom-services-header-label">
                    Услуги
                </label>
            </div>
        </div>
        <div className="row">
            {servicesList.map((service) => (
                <div key={service.textContent} className="col-sm-4">
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
