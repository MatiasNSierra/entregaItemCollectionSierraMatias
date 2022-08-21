import { useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, getQuantity, getTotal } = useContext(CartContext)  

    const totalQuantity = getQuantity()
    const total = getTotal()

    if(totalQuantity === 0) {
        return (
            <>
            <h1>No hay items en el carrito</h1>
            <Link to= '/'>Volve a elegir tus productos</Link>
            </>
        )
    }

    return (     
        <div>
            <h1>Finaliza tu compra!</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()}>Limpiar carrito</button>
            <Link to='/checkout'>Finaliza la compra</Link>
        </div>
    )
}

export default Cart