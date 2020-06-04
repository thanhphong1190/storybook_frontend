import tw from 'twin.macro'
import styled from 'styled-components'
import { SVGIcon } from '../../base'

export const Wrapper = styled.div<{ overlay?: boolean }>`
  min-height: 500px;
  ${tw`w-full lg:w-1/3 bg-center bg-cover flex`}
`

export const Container = styled.div<{
  bg?: 'orange' | 'blue' | 'dark-blue' | 'dodger-blue' | 'white' | 'black'
}>`
  ${tw`flex flex-col items-center content-center justify-between relative w-full px-4 lg:px-8 py-16`}
  ${({ bg }) => {
    switch (bg) {
      case 'blue':
        return tw`bg-blue`
      case 'dark-blue':
        return tw`bg-blue__dark`
      case 'dodger-blue':
        return tw`bg-blue__dodger`
      case 'orange':
        return tw`bg-orange`
      case 'white':
        return tw`bg-white`
      case 'black':
        return tw`bg-black`
      default:
        return null
    }
  }}
`

export const CardContent = styled.div`
  ${tw`w-full flex flex-1 flex-col justify-center text-center items-center`}
`
export const CardIconsContent = styled.div`
  ${tw`flex-1 w-full my-4 p-8 flex flex-wrap justify-between transform skew-y-3`}
`

export const CardBottom = styled.div`
  ${tw`text-center text-white flex flex-col justify-center items-center transform skew-y-3`}
`

export const Title = styled.div<{
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl'
  color?: 'orange' | 'blue' | 'dark-blue' | 'white' | 'black'
}>`
  ${tw`uppercase text-blue font-semibold transform skew-y-3`}
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return tw`text-sm`
      case 'md':
        return tw`text-base`
      case 'lg':
        return tw`text-lg`
      case 'xl':
        return tw`text-xl`
      case '2xl':
        return tw`text-2xl`
      case '4xl':
        return tw`text-4xl`
      case '6xl':
        return tw`text-6xl`
      default:
        return tw`text-base`
    }
  }}
   ${({ color }) => {
     switch (color) {
       case 'blue':
         return tw`text-blue`
       case 'dark-blue':
         return tw`text-blue__dark`
       case 'orange':
         return tw`text-orange`
       case 'white':
         return tw`text-white`
       case 'black':
         return tw`text-black`
       default:
         return null
     }
   }}
`
export const IconWrapper = styled.a<{ align?: 'left' | 'right' }>`
  ${tw`w-1/2 flex justify-center items-center p-4  text-5xl text-white hover:text-orange`}
  ${({ align }) => {
    switch (align) {
      case 'left':
        return tw`md:justify-start`
      case 'right':
        return tw`md:justify-end`
    }
  }}
`

export const Icon = styled(SVGIcon)`
  ${tw`my-2`}
`
