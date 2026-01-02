import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding: 28px;
  text-align: center;
  background: rgba(20, 20, 20, 0.6); /* glassmorphism */
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 3px 15px rgba(255, 152, 0, 0.3);
`;

const Title = styled.h1`
  font-size: 2.4rem;
  color: #ff9800;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-shadow: 0 0 12px rgba(255, 152, 0, 0.6);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    text-shadow: 0 0 20px rgba(255, 152, 0, 0.8);
  }
`;

const Subtitle = styled.p`
  margin-top: 12px;
  font-size: 1.1rem;
  color: #b0b0b0;
  line-height: 1.7;
`;

const Tulasi = styled.span`
  color: #81c784;
  font-weight: 600;
  text-shadow: 0 0 8px rgba(129, 199, 132, 0.5);
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>🌸 Śrī Kṛṣṇa Prasādam Seva 🌸</Title>
      <Subtitle>
        Food lovingly prepared and offered to{" "}
        <strong>Śrī Kṛṣṇa</strong> with{" "}
        <Tulasi>fresh Tulasi leaves</Tulasi>, <br />
        infused with <strong>premā-bhakti</strong>, purity, and gratitude 🙏
      </Subtitle>
    </HeaderWrapper>
  );
}
