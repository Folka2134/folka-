import { Grid } from '@material-ui/core'
import React from 'react'
import { Product } from './Product'

// const productsData = [
//   { id: 1, name: 'Shoes', description: 'Skate shoes', price: '£70', image: 'https://www.boardoftheworld.com/wp-content/uploads/2021/07/cariuma-catiba-pro-all-black-skate-shoe-1.jpg' },
//   { id: 2, name: 'Ikea Hat', description: 'Ikea Hat', price: '£100', image: 'https://www.ikea.com/us/en/images/products/knorva-hat-blue__0812162_pe771942_s5.jpg' },
//   { id: 3, name: 'Shirt', description: 'Blue Shirt', price: '£25', image: 'https://images.houseoffraser.co.uk/images/products/55505722_4pl.jpg' },
// ]

export const Products = ({ products, handleAddToCart }) => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}
      // columns={{ xs: 2, sm: 1, md: 1 }}
      >
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={6} lg={3}>
            <Product product={product} handleAddToCart={handleAddToCart} />
          </Grid>))}
      </Grid>
    </main>
  )
}
