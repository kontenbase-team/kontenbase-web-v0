import {
  // General
  FaCircle as CircleIcon,
  FaGlobe as WebsiteIcon,
  // Social media
  FaFacebook as FacebookIcon,
  FaGithub as GitHubIcon,
  FaInstagram as InstagramIcon,
  FaLinkedin as LinkedInIcon,
  FaTwitter as TwitterIcon,
  FaYoutube as YouTubeIcon,
} from 'react-icons/fa'

interface IconProps {
  name: string
}

export function Icon(props: IconProps) {
  switch (props.name) {
    /**
     * General
     */
    case 'circle':
      return <CircleIcon />
    case 'website':
      return <WebsiteIcon />
    /**
     * Social media
     */
    case 'website':
      return <WebsiteIcon />
    case 'twitter':
      return <TwitterIcon />
    case 'github':
      return <GitHubIcon />
    case 'linkedin':
      return <LinkedInIcon />
    case 'instagram':
      return <InstagramIcon />
    case 'facebook':
      return <FacebookIcon />
    case 'youtube':
      return <YouTubeIcon />
    /**
     * When nothing found
     */
    default:
      return <CircleIcon />
  }
}
