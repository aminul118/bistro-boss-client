import SectionTitle from "../../../components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: Add pk key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatewaye_KEY);
const Payment = () => {
  return (
    <div>
      <SectionTitle title="Pay to order food" />
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
