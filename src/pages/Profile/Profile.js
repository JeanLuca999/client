//STYLES
import { Box } from "../../styles/generics";
import { Span } from "../../styles/typography";
import { Button } from "../../styles/form";

//HOOKS
import { useAuth } from "../../context/auth";

//IMAGES

//COMPONENTS

export const Profile = () => {
  const { handleLogout } = useAuth();
  const { user } = useAuth();

  return (
    <>
      <Box maxWidth="900px" margin="0 auto" minHeight="100vh">
        <Box margin="1rem 0" textAlign="center">
          <Span strong>{user.name}</Span>
        </Box>
        <Box margin="1rem 0" textAlign="center">
          <Span strong>{user.email}</Span>
        </Box>

        <Box margin="5rem auto" width="90%">
          <Button onClick={handleLogout}>sair</Button>
          <Button onClick={null}>Baixar minhas postagens</Button>
        </Box>
      </Box>
    </>
  );
};
