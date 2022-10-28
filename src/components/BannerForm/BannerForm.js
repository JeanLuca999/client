//STLYES
import { Image, Wrapper, Title } from "./styles";

//IMAGES
import bannerSource from "../../assets/images/banner-form.png";

export const BannerForm = () => {
  return (
    <Wrapper>
      <Image alt="banner" src={bannerSource} />
      <Title>
        Crie sua conta para <br /> começar
      </Title>
    </Wrapper>
  );
};
