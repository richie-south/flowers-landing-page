import React from "react"
import '../styles/global.css'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const CenterTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;

  @media only screen and (max-width: 720px) {
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 70px;
  }
`

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 70px;
  color: #16E3A7;
  margin-bottom: 24px;
  font-weight: bold;

  @media only screen and (max-width: 720px) {
    font-size: 60px;
  }
`

const ShortDescription = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: #585858;
  font-weight: 300;
  z-index: 1;
`

const CallToActionContainer = styled.div`
  justify-content: flex-start;
  display: flex;
  width: 100%;
  border: none;
  outline: none;
  margin-top: 16px;

  @media only screen and (max-width: 720px) {
    justify-content: center;
    margin-bottom: 24px;
  }
`

const CallToActionButton = styled.button`
  background-color: #16E3A7;
  color: white;
  height: 40px;
  width: 200px;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

const CallToActionLink = styled.a`
  color: white;
  text-decoration: none;
`

const CallToActionIcon = styled.img`
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  width: 40px;
  margin-left: 24px;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 50%;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`


const TitleText = () => (
  <CenterTitleContainer>
    <Title>Plantr - for your plant needs</Title>
    <ShortDescription>Plant reminders, statisctics, journals and more. All in one app {'<'}3</ShortDescription>
    <CallToActionContainer>
      <CallToActionButton>
        <CallToActionLink href="https://play.google.com/store/apps/details?id=com.richardsoderman.flowers&ref=plantr.online">
          Get plantr for Android
        </CallToActionLink>
      </CallToActionButton>
      <CallToActionLink href="https://play.google.com/store/apps/details?id=com.richardsoderman.flowers&ref=plantr.online"><CallToActionIcon src="icon.png" /></CallToActionLink>
    </CallToActionContainer>
  </CenterTitleContainer>
)

const CenterImageContainer = styled.div`
  margin-left: -40px;
`

const CenterImage = styled.img`
  width: 360px;
`

const CenterImagePicture = styled.picture`
  width: 360px;
`

const TitleImage = () => (
  <CenterImageContainer>
    <CenterImagePicture>
      <source srcset={`phone-header.webp`} type="image/webp" />
      <source srcset={`phone-header.png`} type="image/jpeg" />
      <CenterImage src={'phone-header.png'} alt="screenshot" />
    </CenterImagePicture>

  </CenterImageContainer>
)

const TopLeftCorner = styled.div`
  position: fixed;
  left: 0;
  top: 16px;
`

const TopLeftImage = styled.img`
  width: 240px;

  @media only screen and (max-width: 720px) {
    width: 140px;
  }
`

const TopLeftCornerImage = () => (
  <TopLeftCorner>
    <TopLeftImage src={'left-top-corner-plant.png'} alt="plant" />
  </TopLeftCorner>
)

const BottomLeftCorner = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
`

const BottomLeftImage = styled.img`
  width: 80px;
`

const BottomLeftCornerImage = () => (
  <BottomLeftCorner>
    <BottomLeftImage src={'left-bottom-corner-plant.png'} alt="plant" />
  </BottomLeftCorner>
)

const FirstSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  flex-wrap: wrap;
  padding: 12px;

  @media only screen and (max-width: 743px) {
    height: 100%;
  }
`

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
  padding: 12px;


`

const ImageRow = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  overflow-x: scroll;
  flex-direction: row;
  margin-right: 16px;
  padding: 8px;
`

const ScreenShots = styled.img`
  max-width: 200px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin-right: 16px;
  height: 355px;
`

const PictureScreenShot = styled.picture`
  width: 100%;
  max-width: 200px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin-right: 16px;
  height: 355px;
`

const Image = ({ path }) => (
  <PictureScreenShot>
    <source srcset={`${path}.webp`} type="image/webp" />
    <source srcset={`${path}.jpg`} type="image/jpeg" />
    <ScreenShots src={`${path}.jpg`} />
  </PictureScreenShot>
)

const SubHeader = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`

const Storybody = styled.div`
  max-width: 503px;
  line-height: 1.6;
  color: #797979;
  font-weight: 300;

  b {
    color: black;
  }
`

const BodyText = styled.div`
  margin-bottom: 24px;

  @media only screen and (max-width: 743px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`

const Paragraf = styled.p`
  margin-top: 12px;
  margin-bottom: 8px;
`

const TitleSection = () => (
  <React.Fragment>
    <Helmet title="plantr - app" defer={false} >
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Plant reminders, statisctics, journals and more. All in one app" />
      <meta name="subject" content="Promotion page" />
      <title>Plantr - app</title>

      <meta property="og:url" content="https://plantr.online/index.html" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Plantr - plant reminders" />
      <meta property="og:image" content="https://palntr.online/icon-large.png" />
      <meta property="og:image:alt" content="plantr app icon" />
      <meta property="og:description" content="Plant reminders, statisctics, journals and more. All in one app" />
      <meta property="og:site_name" content="palntr" />
      <meta property="og:locale" content="en_US" />
      <meta property="article:author" content="richard söderman" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@rick_9412" />
      <meta name="twitter:url" content="https://plantr.online/index.html" />
      <meta name="twitter:title" content="Plantr - plant reminders" />
      <meta name="twitter:description" content="Plant reminders, statisctics, journals and more. All in one app" />
      <meta name="twitter:image" content="https://palntr.online/icon-large.png" />
      <meta name="twitter:image:alt" content="plantr app icon" />
    </Helmet>
    <TopLeftCornerImage />
    <FirstSection>
      <TitleText />
      <TitleImage />
    </FirstSection>
    <Section>
      <BodyText>
        <SubHeader>
          Story time
        </SubHeader>
        <Storybody>
          <Paragraf> Let me tell you a story. It's about Lisa, Lisa always overflows her flowers. DO YOU WANT TO BE LIKE LISA?!</Paragraf>
          <Paragraf>Okay okay maybe a little dramatic. Here is another one, it's about Jake,
          <br />
          Jake never water his plants so they die of dehydration! THAT'S LITERALLY MURDER!!
          Do you want to be like JAKE?!?!</Paragraf>
          <br />
          <b>ALSO</b>
          <br />
          <Paragraf>
            Are you tired of being like Lisa and Jake?
            Do you want to have healthiest plants in the world?
            Then calm the **** down i got you covered ❤️
          </Paragraf>
          <Paragraf>
            With this Plant water reminder app you won't ever forget to water, fertilize or rotate your plants again!
            Let the plants live and forget about the word dehydration 🎉
          </Paragraf>
          <Paragraf>
            Plants need constant care and the most important one is watering 💦
            This reminder app lets you add you plants and then set custom reminders for example water reminder.
            Later when it's time to water your plants we send you a reminder in form of a push notification so you can't miss it!
            Sounds great right
          </Paragraf>

        </Storybody>
      </BodyText>
      <ImageRow>
        <Image path="phone-today" />
        <Image path="phone-water" />
        <Image path="phone-overview" />
        <Image path="phone-garden" />
        <Image path="phone-add" />
      </ImageRow>
    </Section>

    <BottomLeftCornerImage />
  </React.Fragment>
)


export default () => (
  <TitleSection />
)
