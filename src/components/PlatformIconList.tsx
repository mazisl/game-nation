import { Platform } from '@/hooks/useGames';
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { IconType } from 'react-icons';

interface PlatformIconsProps {
  platforms: Platform[];
}

const PlatformIconList = ({platforms}: PlatformIconsProps) => {

  const iconMap: {[key: string]: IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
  }

  return (
    <div className="flex space-x-4 mt-2">      
      {/* {platforms.map((platform) => (
        <p key={platform.id}>{platform.name}</p>
        )
      )} */}
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return (
          <div key={platform.id} className="flex items-center justify-center">
            {Icon ? <Icon className="text-lg text-gray-500" /> : ''}
          </div>
        );
      })}
    </div>
  )
}

export default PlatformIconList;