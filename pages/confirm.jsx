import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import {useRouter} from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/dist/client/link'

const confirm = () => {

    const router = useRouter();
    const {pickup, dropoff} = router.query

    const [pickupCoordinates, setpickupCoordinates] = useState()
    const [dropoffCoordinates, setdropoffCoordinates] = useState()


    const getPickupCoordinates = (pickup) => {
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

    const getDropoffCoordinates = (dropoff) => {

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
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])

    return (
        <Wrapper>


            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />

            <RideContainer>
            
                <RideSelector/>

                <ConfirmButtonContainer>
                    <ConfirmButton>Confirm UberX</ConfirmButton>      
                </ConfirmButtonContainer>

            </RideContainer>

        </Wrapper>
    )
}

export default confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`

`

