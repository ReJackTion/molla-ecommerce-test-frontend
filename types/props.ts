import { ReactNode } from 'react'

export type AccordationProps = {
  children?: ReactNode
  title?: any
  expanded?: boolean
  adClass?: string
  type?: 'default' | 'checkout'
}

export type PaginationProps = { perPage: number; total: number }
