import Link from 'next/link'

interface NavBarLinkProps {
  text: string
  href: string
}
export function NavBarLink(props: NavBarLinkProps) {
  return (
    <Link
      href={props.href}
      className="hover:underline hover:underline-offset-4 hover:text-primary transition-all"
    >
      {props.text}
    </Link>
  )
}
