import styled from "styled-components";

const Card = styled.div`
  background: rgba(30, 30, 30, 0.6); /* glassmorphism */
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0,0,0,0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px) rotate3d(1, 1, 0, 3deg); /* tilt effect */
    box-shadow: 0 8px 30px rgba(255, 152, 0, 0.4); /* glowing shadow */
  }

  &:active {
    transform: scale(0.98); /* ripple-like press effect */
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
  text-shadow: 0 0 8px rgba(255, 183, 77, 0.6);
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
