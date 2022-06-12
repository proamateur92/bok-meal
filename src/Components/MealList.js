import styled from 'styled-components';

const MealList = props => {
  return (
    <Container>
      {props.meals.map(meal => (
        <div key={meal.name}>
          <div>{meal.name}</div>
          <div>{meal.desc}</div>
          <div>{meal.amount}</div>
          <div>{meal.quantity}</div>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  padding: 15px;
  background-color: #fff;
  margin: auto;
  border-radius: 10px;
`;
export default MealList;
