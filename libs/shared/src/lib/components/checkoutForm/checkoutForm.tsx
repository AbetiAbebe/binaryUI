import React, { FormEvent, useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import styles from '../../shared.module.scss';
import { usePaymentAddMutation } from "../../services/payment";
import { StripeModel } from "../../state/paymentSlice";
import { Form } from "antd";
import { StripeTypes } from "../checkoutFront/checkoutFront";



export function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [Payment] = usePaymentAddMutation();

  const [email, setEmail] = useState('');
  const [clientSecretState , setClientSecret] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    setClientSecret(clientSecret);


    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const paymentElementOptions = {
    layout: "tabs"
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const card = elements?.getElement(PaymentElement);

    console.log('# FORM DATA' , e.target);
    // const { name , email, cardNumber, expirationYear, expirationMonth, cvc } = elements;

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } : any = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: '',

        //"http://localhost:3000",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message.toString());
    } else {
      setMessage("An unexpected error occurred.");
    }
    const formData:  StripeModel ={
      email       : '',
      name        : '',
      creditCard  : {
        name            : '',
        cardNumber      : '',
        expirationYear  : '',
        expirationMonth : '',
        cvc             : ''
      }
    }

    // const formData:  StripeModel = {
    //   email       : email,
    //   name        : name,
    //   creditCard  : {
    //     name            : name,
    //     cardNumber      : cardNumber,
    //     expirationYear  : expirationYear,
    //     expirationMonth : expirationMonth,
    //     cvc             : cvc
    //   }
    // };
    console.log('Payment GET:', formData);

    const paymentData: any = await Payment({formData});
    console.log('Payment Info:', paymentData);

    setIsLoading(false);
  };

  const options: StripeTypes = {
    // pass the client secret
    clientSecret: clientSecretState,
    // Fully customizable with appearance API.
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#008b8b',
      },
    },
  };



  return (

    <form id="payment-form" className={styles['payment-form']} onSubmit={handleSubmit}>

      <h2 className={styles['title']}>Add your card</h2>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <PaymentElement id="payment-element"  options={{layout : 'tabs'}}/>
      {/* <PaymentElement /> */}
      <button className={styles['pay-now-btn']} disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}


export default CheckoutForm;
