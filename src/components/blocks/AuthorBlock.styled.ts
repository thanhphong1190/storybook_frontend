import styled from 'styled-components'
import tw from 'twin.macro'

export const AuthorSection = styled.div`
  ${tw`relative flex flex-col items-center w-full md:items-start md:flex-row`}
`

export const AuthorAvatar = styled.a<{ avatarImgURL?: string }>`
  ${tw`relative block rounded-full`}
  background: url(${props => props.avatarImgURL}) 0 0/cover no-repeat;
  width: 123px;
  height: 123px;
  z-index:-1;
`

export const AuthorAvatarFrame = styled.div<{ frameImgURL: string }>`
  background: url(${props => props.frameImgURL}) -1px -1px/cover no-repeat;
  width: 125px;
  height: 125px;
`

export const AuthorInformation = styled.div`
  ${tw`relative w-full font-display md:pl-8 md:max-w-screen-md`}
`

export const AuthorName = styled.h4`
  ${tw`text-xl text-orange font-bold uppercase`}
`

export const AuthorBios = styled.h6`
  ${tw`text-base text-blue__dark font-bold`}
`

export const AuthorIntro = styled.div<{collapsed?: boolean}>`
  ${tw`text-grey__medium mt-4`}

  & p {
    ${props => props.collapsed && tw`truncate`}
  }
`

export const ReadButton = styled.a`
  ${tw`text-grey__medium mt-2 text-sm cursor-pointer`}

  &::before {
    content: "\\[";
  }

  &::after {
    content: "\\]";
  }
`

