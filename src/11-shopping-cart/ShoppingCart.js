import { useState} from 'react'
import "../App.css"

const items = [{
  name: 'apple',
  price: 0.39
}, {
  name: 'banana',
  price: 0.79
}, {
  name: 'cherry tomatoes',
  price: 3.99
}]


function ShoppingCart () {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  
  const handleIncreaseQuantity = (item, index) => {
    console.log("cart", cart)
    setTotal(total + item.price)
    setCart((prevCart) => {
      console.log("prevcart", prevCart)
      const updatedCart = [...prevCart];
      console.log("destructured", updatedCart)
      updatedCart[index].quantity += 1;
      console.log("added", updatedCart)
      return updatedCart;
    });
    
  };
  
  const handleDecreaseQuantity = (item, itemIndex) => {
    setTotal(total - item.price)
    setCart((prevCart) => {
      let updatedCart = [...prevCart];
      if (updatedCart[itemIndex].quantity > 1) {
        updatedCart[itemIndex].quantity -= 1;
      } if (updatedCart[itemIndex].quantity === 1) {
        updatedCart.splice(itemIndex, 1);
      }
      return updatedCart;
    });
    
  };

  const handleAddToCart = (item) => {
    setTotal(total + item.price)
    setCart((prevCart) => {
      let updatedCart = [...prevCart];
      const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.name === item.name);

      if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex].quantity += 1;
      return updatedCart;
      }

      else{
        item.quantity = 1
        updatedCart.push(item)
        return updatedCart
      }
    }
    )
  }
 
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map((item, index) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>)
          )}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.length>0? cart.map((item, index) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => handleDecreaseQuantity(item, index)}>-</button>
                {item.quantity}
                <button onClick={() => handleIncreaseQuantity(item, index)}>+</button>
              </p>
              <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>

            </div>
          )) : <p>Add items</p>}
        </div>
      </div>
      <div className='total'>
        <h2>Total: ${(total).toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart
