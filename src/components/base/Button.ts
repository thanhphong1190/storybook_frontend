import styled from 'styled-components'
import tw from 'twin.macro'

export const Button = styled.button`
  // base
  ${tw`px-4 py-4 lg:py-2 transition-colors duration-300 uppercase italic`}
  
  // primary
  ${props =>
    (!!!props.color || props.color == 'orange') &&
    tw`bg-orange hover:bg-orange__dark text-white`}
  
  // secondary
  ${props =>
    props.color == 'blue' && tw`bg-blue hover:bg-blue__dark text-white`}
  
  // white
  ${props =>
    props.color == 'white' && tw`bg-white hover:bg-grey__light text-blue`}
`

export const ButtonLink = styled.a`
  // base
  ${tw`px-4 py-4 lg:py-2 transition-colors duration-300 uppercase italic`}
  
  // primary
  ${props =>
    (!!!props.color || props.color == 'orange') &&
    tw`bg-orange hover:bg-orange__dark text-white`}
  
  // secondary
  ${props =>
    props.color == 'blue' && tw`bg-blue hover:bg-blue__dark text-white`}
  
  // white
  ${props =>
    props.color == 'white' && tw`bg-white hover:bg-grey__light text-blue`}
`

export default Button
