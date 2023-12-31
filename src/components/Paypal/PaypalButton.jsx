import { PayPalButtons } from "@paypal/react-paypal-js";
import { useContext } from "react"; 
import ProductsContext from "../../context/ProductsContext/ProductsContext";

export const PaypalButton = ({ invoice, totalValue, onPaymentSuccess }) => {
  const { clearCart } = useContext(ProductsContext)

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
                try {
                  console.log(order)
                  Swal.fire(
                    `Pago Exitoso id: ${order.id}`,
                    `Gracias ${order.payer.name.given_name} ${order.payer.name.surname} `,
                    'success'
                  )
                  clearCart()
                  onPaymentSuccess(order);
                } catch (error) {
                    // console.error()
                    Swal.fire({
                      position: 'top-end',
                      icon: 'error',
                      title: `Status:${error}`,
                      showConfirmButton: true,
                      timer: 1500
                    })
                }

      } }
    />
  );
};
