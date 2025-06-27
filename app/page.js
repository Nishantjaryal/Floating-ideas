'use client'
import Background from "./components/background"
import Foreground from "./components/foreground"
export default function Home() {
  return (
    <div className="relative">
        <Background/>
        <Foreground/>
    </div>
  )
}
