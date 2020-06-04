import { Button } from '../base'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from '../../styles/global.styles'
import { ContentBlockText } from './ContentBlock.styled'

export interface ContentBlocksProps {
  headerText: string
  contentPrimayText: string
  contentSecondaryText: string
  primaryBtnText: string
  secondaryBtnText: string
  onPrimaryBtnClick?: Function
  onSecondaryBtnClick?: Function
}

export const ContentBlock = (props: ContentBlocksProps) => {

  const { headerText,
    contentPrimayText,
    contentSecondaryText,
    primaryBtnText,
    secondaryBtnText,
    onPrimaryBtnClick,
    onSecondaryBtnClick} = props

  return (
    <Card>
      <CardHeader separator>{headerText}</CardHeader>
      <CardBody>
        <ContentBlockText
          fontBold
          color='orange'
          dangerouslySetInnerHTML={{ __html: contentPrimayText }}
        />
        <ContentBlockText
          color='black'
          dangerouslySetInnerHTML={{ __html: contentSecondaryText }}
        />
      </CardBody>
      <CardFooter>
        <Button
          color='blue'
          onClick={() =>
            onSecondaryBtnClick && onSecondaryBtnClick()
          }
        >
          {secondaryBtnText}
        </Button>
        <Button
          onClick={() => onPrimaryBtnClick && onPrimaryBtnClick()}
        >
          {primaryBtnText}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ContentBlock
