import { FunctionComponent } from 'react'
import { Icon } from '@chakra-ui/react'
import { IoFingerPrintSharp } from 'react-icons/io5'
import { ILogo } from '../../types'

const Logo: FunctionComponent<ILogo> = ({size}) => {
  return (
    <Icon as={IoFingerPrintSharp} boxSize={size} />
  )
}

export default Logo;