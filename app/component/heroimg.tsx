
import Image from 'next/image'

export default function Heroimg() {
  return (
    <div className=''>
      <Image
        src="/hero.png"
        width={400}
        height={400}
        alt="Picture of the author"
      />
    </div>
  )
}

