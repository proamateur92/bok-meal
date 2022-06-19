import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const MealList = ({ onCartModal }) => {
  const cartList = useSelector(state => state.cart);
  const allMealCount = cartList.reduce((acc, val) => acc + val.count, 0);
  const handleCartModal = () => {
    onCartModal(true);
  };
  return (
    <>
      <Bar>
        <Logo>bokMeals</Logo>
        <CartContainer onClick={handleCartModal}>
          <FontAwesomeIcon icon={faCartShopping} size='lg' />
          <span>Your Cart</span>
          <AmountContainer>
            <Amount>{allMealCount}</Amount>
          </AmountContainer>
        </CartContainer>
      </Bar>
    </>
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
  cursor: pointer;
  span {
    margin: 0 10px;
  }
`;

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
