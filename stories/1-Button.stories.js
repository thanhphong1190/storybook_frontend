import React from 'react'
import { action } from '@storybook/addon-actions'

import styled from 'styled-components'
import tw from 'twin.macro'
import * as G from '../src/styles/global.styles'

// Styles
// these would normally be in a separate file eg. './compenent.styled.js`
const Button = styled.button`
  // base
  ${tw`px-4 py-2 transition-colors duration-300 uppercase italic`}
  
  // primary
  ${(props) => props.primary && tw`bg-orange hover:bg-orange__dark text-white`}
  
  // secondary
  ${(props) => props.secondary && tw`bg-blue hover:bg-blue__dark text-white`}
  
  // white
  ${(props) => props.white && tw`bg-white hover:bg-grey__light text-blue`}
`

// Fake the S import of styles
// this would normally be something like the below:
// import * as S from './compenent.styled.js`
const S = {
  Button,
}

// Button components
const Primary = () => (
  <S.Button primary onClick={action('clicked')}>
    Primary Button
  </S.Button>
)
const Secondary = () => (
  <S.Button secondary onClick={action('clicked')}>
    Secondary Button
  </S.Button>
)
const White = () => (
  <S.Button white onClick={action('clicked')}>
    White Button
  </S.Button>
)

export const Buttons = () => (
  <>
    <h5>Primary Blue button</h5>
    <Primary />
    <G.Space />
    <h5>Secondary Orange button</h5>
    <Secondary />
    <G.Space />
    <h5>White button</h5>
    <White />
  </>
)

// story export
export default {
  title: 'Buttons',
  component: Buttons,
}
