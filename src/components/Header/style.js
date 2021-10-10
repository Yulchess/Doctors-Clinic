import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: ${({ theme }) => theme.index[3]};
  padding-top: ${({ theme }) => theme.spacing[21]}px;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg[0]}px) {
    padding: ${({ theme }) => theme.spacing[0]};
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: ${({ theme }) => theme.index[1]};
`;
export const LogIn = styled.p`
  margin-left: ${({ theme }) => theme.spacing[9]}px;
`;
export const NavigatorWrapper = styled.nav`
  display: flex;
  align-items: center;
  max-width: ${({ theme }) => theme.NAVIGATOR_WRAPPER_WIDTH}%;
  width: ${({ theme }) => theme.width[5]}%;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg[0]}px) {
    flex-flow: column nowrap;
    position: fixed;
    top: ${({ theme }) => theme.spacing[0]};
    right: ${({ theme }) => theme.spacing[0]};
    margin: ${({ theme }) => theme.spacing[0]};
    align-items: center;
    transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    height: ${({ theme }) => theme.height[6]}vh;
    width: ${({ theme }) => theme.width[8]}px;
    padding-top: ${({ theme }) => theme.spacing[1]}rem;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.ligthGray};
  }
`;

export const NavigatorText = styled.a`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize[1]}px;
  margin-right: ${({ theme }) => theme.spacing[13]}px;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
  color: ${({ theme }) => theme.colors.gray};
  @media (max-width: ${({ theme }) => theme.breakpoints.lg[0]}px) {
    margin-bottom: ${({ theme }) => theme.spacing[9]}px;
    margin-left: ${({ theme }) => theme.spacing[15]}px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const NotificationIcon = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg[0]}px) {
    margin: ${({ theme }) => theme.spacing[0]};
  }
`;

export const LogInWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg[0]}px) {
    flex-direction: column;
  }
`;
export const LogoIcon = styled.img`
  max-width: ${({ theme }) => theme.width[3]}px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs[2]}px) {
    width: ${({ theme }) => theme.width[3]}px;
  }
`;
export const LogoInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize[1]}px;
  margin: ${({ theme }) => theme.spacing[0]};
  font-weight: ${({ theme }) => theme.fontWeight[0]};
  margin-left: ${({ theme }) => theme.spacing[4]}px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs[2]}px) {
    font-size: ${({ theme }) => theme.fontSize[0]}px;
    margin: ${({ theme }) => theme.spacing[0]};
  }
`;
export const Navigation = styled.div`
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg[0]}px) {
    flex-direction: column;
  }
`;

export const RegistrationButton = styled.button`
  margin-right: ${({ theme }) => theme.fontSize[6]}px;
  font-size: ${({ theme }) => theme.fontSize[1]}px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.spacing[13]}px;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing[7]}px
    ${({ theme }) => theme.spacing[15]}px;
  border: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg[0]}px) {
    margin: ${({ theme }) => theme.spacing[0]};
    margin-bottom: ${({ theme }) => theme.spacing[9]}px;
    flex-flow: column nowrap;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: ${({ theme }) => theme.index[2]};
  @media (max-width: ${({ theme }) => theme.breakpoints.lg[0]}px) {
    flex-flow: column nowrap;
    display: ${({ open }) => (open ? "flex" : "none")};
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    position: fixed;
    top: ${({ theme }) => theme.spacing[0]};
    right: ${({ theme }) => theme.spacing[0]};
  }
`;

export const StyledBurger = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg[0]}px) {
    width: ${({ theme }) => theme.width[1]}rem;
    height: ${({ theme }) => theme.height[1]}rem;
    position: fixed;
    top: ${({ theme }) => theme.spacing[3]}px;
    right: ${({ theme }) => theme.spacing[4]}px;
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    cursor: pointer;
    z-index: ${({ theme }) => theme.index[4]}px;
    div {
      width: ${({ theme }) => theme.width[0]}rem;
      height: ${({ theme }) => theme.height[0]}rem;
      background-color: ${({ open }) =>
        open
          ? ({ theme }) => theme.colors.secondary
          : ({ theme }) => theme.colors.black};
      border-radius: ${({ theme }) => theme.spacing[5]}px;
      transform-origin: ${({ theme }) => theme.index[1]}px;
      transition: all 0.4s ease;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
