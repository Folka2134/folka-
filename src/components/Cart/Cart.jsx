import React from 'react'

import { CartItem } from './CartItem/CartItem'

import { Container, Typography, Button, Grid } from '@material-ui/core'

import { ImBin } from 'react-icons/im'
import { CgEnter } from 'react-icons/cg'

export const Cart = ({ cart, handleEmptyCart, handleRemoveFromCart, handleUpdateCartQty }) => {

  const EmptyCart = () => (
    <Typography variant='subtitle1' className='text-red-500 text-center pt-2'>Cart Empty</Typography>
  )

  const FilledCart = () => (
    <div className='h-[500px] lg:h-[700px]'>
      <div className='h-[400px] lg:h-[600px] overflow-y-scroll overflow-x-hidden'>
        <Grid container spacing={2} className="flex justify-center pt-6">
          {cart.line_items.map((item) => (
            <Grid item key={item.id}>
              <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className='flex-col mt-[10%] w-full justify-center'>
        <Typography className="text-center">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div className='flex justify-evenly m-2'>
          <Button className='min-w-[150px]' size="large" type="button" variant="contained"><ImBin onClick={handleEmptyCart} /></Button>
          <Button className='min-w-[150px]' size="large" type="button" variant="contained"><CgEnter /></Button>
        </div>
      </div>
    </div>
  )

  // if (!cart.line_items) return 'Empty Cart'

  return (
    <div className='font-tabloid mt-12 -ml-[217.5px] absolute bg-black w-[250px]'>
      {/* <div className='h-full' /> */}
      <Typography className='py-2 text-center text-white' > Your Shopping Cart</Typography>
      {!cart.total_items ? <EmptyCart /> : <FilledCart />
      }
    </div>
  )
}
