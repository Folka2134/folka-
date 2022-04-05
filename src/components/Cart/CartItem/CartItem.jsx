import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'

import { ImBin } from 'react-icons/im'

export const CartItem = ({ item }) => {
  return (
    <Card className='w-[200px]'>
      <CardMedia image={item.image.url} alt={item.name} className="h-[100px] w-[200px]" />
      <CardContent className='flex justify-between'>
        <Typography>{item.name}</Typography>
        <Typography>{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className="flex justify-between">
        <div className='flex items-center'>
          <Button type="button" size="small">-</Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small">+</Button>
        </div>
        <Button type="button"><ImBin /></Button>
      </CardActions>
    </Card>
  )
}
