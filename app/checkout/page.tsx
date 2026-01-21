"use client";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "../store/cartStore";

const CheckoutPage = () => {
  const { cartItems, total } = useCartStore();
  const router = useRouter();

  return (
    <div className="bg-[#FAFAFA]">
      <div className="bg-black h-19 w-full" />
      <p
        className="cursor-pointer text-black/50 mt-10 padding-container"
        onClick={() => {
          router.back();
        }}
      >
        Go Back
      </p>
      <div className="container padding-container mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white md:col-span-2 rounded-lg p-3 flex flex-col gap-5">
            <h2 className="text-2xl font-bold mb-5 p-3">CHECKOUT</h2>
            <p className="text-orange-100">BILLING DETAILS</p>
            <div className="flex gap-2 flex-col">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                name="Name"
                placeholder="Alexei Ward"
                className="border border-[#cfcfcf] rounded-md p-3 w-full"
              />
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="Name">Email Address</label>
              <input
                type="email"
                name="Name"
                placeholder="alexei@gmail.com"
                className="border border-[#cfcfcf] rounded-md p-3 w-full"
              />
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="Name">Phone Number</label>
              <input
                type="text"
                name="Name"
                placeholder="+234 8012345678"
                className="border border-[#cfcfcf] rounded-md p-3 w-full"
              />
            </div>
            <p className="text-orange-100">SHIPPING INFO</p>
            <div className="flex gap-2 flex-col">
              <label htmlFor="address">Your Address</label>
              <input
                type="text"
                name="address"
                placeholder="1137 Williams Avenue"
                className="border border-[#cfcfcf] rounded-md p-3 w-full"
              />
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="zip">ZIP Code</label>
              <input
                type="text"
                name="zip"
                placeholder="10001"
                className="border border-[#cfcfcf] rounded-md p-3 w-full"
              />
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                placeholder="New York"
                className="border border-[#cfcfcf] rounded-md p-3 w-full"
              />
            </div>{" "}
            <div className="flex gap-2 flex-col">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                placeholder="United States"
                className="border border-[#cfcfcf] rounded-md p-3 w-full"
              />
            </div>
            <p className="text-orange-100">PAYMENT DETAILS</p>
            <div className="flex gap-2 flex-col">
              <label htmlFor="payment-method">Payment Method</label>
              <div className="flex flex-col md:flex-row gap-5">
                <button className="border border-[#cfcfcf] rounded-md p-3 w-full flex items-center gap-3">
                  <input type="radio" name="payment-method" />
                  <span>e-Money</span>
                </button>
                <button className="border border-[#cfcfcf] rounded-md p-3 w-full flex items-center gap-3">
                  <input type="radio" name="payment-method" />
                  <span>Cash on Delivery</span>
                </button>
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="e-money-number">e-Money Number</label>
              <input
                type="text"
                name="e-money-number"
                placeholder="238521"
                className="border border-[#cfcfcf] rounded-md p-3 w-full"
              />
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="e-money-pin">e-Money PIN</label>
              <input
                type="text"
                name="e-money-pin"
                placeholder="6891"
                className="border border-[#cfcfcf] rounded-md p-3 w-full"
              />
            </div>
          </div>
          <div className="md:col-span">
            <h2 className="text-xl mb-5">SUMMARY</h2>
            <div className="flex flex-col gap-5">
              {cartItems?.map((item) => (
                <div key={item.product._id} className="flex justify-between">
                  <p>
                    {item.product?.name} x{item.quantity}
                  </p>
                  <p>${(item.product?.price ?? 0) * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-black/50">TOTAL</p>
              <p className="text-black font-bold">${total}</p>
            </div>
            <div className="flex justify-between">
              <p>SHIPPING</p>
              <p className="font-bold">$50</p>
            </div>
            <div className="flex justify-between">
              <p>VAT (INCLUDED)</p>
              <p className="font-bold">$107</p>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-black/50">GRAND TOTAL</p>
              <p className="text-orange-100 font-bold text-lg">
                ${total + 50}
              </p>
            </div>
            <button
              onClick={() =>
                alert("Payment processing is not implemented yet.")
              }
              className="bg-orange-100 text-white hover:bg-orange-200 w-full text-center py-3 mt-5"
            >
              Continue & Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
