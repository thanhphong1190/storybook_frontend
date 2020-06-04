import styled from 'styled-components'
import tw from 'twin.macro'

export const LocationTabWrapper = styled.div`
  ${tw`relative w-full flex bg-blue justify-center`}
`

export const LocationTabItem = styled.a`
  ${tw`text-white p-2 md:p-1 text-center uppercase font-display hover:bg-orange active:bg-orange cursor-pointer`}
  min-width: 4rem;

  @media(max-width: 640px){
    min-width: 2rem;
  }
`
