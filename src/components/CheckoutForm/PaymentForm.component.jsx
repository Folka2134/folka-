import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStrip } from '@stripe/stripe-js'
import { Review } from './Review.component'



export const PaymentForm = ({ checkoutToken }) => {
  return (
    <div className='flex justify-center'>
      <Review checkoutToken={checkoutToken} />
    </div>
  )
}
