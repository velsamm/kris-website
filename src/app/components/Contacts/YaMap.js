import React, { useState } from 'react'
import {
    Map,
    Placemark,
    YMaps,
} from 'react-yandex-maps/dist/production/react-yandex-maps.esm'

const YaMap = (props) => {
    const { address } = props

    return (
        <YMaps>
            <Map
                width="100%"
                defaultState={{
                    center: address,
                    zoom: 16,
                }}
                state={{
                    center: address,
                    zoom: 16,
                }}
            >
                <Placemark geometry={[45.040932, 38.994]} />
                <Placemark
                    geometry={[55.835483, 37.633293]}
                    // properties={{ iconContent: 'bla' }}
                />
            </Map>
        </YMaps>
    )
}

export default YaMap
