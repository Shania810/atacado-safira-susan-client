import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'
export const PrintComponent = () => {
  let componentRef = useRef()
  return (
    <div>
      <ReactToPrint trigger={()=><button>Imprimir</button>} content={()=> componentRef}/>
    </div>
  )
}
