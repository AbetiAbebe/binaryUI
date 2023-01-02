import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import styles from '../../shared.module.scss';

import CheckoutForm from '../checkoutForm/checkoutForm';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export type StripeTypes = {
  clientSecret: string;
  appearance: {
    theme: 'stripe';
    variables: {
      colorPrimary: string;
    };
  };
};

export function CheckOutFront() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('https://localhost:7080/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  // const appearance = {
  //   theme: 'stripe',
  // };
  // const options = {
  //   clientSecret,
  //   appearance,
  // };

  const options: StripeTypes = {
    // pass the client secret
    clientSecret: clientSecret,
    // Fully customizable with appearance API.
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#008b8b',
      },
    },
  };

  return (
    <div className={styles['payment-form-section']}>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default CheckOutFront;
