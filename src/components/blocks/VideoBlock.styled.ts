import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import ReactPlayer from 'react-player'

export const VideoWrapper = styled.div<{ thumbURL?: string }>`
  ${tw`relative w-full lg:flex`}

  & > img {
    width: 100%;
  }

  @media (min-width: 1026px) {
    ${tw`bg-blue`}
    ${props => props.thumbURL && css`background:url(${props.thumbURL}) center/cover no-repeat;`}
  }
`

export const PlayerWrapper = styled.div<{ thumbURL?: string }>`
  ${tw`bg-blue flex flex-col mb-1 justify-center items-center lg:w-1/2 lg:mb-0 lg:border lg:border-white `}
  min-height: 20rem;

  ${props => props.thumbURL && css`background:url(${props.thumbURL}) center/cover no-repeat;`}
`

export const VideoTitle = styled.h2`
  ${tw`text-white font-bold text-center text-2xl mb-4`}
`

export const VideoDescription = styled.p`
  ${tw`text-white font-medium text-center text-base uppercase max-w-sm`}
`

export const PlayButtonWrap = styled.a`
  ${tw`m-4 text-center relative`}
`

export const ReactPlayerStyled = styled(ReactPlayer)`
  ${tw`absolute lg:top-0 z-10`}

  @media (max-width: 1024px) {
    width: 100% !important;
    height: 50% !important;
  }
`

export const VideoThumb = styled.img`
  ${tw`hidden lg:block`}
`
