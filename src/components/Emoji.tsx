import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';

interface EmojiProps {
  rating: number;
}

interface EmojiImageProps {
  src: string;
  alt: string;
  className: string;
}

const Emoji = ({rating}: EmojiProps) => {

  if (rating < 3) return null;

  const emojiMap: {[key: number]: EmojiImageProps} = {
    3: {src: meh, alt: 'meh', className: 'h-5 w-5 mt-1'},
    4: {src: thumbsUp, alt: 'recommended', className: 'h-5 w-5 mt-1'},
    5: {src: bullsEye, alt: 'exceptional', className: 'h-6 w-6 mt-1'}
  }

  return (
    <img {...emojiMap[rating]} />
  )
}

export default Emoji