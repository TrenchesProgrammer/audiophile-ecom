"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCartStore, CartItem } from "../store/cartStore";

interface OrderConfirmationData {
  orderId: string;
  items: CartItem[];
  grandTotal: number;
}

const CheckoutPage = () => {
  const { cartItems, total, checkout } = useCartStore();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "Alexei Ward",
    email: "alexei@gmail.com",
    phone: "+234 8012345678",
    address: "1137 Williams Avenue",
    zip: "10001",
    city: "New York",
    country: "United States",
    paymentMethod: "e-money",
    eMoneyNumber: "238521",
    eMoneyPin: "6891",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [orderConfirmation, setOrderConfirmation] = useState<OrderConfirmationData | null>(null);

  const shipping = cartItems.length > 0 ? 50 : 0;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentSelect = (method: string) => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (cartItems.length === 0) {
      setErrorMessage("Your cart is empty. Please add products before checking out.");
      return;
    }

    if (!formData.email || !formData.email.includes("@")) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    try {
      setIsSubmitting(true);
      // Capture items before checkout clears them
      const itemsSnapshot = [...cartItems];
      const snapshotTotal = grandTotal;

      const res = await checkout(formData.email);
      if (res && res.success) {
        setOrderConfirmation({
          orderId: res.orderid || res.order?.id || "ORDER-" + Date.now(),
          items: itemsSnapshot,
          grandTotal: snapshotTotal,
        });
      } else {
        setErrorMessage("Checkout failed. Please try again.");
      }
    } catch (err: unknown) {
      console.error("Checkout error:", err);
      const msg = err instanceof Error ? err.message : "Checkout failed. Please check your connection and try again.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToHome = () => {
    setOrderConfirmation(null);
    router.push("/");
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-20">
      <div className="bg-black h-19 w-full" />
      <p
        className="cursor-pointer text-black/50 mt-10 padding-container hover:text-orange-100 transition"
        onClick={() => router.back()}
      >
        Go Back
      </p>

      <div className="container padding-container mx-auto p-5">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* CHECKOUT FORM */}
          <div className="bg-white lg:col-span-2 rounded-lg p-6 md:p-10 flex flex-col gap-6 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide">CHECKOUT</h2>

            {errorMessage && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm">
                {errorMessage}
              </div>
            )}

            {/* BILLING DETAILS */}
            <p className="text-orange-100 text-sm font-bold tracking-wider uppercase">
              BILLING DETAILS
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Alexei Ward"
                  className="border border-[#cfcfcf] rounded-md p-3 text-sm focus:border-orange-100 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="alexei@gmail.com"
                  className="border border-[#cfcfcf] rounded-md p-3 text-sm focus:border-orange-100 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="phone" className="text-xs font-bold">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+234 8012345678"
                  className="border border-[#cfcfcf] rounded-md p-3 text-sm focus:border-orange-100 focus:outline-none"
                />
              </div>
            </div>

            {/* SHIPPING INFO */}
            <p className="text-orange-100 text-sm font-bold tracking-wider uppercase mt-4">
              SHIPPING INFO
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="address" className="text-xs font-bold">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="1137 Williams Avenue"
                  className="border border-[#cfcfcf] rounded-md p-3 text-sm focus:border-orange-100 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="zip" className="text-xs font-bold">ZIP Code</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    required
                    placeholder="10001"
                    className="border border-[#cfcfcf] rounded-md p-3 text-sm focus:border-orange-100 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="city" className="text-xs font-bold">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="New York"
                    className="border border-[#cfcfcf] rounded-md p-3 text-sm focus:border-orange-100 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="country" className="text-xs font-bold">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  placeholder="United States"
                  className="border border-[#cfcfcf] rounded-md p-3 text-sm focus:border-orange-100 focus:outline-none"
                />
              </div>
            </div>

            {/* PAYMENT DETAILS */}
            <p className="text-orange-100 text-sm font-bold tracking-wider uppercase mt-4">
              PAYMENT DETAILS
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
              <p className="text-xs font-bold">Payment Method</p>
              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() => handlePaymentSelect("e-money")}
                  className={`border rounded-md p-3 w-full flex items-center gap-4 cursor-pointer text-sm font-bold transition ${
                    formData.paymentMethod === "e-money"
                      ? "border-orange-100 ring-1 ring-orange-100"
                      : "border-[#cfcfcf]"
                  }`}
                >
                  <input
                    type="radio"
                    checked={formData.paymentMethod === "e-money"}
                    onChange={() => handlePaymentSelect("e-money")}
                    className="accent-orange-100"
                  />
                  <span>e-Money</span>
                </button>
                <button
                  type="button"
                  onClick={() => handlePaymentSelect("cash")}
                  className={`border rounded-md p-3 w-full flex items-center gap-4 cursor-pointer text-sm font-bold transition ${
                    formData.paymentMethod === "cash"
                      ? "border-orange-100 ring-1 ring-orange-100"
                      : "border-[#cfcfcf]"
                  }`}
                >
                  <input
                    type="radio"
                    checked={formData.paymentMethod === "cash"}
                    onChange={() => handlePaymentSelect("cash")}
                    className="accent-orange-100"
                  />
                  <span>Cash on Delivery</span>
                </button>
              </div>
            </div>

            {formData.paymentMethod === "e-money" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="eMoneyNumber" className="text-xs font-bold">e-Money Number</label>
                  <input
                    type="text"
                    id="eMoneyNumber"
                    name="eMoneyNumber"
                    value={formData.eMoneyNumber}
                    onChange={handleInputChange}
                    placeholder="238521"
                    className="border border-[#cfcfcf] rounded-md p-3 text-sm focus:border-orange-100 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="eMoneyPin" className="text-xs font-bold">e-Money PIN</label>
                  <input
                    type="text"
                    id="eMoneyPin"
                    name="eMoneyPin"
                    value={formData.eMoneyPin}
                    onChange={handleInputChange}
                    placeholder="6891"
                    className="border border-[#cfcfcf] rounded-md p-3 text-sm focus:border-orange-100 focus:outline-none"
                  />
                </div>
              </div>
            ) : (
              <p className="text-black/50 text-sm leading-relaxed mt-2">
                The &lsquo;Cash on Delivery&rsquo; option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
              </p>
            )}
          </div>

          {/* SUMMARY SIDEBAR */}
          <div className="bg-white rounded-lg p-6 md:p-8 flex flex-col gap-6 shadow-sm h-fit">
            <h2 className="text-lg font-bold tracking-wider">SUMMARY</h2>
            <div className="flex flex-col gap-4 max-h-64 overflow-y-auto">
              {cartItems?.length === 0 ? (
                <p className="text-black/50 text-sm">No items in cart</p>
              ) : (
                cartItems?.map((item) => (
                  <div key={item.product._id} className="flex justify-between items-center gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 bg-gray-100 rounded-md shrink-0 flex items-center justify-center overflow-hidden">
                        <Image
                          src={item.product.image.startsWith('/') ? item.product.image : `/${item.product.image}`}
                          alt={item.product.name}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <p className="font-bold text-sm truncate">{item.product?.name}</p>
                        <p className="text-black/50 text-xs font-bold">
                          ₦{Number(item.product?.price ?? 0).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <p className="text-black/50 text-sm font-bold shrink-0">x{item.quantity}</p>
                  </div>
                ))
              )}
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
              <div className="flex justify-between text-sm">
                <span className="text-black/50 uppercase">TOTAL</span>
                <span className="font-bold">₦{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-black/50 uppercase">SHIPPING</span>
                <span className="font-bold">₦{shipping}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-black/50 uppercase">VAT (INCLUDED)</span>
                <span className="font-bold">₦{vat.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mt-3 text-base">
                <span className="text-black/50 uppercase">GRAND TOTAL</span>
                <span className="text-orange-100 font-bold text-lg">
                  ₦{grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || cartItems.length === 0}
              className="bg-orange-100 text-white hover:bg-orange-200 disabled:opacity-50 disabled:cursor-not-allowed w-full text-center py-4 font-bold tracking-wider text-sm transition"
            >
              {isSubmitting ? "PROCESSING ORDER..." : "CONTINUE & PAY"}
            </button>
          </div>
        </form>
      </div>

      {/* ORDER CONFIRMATION MODAL */}
      {orderConfirmation && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 md:p-12 max-w-lg w-full flex flex-col gap-6 shadow-2xl animate-fade-in">
            {/* Orange Checkmark Icon */}
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-white text-3xl font-bold">
              ✓
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight uppercase">
                THANK YOU <br /> FOR YOUR ORDER
              </h2>
              <p className="text-black/50 text-sm">
                A confirmation email has been sent to{" "}
                <span className="font-semibold text-black">{formData.email}</span>.
              </p>
              <div className="mt-2 text-xs bg-gray-100 p-2 rounded text-black/70">
                <span className="font-bold">Order ID:</span> {orderConfirmation.orderId}
              </div>
            </div>

            {/* Order Items Preview and Total Box */}
            <div className="flex flex-col md:flex-row rounded-lg overflow-hidden bg-gray-100">
              <div className="p-6 flex-1 flex flex-col justify-center">
                {orderConfirmation.items[0] && (
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded flex items-center justify-center overflow-hidden shrink-0">
                      <Image
                        src={
                          orderConfirmation.items[0].product.image.startsWith('/')
                            ? orderConfirmation.items[0].product.image
                            : `/${orderConfirmation.items[0].product.image}`
                        }
                        alt={orderConfirmation.items[0].product.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col min-w-0 flex-1">
                      <p className="font-bold text-xs truncate">
                        {orderConfirmation.items[0].product.name}
                      </p>
                      <p className="text-black/50 text-xs font-bold">
                        ₦{Number(orderConfirmation.items[0].product.price).toLocaleString()}
                      </p>
                    </div>
                    <p className="text-black/50 text-xs font-bold">
                      x{orderConfirmation.items[0].quantity}
                    </p>
                  </div>
                )}
                {orderConfirmation.items.length > 1 && (
                  <p className="text-xs text-black/50 border-t border-gray-200 mt-3 pt-3 text-center font-bold">
                    and {orderConfirmation.items.length - 1} other item(s)
                  </p>
                )}
              </div>
              <div className="bg-black text-white p-6 flex flex-col justify-center gap-2 md:w-44">
                <p className="text-white/50 text-xs uppercase tracking-wider">GRAND TOTAL</p>
                <p className="font-bold text-lg">
                  ₦{orderConfirmation.grandTotal.toLocaleString()}
                </p>
              </div>
            </div>

            <button
              onClick={handleBackToHome}
              className="bg-orange-100 hover:bg-orange-200 text-white w-full py-4 font-bold tracking-wider text-sm transition"
            >
              BACK TO HOME
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
