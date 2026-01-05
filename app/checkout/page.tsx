'use client'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { useMemo } from 'react'
import { useRouter } from 'next/navigation'

const CheckoutPage = () => {
    const cartItems = useQuery(api.cart.getCartItems)
    const router = useRouter()

    const total = useMemo(() => {
        if (!cartItems) return 0
        return cartItems.reduce((acc, item) => acc + ((item.product?.price ?? 0) * item.quantity), 0)
    }, [cartItems])

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold mb-5">Checkout</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-xl font-bold mb-5">Shipping Information</h2>
                    {/* Add your shipping form here */}
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-5">Order Summary</h2>
                    <div className="flex flex-col gap-5">
                        {cartItems?.map((item) => (
                            <div key={item._id} className="flex justify-between">
                                <p>{item.product?.name} x{item.quantity}</p>
                                <p>${(item.product?.price ?? 0) * item.quantity}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-5">
                        <p className="text-black/50">TOTAL</p>
                        <p className="text-black font-bold">${total}</p>
                    </div>
                    <button
                        onClick={() => alert('Payment processing is not implemented yet.')}
                        className="bg-orange-100 text-white hover:bg-orange-200 w-full text-center py-3 mt-5"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage
