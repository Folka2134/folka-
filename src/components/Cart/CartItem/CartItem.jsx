import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'

export const CartItem = ({ item }) => {
  return (
    <Card>
      <CardMedia image={item.url} />
    </Card>
  )
}
