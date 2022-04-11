import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'

import { AddressForm } from '../AddressForm.component'
import { PaymentForm } from '../PaymentForm.component'
import { Confirmation } from '../Confirmation.component'

const steps = ['Shipping address', 'Payment details']

export const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0)

  const Form = () => activeStep === 0
    ? <AddressForm />
    : <PaymentForm />

  return (
    <div className='h-screen min-w-[250px] lg:w-full lg:px-12'>
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
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </div>
  )
}
