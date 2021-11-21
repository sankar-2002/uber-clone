import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'
import Map from './components/Map'
import Link from 'next/link'




export default function Home() {

  return (
    <div className={styles.container}>
      <Wrapper>
        <Map />
        <ActionItems>

          <Header>
            <UberLogo src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" />

            <Profile>

              <Name> Name </Name>

              <UserImage src='https://png.pngtree.com/svg/20160316/add_user_1132309.png' />

            </Profile>

          </Header>

          <ActionButtons>
            <Link href="/Search">
              <ActionButton>
                <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
                Ride
              </ActionButton>
            </Link>

            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
              Wheels
            </ActionButton>

            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
              Reserve
            </ActionButton>

          </ActionButtons>

          <InputButton>
            Where to?
          </InputButton>


        </ActionItems>
      </Wrapper>

    </div>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
flex justify-between
`

const UberLogo = tw.img`
  h-28
`

const Profile = tw.div`
flex items-center
`
const Name = tw.div`
mr-4 w-20 text-sm
`
const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px

`

const ActionButtons = tw.div`
flex
`

const ActionButton = tw.div`
bg-gray-200 flex-1 m-1 h-32 flex items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImage = tw.img`
h-3/5
`
const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`
