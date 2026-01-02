import styled from "styled-components";
import FoodCard from "./FoodCard";
import foodData from "../data/foodData";

const Grid = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
`;

export default function FoodGrid() {
  return (
    <Grid>
      {foodData.map(food => (
        <FoodCard key={food.id} food={food} />
      ))}
    </Grid>
  );
}
