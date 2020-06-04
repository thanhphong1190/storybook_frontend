import styled from 'styled-components'
import tw from 'twin.macro'

export const Section = styled.section`
  ${tw`w-full bg-blue__dark`}
`

export const Container = styled.div`
  ${tw`container mx-auto py-24 flex flex-col justify-center text-center`}
`
export const Img = styled.img`
  width: auto;
  max-width: 150px;
`

export const TitleWrapper = styled.div`
  ${tw`w-full text-center flex flex-col justify-center items-center`}
`

export const TextWrapper = styled.div`
  ${tw`w-full text-center mx-2 mt-8`}
`

export const BenefitsContainer = styled.div`
  ${tw`w-full block overflow-x-auto mt-4`}
`

export const BenefitsWrapper = styled.div`
  ${tw`flex flex-wrap items-center content-center justify-center md:px-24 lg:px-4`}
`
export const Benefit = styled.div`
  max-width: 150px;
  ${tw`text-center flex flex-col items-start px-4 self-stretch mt-8`};
`

export const ImgWrapper = styled.div`
  ${tw`flex items-start w-full content-center justify-center`}
`

export const BenefitText = styled.span`
  ${tw`uppercase font-bold max-w-full text-white mt-4`}
`
