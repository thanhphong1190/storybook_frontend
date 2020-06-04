import styled from 'styled-components'
import tw from 'twin.macro'

export const ContentBlockText = styled.p<{fontBold?: boolean}>`
  ${tw`mb-8 font-display`}
  ${props => (!!!props.color || props.color == 'orange') && tw`text-orange`}
  ${props => props.color == 'blue' && tw`text-blue`}
  ${props => props.color == 'white' && tw`text-white`}
  ${props => props.color == 'black' && tw`text-black`}
  ${props => props.fontBold && tw`font-bold`}
`
