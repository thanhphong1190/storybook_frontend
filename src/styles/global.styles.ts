import styled from 'styled-components'
import tw from 'twin.macro'
import { ButtonProps, TextProps } from '../services/api/types'

const AppStyles = styled.div`
  ${tw`font-body w-full h-screen flex flex-col items-start justify-start`}
`

export const Space = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? `${height}em` : '3rem')};
`

export const Link = styled.a`
  ${tw`hover:text-orange hover:underline cursor-pointer`}
`

export const Card = styled.div`
  ${tw`relative flex flex-1 flex-col text-center font-display w-full`}
`

export const CardHeader = styled.h2<{ separator?: boolean }>`
  ${tw`relative text-blue text-center text-2xl px-6 pb-4 uppercase font-extrabold`}

  margin-bottom: 20px;

  &::after {
    ${props => props.separator && tw`absolute bottom-0 h-1 bg-orange`}
    content: " ";
    min-width: 185px;
    left: 50%;
    transform: translateX(-50%) rotate(-4deg);
  }
`

export const CardBody = styled.div``

export const CardFooter = styled.div`
  ${tw`flex justify-center`}

  & > button {
    ${tw`mx-1`}
    min-width: 150px;
  }
`

export const TextInput = styled.input`
  min-width: 200px;
  height: 40px;
  ${tw`border border-blue px-6 py-4 text-white`}
`
export const Underline = styled.hr<{ color?: 'blue' | 'orange' | 'blue-dark' }>`
  ${tw`mt-4 w-32 border-t-4 border-solid border-orange transform -skew-y-3`}
  ${({ color }) => {
    switch (color) {
      case 'blue':
        return tw`border-blue`
      case 'blue-dark':
        return tw`border-blue__dark`
      case 'orange':
        return tw`border-orange`
    }
  }}
`

export const Text = styled.div<TextProps>`
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
        return tw`text-4xl lg:text-6xl`
      default:
        return tw`text-base`
    }
  }}
   ${({ color }) => {
     switch (color) {
       case 'black':
         return tw`text-black`
       case 'white':
         return tw`text-white`
       case 'blue':
         return tw`text-blue`
       case 'blue-dark':
         return tw`text-blue__dark`
       case 'blue-grey':
         return tw`text-blue__grey`
       case 'blue-dodger':
         return tw`text-blue__dodger`
       case 'orange':
         return tw`text-orange`
       case 'orange-dark':
         return tw`text-orange__dark`
       case 'green':
         return tw`text-green`
       case 'grey':
         return tw`text-grey`
       case 'grey-light':
         return tw`text-grey__light`
       case 'grey-medium':
         return tw`text-grey__medium`
       case 'grey-dark':
         return tw`text-grey__dark`
       case 'silver':
         return tw`text-silver`
       default:
         return null
     }
   }}
  ${({ fontWeight }) => {
    switch (fontWeight) {
      case 'thin':
        return tw`font-thin`
      case 'bold':
        return tw`font-bold`
      case 'semibold':
        return tw`font-semibold`
      case 'extrabold':
        return tw`font-extrabold`
      default:
        return null
    }
  }}
  ${({ textCase }) => {
    switch (textCase) {
      case 'upper':
        return tw`uppercase`
      case 'lower':
        return tw`lowercase`
      default:
        return null
    }
  }}
`

export const ButtonLink = styled.a<ButtonProps>`
  ${tw`px-4 py-4 lg:py-2 transition-colors duration-300 uppercase italic cursor-pointer`}
  // primary
  ${({ color }) => {
    switch (color) {
      case 'blue':
        return tw`bg-blue hover:bg-blue__dark text-white`
      case 'orange':
        return tw`bg-orange hover:bg-orange__dark text-white`
      case 'white':
        return tw`bg-blue hover:bg-blue__dark text-white`
      default:
        return tw`bg-blue hover:bg-blue__dark text-white`
    }
  }}

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
  ${({ fontWeight }) => {
    switch (fontWeight) {
      case 'thin':
        return tw`font-thin`
      case 'bold':
        return tw`font-bold`
      case 'semibold':
        return tw`font-semibold`
      case 'extrabold':
        return tw`font-extrabold`
      default:
        return null
    }
  }}
`

export default AppStyles
