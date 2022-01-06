import React from "react"
import Header from "./Header"
import Card from "./Card"
import data from "./data"
import "./index.css"

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.title}
        {...item}
      />
    )
  })

  return (
    <main>
      <Header />
      {cards}
    </main>
  )
}