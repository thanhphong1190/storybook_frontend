import styled from 'styled-components'
import tw from 'twin.macro'

export const LocationMapContainer = styled.div`
  ${tw`relative w-full overflow-hidden hidden md:block`}
  height: 33rem;

  & .mapboxgl-marker svg {
    ${tw`text-orange h-6 w-6`}
  }
`

export const MapPopupWrapper = styled.div`
  ${tw`text-blue font-bold pr-3`}

  & > a:after {
    ${tw`bg-orange absolute top-0 right-0 w-1/5 h-full text-white text-center text-lg pt-3`}
    content: ' \\276D';
  }
`

export const MapContainerStyled = {
  width: '100%',
  height: '100%',
  overflow: 'hidden'
}

