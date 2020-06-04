import tw from 'twin.macro'
import styled from 'styled-components'

export const Section = styled.section`
  ${tw`w-full`}
`

export const Container = styled.div`
  ${tw`container mx-auto`}
`

export const TitleWrapper = styled.div`
  ${tw`w-full flex flex-col justify-center content-center text-center items-center`}
`

export const Title = styled.span`
  ${tw`text-blue__dark font-bold uppercase text-4xl`}
`

export const BlocksGroup = styled.div`
  ${tw`w-full flex flex-col text-center mt-8 transform -skew-y-3`}
`

export const Blocks = styled.div<{ mobileHide?: boolean }>`
  ${tw`w-full flex flex-wrap text-center`}
  ${({ mobileHide }) => (mobileHide ? tw`hidden lg:flex` : tw`flex`)};
`
export const CenteredButton = styled.div`
  ${tw`w-full text-center my-16`}
`
export default Section
