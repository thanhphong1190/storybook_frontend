import styled from 'styled-components'
import tw from 'twin.macro'
import { Button } from '../base'

export const Container = styled.div`
  ${tw`container mx-auto flex flex-wrap justify-center xl:justify-between items-center p-2 flex-col lg:flex-row`}
`

export const CTAGroup = styled.div`
  ${tw`order-1 xl:order-none flex flex-wrap items-center justify-center text-sm`}
`
export const ActionTitle = styled.span`
  ${tw`uppercase text-white font-bold mr-1 md:mr-3 text-grey__medium xl:text-white text-xs lg:text-base`}
`
export const SearchGroup = styled.div`
  ${tw`flex flex-row items-stretch w-full md:w-auto`}
  button {
    ${tw`ml-3 flex`}
  }
  input {
    min-width: 0;
    ${tw`bg-blue__grey flex-1 px-1 lg:px-2 lg:w-1/3 xl:w-64 xl:text-white xl:placeholder-white`}
  }
`

export const HeaderTitle = styled.div`
  ${tw`order-none md:order-none flex flex-row items-center`}
`

export const TitleText = styled.span`
  ${tw`font-bold text-sm lg:text-2xl uppercase`}
  ${({ color }) => (color == 'orange' ? tw`text-orange` : tw`text-white`)}
  & {
    &:last-child {
      ${tw`ml-1`}
    }
  }
`

export const HeaderSection = styled.section`
  ${tw`w-full bg-blue__grey`}
`

export const SearchButton = styled(Button)`
  ${tw`py-2`}
`

export default HeaderSection
