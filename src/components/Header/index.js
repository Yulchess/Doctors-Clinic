import React, { useState } from "react";

import WindIcon from "../../assets/Wind.svg";
import UnionIcon from "../../assets/Union.svg";
import * as Styled from "./style";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOnChangheButton = () => {
    setOpen(!open);
  };
  return (
    <Styled.Wrapper>
      <Styled.LogoWrapper>
        <Styled.LogoIcon src={WindIcon} />
        <Styled.LogoInfo>Modsen Health</Styled.LogoInfo>
      </Styled.LogoWrapper>
      <Styled.Container open={open}>
        <Styled.NavigatorWrapper>
          <Styled.NavigatorText>Home</Styled.NavigatorText>
          <Styled.NavigatorText>Services</Styled.NavigatorText>
          <Styled.NavigatorText>Clinic</Styled.NavigatorText>
          <Styled.NavigatorText>Doctors</Styled.NavigatorText>
          <Styled.NavigatorText>Contact</Styled.NavigatorText>
          <Styled.NavigatorText>Log In</Styled.NavigatorText>
          <Styled.RegistrationButton>Register</Styled.RegistrationButton>
          <Styled.NotificationIcon src={UnionIcon} />
        </Styled.NavigatorWrapper>
      </Styled.Container>

      <Styled.StyledBurger open={open} onClick={handleOnChangheButton}>
        <div></div>
        <div></div>
        <div></div>
      </Styled.StyledBurger>
    </Styled.Wrapper>
  );
};
