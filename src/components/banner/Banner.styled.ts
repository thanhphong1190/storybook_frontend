import styled from 'styled-components'
import tw from 'twin.macro'

export const BannerSection = styled.section`
  ${tw`w-full`}
`

export const Container = styled.div`
  ${tw`flex container mx-auto relative flex-row uppercase`}
`

export const AdImage = styled.img`
  ${tw`w-full h-auto cursor-pointer`}
`

export const ContentWrapper = styled.div`
  ${tw`hidden absolute top-0 left-0 w-full h-full flex-col items-center justify-center p-4 transition-colors duration-300`}
`

export const DesktopView = styled.div`
  ${tw`w-full hidden lg:flex`}
  & {
    &:hover {
      > div {
        ${tw`flex`}
      }
    }
  }
`

export const MobileView = styled.div`
  ${tw`lg:hidden bg-cover bg-center`}
`

export const MobileContainer = styled.div`
  ${tw`flex lg:hidden flex-col px-4 py-24 justify-center items-center content-center text-center`}
`

export const Title = styled.span`
  ${tw`text-white text-4xl font-bold`}
`

export const Content = styled.span`
  ${tw`text-white text-5xl font-bold lg:mb-4 leading-10 lg:leading-none mt-2 lg:mt-0`}
`

export const ButtonWrapper = styled.div`
  ${tw`mt-12`}
`

export default BannerSection
