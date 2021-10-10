import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  width: ${({ theme }) => theme.width[5]}%;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg[1]}px) {
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xl[0]}px) {
    justify-content: center;
  }
`;

export const MainText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[7]}px;
  line-height: ${({ theme }) => theme.height[5]}px;
  margin: ${({ theme }) => theme.spacing[0]};
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: ${({ theme }) => theme.spacing[8]}px;
  text-align: left;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs[1]}px) {
    font-size: ${({ theme }) => theme.fontSize[4]}px;
    line-height: ${({ theme }) => theme.height[4]}px;
  }
`;
export const TextContent = styled.h6`
  color: ${({ theme }) => theme.colors.secondary};
  margin: ${({ theme }) => theme.spacing[0]}px;
`;
export const TextSubtitle = styled.h3`
  font-family: "Roboto-Regular";
  font-size: ${({ theme }) => theme.fontSize[3]}px;
  line-height: ${({ theme }) => theme.height[3]}px;
  color: ${({ theme }) => theme.colors.secondary};
  margin: ${({ theme }) => theme.spacing[0]}px;
  margin-top: ${({ theme }) => theme.spacing[12]}px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs[1]}px) {
    font-size: ${({ theme }) => theme.fontSize[2]}px;
    margin-top: ${({ theme }) => theme.spacing[7]}px;
    line-height: ${({ theme }) => theme.height[2]}px;
  }
`;

export const TextWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing[0]};
  margin-top: ${({ theme }) => theme.spacing[17]}px;
  max-width: ${({ theme }) => theme.width[12]}px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg[0]}px) {
    margin: ${({ theme }) => theme.spacing[0]};
    padding: ${({ theme }) => theme.spacing[0]}px
      ${({ theme }) => theme.spacing[9]}px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const HumanImage = styled.img`
  max-width: ${({ theme }) => theme.width[14]}px;
  width: ${({ theme }) => theme.width[5]}%;
  position: relative;
  z-index: ${({ theme }) => theme.index[2]};
  margin-top: ${({ theme }) => theme.spacing[5]}px;
`;

export const ManVectorSmall = styled.img`
  position: absolute;
  max-width: ${({ theme }) => theme.width[11]}px;
  width: ${({ theme }) => theme.width[5]}%;
  right: ${({ theme }) => theme.spacing[0]};
  top: ${({ theme }) => theme.spacing[16]}px;
  z-index: ${({ theme }) => theme.index[0]};
`;

export const ManVectorLarge = styled.img`
  position: absolute;
  max-width: ${({ theme }) => theme.width[14]}px;
  width: ${({ theme }) => theme.width[5]}%;
  top: ${({ theme }) => theme.spacing[15]}%;
  right: ${({ theme }) => theme.spacing[0]};
  z-index: ${({ theme }) => theme.index[0]};
`;

export const CountWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing[18]}px;
  position: relative;
  width: ${({ theme }) => theme.width[5]}%;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg[1]}px) {
    margin-top: ${({ theme }) => theme.spacing[9]}px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs[1]}px) {
    margin-top: ${({ theme }) => theme.spacing[9]}px;
    flex-wrap: wrap;
  }
`;

export const Input = styled.input`
  font-family: "Roboto-Regular";
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.spacing[17]}%;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs[0]}px) {
    max-width: ${({ theme }) => theme.width[7]}px;
    width: ${({ theme }) => theme.width[5]}%;
  }
`;
export const InputSubmit = styled.button`
  font-size: ${({ theme }) => theme.fontSize[0]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight[0]};
  max-width: ${({ theme }) => theme.width[7]}px;
  height: ${({ theme }) => theme.height[2]}px;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.spacing[9]}px;
  padding: ${({ theme }) => theme.spacing[9]}px
    ${({ theme }) => theme.spacing[16]}px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs[2]}px) {
    max-width: ${({ theme }) => theme.spacing[16]}px;
    width: ${({ theme }) => theme.width[5]}%;
    padding: ${({ theme }) => theme.spacing[8]}px
      ${({ theme }) => theme.spacing[11]}px;
    font-size: ${({ theme }) => theme.fontSize[0]}px;
  }
`;
export const InputWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing[9]}px;
  padding: ${({ theme }) => theme.spacing[3]}px;
  max-width: ${({ theme }) => theme.width[10]}px;
  width: ${({ theme }) => theme.width[5]}%;
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing[16]}px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs[2]}px) {
    max-width: ${({ theme }) => theme.width[9]}px;
    width: ${({ theme }) => theme.width[5]}%;
    margin-top: ${({ theme }) => theme.spacing[10]}px;
  }
`;
export const MailIcon = styled.img`
  width: ${({ theme }) => theme.width[3]}px;
  margin-left: ${({ theme }) => theme.spacing[6]}px;
`;
export const NumberInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize[6]}px;
  margin: ${({ theme }) => theme.spacing[0]};
  @media (max-width: ${({ theme }) => theme.breakpoints.xs[1]}px) {
    font-size: ${({ theme }) => theme.fontSize[5]}px;
  }
`;
export const SubtitleInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize[2]}px;
  line-height: ${({ theme }) => theme.spacing[9]}px;
  max-width: ${({ theme }) => theme.spacing[22]}px;
  font-family: "Roboto-Regular";
  margin: ${({ theme }) => theme.spacing[0]};
  @media (max-width: ${({ theme }) => theme.breakpoints.xs[1]}px) {
    margin-top: ${({ theme }) => theme.spacing[2]}px;
  }
`;
export const LinesIcon = styled.img`
  position: absolute;
  max-width: ${({ theme }) => theme.width[13]}px;
  width: ${({ theme }) => theme.width[5]}%;
  z-index: ${({ theme }) => theme.index[0]};
`;
export const LineRigthImage = styled.img`
  position: absolute;
  max-width: ${({ theme }) => theme.width[15]}px;
  width: ${({ theme }) => theme.width[5]}%;
  z-index: ${({ theme }) => theme.index[0]};
  right: ${({ theme }) => theme.spacing[0]}%;
  top: ${({ theme }) => theme.spacing[0]}%;
`;
export const Counts = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ColorNumber = styled.p`
  font-size: ${({ theme }) => theme.fontSize[6]}px;
  margin: ${({ theme }) => theme.spacing[0]}px;
  color: ${({ theme }) => theme.colors.secondary};
  @media (max-width: ${({ theme }) => theme.breakpoints.xs[1]}px) {
    font-size: ${({ theme }) => theme.fontSize[5]}px;
  }
`;
