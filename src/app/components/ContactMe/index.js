import React, { useState } from 'react'

const ContactMe = () => {
    const [message, setMessage] = useState({})

    const handleSubmit = () => {
        const xmlHttpBuilder = new XMLHttpRequest()
        xmlHttpBuilder.open('post', '/send')
        xmlHttpBuilder.setRequestHeader('Content-Type', 'application/json')
        const payload = JSON.stringify({ ...message, source: 'kn-website' })
        xmlHttpBuilder.send(payload)
        xmlHttpBuilder.onload = function () {
            if (xmlHttpBuilder.status !== 200) {
                // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                // alert(
                //     `Ошибка ${xmlHttpBuilder.status}: ${xmlHttpBuilder.statusText}`
                // )
                // Например, 404: Not Found
                alert('Ошибка при отправке заявки')
            } else {
                // если всё прошло гладко, выводим результат
                // alert(`Готово, получили ${xmlHttpBuilder.response.length} байт`); // response -- это ответ сервера
                alert('Заявка принята успешно')
            }
        }
    }

    return (
        <div className="container-fluid custom-contact-me d-flex flex-column justify-content-center ">
            <div className="row justify-content-center">
                <div className="col text-center">
                    <label className="custom-contact-me-label">
                        НАПИШИТЕ МНЕ
                    </label>
                    <br />
                    <label className="custom-white-text">
                        И я проконсультирую Вас по нужному вопросу
                    </label>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-sm-11 col-md-6 col-lg-4">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleSubmit()
                        }}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="formValueName"
                                placeholder="Ваше имя"
                                onChange={(event) => {
                                    setMessage({
                                        ...message,
                                        name: event.target.value,
                                    })
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="formValuePhone"
                                placeholder="Ваш телефон"
                                onChange={(event) => {
                                    setMessage({
                                        ...message,
                                        phone: event.target.value,
                                    })
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                name="formValueEmail"
                                placeholder="Ваш email"
                                onChange={(event) => {
                                    setMessage({
                                        ...message,
                                        email: event.target.value,
                                    })
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                name="formValueMessage"
                                placeholder="Ваше сообщение"
                                rows="3"
                                onChange={(event) => {
                                    setMessage({
                                        ...message,
                                        issue: event.target.value,
                                    })
                                }}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-100 btn btn-primary"
                            >
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
