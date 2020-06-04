import { addDecorator } from '@storybook/react'
import { addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import React from 'react'
import AppStyles from '../src/styles/global.styles'
import '../src/styles/index.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function withGlobalStyles(storyFn) {
  return (
    <>
      <AppStyles>{storyFn()}</AppStyles>
    </>
  )
}

addDecorator(withGlobalStyles)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
})
