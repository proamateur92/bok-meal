import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
const MealList = () => {
  return (
    <Bar>
      <Logo>bokMeals</Logo>
      <CartContainer>
        <FontAwesomeIcon icon={faCartShopping} size='lg' />
        <span>Your Cart</span>
        <AmountContainer>
          <Amount>99+</Amount>
        </AmountContainer>
      </CartContainer>
    </Bar>
  );
};

const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #8a2b06;
`;
const Amount = styled.div``;
const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  border-radius: 25px;
  font-weight: bold;
  background-color: #481705;
  span {
    margin: 0 10px;
  }
`;

const Logo = styled.span``;
const Bar = styled.div`
  padding: 10px 20px;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: #8a2b06;
  ${Logo} {
    font-weight: bold;
    font-size: 28px;
  }
`;

export default MealList;