import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'


export const Review = ({ checkoutToken }) => {
  return (
    <div className='w-[500px]'>
      <Typography variant='h6'>Order summary</Typography>
      <List disablePadding>
        {checkoutToken.live.line_items.map((product) => (
          <ListItem className='p-[10px]' key={product.name}>
            <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
            <Typography variant='body2'>{product.line_total.formatted_with_symbol}</Typography>
          </ListItem>
        ))}
        <ListItem className='p-[10px]'>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' className='font-bold'>
            {checkoutToken.live.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </div>
  )
}
