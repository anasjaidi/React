import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {uiSliceActions} from "../../store/uiSlice.js";
const CartButton = (props) => {
    const dispatch = useDispatch()
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const toggleCartHandler = e => {
        // e.preventDefault()
        dispatch(uiSliceActions.toggle())
    }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
