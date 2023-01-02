import { StripeModel } from '../state/paymentSlice'
import { api } from './api';


export const paymentApi = api.injectEndpoints({
  endpoints: (build) => ({
    customerAdd: build.mutation<{ token: string; customerModel: StripeModel }, any>({
      query: ( customerModel: StripeModel) => ({
        url: 'https://localhost:7080/api/Stripe/customer/add',
        method: 'POST',
        body: customerModel,
      }),
      invalidatesTags: [{ type: 'Payment', id: '' }],
      extraOptions: {
      },
    }),
    paymentAdd: build.mutation<{ token: string; paymentModel: StripeModel }, any>({
      query: ( paymentModel: StripeModel) => ({
        url: 'https://localhost:7080/api/Stripe/payment/add',
        method: 'POST',
        body: paymentModel,
      }),
      invalidatesTags: [{ type: 'Payment', id: '' }],
      extraOptions: {
      },
    }),
  }),
})

export const { usePaymentAddMutation } = paymentApi;


export const { endpoints: { paymentAdd }, } = paymentApi
