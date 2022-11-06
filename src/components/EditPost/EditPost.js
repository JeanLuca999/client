//HOOKS
import { useForm } from "../../hooks";
import { useAuth } from "../../context/auth";

//STYLES
import { Button, Error, Submit, TextArea } from "../../styles/form";
import { Wrapper, Avatar } from "./styles";

//HELPERS
import { validateNotEmpty } from "../../helpers";

//SERVICES
import { deletePost, updatePost } from "../../services/posts";
import { toast } from "react-toastify";

export const EditPost = ({ children, avatar, postId, refreshPosts }) => {
  const { user } = useAuth();
  const [fields, handleChange, onSubmit, validations] = useForm({
    content: children,
  });
  const { content } = fields;

  const handleUpdatePost = async () => {
    try {
      const data = JSON.stringify({ owner_id: user.id, body: content });
      await updatePost(postId, data);
      await refreshPosts();
      toast.success("Postagem atualizado com sucesso");
    } catch (e) {
      toast.error("Não foi possível atualizar a Postagem");
      console.log(e);
    }
  };

  const handleDeletePost = async () => {
    try {
      await deletePost(postId);
      refreshPosts();
      toast.success("Postagem deletada com sucesso");
    } catch (e) {
      toast.error("Não foi possível deletar a postagem");
      console.log(e);
    }
  };

  const handleValidateForm = () => {
    return [
      validations.register("content", validateNotEmpty, "campo obrigatório"),
    ];
  };

  const handleContentChange = (event) => {
    handleChange("content", event.target.value);
  };

  const handleSubmit = (event) => {
    onSubmit(event, handleUpdatePost, handleValidateForm);
  };

  return (
    <Wrapper>
      <Avatar src={avatar} />
      <TextArea value={content} onChange={handleContentChange} />
      {validations?.errors?.content && (
        <Error>{validations?.errors?.content}</Error>
      )}
      <Submit onClick={handleSubmit}>salvar</Submit>
      <Button onClick={handleDeletePost}>deletar</Button>
    </Wrapper>
  );
};
