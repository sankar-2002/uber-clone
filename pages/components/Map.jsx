import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fua2FyLTEyMyIsImEiOiJja3c5NnFsdGYyNXY5MnVtcDk4NTJ1cjFqIn0.NmEy9lh8s5tWkC-hZjcM6g';

function Map() {

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [-99.29011, 39.39172],
            zoom: 3,
        });
    });



    return (
        <Wrapper id='map'>

        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1
`
