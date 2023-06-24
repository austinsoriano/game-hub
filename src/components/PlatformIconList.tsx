import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa"
import { MdPhoneIphone } from 'react-icons/md' 
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { HStack, Icon } from "@chakra-ui/react"
import { Platform } from "../hooks/useGames"
import { IconType } from "react-icons"

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key:string]: IconType} = {
        android: FaAndroid,
        mac: FaApple,
        linux: FaLinux,
        playstation: FaPlaystation,
        pc: FaWindows,
        xbox: FaXbox,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe
    }

    return(
        <HStack marginY={1}>
            {platforms.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'></Icon>)}
        </HStack>
    )
}

export default PlatformIconList