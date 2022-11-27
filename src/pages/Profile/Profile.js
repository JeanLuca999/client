//STYLES
import { Box } from "../../styles/generics";
import { Span } from "../../styles/typography";
import { Button } from "../../styles/form";

//HOOKS
import { useAuth } from "../../context/auth";
import { getPostsByUserId } from "../../services/posts";

//COMPONENTS

export const Profile = () => {
  const { handleLogout } = useAuth();
  const { user } = useAuth();

  const downloadUserPosts = async (id) => {
    try {
      const response = await getPostsByUserId(id);
      if (response) {
        const { data } = response;
        const file = new File([JSON.stringify(data)], "posts.json", {
          type: "application/json",
        });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = "posts";
        link.click();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Box maxWidth="900px" margin="0 auto" minHeight="100vh">
        <Box margin="1rem 0" textAlign="center">
          <Span strong>Usuário - {user.name}</Span>
        </Box>
        <Box margin="1rem 0" textAlign="center">
          <Span strong>Email - {user.email}</Span>
        </Box>

        <Box margin="5rem auto" width="90%">
          <Button onClick={handleLogout}>sair</Button>
          <Button onClick={() => downloadUserPosts(user.id)}>
            Baixar minhas postagens
          </Button>
        </Box>
      </Box>
    </>
  );
};
