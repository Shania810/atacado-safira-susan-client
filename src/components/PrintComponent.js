import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import {Print} from './Print'
export const PrintComponent = () => {
  let componentRef = useRef()
  return (
    <div>
      <ReactToPrint trigger={()=><button>Imprimir</button>} content={()=> componentRef}/>
      <Print ref={(el) => (componentRef = el)} />
    </div>
  )
}
