import styled from 'styled-components'
import tw from 'twin.macro'

export const NewsletterWrapper = styled.div`
  ${tw`flex flex-wrap bg-blue p-4 font-display lg:flex-no-wrap lg:flex-row`}
`

export const NewsletterContent = styled.div`
  ${tw`flex-col flex-grow-0 lg:px-6 lg:mx-6`}
`

export const NewsletterTitle = styled.h2`
  ${tw`mb-4 text-white text-4xl font-bold`}
`

export const NewsletterMessage = styled.p`
  ${tw`mb-4 text-left text-white`}
`

export const SubscribeFormWrap = styled.div`
  ${tw`justify-center flex-grow lg:px-6 lg:mx-6`}

  & > input, & > button {
    ${tw`w-full my-2`}
  }

  & > input {
    ${tw`bg-blue border-white`}
  }
`
