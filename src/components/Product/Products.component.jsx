import { Grid } from '@material-ui/core'
import React from 'react'
import { Product } from './Product'

const products = [
  { id: 1, name: 'Shoes', description: 'Skate shoes', price: '£70' },
  { id: 2, name: 'Macbook', description: 'Apple MacBook', price: '£100' },
  { id: 3, name: 'Shirt', description: 'Blue Shirt', price: '£25' },
]

export const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>))}
        )
      </Grid>
    </main>
  )
}
