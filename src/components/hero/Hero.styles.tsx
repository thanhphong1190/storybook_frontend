import styled from 'styled-components'
import tw from 'twin.macro'
import { Text, ButtonLink } from '../../styles/global.styles'
import { HerorTextProps } from './Hero'

export const Section = styled.section<{ bgImgURL?: string; bgColor?: string }>`
         ${tw`w-full bg-center bg-cover bg-no-repeat`}
         ${({ bgColor }) => {
           switch (bgColor) {
             case 'orange':
               return tw`bg-orange`
             case 'blue':
               return tw`bg-blue`
             case 'dark-blue':
               return tw`bg-blue__dark`
             case 'dodger-blue':
               return tw`bg-blue__dodger`
             case 'white':
               return tw`bg-white`
             case 'grey':
               return tw`bg-grey`
             default:
               return null
           }
         }}
         &{
             ${({ bgImgURL }) =>
               bgImgURL &&
               `background-image:url('${bgImgURL}'); ${tw`bg-center bg-cover`}`}
       `
export const OverlayWrapper = styled.div<{ overlay?: boolean }>`
  ${tw`w-full`}
`
export const Container = styled.div<{
  contentPosition?: 'center' | 'left' | 'right'
}>`
  ${tw`container mx-auto flex flex-col`}

  ${({ contentPosition }) => {
    switch (contentPosition) {
      case 'center':
        return tw`justify-center text-center`
      case 'left':
        return tw`justify-start text-left`
      case 'right':
        return tw`justify-end text-right`
      default:
        return tw`justify-center text-center`
    }
  }}
`

export const ButtonGroup = styled.div<{
  contentPosition?: 'center' | 'left' | 'right'
}>`
  ${tw`py-2 mt-4 flex flex-wrap flex-row items-center`}
  ${({ contentPosition }) => {
    switch (contentPosition) {
      case 'center':
        return tw`justify-center text-center`
      case 'left':
        return tw`justify-start text-left`
      case 'right':
        return tw`justify-end text-right`
      default:
        return tw`justify-center text-center`
    }
  }}
`

export const HeroText = styled(Text)<HerorTextProps>`
  ${tw`lg:leading-none`}
  ${({ size }) => {
    switch (size) {
      case '4xl':
        return tw`leading-8`
      case '2xl':
        return tw`leading-6`
    }
  }}
  ${({ spaceTop }) => spaceTop && `margin-top:${spaceTop}em;`}
  ${({ spaceBottom }) => spaceBottom && `margin-bottom:${spaceBottom}em;`}
`

export const HeroButtonLink = styled(ButtonLink)`
  ${tw`mr-4 my-2 py-4 px-4 lg:px-8`}
`
export const ContentWrapper = styled.div<{
  width?: 'full' | '1/2' | '2/3' | '3/4' | '4/5'
}>`
  ${tw`w-full px-2 py-24 lg:px-4 lg:pb-40 lg:pt-64`}
  ${({ width }) => {
    switch (width) {
      case '1/2':
        return tw`md:w-2/3 lg:w-1/2`
      case '2/3':
        return tw`lg:w-2/3`
      case '3/4':
        return tw`lg:w-3/4`
      case '4/5':
        return tw`lg:w-4/5`
      case 'full':
        return tw`lg:w-full`
      default:
        return null
    }
  }}
`
