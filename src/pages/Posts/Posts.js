//COMPONENTS
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { Box } from "../../styles/generics";
import { Post } from "../../components/Post";

//HOOKS
import { useForm } from "../../hooks";

//HELPERS
import { validateNotEmpty } from "../../helpers";

//IMAGES
import avatar from "../../assets/images/avatar.png";

export const Posts = () => {
  const fakeData = [
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique, risus eu facilisis maximus, dolor eros dignissim justo, ut placerat tellus ante vel est. Morbi dolor risus, posuere molestie commodo et, sodales at mauris. In magna erat, molestie vel bibendum et, facilisis ut est. Phasellus varius iaculis ipsum, et iaculis velit volutpat a. Sed pulvinar magna eu justo interdum ultrices. Aliquam erat volutpat. Fusce semper leo nec convallis placerat. ",
    },
    {
      content:
        "Duis rhoncus, mi id feugiat egestas, eros massa vestibulum nibh, quis tristique nulla nunc eu ante. Maecenas porta, elit fringilla varius consectetur, velit enim lobortis arcu, a accumsan est nisl ac massa. Sed sit amet augue at turpis condimentum sollicitudin sed sit amet turpis. Maecenas at elit velit. Nam malesuada ullamcorper purus et vestibulum. Morbi tempus odio id augue condimentum mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
    },
    {
      content:
        "Duis rhoncus, mi id feugiat egestas, eros massa vestibulum nibh, quis tristique nulla nunc eu ante. Maecenas porta, elit fringilla varius consectetur, velit enim lobortis arcu, a accumsan est nisl ac massa. Sed sit amet augue at turpis condimentum sollicitudin sed sit amet turpis. Maecenas at elit velit. Nam malesuada ullamcorper purus et vestibulum. Morbi tempus odio id augue condimentum mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
    },
    {
      content:
        "Duis rhoncus, mi id feugiat egestas, eros massa vestibulum nibh, quis tristique nulla nunc eu ante. Maecenas porta, elit fringilla varius consectetur, velit enim lobortis arcu, a accumsan est nisl ac massa. Sed sit amet augue at turpis condimentum sollicitudin sed sit amet turpis. Maecenas at elit velit. Nam malesuada ullamcorper purus et vestibulum. Morbi tempus odio id augue condimentum mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
    },
  ];
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

      <>
        {fakeData.map((item) => (
          <Box
            style={{ borderTop: "1px solid #838383", padding: "7rem 2rem" }}
            key={item.content}
          >
            <Post avatar={avatar}>{item.content}</Post>
          </Box>
        ))}
      </>
    </>
  );
};
