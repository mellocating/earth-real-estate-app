import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Map from '../components/Map'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    // insert Navbar
    <Box>
      <Navbar />
      <Map />
    </Box>
  )
}
