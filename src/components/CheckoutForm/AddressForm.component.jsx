import React, { useState, useEffect } from 'react'

import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'

import { commerce } from '../../lib/commerce'

import { FormInput } from './FormInput.component'

export const AddressForm = ({ checkoutToken }) => {
  const [shippingCountries, setShippingContries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingSubdivision, setShippingSubdivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState('')

  const methods = useForm()

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }))
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }))

  const fetchShippingContries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)

    setShippingContries(countries)
    setShippingCountry(Object.keys(countries)[0])
  }

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)

    console.log(subdivisions);
    setShippingSubdivisions(subdivisions)
    setShippingSubdivision(Object.keys(subdivisions)[0])
  }

  useEffect(() => {
    fetchShippingContries(checkoutToken.id)
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry)
  }, [shippingCountry])

  const submit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods}>
        <form onSubmit={submit}>
          <Grid container spacing={3}>
            <FormInput required name='firstName' label='First name' />
            <FormInput required name='lastName' label='Last name' />
            <FormInput required name='address1' label='Address' />
            <FormInput required name='email' label='Email' />
            <FormInput required name='city' label='City' />
            <FormInput required name='zip' label='ZIP / Post code' />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Contry</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {subdivisions.map((subdivision) => (
                  <MenuItem key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                  </MenuItem>
                ))}
              </Select>
              {/* <InputLabel>Shipping Options</InputLabel>
              <Select value={1} fullWidth onChange={''}>
                <MenuItem key={1} value={1}>
                  Country
                </MenuItem>
              </Select> */}
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  )
}
