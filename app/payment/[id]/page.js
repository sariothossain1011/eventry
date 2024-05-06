import PaymentForm from "@/components/payment/PaymentForm";
import React from "react";

const PaymentPage = ({params:{id}}) => {
  return (
    <section className="container">
      <div className="bg-[#242526] p-6 rounded-lg max-w-xl mx-auto my-12">
        <h2 className="font-bold text-xl mb-8">Payment Details</h2>
        <PaymentForm eventId={id} />
      </div>
    </section>
  );
};

export default PaymentPage;