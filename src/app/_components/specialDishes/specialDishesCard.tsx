import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { davidLibre } from '@/lib/fonts'
import Image, { StaticImageData } from 'next/image'

interface SpecialDishesCardProps {
  title: string
  content: string
  img: StaticImageData
  price: number | string
}
export function SpecialDishesCard(props: SpecialDishesCardProps) {
  return (
    <>
      <Card className="relative bg-accent border-2 border-background hover:bg-background transition-all cursor-pointer max-w-[265px] max-h-309px flex flex-col justify-center items-center gap-5 pt-[141px] pb-[20px] px-3 rounded-tl-[44px] rounded-br-[44px] my-[70px]">
        <Image
          src={props.img}
          alt="foto do prato"
          className="absolute top-0 translate-y-[-50%]"
        />
        <div className="absolute z-10 top-[-55px] right-[15px] shadow-xl w-[54px] h-[54px] bg-foreground text-background font-bold rounded-full flex items-center justify-center">
          <span>$</span>
          <span>{props.price}</span>
        </div>
        <CardTitle style={davidLibre.style} className="text-xl font-bold">
          {props.title}
        </CardTitle>
        <CardContent className="text-muted-foreground text-[15px] text-center">
          {props.content}
        </CardContent>
      </Card>
    </>
  )
}
