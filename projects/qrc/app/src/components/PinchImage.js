import React from 'react'
import { Animated } from 'react-native'
import { PinchGestureHandler, State } from 'react-native-gesture-handler'

const PinchImage = ({ size, uri, onZoomIn, onZoomOut }) => {
  const scale = new Animated.Value(1)

  const onZoomEvent = Animated.event(
    [
      {
        nativeEvent: { scale: scale }
      }
    ],
    {
      useNativeDriver: true
    }
  )

  const onZoomStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      onZoomOut()

      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true
      }).start()
    }

    if (event.nativeEvent.oldState === State.UNDETERMINED) {
      onZoomIn()
    }
  }

  return (
    <PinchGestureHandler
      onGestureEvent={onZoomEvent}
      onHandlerStateChange={onZoomStateChange}
    >
      <Animated.Image
        source={{ uri }}
        style={{
          width: parseFloat(size.width),
          height: parseFloat(size.height),
          transform: [{ scale }]
        }}
        resizeMode="contain"
      />
    </PinchGestureHandler>
  )
}

export default PinchImage
