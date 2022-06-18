import React, { useState } from 'react';

// 각 컴포넌트 import
import MealList from './Components/MealList';
import Header from './Components/Header';
import CartModal from './Components/CartModal';

// style
import GlobalStyles from './Components/GlobalStyles';
import styled from 'styled-components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { createCart, updateCart } from './redux/module/cart';

function App() {
  const dispatch = useDispatch();

  const DUMMY_DATA = [
    { id: 0, name: 'Sushi', desc: 'Finest fish and veggies', amount: '22.99' },
    { id: 1, name: 'Schnitzel', desc: 'A german specialty!', amount: '16.50' },
    { id: 2, name: 'Barbecue Burger', desc: 'American, raw, meaty', amount: '12.99' },
    { id: 3, name: 'Green Bowl', desc: 'Healthy...and green', amount: '18.99' },
  ];

  const cartList = useSelector(state => state.cart);

  // 장바구니 모달 띄워주기
  const [showCartModal, setShowCartModal] = useState(false);

  const handleCartModal = result => {
    setShowCartModal(result);
  };

  const closeCartModal = result => {
    setShowCartModal(result);
  };

  return (
    <>
      <Container>
        <Box>
          <GlobalStyles />
          <Header onCartModal={handleCartModal} />
          <Cover>
            <img />
            <Guide>
              <p>Delicious Food, Delivered To You</p>
              <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
              <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
            </Guide>
          </Cover>
          <MealList meals={DUMMY_DATA} />
        </Box>
      </Container>
      <CartModal isShow={showCartModal} isClose={closeCartModal} />
    </>
  );
}

const Cover = styled.div`
  width: 100%;
  height: 200px;
  background-color: red;
  img {
    width: 100%;
    height: 120%;
    background: url('images/cover.jpg') center/cover no-repeat;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  position: relative;
`;
const Guide = styled.div`
  position: absolute;
  width: 50%;
  max-width: 600px;
  padding: 10px 30px;
  background-color: #363636;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  transform: translateX(-50%);
  left: 50%;
  top: 150px;
  p {
    display: inline-block;
    margin: 10px 0;
    line-height: 20px;
  }
  p:first-child {
    font-weight: bold;
    font-size: 20px;
  }
`;

export default App;
