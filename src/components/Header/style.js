import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const LogIn = styled.p`
  margin-left: 20px;
`;
export const NavigatorWrapper = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 1100px) {
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    margin: 0;
    align-items: center;
    transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;

    background-color: ${(props) => props.theme.colors.ligthGray};
  }
`;

export const NavigatorText = styled.a`
  cursor: pointer;
  margin-right: 30px;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
  color: ${(props) => props.theme.colors.gray};
  @media (max-width: 1100px) {
    margin-bottom: 20px;
    margin-left: 40px;
    color: ${(props) => props.theme.colors.black};
  }
`;

export const NotificationIcon = styled.img`
  margin-right: 82px;
  @media (max-width: 1100px) {
    margin: 0;
  }
`;
export const LogoIcon = styled.img``;
export const LogoInfo = styled.p`
  margin: 0;
  font-weight: 700;
  margin-left: 10px;
`;

export const RegistrationButton = styled.button`
  margin-right: 20px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 30px;
  cursor: pointer;
  padding: 12px 32px;
  border: none;
  @media (max-width: 1100px) {
    margin: 0;

    flex-flow: column nowrap;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 2;
  @media (max-width: 1100px) {
    flex-flow: column nowrap;
    display: ${({ open }) => (open ? "flex" : "none")};
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    position: fixed;
    top: 0;
    right: 0;
  }
`;

export const StyledBurger = styled.div`
  @media (max-width: 1100px) {
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 7px;
    right: 10px;
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    cursor: pointer;
    z-index: 20px;
    div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${({ open }) =>
        open
          ? (props) => props.theme.colors.secondary
          : (props) => props.theme.colors.black};
      border-radius: 10px;
      transform-origin: 1px;
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
