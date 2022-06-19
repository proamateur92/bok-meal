import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import styled from 'styled-components';

const MealList = ({ onCartModal }) => {
  return (
    <Fragment>
      <Bar>
        <Logo>bokMeals</Logo>
        <HeaderCartButton />
      </Bar>
    </Fragment>
  );
};

const Logo = styled.span``;
const Bar = styled.div`
  width: 100%;
  position: fixed;
  padding: 10px 30px;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  color: #fff;
  background-color: #8a2b06;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
  ${Logo} {
    font-weight: bold;
    font-size: 28px;
  }
`;

export default MealList;
