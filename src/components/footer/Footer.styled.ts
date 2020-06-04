import styled from 'styled-components'
import tw from 'twin.macro'
import { SVGIcon } from '../base'

export const FooterStyled = styled.section`
  ${tw`w-full bg-grey`}
`

export const Container = styled.div`
  ${tw`container mx-auto px-4 py-4  flex flex-col lg:flex-row flex-wrap justify-start lg:justify-between lg:items-center text-white`}
`

export const Logo = styled.img`
  ${tw`self-start order-2 lg:order-none mt-4 lg:mt-0`}
  height: 120px;
  width: auto;
`

export const InforGroup = styled.div`
  ${tw`order-3 lg:order-none flex flex-col text-sm mt-4 lg:mt-0`}
`

export const LinkGroup = styled.div`
  ${tw`mt-4 lg:mt-0`}
`
export const SocialGroup = styled.div`
  ${tw`order-1 lg:order-none mt-4 lg:mt-0`}
`

export const SocialLabel = styled.span`
  ${tw`text-xl font-bold`}
`

export const SocialIcons = styled.div`
  ${tw`mt-2 flex flex-row items-center text-2xl`}
  & {
    a {
      ${tw`mr-2`}
    }
  }
`

export const Icon = styled(SVGIcon)`
  ${tw`hover:text-orange text-white`}
`
export default FooterStyled
