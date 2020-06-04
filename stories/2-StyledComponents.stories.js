import React from 'react'
import styled from 'styled-components'

const StyledExample = styled.a.attrs({
  className:
    'p-5 bg-blue text-white hover:bg-orange transition-background-color duration-300 no-underline hover:no-underline',
})``

export default {
  title: 'Styled Components',
  component: Example,
}

export const Example = () => (
  <StyledExample href='#'>Hello Button</StyledExample>
)
