import React from 'react'
import styled from 'styled-components'
import { Slide, View, Image, Text, TextFit } from 'extravaganza'

const Dash = styled.div`
  width: 100%;
  height: 6px;
  margin: 30px 10px;

  background-image: url('/static/dot-pattern.png');
  background-size: 16px 6px;
  background-repeat: repeat-x;
`

const Title = () => (
  <Slide
    background="secondaryBackground"
    textColor="secondary"
    alignItems="flex-start"
  >
    <Dash />

    <View
      width="100%"
      flexDirection="row"
      alignItems="center"
    >
      <View width="50%">
        <TextFit>
          Ahoy!
        </TextFit>
      </View>

      <View width="50%">
        <Text textSize={2}>
          Today we be gonna talk about maps.
        </Text>
      </View>
    </View>

    <Dash />

    <Text margin={10}>
      <Image src="/static/parrotdad.gif" height="0.8em" margin="0 0.5em 0 0" />
      Alex Rieux, Trainline
    </Text>
  </Slide>
)

export default Title
