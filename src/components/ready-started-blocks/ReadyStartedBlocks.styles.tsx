import styled from 'styled-components'
import tw from 'twin.macro'

export const Section = styled.section`
  ${tw`w-full`}
`

export const Container = styled.div`
  ${tw`container mx-auto`}
`
export const BlocksWrapper = styled.div`
  ${tw`w-full flex flex-wrap content-center justify-center items-stretch`}
`

export const Block = styled.div<{
  color?: 'white' | 'blue' | 'blue-dark' | 'orange'
}>`
  ${tw`w-full md:w-1/3 text-white p-12`}
  ${({ color }) => {
    switch (color) {
      case 'blue':
        return tw`bg-blue`
      case 'blue-dark':
        return tw`bg-blue__dark`
      case 'orange':
        return tw`bg-orange`
      case 'white':
        return tw`bg-white`
    }
  }}
`
export const LinkWrapper = styled.a`
  ${tw`w-full flex flex-col content-center justify-center items-center text-center`}
`

export const ImgWrapper = styled.div`
  ${tw`w-full text-center flex justify-center`}
`

export const IMG = styled.img`
  ${tw`max-w-full`}
`

export const Text = styled.span`
  ${tw`py-4 uppercase text-2xl leading-6`}
`
