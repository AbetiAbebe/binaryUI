import { createSlice } from '@reduxjs/toolkit'
import { paymentApi } from '../services/payment';


interface creditCard {
  name            : string,
  cardNumber      : string,
  expirationYear  : string
  expirationMonth : string,
  cvc             : string
}

export interface StripeModel {
  email     : string,
  name      : string,
  creditCard: creditCard
}

export interface PaymentState {
  stripeModel    : StripeModel ,
  paymentStatus  : boolean | string,
  paymentMessage : string | null,
  error?         : string | null | Error
}

const initialState: PaymentState = {
  stripeModel : {
    email       : '',
    name        : '',
    creditCard  : {
      name            : '',
      cardNumber      : '',
      expirationYear  : '',
      expirationMonth : '',
      cvc             : ''
    }
  },
  paymentStatus  : false,
  paymentMessage : null,
  error          : null
}

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(paymentApi.endpoints.paymentAdd.matchPending, (state, action) => {
        console.log('pending', action)
      })
      .addMatcher(paymentApi.endpoints.paymentAdd.matchFulfilled, (state, action: any) => {
        console.log('fulfilled', action)
        state.paymentStatus  = action.payload.data.Succeeded;
        state.paymentMessage = action.payload.data.Message;
        state.error          = action.payload.data.error;
      })
      .addMatcher(paymentApi.endpoints.paymentAdd.matchRejected, (state, action: any) => {
        console.log('rejected', action)
        console.log('rejected #2', action.payload.data)
        state.paymentStatus  = action.payload.data.Succeeded;
        state.paymentMessage = action.payload.data.Message;
        state.error          = action.payload.data.Errors
      })
  },
})

// Action creators are generated for each case reducer function
// export const {  register } = authSlice.actions

export default paymentSlice.reducer

export const getPaymentStatus  = (state: any) => state.paymentStatus;
export const getPaymentMessage = (state: any) => state.paymentMessage;
export const getPaymentError   = (state: any) => state.error;

