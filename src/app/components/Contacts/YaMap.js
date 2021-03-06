import React from 'react'
import { Map, Placemark, YMaps } from 'react-yandex-maps'

const YaMap = () => {
    return (
        <YMaps>
            <Map
                width="100%"
                defaultState={{
                    center: [45.040932, 38.994],
                    zoom: 16,
                }}
            >
                <Placemark geometry={[45.040932, 38.994]} />
            </Map>
        </YMaps>
    )
}

export default YaMap
