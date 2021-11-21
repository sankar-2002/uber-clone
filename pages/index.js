import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fua2FyLTEyMyIsImEiOiJja3c5NnFsdGYyNXY5MnVtcDk4NTJ1cjFqIn0.NmEy9lh8s5tWkC-hZjcM6g';


export default function Home() {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });


  return (
    <div className={styles.container}>
      <Wrapper>
        <Map id='map'></Map>
        <ActionItems>Start</ActionItems>
      </Wrapper>



    </div>
  )
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`

const Map = tw.div`
  bg-red-500 flex-1
`

const ActionItems = tw.div`
  flex-1
`
