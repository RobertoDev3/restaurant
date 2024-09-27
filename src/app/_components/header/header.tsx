import Image from 'next/image'
import ambienteImage from '@/assets/images/Ambiente1.png'
import dishe2 from '@/assets/images/dish-2.png'
import { davidLibre } from '@/lib/fonts'
import { ButtonMenu, ButtonReserve } from '@/components/common/buttons/Buttons'
import { Icon } from '@iconify/react/dist/iconify.js'
import { CircularText } from '@/components/images/circularText'
import { Details1 } from '@/components/images/details1'
import { Details2 } from '@/components/images/details2'
import { Details3 } from '@/components/images/details3'

export function Header() {
  return (
    <header className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mb-16 lg:my-28">
      {/* Details */}
      <CircularText clasName="absolute hidden lg:block xl:left-[-60px] top-[-100px]" />
      <Details1 clasName="absolute hidden md:block md:right-[-20px] lg:right-[-120px] top-[-120px]" />
      <Details3 clasName="absolute hidden md:block md:right-[-50px] lg:right-[-150px] top-[330px]" />
      <Details2 clasName="absolute hidden md:block md:right-[350px] lg:right-[220px] top-[-80px]" />
      <Image
        src={dishe2}
        alt="prato em volta na imagem do ambiente do restaurante"
        className="absolute hidden md:block lg:hidden xl:block z-20 md:right-[460px] xl:right-[350px] top-[320px] "
      />
      <div className="absolute hidden z-[-1] sm:block top-[-785px] left-[-700px] w-[960px] h-[960px] rounded-full border border-accent" />
      <div className="absolute hidden z-[-1] sm:block top-[-860px] left-[-630px] w-[960px] h-[960px] rounded-full border border-accent" />
      <div className="absolute hidden z-[-1] sm:block top-[-760px] left-[-600px] w-[960px] h-[960px] rounded-full border border-accent" />
      {/* End Details */}

      <div className="flex flex-col gap-10 md:gap-16 lg:max-w-[400px] xl:max-w-[700px]">
        <h1 className="text-5xl md:text-7xl font-bold" style={davidLibre.style}>
          We provide the best food for you
        </h1>
        <div className="space-y-10 md:space-y-12">
          <p className="text-muted-foreground max-w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="space-x-6 text-center sm:text-start">
            <ButtonMenu />
            <ButtonReserve />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 border border-foreground rounded-full flex items-center justify-center text-2xl">
            <Icon icon="ri:facebook-fill" />
          </div>
          <div className="w-11 h-11 border border-foreground rounded-full flex items-center justify-center text-2xl">
            <Icon icon="lets-icons:insta" />
          </div>
          <div className="w-11 h-11 border border-foreground rounded-full flex items-center justify-center text-xl">
            <Icon icon="prime:twitter" />
          </div>
          <div className="w-[143px] h-[1px] bg-black/15" />
        </div>
      </div>
      <div>
        <Image
          src={ambienteImage}
          alt="Ambiente interno do restaurante"
          className="relative z-10"
        />
      </div>
    </header>
  )
}
