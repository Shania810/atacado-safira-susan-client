import React from 'react'

export const Print = React.forwardRef(({ order }, ref) => {
  const { orderItems, seller, client,total,payment } = order
  return (
    <div ref={ref} >
      <h1>Atacado Safira Susan</h1>
      <h2>Vendedor(a) {seller}</h2>
      <div>Cliente: {client}</div>
        <div>Pagamento: {payment}</div>
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Produto</td>
            <td>Preço</td>
            <td>Quantidade</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          {orderItems?.map((item, index) => {
            return <tr key={item._id} >
              <td>{index + 1}</td>
              <td>{item.product.name}</td>
              <td>{item.quantity < 6 ? item.product.retail_price : item.product.wholesale_price}</td>
              <td>{item.quantity}</td>
              <td>{item.total}</td>
            </tr>
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
});

