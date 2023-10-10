import { PayPalButtons } from "@paypal/react-paypal-js";

export const PaypalButton = ({ invoice, totalValue }) => {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: invoice,
              amount: {
                value: totalValue,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions)=>{
        const order = await actions.order?.capture()
        // if order si se cumplio la data
        console.log(order);
      } }
    />
  );
};
