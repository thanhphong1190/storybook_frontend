import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw`w-full flex flex-col items-center justify-center text-center`}
`

export const StarsGroup = styled.div`
  ${tw`text-orange w-full flex flex-row items-center justify-center text-center`}
`

export const Date = styled.div`
  ${tw`text-silver mt-4`}
`

export const CustomerName = styled.span`
  ${tw`uppercase text-2xl font-bold text-blue__dark`}
`

export const ReviewText = styled.div`
  ${tw`text-center py-6 px-6 text-blue__dark`}
`
