import React from 'react'
import Img from '../assets/logo/kn-logo.svg'

const Logo = (props) => (
    <img src={Img} alt="logo" width={props.width} height={props.height} />
)

export default Logo
