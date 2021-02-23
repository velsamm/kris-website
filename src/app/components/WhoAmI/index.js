import React from 'react'

const WhoAmIDescription = () => (
    <div>
        <div>
            <label>Приветствую Вас на моем сайте, меня зовут Кристина!</label>
        </div>
        <div>
            <hr />
        </div>
        <div>
            <p>блок 1</p>
            <p>блок 2</p>
            <p>блок 3</p>
        </div>
        <div>signature</div>
    </div>
)

const WhoAmI = () => (
    <div className="container-fluid bg-light custom-padding" id="whoami-nav">
        <div></div>
        <div className="row py-5">
            <div className="col bg-white">
                <WhoAmIDescription />
            </div>
            <div className="col bg-white">photo</div>
        </div>
    </div>
)

export default WhoAmI
