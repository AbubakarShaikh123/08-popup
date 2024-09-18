// we can Recaiol for handeling "showModel"


import { useState } from 'react'
import Model from './components/Model'



function App() {
  const [showModel, setShowModel] = useState(false)

  return (
    <div className='h-screen bg-zinc-800 text-white  flex flex-col items-center gap-5 py-5 ' >
       <h1 className='peer  cursor-pointer '>Popup Model</h1>
       <button onClick={()=>setShowModel(true)} className='peer-hover:bg-blue-400  border px-5 py-1 hover:bg-white hover:text-black '>click</button>

       { showModel &&  <Model abc={()=>setShowModel(false)} />}

    </div>
  )
}

export default App
