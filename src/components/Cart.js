import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../Utils/cartSlice";

const Cart = () => {
    // Retrieve cart items from Redux store
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleDeleteItemCart = (index) => {
        dispatch(removeItem(index));
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-3xl">Cart</h1>
            <div>
                {/* Render cart items */}
                {cartItems.length > 0 ? (
                    <div>
                        {cartItems.map((item, index) => (
                            <div key={index} className="border p-2 my-2">
                                <p>{item.card.info.name}</p>
                                <p>Price: {item.card.info.price / 100  || item.card.info.defaultPrice / 100}</p>
                                <button onClick={() => handleDeleteItemCart(index)} className="bg-red-500 text-2xl text-white font-bold p-2 mx-auto rounded-lg shadow-lg">Delete Item</button>
                            </div>
                        ))}
                        {/* Clear Cart button */}
                        <button onClick={handleClearCart} className="bg-red-500 text-2xl text-white font-bold p-2 mx-auto rounded-lg shadow-lg">Clear Cart</button>
                    </div>
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
        </div>
    );
};

export default Cart;
