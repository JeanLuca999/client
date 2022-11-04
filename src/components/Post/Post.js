//STYLES
import { Wrapper, Text, Avatar } from "./styles";

export const Post = ({ children, avatar }) => {
  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Text>{children}</Text>
    </Wrapper>
  );
};
