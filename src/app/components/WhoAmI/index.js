import React from 'react'

import sign from '../../assets/images/sign.svg'
import kristina from '../../assets/images/kristina.jpg'

const WhoAmIDescription = () => (
    <div className="m-auto py-sm-5 px-sm-2">
        <div>
            <label className="h4">
                Приветствую Вас на моем сайте,
                <br />
                меня зовут Кристина!
            </label>
        </div>
        <div>
            <hr />
        </div>
        <div>
            <p className="pt-1 custom-whoami-text-p">
                Я являюсь практикующим юристом с опытом работы в крупных
                строительных компаниях , товарном бизнесе, IT –cекторе ,
                блокчейн-проектах , в что позволило мне приобрести весомый багаж
                знаний и практических навыков для успешной реализации Ваших
                самых смелых бизнес-идей.
            </p>
            <p className="pt-1 custom-whoami-text-p">
                Мои клиенты - физические и юридические лица.
                <br />
                Оказываю помощь в вопросах договорного и корпоративного права, в
                снятии ограничения доступа к веб-сайтам, в досудебных и судебных
                спорах, консультирую в сфере цифровых финансовых активов и
                блокчейн-технологиях в правовом поле.
            </p>
            <p className="pt-1 custom-whoami-text-p">
                У меня вы не столкнётесь с «юридическим конвейером». Каждый
                вопрос рассматривается и разрешается индивидуально и
                исключительно с целью достичь позитивного результата для
                клиента.
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
