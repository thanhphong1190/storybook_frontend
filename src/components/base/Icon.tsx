import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faYoutubeSquare,
  faTwitter,
  faInstagramSquare
} from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export const Icons = {
  facebook: faFacebook,
  twitter: faTwitter,
  instagram: faInstagramSquare,
  youtube: faYoutubeSquare,
  star: faStar
}

export const Icon = (props: FontAwesomeIconProps) => {
  return <FontAwesomeIcon {...props} />
}
export default Icon
