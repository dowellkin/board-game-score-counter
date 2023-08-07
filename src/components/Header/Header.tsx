import Container from "@/components/Container/Container.jsx"
import { Props } from "@/models/models"
import React from "react"

const Header: React.FC<Props> = () => {
  return (
    <header className="bg-slate-900 text-white font-semibold py-2">
      <Container className="text-2xl leading-loose">Score Counter</Container>
    </header>
  )
}

export default Header
