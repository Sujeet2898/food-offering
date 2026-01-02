import styled from "styled-components";

const Card = styled.div`
  background: #1a1a1a;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 30px rgba(255, 152, 0, 0.3); /* glowing accent */
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
  font-size: 1.2rem;
  color: #ffb74d; /* golden accent */
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 0.95rem;
  margin-top: 6px;
  color: #cfcfcf;
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
