import Card from '../UI/Card.jsx';
import classes from './Cart.module.css';
import CartItem from './CartItem.jsx';
import {useSelector} from "react-redux";

const Cart = (props) => {
    const items = useSelector(state => state.cart.items)

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {items.map(el => {
                    return (
                        <CartItem
                            key={el.id}
                            item={{ title: el.name, quantity: el.quantity, total: el.totalPrice, price: el.price, id: el.id }}
                        />
                    )
                })
                }
            </ul>
        </Card>
    );
};

export default Cart;
