import React, { useState } from "react";

import UnionIcon from "@/assets/Union.svg";
import WindIcon from "@/assets/Wind.svg";

import * as Styled from "./style";

export const Header = () => {
  const NAVIGATION_TYPE = ["Home", "Services", "Clinic", "Doctors", "Contact"];

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
          <Styled.Navigation>
            {NAVIGATION_TYPE.map((elements) => (
              <Styled.NavigatorText>{elements}</Styled.NavigatorText>
            ))}
          </Styled.Navigation>
          <Styled.LogInWrapper>
            <Styled.NavigatorText>Log In</Styled.NavigatorText>
            <Styled.RegistrationButton>Register</Styled.RegistrationButton>
            <Styled.NotificationIcon src={UnionIcon} />
          </Styled.LogInWrapper>
        </Styled.NavigatorWrapper>
      </Styled.Container>

      <Styled.StyledBurger open={open} onClick={handleOnChangheButton}>
        <div />
        <div />
        <div />
      </Styled.StyledBurger>
    </Styled.Wrapper>
  );
};
