import React from 'react'
import * as PropTypes from 'prop-types'

const ServiceBlock = (props) => {
    const { imgSrc, textContent } = props

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <img src={imgSrc} alt="Picture" />
                </div>
            </div>
            <div className="row py-3">
                <div className="col d-flex justify-content-center align-items-center">
                    <label className="text-center">{textContent}</label>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <button className="btn btn-outline-primary">
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    )
}

ServiceBlock.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
}

export default ServiceBlock
