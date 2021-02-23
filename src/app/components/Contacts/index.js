import React from 'react'
import PhoneIcon from '../../icons/PhoneIcon'
import EnvelopIcon from '../../icons/Envelope'
import Instagram from '../../icons/Instagram'

const Contacts = () => (
    <div
        className="container-fluid custom-contacts custom-padding"
        id="contacts-nav"
    >
        <div className="row">
            <div className="col d-flex flex-column justify-content-center ">
                <div>
                    <label>КОНТАКТЫ</label>
                </div>
                <div>
                    <Instagram />
                    <PhoneIcon /> +7 909 123 45 67
                    <EnvelopIcon /> mail@mail.com
                </div>
            </div>
            <div className="col">picture</div>
        </div>
    </div>
)

export default Contacts
