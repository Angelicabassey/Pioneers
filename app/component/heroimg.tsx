  
  import Image from 'next/image'

  export default function Hero() {
    return (
     <div className='flex- justify-center- items-center- h-screen-'>
       <Image
        src="/hero.png"
        width={400}
        height={400}
        alt="Picture of the author"
        />
     </div>
    )
  }
  
