import React from 'react'

const servicesWithValue = {
    blockChain: [
        {
            service: 'Комплексное сопровождение ICO/ITO',
            value: 'от 200 000 руб.',
        },
        {
            service:
                'Разработка и сопровождение договоров на куплю-продажу  цифровых финансовых активов (криптовалюты и токенов)',
            value: 'от 12 000 руб.',
        },
        {
            service: 'Разработка и аудит трейдинговых соглашений',
            value: 'от 12 000 руб.',
        },
        {
            service:
                'Устная консультация по правовым вопросам ICO и оборота криптовалют (очно либо онлайн)',
            value: 'от 12 000 руб.',
        },
    ],
    websites: [
        {
            service: 'Исключение веб-сайта из реестра запрещенной информации',
            value: 'от 20 000 руб.',
        },
        {
            service:
                'Обжалование решения суда о признании информации незаконной',
            value: 'от 40 000 руб.',
        },
        {
            service:
                'Обжалование определения суда о принятии обеспечительных мер в виде ограничения доступа к веб-сайту',
            value: 'от 20 000 руб.',
        },
        {
            service:
                'Проверка контента всего веб-сайта на предмет соответствия законодательству Российской Федерации',
            value: 'от 30 000 руб.',
        },
        {
            service: 'Восстановление делегирования доменного имени',
            value: '30 000 руб.',
        },
        {
            service:
                'Правовая устная консультация по вопросам ограничения доступа к веб-сайтам',
            value: '5 000 руб.  за каждый час консультации',
        },
        {
            service:
                'Письменная консультация по вопросам ограничения доступа к веб-сайтам',
            value: 'от 5 000 руб.',
        },
    ],
    it: [
        {
            service:
                'Ежемесячное юридическое сопровождение (предоставление сотрудника от нашей команды для коммуникации 24/7, устные/письменные консультации, защита товарного знака, контент-аудит сайта, ответы на запросы  правоохранительных и надзорных органов, разработка/аудит входящих и исходящих документов, разработка политики неразглашения и документов (NDA), разработка Пользовательского соглашения (Termsofservice)',
            value: 'от 100 000 руб.',
        },
    ],
    potreb: [
        {
            service: 'Консультация (устная)',
            value: '1 000 руб.',
        },
        {
            service:
                'Составление претензии продавцу, исполнителю, изготовителю',
            value: 'от 3 000 руб.',
        },
        {
            service:
                'Составление жалобы на продавца, исполнителя, изготовителя в контрольные органы',
            value: 'от 3 000 руб.',
        },
        {
            service:
                'Контроль рассмотрения и принятия решения по обращению потребителей',
            value: 'от 2 000 руб.',
        },
        {
            service:
                'Полное досудебное сопровождение спора с продавцом, исполнителем, изготовителем',
            value: 'от 10 000 руб.',
        },
        {
            service:
                'Ведение дела в суде первой и последующих инстанциях общей юрисдикции  (за каждую инстанцию оплата отдельно)',
            value: 'от 30 000 руб.',
        },
        {
            service:
                'Ведение дела в арбитражном суде первой и последующих инстанциях (за каждую инстанцию оплата отдельно)',
            value: 'от 40 000 руб.',
        },
    ],
    argues: [
        {
            service: 'Представление интересов в Арбитражном суде',
            value: 'от 5 000 руб. за каждое заседание',
        },
        {
            service: 'Защита в суде в рамках трудового права',
            value: 'от 20 000 руб.',
        },
        {
            service: 'Защита в суде в рамках закона о защите прав потребителей',
            value: 'от 15 000 руб.',
        },
        {
            service:
                'Участие в рамках процедуры банкротства компании или кредитора',
            value: 'от 25 000 руб.',
        },
        {
            service: 'Защита в суде в спорах с налоговым органом',
            value: 'от 25 000 руб.',
        },
        {
            service: 'Помощь во взыскании ущерба',
            value: 'от 5 000 руб.',
        },
    ],
}

const servicesNames = [
    { key: 'blockChain', value: 'Блокчейн и цифровые финансовые активы' },
    { key: 'websites', value: 'Ограничение доступа к веб-сайтам' },
    { key: 'it', value: 'Комплексное сопровождение  IT-проектов' },
    { key: 'potreb', value: 'Услуги по делам о защите прав потребителей' },
    { key: 'argues', value: 'Судебные споры' },
    { key: 'corp', value: 'Корпоративное сопровождение' },
    {
        key: 'reg',
        value:
            'Регистрация / Ликвидация юридических лиц и индивидуальных предпринимателей',
    },
    {
        key: 'buy-sell',
        value:
            'Юридическое сопровождение сделок купли-продажи объектов недвижимости',
    },
]

const ServiceTable = (props) => {
    const { services } = props

    return (
        <table className="table table-bordered">
            <tbody>
                {services.map((s) => (
                    <tr id={s.service} className="custom-table-tr">
                        <td className="custom-table-td-75">{s.service}</td>
                        <td className="custom-table-td-25">{s.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

const ServicesTables = () => (
    <div className="container-fluid custom-padding">
        {servicesNames.map((sn) => (
            <div key={sn.key} className="row justify-content-center my-5">
                <div className="col text-center mb-3">
                    <label className="custom-service-header-label">
                        {sn.value}
                    </label>
                </div>
                <div className="w-100" />
                <div className="col text-center mb-3">
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        data-toggle="collapse"
                        data-target={`#collapse${sn.key}`}
                        aria-expanded="false"
                        aria-controls={`collapse${sn.key}`}
                    >
                        Подробнее
                    </button>
                </div>
                {servicesWithValue[sn.key] && (
                    <>
                        <div className="w-100" />
                        <div className="col">
                            <div className="collapse" id={`collapse${sn.key}`}>
                                <ServiceTable
                                    services={servicesWithValue[sn.key]}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        ))}
    </div>
)

export default ServicesTables
