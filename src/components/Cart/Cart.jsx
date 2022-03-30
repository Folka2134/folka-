import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'

export const Cart = ({ cart }) => {

  const isEmpty = !cart.total_items

  const EmptyCart = () => (
    <Typography variant='subtitle1'>You have no items in your shopping cart</Typography>
  )

  const FilledCart = () => (
    <>
      <Grid container spacing={3} className="flex-col justify-center">
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            {/* <CartItem /> */}
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className='flex-col mt-[10%] w-full justify-center'>
        <Typography variant="h4">
          Subtotal {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div className='content-center m-2'>
          <Button className='min-w-[150px]' size="large" type="button" variant="contained">Empty Cart</Button>
          <Button className='min-w-[150px]' size="large" type="button" variant="contained">Checkout</Button>
        </div>
      </div>
    </>
  )

  return (
    <Container>
      <div className='h-full' />
      <Typography className='mt-[5%]' variant='h3'>Your Shopping Cart</Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}
