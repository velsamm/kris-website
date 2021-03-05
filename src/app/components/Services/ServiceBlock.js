import React from 'react'
import * as PropTypes from 'prop-types'

const ServiceBlock = (props) => {
    const { imgSrc, textContent } = props

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col text-center">
                    <img src={imgSrc} alt="Picture" width="100%" />
                </div>
            </div>
            <div className="row py-3">
                <label className="col text-center font-weight-bold">
                    {textContent}
                </label>
            </div>
            <div className="row">
                <div className="col text-center">
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
