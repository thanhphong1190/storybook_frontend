import React from 'react'
import * as S from './OrangeBanner.styled'
import { Link } from '../../services/api/types'
import { Button } from '../base/'

export interface OrangeBannerProps {
  bgImageURL: string
  imageURL: string
  title: string
  bigTitle: string
  text: string
  action: Link
}

export const OrangeBanner = (props: OrangeBannerProps) => {
  const {
    bgImageURL,
    imageURL,
    title,
    bigTitle,
    text,
    action: { label }
  } = props
  return (
    <S.OBSection style={{ backgroundImage: `url('${bgImageURL}')` }}>
      {/* the Color opacity havent support by TW yet. need to fix this when TW release version which support Color Opacity. 
      Please check the issue update here https://github.com/ben-rogerson/twin.macro/issues/45*/}
      <S.ContentWerapper className='bg-orange bg-opacity-75'>
        <S.Container>
          <S.ImageWrapper>
            <S.Img src={imageURL} />
          </S.ImageWrapper>
          <S.TextContent>
            <S.Title>{title}</S.Title>
            <S.BigTitle>{bigTitle}</S.BigTitle>
            <S.Text>{text}</S.Text>
            <Button color='blue'>{label}</Button>
          </S.TextContent>
        </S.Container>
      </S.ContentWerapper>
    </S.OBSection>
  )
}

export default OrangeBanner
