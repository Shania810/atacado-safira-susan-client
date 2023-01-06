import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import { Print } from './Print'
export const PrintComponent = ({order}) => {
  let componentRef = useRef()
  return (
    <div>
      <ReactToPrint trigger={() => <button>Imprimir</button>} content={() => componentRef} />
      <div style={{display: 'none'}} >
      <Print order={order} ref={(el) => componentRef = el} />
      </div>
    </div>
  )
}