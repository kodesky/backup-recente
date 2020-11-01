import React, { useState, useEffect } from 'react'
import { Camera as ExpoCamera } from 'expo-camera'
import { BarCodeScanner } from 'expo-barcode-scanner'
import Icon from 'react-native-vector-icons/Feather'

import { Container, Cam, Tab, Button, BigButton } from '../styles/pages/Camera'
import CameraProfile from '../components/CameraProfile'

const Camera = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(true)
  const [flash, setFlash] = useState(false)

  const [profileModal, setProfileModal] = useState(false)

  useEffect(() => {
    ;(async () => {
      const { status } = await ExpoCamera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if (!hasPermission) {
    return <Container />
  }

  return (
    <Container>
      <Cam
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr]
        }}
        onBarCodeScanned={({ data }) => {
          if (!profileModal) {
            if (data.includes('http://qrculture.com.br/qr/')) {
              setProfileModal(true)
            }
          }
        }}
        type={
          type
            ? ExpoCamera.Constants.Type.back
            : ExpoCamera.Constants.Type.front
        }
        flashMode={
          flash
            ? ExpoCamera.Constants.FlashMode.torch
            : ExpoCamera.Constants.FlashMode.off
        }
      >
        <Tab style={{ paddingTop: 15 }}>
          <Button onPress={() => setFlash(!flash)}>
            <Icon name={flash ? 'zap' : 'zap-off'} size={32} color="#fff" />
          </Button>
          <Button onPress={() => navigation.goBack()}>
            <Icon name="x" size={32} color="#fff" />
          </Button>
        </Tab>
        <Tab>
          <Button>
            <Icon name="image" size={32} color="#fff" />
          </Button>
          <BigButton />
          <Button onPress={() => setType(!type)}>
            <Icon name="repeat" size={32} color="#fff" />
          </Button>
        </Tab>
      </Cam>
      <CameraProfile
        visible={profileModal}
        onClose={() => setProfileModal(false)}
      />
    </Container>
  )
}

export default Camera
