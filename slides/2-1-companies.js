import React from 'react'
import styled from 'styled-components'
import { Slide, View, TextFit, Image } from 'extravaganza'

const Indispensable = () => (
  <Slide
    background="secondaryBackground"
    textColor="secondary"
  >
    <TextFit>
      Fools! Maps 've become indispensable!
    </TextFit>

    <br />

    <View width="100%" justifyContent="space-between">
      <Image height={500} src="/static/companies/airbnb.jpg" />
      <Image src="/static/companies/citymapper.jpg" height={400} />
      <Image src="/static/companies/uber.jpg" height={400} />
    </View>
  </Slide>
)

export default Indispensable
