import styled from 'styled-components'
import tw from 'twin.macro'

export const Section = styled.section`
  ${tw`w-full`}
`

export const Container = styled.div`
  ${tw`container mx-auto`}
`

export const BlocksWrapper = styled.div`
  ${tw`w-full flex flex-wrap items-stretch justify-center`}
`
export const Block = styled.div<{
  color?: 'blue' | 'white' | 'orange'
  isFull?: boolean
}>`
  ${tw`w-full flex flex-row items-stretch justify-between p-5`}
  ${({ isFull }) => (isFull ? tw`uppercase` : tw`md:w-1/3`)}

  ${({ color }) => {
    switch (color) {
      case 'blue':
        return `&{
                background-color: #01478c;
                background: -webkit-gradient(linear,left top,right top,from(#164cab),to(#0c1e54));
                background: linear-gradient(to right,#164cab,#0c1e54);
                color:#fff;
            }`

      case 'white':
        return tw`bg-white text-blue`
      case 'orange':
        return tw`bg-orange text-white`
      default:
        return tw`bg-white text-blue`
    }
  }}
`
export const BlockNumber = styled.div`
  ${tw`flex-initial flex items-center`}
`
export const TextWrapper = styled.div`
  ${tw`flex-1 flex items-center pl-4`}
`

export const Text = styled.div`
  ${tw`uppercase text-xl md:text-4xl`}
`
