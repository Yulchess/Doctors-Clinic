import React from "react";
import ManImage from "../../assets/Human.png";
import * as Styled from "./style";
import HumanVectorSmall from "../../assets/HumanVectorSmall.svg";
import HumanVectorBig from "../../assets/HumanVectorBig.svg";
import MailImage from "../../assets/Mail.svg";
import LinesImage from "../../assets/Lines-Left.svg";
import LineRight from "../../assets/Lines-Rigth.svg";
export const Main = () => {
  return (
    <Styled.InfoWrapper>
      <Styled.TextWrapper>
        <Styled.TextContent>Booking of doctor’s appointment</Styled.TextContent>
        <Styled.MainText>
          Don’t Miss Our Exclusive Patient Special
        </Styled.MainText>
        <Styled.TextSubtitle>
          We want to make sure that everyone has access to natural and effective
          care. With our special, you’ll receive a consultation and a digital
          posture assesment.
        </Styled.TextSubtitle>
        <Styled.InputWrapper>
          <Styled.MailIcon src={MailImage} />
          <Styled.Input placeholder="Enter your email"></Styled.Input>
          <Styled.InputSubmit>Get Stared</Styled.InputSubmit>
        </Styled.InputWrapper>
        <Styled.CountWrapper>
          <Styled.Counts>
            <Styled.NumberInfo>240</Styled.NumberInfo>
            <Styled.SubtitleInfo>
              Qualified Doctors & Medical Specialists
            </Styled.SubtitleInfo>
          </Styled.Counts>
          <Styled.Counts>
            <Styled.ColorNumber>1.456</Styled.ColorNumber>
            <Styled.SubtitleInfo>
              Medical Tests Done For Our Patients
            </Styled.SubtitleInfo>
          </Styled.Counts>
          <Styled.Counts>
            <Styled.NumberInfo>1M+</Styled.NumberInfo>
            <Styled.SubtitleInfo>
              Years of Experience The Medical Field
            </Styled.SubtitleInfo>
          </Styled.Counts>
        </Styled.CountWrapper>
      </Styled.TextWrapper>
      <Styled.ImageWrapper>
        <Styled.HumanImage src={ManImage} />
        <Styled.ManVectorSmall src={HumanVectorSmall} />
        <Styled.ManVectorLarge src={HumanVectorBig} />
      </Styled.ImageWrapper>
      {/* <Styled.LinesIcon src={LinesImage} />
      <Styled.LineRigthImage src={LineRight} /> */}
    </Styled.InfoWrapper>
  );
};
