import styled, { css } from 'styled-components'
import tw from 'twin.macro'

export const KeyMessageWrapper = styled.div`
  ${tw`relative flex mb-4 items-stretch self-center z-10`}
`

export const KeyMessageImage = styled.img`
  ${tw`relative w-full mx-auto hidden md:lg:xl:block`}
  max-width: 1320px;
`

export const KeyMessageInner = styled.div`
  ${tw`md:lg:xl:absolute flex flex-col lg:flex-row w-full justify-around text-white`}
  top: 20%;
`

export const KeyMessageTitle = styled.h2`
  ${tw`text-3xl font-extrabold xl:max-w-sm md:lg:xl:text-4xl mb-1 md:lg:xl:mb-2`}
`

export const KeyMessageLeft = styled.p`
  ${tw`font-bold mb-4 md:lg:xl:mb-10 text-blue`}
`

export const KeyMessageRight = styled.p`
  ${tw`font-bold mb-4 md:lg:xl:mb-10 text-orange`}
`

export const KeyMessageContent = styled.div<{ leftImage?: string, rightImage?: string  }>`
  ${tw`text-center font-display uppercase p-8 md:lg:xl:p-0 md:lg:xl:px-32`}

  @media (max-width: 1112px) {
    ${tw`bg-orange`}
    ${props =>
      props.leftImage &&
      css`background:url(${props.leftImage}) center/cover no-repeat fixed;`}

    &:last-child {
      ${tw`bg-blue`}
      ${props =>
        props.rightImage && 
        css`background:url(${props.rightImage}) center/cover no-repeat fixed;`
    }
  }
`
