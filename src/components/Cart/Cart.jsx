import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'

import { ImBin } from 'react-icons/im'
import { CgEnter } from 'react-icons/cg'

export const Cart = ({ cart }) => {

  const isEmpty = !cart.total_items

  const EmptyCart = () => (
    <Typography variant='subtitle1'>You have no items in your shopping cart</Typography>
  )

  const FilledCart = () => (
    <>
      <Grid container spacing={2} className="flex-col justify-center pt-6">
        {cart.line_items.map((item) => (
          <Grid item key={item.id}>
            {/* <CartItem /> */}
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className='flex-col mt-[10%] w-full justify-center'>
        <Typography className="text-right">
          Subtotal {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div className='flex justify-evenly m-2'>
          <Button className='min-w-[150px]' size="large" type="button" variant="contained"><ImBin /></Button>
          <Button className='min-w-[150px]' size="large" type="button" variant="contained"><CgEnter /></Button>
        </div>
      </div>
    </>
  )

  if (!cart.line_items) return 'Loading...'

  return (
    <Container className='font-tabloid'>
      <div className='h-full' />
      <Typography className='pt-2 text-center'>Your Shopping Cart</Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}
