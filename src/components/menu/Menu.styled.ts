import styled from 'styled-components'
import tw from 'twin.macro'

export const MenuWrapper = styled.nav`
  ${tw`relative bg-grey__light w-full flex justify-center flex-col lg:flex-row`}
`

export const MenuItem = styled.a`
  ${tw`md:py-2 md:px-8 text-center text-blue italic uppercase font-display cursor-pointer
  hover:bg-blue__grey active:bg-blue__grey hover:text-white active:text-white
  last:bg-orange last:text-white`}
`

// TODO: This container is for demo on storybook and Will be changed when use on a page
export const AdditionalMenuStyled = styled.div`
  ${tw`relative w-full overflow-hidden`}
  top: 0;
  height: 56px;

  @media(min-width: 1024px){
    width: 65rem;
  }
`
