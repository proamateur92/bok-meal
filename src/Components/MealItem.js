import styled from 'styled-components';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCart, updateCart } from '../redux/module/cart';

const MealItem = ({ meal }) => {
  const [mealCount, setMealCount] = useState(1);

  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cart);

  const updateMealCount = event => {
    const amount = parseInt(event.target.value);

    if (amount === 0) {
      setMealCount(1);
      return;
    }

    setMealCount(event.target.value);
  };

  // 장바구니 담기
  const addCart = () => {
    // 장바구니에 담긴 음식이 없으면 주문서 추가
    if (!cartList.length) {
      dispatch(createCart(meal, parseInt(mealCount, 10)));
    } else {
      const matchMeal = cartList.filter(cart => cart.id === meal.id);

      if (!matchMeal.length) {
        dispatch(createCart(meal, parseInt(mealCount, 10), 'sum'));
      } else {
        // 장바구니에 음식이 담겨 있으면 주문서 수정
        dispatch(updateCart(meal, parseInt(mealCount, 10), 'sum'));
      }
    }
  };

  return (
    <MealBox key={meal.name}>
      <MealInfo>
        <div>{meal.name}</div>
        <div>{meal.desc}</div>
        <div>${meal.amount}</div>
      </MealInfo>
      <MealSelect>
        <MealQuantity>
          <span>Amount</span>
          <input type='text' value={mealCount} maxLength={2} onChange={updateMealCount} />
        </MealQuantity>
        <AddMeal onClick={addCart}>+Add</AddMeal>
      </MealSelect>
    </MealBox>
  );
};

const MealBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #d3d3d3;
  &:last-child {
    border-bottom: none;
  }
`;

const MealInfo = styled.div`
  div {
    margin-bottom: 5px;
  }
  div:first-child {
    font-size: 18px;
    font-weight: bold;
  }
  div:nth-child(2) {
    font-style: italic;
    color: #778899;
  }
  div:last-child {
    font-size: 18px;
    color: #a62929;
    font-weight: bold;
  }
`;

const MealSelect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const MealQuantity = styled.div`
  display: flex;
  align-items: center;
  span {
    display: block;
    font-weight: bold;
    margin-right: 10px;
  }
  input {
    width: 15px;
    padding: 3px 8px;
    border-radius: 5px;
    border: 1px solid #c0c0c0;
  }
`;
const AddMeal = styled.div`
  width: 80px;
  height: 20px;
  padding: 5px;
  line-height: 20px;
  text-align: center;
  margin: 0 auto;
  font-weight: bold;
  border-radius: 30px;
  color: #fff;
  background-color: #8a2b09;
  cursor: pointer;
`;

export default MealItem;
