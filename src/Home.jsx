import React from 'react'
import { Container, Typography } from '@mui/material'
import NavBar from './NavBar'
import Layout from './Layout'

const Home = () => {
  return (
    <Container>
        <Typography variant="h3" color="initial">Home</Typography>
        <NavBar/>
        <Layout/>
    </Container>
  )
}

export default Home