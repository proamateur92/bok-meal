// redux
import { useSelector } from 'react-redux';

// style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const HeaderCartButton = props => {
  const cartList = useSelector(state => state.cart);
  const allMealCount = cartList.reduce((acc, val) => acc + val.count, 0);

  const handleCartModal = () => {
    // onCartModal(true);
  };
  return (
    <Button onClick={handleCartModal} color='#fff'>
      <FontAwesomeIcon icon={faCartShopping} size='lg' />
      <span>Your Cart</span>
      <AmountContainer>
        <Amount>{allMealCount}</Amount>
      </AmountContainer>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  border-radius: 25px;
  font-weight: bold;
  background-color: #481705;
  color: ${props => props.color && props.color};
  cursor: pointer;
  span {
    margin: 0 10px;
  }
`;

const Amount = styled.div``;
const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #8a2b06;
`;

export default HeaderCartButton;
