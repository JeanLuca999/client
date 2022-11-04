//COMPONENTS
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { Box } from "../../styles/generics";

//HOOKS
import { useForm } from "../../hooks";
import { validateNotEmpty } from "../../helpers";
import { Error } from "../../styles/form";

export const Posts = () => {
  const [fields, handleChange, onSubmit, validations] = useForm({
    content: "",
  });
  const { content } = fields;

  const handlePostSubmit = () => {};

  const handleValidateForm = () => {
    return [
      validations.register("content", validateNotEmpty, "campo obrigatório"),
    ];
  };

  const handlePostContentChange = (content) => {
    handleChange("content", content);
  };

  const handleSubmit = (event) => {
    onSubmit(event, handlePostSubmit, handleValidateForm);
  };

  return (
    <>
      <Box margin="2rem 0">
        <CreatePost
          onChange={handlePostContentChange}
          value={content}
          handleSubmit={handleSubmit}
          errors={validations?.errors?.content}
        />
      </Box>
    </>
  );
};
