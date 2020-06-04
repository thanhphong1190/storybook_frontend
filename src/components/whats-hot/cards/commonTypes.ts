import { Link, Iconlink } from '../../../services/api/types'

export interface SocialCardProps {
  title?: string
  content?: string
  action?: Link
  imgURL?: string
  hashTags?: string
  socials?: Iconlink[]
  headline?: string
}
