import React from 'react'

import sign from '../../assets/images/sign.svg'
import kristina from '../../assets/images/kristina.webp'

const WhoAmIDescription = () => (
    <div className="m-auto py-sm-5 px-sm-2">
        <div>
            <p className="pt-1 custom-whoami-text-p">
                Приветствуем Вас на сайте практикующего юриста с опытом работы в
                крупных строительных компаниях, товарном бизнесе, IT–cекторе,
                блокчейн-проектах.
            </p>
            <p className="pt-1 custom-whoami-text-p">
                Нашими клиентами являются физические лица, а также развивающиеся
                и уже многим известные компании.
                <br />
                Профессионально и в короткие сроки оказываем помощь в вопросах
                договорного и корпоративного права, сопровождении сделок с
                недвижимостью, в снятии ограничения доступа к веб-сайтам, в
                досудебных и судебных спорах, регулятивных аспекта
                краудфандинга, работы блокчейн-систем, смарт-контрактов,
                осуществления криптовалютных платежей, инвестиций в блокчейн и
                криптовалюту, соблюдения процедур KYC и AML.
            </p>
            <p className="pt-1 custom-whoami-text-p">
                Здесь вы не столкнётесь с «юридическим конвейером». Каждый
                вопрос рассматривается и разрешается индивидуально с целью
                успешной реализации от самых рядовых до смелых бизнес-идей.
            </p>
        </div>
        <div className="pt-1">
            <img src={sign} alt="sign" width="100%" />
        </div>
    </div>
)

const WhoAmI = () => (
    <div className="container-fluid bg-light custom-padding" id="whoami-nav">
        <div></div>
        <div className="row py-5">
            <div className="col-sm-12 col-lg-6 bg-white d-flex">
                <WhoAmIDescription />
            </div>
            <div className="col-sm-12 col-lg-6 bg-white">
                <img src={kristina} alt="kristina photo" width="100%" />
            </div>
        </div>
    </div>
)

export default WhoAmI
