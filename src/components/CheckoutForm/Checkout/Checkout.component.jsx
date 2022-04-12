import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'

import { commerce } from '../../../lib/commerce'

import { AddressForm } from '../AddressForm.component'
import { PaymentForm } from '../PaymentForm.component'
import { Confirmation } from '../Confirmation.component'

const steps = ['Shipping address', 'Payment details']

export const Checkout = ({ cart, order, handleCaptureCheckout, error }) => {
  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [shippingData, setShippingData] = useState({})

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
        setCheckoutToken(token)
      } catch (error) {
        console.log(error);
      }
    }
    generateToken()
  }, [cart])

  const nextStep = () => setActiveStep((prevStep) => prevStep + 1)
  const backStep = () => setActiveStep((prevStep) => prevStep - 1)

  const next = (data) => {
    setShippingData(data)
    nextStep()
  }

  const Form = () => activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} next={next} />
    : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} handleCaptureCheckout={handleCaptureCheckout} nextStep={nextStep} />

  return (
    <div className='h-screen min-w-[250px] lg:w-full lg:px-12 flex justify-center'>
      <div />
      <main className='mt-[5%] w-auto mx-2' >
        <Paper className='mx-3 p-2'>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className="p-3">
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </div>
  )
}
