import { useState } from "react"
export default function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style = {{backgroundColor : color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-md bg-white px-2 py-3 rounded-xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}} onClick ={()=> setColor("Red")} >Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Black"}} onClick ={()=> setColor("Black")}>Black</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Blue"}} onClick ={()=> setColor("Blue")}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "magenta"}} onClick ={()=> setColor("Magenta")}>Magenta</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "pink"}} onClick ={()=> setColor("Pink")}>Pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "olive"}} onClick ={()=> setColor("Olive")}>Olive</button>
        </div>
      </div>
    </div>
  )
}