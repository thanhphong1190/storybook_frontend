import React from 'react'
import { Link } from '../../services/api/types'
import { ButtonLink } from '../base'
import * as S from './Banner.styled'

export interface BannerProps {
  imageURL: string
  title: string
  content: string
  action: Link
}
export const Banner = (props: BannerProps) => {
  const {
    imageURL,
    title,
    content,
    action: { url, label }
  } = props
  return (
    <S.BannerSection>
      <S.Container>
        <S.DesktopView>
          <S.AdImage src={imageURL} />
          {/* the twin.macro have not support Color opacity feature yet. 
          We can back to fix this when they support. please check issue here https://github.com/ben-rogerson/twin.macro/issues/45 */}
          <S.ContentWrapper className='hover:bg-orange hover:bg-opacity-75'>
            <S.Title>{title}</S.Title>
            <S.Content>{content}</S.Content>
            <ButtonLink href={url} color='blue'>
              {label}
            </ButtonLink>
          </S.ContentWrapper>
        </S.DesktopView>
        <S.MobileView
          style={{
            backgroundImage: `url('${imageURL}')`
          }}
        >
          <S.MobileContainer className='bg-opacity-75 bg-orange'>
            <S.Title>{title}</S.Title>
            <S.Content>{content}</S.Content>
            <S.ButtonWrapper>
              <ButtonLink href={url} color='blue'>
                {label}
              </ButtonLink>
            </S.ButtonWrapper>
          </S.MobileContainer>
        </S.MobileView>
      </S.Container>
    </S.BannerSection>
  )
}

export default Banner
