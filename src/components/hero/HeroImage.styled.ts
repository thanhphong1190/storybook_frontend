import styled from 'styled-components'
import tw from 'twin.macro'

export const HeroWrapper = styled.div`
  ${tw`relative flex mb-4 items-stretch`}
`

export const HeroInner = styled.div`
  ${tw`relative w-full font-display flex-none sm:flex-1 md:flex-auto lg:flex-initial xl:flex-1`}

  & > img {
    ${tw`w-full`}
  }
`

export const HeroHeading = styled.h1`
  ${tw`text-white w-48 md:w-auto leading-4 md:leading-5 xl:leading-10 font-bold 
       text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-5xl uppercase mb-2 sm:mb-4`}

`

export const HeroDescription = styled.p`
  ${tw`mb-2 w-48 md:w-auto leading-3 md:leading-5 font-bold sm:mb-8 text-xs md:text-base lg:text-lg xl:text-xl`}
`

export const BannerText = styled.div`
  ${tw`text-white absolute flex flex-col justify-around`}
  top: 25%;
  left: 20%;

  @media(min-width: 1024px){
    top: 35%;
  }

  & > button {
    ${tw`w-1/2 lg:w-2/5 py-2 md:text-base`}
    font-size: 0.5rem;
  }
`
