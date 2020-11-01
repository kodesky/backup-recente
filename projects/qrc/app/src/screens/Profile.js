import React from 'react'

import { Container } from '../styles/pages/Profile'
import ProfileHeader from '../components/ProfileHeader'
import Masonry from '../components/Masonry'

const Profile = () => {
  return (
    <Container>
      <ProfileHeader />
      <Masonry />
    </Container>
  )
}

export default Profile
