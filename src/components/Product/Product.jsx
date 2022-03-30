import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart, CallMissedSharp } from '@material-ui/icons'

export const Product = ({ product, }) => {
  return (
    <Card className="{classes.root}">
      <CardMedia className="{classes.media}" image='' title={product.name} component='img' />
      <CardContent>
        <div className="{classes.cardContent}">
          <Typography variant='h5' gutterBottom>
            {product.name}
          </Typography>
          <Typography variant='h5'>
            {product.price}
          </Typography>
          <Typography variant='h2' color="textSecondary">
            {product.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className="{classes.cardActions}">
        <IconButton aria-label='Add to Cart'>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}
