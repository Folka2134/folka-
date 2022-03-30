import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'

export const CartItem = ({ item }) => {
  return (
    <Card>
      <CardMedia image={item.url} alt={item.name} className="{media}" />
      <CardContent className='{cardContent}'>
        <Typography>{item.name}</Typography>
        <Typography>{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className="{cardActions}">
        <div className='{buttons}'>
          <Button type="button" size="small">-</Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small">+</Button>
        </div>
        <Button variant="contained" type="button">Remove</Button>
      </CardActions>
    </Card>
  )
}
