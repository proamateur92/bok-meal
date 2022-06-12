import React, { useState } from 'react';
import MealList from './MealList';
import Header from './Header';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';

const DUMMY_DATA = [
  { name: 'Sushi', desc: 'Finest fish and veggies', amount: '22.99', quantity: '1' },
  { name: 'Schnitzel', desc: 'A german specialty!', amount: '16.50', quantity: '1' },
  { name: 'Barbecue Burger', desc: 'American, raw, meaty', amount: '12.99', quantity: '1' },
  { name: 'Green Bowl', desc: 'Healthy...and green', amount: '18.99', quantity: '1' },
];

function App() {
  const [data, setData] = useState(DUMMY_DATA);
  return (
    <Container>
      <Box>
        <GlobalStyles />
        <Header />
        <Cover>
          <img alt='배경이미지' />
          <Guide>
            <p>Delicious Food, Delivered To You</p>
            <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
            <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
          </Guide>
        </Cover>
        <MealList meals={data} />
      </Box>
    </Container>
  );
}

const Cover = styled.div`
  height: 200px;
  overflow: hidden;
  img {
    width: 100%;
    height: 120%;
    background: url('images/cover.jpg') center/cover no-repeat;
    transform: skewY(-4deg) translateY(-100px);
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
