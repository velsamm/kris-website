import React from 'react'

const ContactMe = () => (
    <div className="container-fluid custom-contact-me d-flex flex-column justify-content-center ">
        <div className="row justify-content-center">
            <div className="col text-center">
                <label className="custom-contact-me-label">НАПИШИТЕ МНЕ</label>
                <br />
                <label className="custom-white-text">
                    И я проконсультирую Вас по нужному вопросу
                </label>
            </div>
        </div>
        <div className="row justify-content-center mt-4">
            <div className="col-sm-11 col-md-6 col-lg-4">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="formValueName"
                            placeholder="Ваше имя"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="formValuePhone"
                            placeholder="Ваш телефон"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            name="formValueEmail"
                            placeholder="Ваш email"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            name="formValueMessage"
                            placeholder="Ваше сообщение"
                            rows="3"
                        />
                    </div>
                    <div>
                        <button type="submit" className="w-100 btn btn-primary">
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

export default ContactMe
