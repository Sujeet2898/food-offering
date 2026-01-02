import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding: 22px;
  text-align: center;
  background: linear-gradient(135deg, #fff7e6, #ffefe0);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #a14b00;
  font-weight: 700;
  letter-spacing: 1px;
`;

const Subtitle = styled.p`
  margin-top: 10px;
  font-size: 1.05rem;
  color: #5c3b1e;
  line-height: 1.6;
`;

const Tulasi = styled.span`
  color: #2e7d32;
  font-weight: 600;
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
