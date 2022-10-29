//STLYES
import { Image, Wrapper, Title } from "./styles";

//IMAGES
import bannerSource from "../../assets/images/banner-form.png";

export const BannerForm = ({ children }) => {
  return (
    <Wrapper>
      <Image alt="banner" src={bannerSource} />
      <Title>{children}</Title>
    </Wrapper>
  );
};
