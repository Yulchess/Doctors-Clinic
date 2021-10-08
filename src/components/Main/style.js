import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

export const MainText = styled.h1`
  font-size: 52px;
  line-height: 52px;
  margin: 0;
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 18px;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;
export const TextContent = styled.h6`
  color: ${(props) => props.theme.colors.secondary};
  margin: 0px;
`;
export const TextSubtitle = styled.h3`
  font-family: "Roboto-Regular";
  font-size: 19px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.secondary};
  margin: 0px;
  margin-top: 27px;
  @media (max-width: 340px) {
  }
`;

export const TextWrapper = styled.div`
  margin: 0;
  margin-top: 84px;
  max-width: 474px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 1070px) {
    margin: 0;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const HumanImage = styled.img`
  max-width: 600px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin-top: 11px;
`;

export const ManVectorSmall = styled.img`
  position: absolute;
  max-width: 419px;
  width: 100%;
  right: 0;
  top: 42px;
  z-index: -1;
`;

export const ManVectorLarge = styled.img`
  position: absolute;
  max-width: 600px;
  width: 100%;
  top: 40%;
  right: 0;
  z-index: -1;
`;

export const CountWrapper = styled.div`
  display: flex;
  margin-top: 98px;
  position: relative;
  width: 100%;
  @media (max-width: 1100px) {
    margin-top: 20px;
  }
  @media (max-width: 400px) {
    margin-top: 20px;
    flex-wrap: wrap;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  @media (max-width: 360px) {
    max-width: 110px;
    width: 100%;
  }
`;
export const InputSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  max-width: 150px;
  height: 20px;
  border: none;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  border-radius: 20px;
  padding: 20px 40px;
  @media (max-width: 360px) {
    max-width: 100px;
    width: 100%;
  }
`;
export const InputWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding: 6px;
  max-width: 399px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 42px;
  @media (max-width: 360px) {
    max-width: 250px;
    width: 100%;
  }
`;
export const MailIcon = styled.img`
  width: 17px;
  margin-left: 12px;
`;
export const NumberInfo = styled.p`
  font-size: 46px;
  margin: 0;
`;
export const SubtitleInfo = styled.p`
  font-family: "Roboto-Regular";
  margin: 0;
  margin-top: 10px;
`;
export const LinesIcon = styled.img`
  position: absolute;
  max-width: 521px;
  width: 100%;
  /* top: 545px;
  left: 131px; */

  z-index: -1;
`;
export const LineRigthImage = styled.img`
  position: absolute;
  max-width: 804px;
  width: 100%;

  z-index: -1;
`;
export const Counts = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ColorNumber = styled.p`
  font-size: 46px;
  margin: 0px;
  color: ${(props) => props.theme.colors.secondary};
`;
