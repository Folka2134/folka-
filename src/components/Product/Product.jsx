import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart, CallMissedSharp } from '@material-ui/icons'

export const Product = ({ product, handleAddToCart }) => {
  return (
    <Card className='w-full'>
      <CardMedia className='h-0 pt-[50.25%]' image={product.image.url} title={product.name} />
      <CardContent className='bg-black bg-opacity-95 text-white'>
        <div className=''>
          <Typography variant='h5' gutterBottom>
            {product.name}
          </Typography>
          <Typography >
            {product.price.formatted_with_symbol}
          </Typography>
          <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' />
        </div>
      </CardContent>
      <CardActions disableSpacing className='flex justify-end'>
        <IconButton aria-label='Add to Cart' onClick={() => handleAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card >
  )
}
