import * as S from './Footer.styled'
import * as G from '../../styles/global.styles'
import { Link, Iconlink } from '../../services/api/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'

export interface FooterProps {
  logo: string
  copyright: string
  links: Link[]
  social: {
    label: string
    socialLinks: Iconlink[]
  }
}
export const Footer = (props: FooterProps) => {
  const { logo, copyright, links, social } = props
  return (
    <S.FooterStyled>
      <S.Container>
        <S.Logo src={logo} />
        <S.InforGroup>
          <span>{copyright}</span>
          <S.LinkGroup>
            {links &&
              links.map((l, i) => (
                <>
                  <G.Link key={i} href={l.url}>
                    {l.label == 'Login' && (
                      <>
                        <FontAwesomeIcon icon={faKey} />{' '}
                      </>
                    )}
                    {l.label}
                  </G.Link>
                  {i < links.length - 1 ? ' - ' : null}
                </>
              ))}
          </S.LinkGroup>
        </S.InforGroup>
        <S.SocialGroup>
          <S.SocialLabel>{social.label}</S.SocialLabel>
          <S.SocialIcons>
            {social.socialLinks &&
              social.socialLinks.map((l, i) => (
                <G.Link key={i} href={l.url}>
                  <S.Icon name={l.icon} />
                </G.Link>
              ))}
          </S.SocialIcons>
        </S.SocialGroup>
      </S.Container>
    </S.FooterStyled>
  )
}

export default Footer
