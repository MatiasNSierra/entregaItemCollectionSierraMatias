import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = () => {
    
    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity()

    return (
        <div class="carrito">
            <img class="img1"src='cart.png' alt="CartWidget"/>
            {quantity}
        </div>
    )
}

export default CartWidget