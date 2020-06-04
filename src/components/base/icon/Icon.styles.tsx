import tw from 'twin.macro'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
export const StyledSVGIcon = styled(ReactSVG)<{
  clickable?: boolean
}>`
  ${({ clickable }) => clickable && tw`cursor-pointer`}
  & {
    .cls-1 {
      ${tw`fill-current`}
    }
  }
`

export default StyledSVGIcon
