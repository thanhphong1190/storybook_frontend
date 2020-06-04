import tw from 'twin.macro'
import styled from 'styled-components'

export const Section = styled.section`
  ${tw`w-full relative`}
`

export const Container = styled.div`
  ${tw`container mx-auto h-auto`}
`

export const ImageWrapper = styled.div`
  ${tw`absolute bottom-0 left-0 hidden lg:block lg:w-1/4`}
`

export const Img = styled.img`
  ${tw`w-full`}
`

export const TitleWrapper = styled.div`
  ${tw`w-full flex flex-col justify-center items-center`}
`

export const Title = styled.span`
  ${tw`text-blue__dark font-bold uppercase text-4xl`}
`
export const ContentWrapper = styled.div`
${tw`grid grid-cols-4 pt-5 pb-6`}
  &::before {
    ${tw`col-span-1 hidden lg:block`}
    content: " ";
  }
`

export const ContentTextWrapper = styled.div`
  ${tw`col-span-4 lg:col-span-3 grid grid-cols-1 lg:grid-cols-2`}
`
export const ContentTextLeft = styled.p`
  ${tw`px-4 text-orange font-bold text-2xl leading-loose text-center sm:text-left col-span-1 pl-5`}
`

export const ContentTextRight = styled.p`
  ${tw`px-4 text-center sm:text-left col-span-1`}
`

export const ContentLogo = styled.div`
  ${tw`flex flex-row items-center py-4 col-span-1 lg:col-span-2 grid grid-cols-2 sm:grid-cols-4`}
`

export const LogoImage = styled.div`
  ${tw`py-1 px-10 col-span-1`}
`
