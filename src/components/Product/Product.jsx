import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart, CallMissedSharp } from '@material-ui/icons'

export const Product = ({ product }) => {
  return (
    <Card className='w-full'>
      <CardMedia className='h-0 pt-[50.25%]' image={product.image} title={product.name} />
      <CardContent>
        <div className=''>
          <Typography variant='h5' gutterBottom>
            {product.name}
          </Typography>
          <Typography variant='h5'>
            {product.price}
          </Typography>
          <Typography variant='body2' color="textSecondary">
            {product.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className='flex justify-end'>
        <IconButton aria-label='Add to Cart'>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card >
  )
}
