import { Button } from '@/components/ui/button'
import { davidLibre } from '@/lib/fonts'

interface ButtonNavBarReserveProps {
  className?: string
}
export function ButtonNavBarReserve({ className }: ButtonNavBarReserveProps) {
  return (
    <Button
      variant="btn1"
      size="btn1"
      style={davidLibre.style}
      className={className}
    >
      Book a table
    </Button>
  )
}

export function ButtonReserve() {
  return (
    <Button variant="btn1" size="btn2" style={davidLibre.style}>
      Book a table
    </Button>
  )
}

export function ButtonMenu() {
  return (
    <Button
      variant="btn1"
      size="btn2"
      className="bg-foreground"
      style={davidLibre.style}
    >
      Menu
    </Button>
  )
}
