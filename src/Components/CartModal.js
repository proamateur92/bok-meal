import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../redux/module/cart';

const Modal = ({ isShow, isClose }) => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCloseModal = () => {
    isClose(false);
  };

  const calcPrice = cartList.reduce((acc, meal) => acc + meal.amount * meal.count, 0);

  useEffect(() => {
    setTotalPrice(calcPrice);
  }, [calcPrice]);

  const updateCount = (cart, msg) => {
    msg === 'plus' ? dispatch(updateCart(cart, 1)) : dispatch(updateCart(cart, -1));
  };
  return (
    <Container isShow={isShow}>
      <CartModal>
        <Meal>
          {cartList.map(cart => (
            <MealList key={cart.id}>
              <MealDvide>
                <MealName>
                  <div>{cart.name}</div>
                </MealName>
                <MealInfo>
                  <div>${cart.amount}</div>
                  <div>x {cart.count}</div>
                </MealInfo>
              </MealDvide>
              <MealAdd>
                <div onClick={() => updateCount(cart, 'minus')}>-</div>
                <div onClick={() => updateCount(cart, 'plus')}>+</div>
              </MealAdd>
            </MealList>
          ))}
          <MealTotal>
            <div>Total Amount</div>
            <div>${Math.round(totalPrice)}</div>
          </MealTotal>
        </Meal>
        <Buttons>
          <button onClick={handleCloseModal}>Close</button>
          <button>Order</button>
        </Buttons>
      </CartModal>
    </Container>
  );
};

const Meal = styled.div`
  padding: 20px 15px;
`;

const MealInfo = styled.div``;
const MealName = styled.div``;
const MealAdd = styled.div``;
const MealDvide = styled.div``;
const MealList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  ${MealName} {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  ${MealInfo} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:first-child {
      color: #8a2b06;
      font-weight: bold;
      margin-right: 25px;
    }
    div:last-child {
      font-size: 14px;
      font-weight: bold;
      padding: 4px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }
  ${MealAdd} {
    display: flex;
    align-items: center;
    div {
      font-size: 18px;
      font-weight: bold;
      width: 15px;
      padding: 3px 12px;
      border: 1px solid #8a2b06;
      border-radius: 5px;
      text-align: center;
      cursor: pointer;
    }
    div:first-child {
      margin-right: 10px;
    }
  }
`;

const MealTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 2px solid #8a2b06;
  div {
    font-size: 18px;
    font-weight: bold;
  }
`;

const Container = styled.div`
  position: fixed;
  display: ${props => (props.isShow ? 'visible' : 'none')};
  width: 2000px;
  height: 5000px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

const CartModal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  max-width: 800px;
  width: 60%;
  left: 50%;
  top: 35%;
  padding: 10px 5px;
  border-radius: 15px;
  background-color: white;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  button {
    border: none;
    border-radius: 20px;
    padding: 10px 25px;
    cursor: pointer;
  }
  button:first-child {
    color: #8a2b06;
    background-color: #fff;
    border: 1px solid #8a2b06;
  }
  button:first-child:hover {
    background-color: #8a2b06;
    color: #fff;
  }
  button:last-child {
    color: #fff;
    background-color: #8a2b06;
    margin: 0 10px;
  }
  button:last-child:hover {
    background-color: #481705;
  }
`;

export default Modal;
