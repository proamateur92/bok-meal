import styled from 'styled-components';
import MealItem from './MealItem';

const MealList = ({ meals }) => {
  return (
    <Container>
      {meals.map(meal => (
        <MealItem key={meal.desc} meal={meal} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 15px;
  background-color: #fff;
  margin: auto;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 140px auto 50px auto;
`;

export default MealList;
