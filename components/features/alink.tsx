import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  className?: any
  style?: any
  [x: string]: any
}

export default function ALink({
  children,
  className,
  style,
  ...props
}: Props): JSX.Element {
  function defaultFunction(e): void {
    if (props.href == '#') {
      e.preventDefault()
    }
  }

  return (
    <Link href={props.href} {...props}>
      <a className={className} style={style} onClick={defaultFunction}>
        {children}
      </a>
    </Link>
  )
}
