// we can Recaiol for handeling "showModel"

import React, { useRef } from 'react'
import { RxCross1 } from "react-icons/rx";

function Model({ abc }) {

    const modelRef = useRef()

    const closeByBackground = (e) => {
        // console.log(e.target);
        if (modelRef.current === e.target) abc()
    }

  return (
    <div ref={modelRef} onClick={closeByBackground} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col items-center justify-center'>
        <div className='w-1/4 pb-3 flex justify-end'>
            <RxCross1 onClick={abc} className='cursor-pointer' />
        </div>
        <div className='bg-blue-600 w-1/4  h-1/4 flex items-center justify-center'>
               PopUp
        </div>
    </div>
  )
}

export default Model