import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw`w-full flex flex-wrap justify-center content-center`}
  & {
    .item {
      @screen lg {
        min-width: 40px;
      }

      ${tw`text-blue hover:text-white py-2 px-2 md:px-4 mx-1 md:mx-2 bg-white hover:bg-blue flex items-center font-semibold`}
      &.is-active {
        ${tw`bg-blue text-white`}
      }
    }
    .prev {
      .item {
        ${tw`px-0 md:px-2`}
      }
    }
    .next {
      .item {
        ${tw`px-0 md:px-2`}
      }
    }
    ul {
      ${tw`flex flex-row content-center items-center`}
      li {
        ${tw`self-stretch content-center flex items-center`}
      }
    }
  }
`
