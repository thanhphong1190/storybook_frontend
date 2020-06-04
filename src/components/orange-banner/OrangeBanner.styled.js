import styled from 'styled-components'
import tw from 'twin.macro'

export const OBSection = styled.section`
  ${tw`w-full bg-center bg-cover`}
`

export const ContentWerapper = styled.div`
  ${tw`w-full`}
`

export const Container = styled.div`
  ${tw`container mx-auto flex flex-row`}
`

export const ImageWrapper = styled.div`
  ${tw`hidden lg:flex w-1/2 self-end`}
`

export const Img = styled.img`
  ${tw`w-full`}
`

export const TextContent = styled.div`
  ${tw`self-center w-full lg:w-1/2 p-2 py-12 lg:py-4 px-4 text-white`}
`

export const Title = styled.div`
  ${tw`w-full text-xl uppercase font-semibold`}
`

export const BigTitle = styled.div`
  ${tw`w-full text-4xl mb-4 font-bold uppercase`}
`

export const Text = styled.div`
  ${tw`w-full mb-4`}
`
