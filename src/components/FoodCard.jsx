import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 14px;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  color: #8a3d00;
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin-top: 6px;
`;

export default function FoodCard({ food }) {
  return (
    <Card>
      <Image src={food.image} alt={food.title} />
      <Content>
        <Title>{food.title}</Title>
        <Description>{food.description}</Description>
      </Content>
    </Card>
  );
}
