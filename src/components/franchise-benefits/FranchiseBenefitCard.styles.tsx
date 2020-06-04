import styled from 'styled-components'
import tw from 'twin.macro'
import { ButtonLink } from '../base'
export const CardContainer = styled.div`
  ${tw`w-full flex flex-col items-stretch p-0 py-8 lg:p-8`}
`

export const ImgWrapper = styled.div`
  ${tw`w-full mb-2`}
`

export const Img = styled.img`
  ${tw`w-full`}
`

export const NameWrapper = styled.div`
  ${tw`w-full px-2 lg:px-0`}
`

export const DetailWrapper = styled.div`
  ${tw`w-full flex flex-wrap px-2 lg:px-0`}
`
export const Detail = styled.div`
  ${tw`w-full lg:w-1/2 py-2 lg:py-4`}
`

export const ButtonWrapper = styled.div`
  ${tw`w-full lg:w-1/2 text-right content-center flex justify-center content-center items-start px-4 py-2 lg:py-4`}
`

export const Button = styled(ButtonLink)`
  ${tw`py-4 px-8 text-center`}
`
