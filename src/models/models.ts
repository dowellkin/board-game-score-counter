import { ReactNode } from "react"

export type typeCard = {
  icon: string
  title: string
  value: number
}

export type Props = {
  children?: ReactNode
  className?: string
}
