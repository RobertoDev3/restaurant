import { davidLibre } from '@/lib/fonts'
import { SpecialDishesCard } from './specialDishesCard'
import Image from 'next/image'
import dishe1 from '@/assets/images/dish-1.png'
import dishe2 from '@/assets/images/dish-2-lg.png'
import dishe3 from '@/assets/images/dish-3.png'
import dishe4 from '@/assets/images/dish-4.png'
import dishe5 from '@/assets/images/dish-5.png'
import { ButtonMenu, ButtonReserve } from '@/components/common/buttons/Buttons'

export function SpecialDishes() {
  return (
    <div className="absolute bg-accent right-0 w-full">
      <section className="container mx-auto mt-[92px]">
        <div className="space-y-16">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1
              style={davidLibre.style}
              className="text-6xl font-bold text-center"
            >
              Our Special Dishes
            </h1>
            <p className="text-muted-foreground max-w-[376px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt{' '}
            </p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-7 justify-center items-center">
            <SpecialDishesCard
              title="Lumpia with Suace"
              content="Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod
          tempor"
              price="12"
              img={dishe1}
            />
            <SpecialDishesCard
              title="Fish and Veggie"
              content="Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod
          tempor"
              price="16"
              img={dishe3}
            />
            <SpecialDishesCard
              title="Tofu Chili"
              content="Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod
          tempor"
              price="12"
              img={dishe5}
            />
            <SpecialDishesCard
              title="Egg and Cocumber"
              content="Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod
          tempor"
              price="20"
              img={dishe4}
            />
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row justify-around items-center mb-[92px] mt-10 lg:mt-[100px] lg:mb-[200px]">
          <Image
            src={dishe2}
            alt="Prato detalhando a pagina"
            className="w-[100%] sm:max-w-[500px] xl:max-w-[712px]"
          />
          <div className="flex flex-col gap-8 justify-center items-center lg:items-start max-w-[520px]">
            <h1
              style={davidLibre.style}
              className="font-bold text-5xl md:text-6xl text-center lg:text-left"
            >
              Wecome to Our Restaurant
            </h1>
            <p className="text-muted-foreground max-w-[376px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-6">
              <ButtonMenu />
              <ButtonReserve />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
