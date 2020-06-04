import * as G from '../../styles/global.styles'
import * as S from './StandardContent.styles'

export interface Paragraph {
  type: 'text' | 'title' | 'space'
  text?: string
}

export interface PageContentProps {
  paragraphs?: Paragraph[]
}

export const StandardContent = (props: PageContentProps) => {
  const { paragraphs } = props
  return (
    <S.Container>
      {paragraphs &&
        paragraphs.map(s => {
          switch (s.type) {
            case 'text':
              return <G.Text>{s.text}</G.Text>
            case 'title':
              return (
                <G.Text size='lg' fontWeight='semibold'>
                  {s.text}
                </G.Text>
              )
            case 'space':
              return <G.Space height={2} />
          }
        })}
    </S.Container>
  )
}

export default StandardContent
