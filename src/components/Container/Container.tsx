import { Props } from "@/models/models"
import React from "react"

const Container: React.FC<Props> = ({ children }: Props) => {
  return <div className="container max-w-5xl mx-auto px-4">{children}</div>
}

export default Container
