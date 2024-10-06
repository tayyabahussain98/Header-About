import About from "./components/About"
import Header from "./components/Header"


export default function Home() {
  return (
    <div className="w-40 h-40 bg-purple-400 pt-5 pl-5">
    <h1>This is a Home page.</h1>
    <Header/>
    <About/>
    </div>
  )
}