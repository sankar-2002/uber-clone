import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'

const confirm = () => {

    const [pickupCoordinates, setpickupCoordinates] = useState()
    const [dropoffCoordinates, setdropoffCoordinates] = useState()


    const getPickupCoordinates = () => {
        const pickup = "Santa Monica";

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic2Fua2FyLTEyMyIsImEiOiJja3c5NnFsdGYyNXY5MnVtcDk4NTJ1cjFqIn0.NmEy9lh8s5tWkC-hZjcM6g",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setpickupCoordinates(data.features[0].center);
            })
    }

    const getDropoffCoordinates = () => {

        const dropoff = "Los Angeles";

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic2Fua2FyLTEyMyIsImEiOiJja3c5NnFsdGYyNXY5MnVtcDk4NTJ1cjFqIn0.NmEy9lh8s5tWkC-hZjcM6g",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setdropoffCoordinates(data.features[0].center);
            })


    }

    useEffect(() => {
        getPickupCoordinates();
        getDropoffCoordinates();
    }, [])

    return (
        <Wrapper>
            
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />

            <RideContainer>
                Ride Selector
                Confirm Button
                {pickupCoordinates}
                {dropoffCoordinates}

            </RideContainer>

        </Wrapper>
    )
}

export default confirm

const Wrapper = tw.div`
flex h-screen flex-col
`

const RideContainer = tw.div`
flex-1 
`
