//COMPONENTS
import { CreatePost } from "../../components/CreatePost/CreatePost";
import { Box } from "../../styles/generics";
import { Post } from "../../components/Post";
import { toast } from "react-toastify";

//HOOKS
import { useForm } from "../../hooks";
import { useState, useEffect } from "react";

//HELPERS
import { validateNotEmpty } from "../../helpers";

//IMAGES
import avatar from "../../assets/images/avatar.png";

//SERVICES
import { createPost, getPosts } from "../../services/posts";
import { useAuth } from "../../context/auth";

export const Posts = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [fields, handleChange, onSubmit, validations] = useForm({
    content: "",
  });
  const { content } = fields;

  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      if (response) {
        const { data } = response;
        setPosts(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handlePostSubmit = async () => {
    try {
      const data = JSON.stringify({ owner_id: user.id, body: content });
      await createPost(data);
      await fetchPosts();
      handleChange("content", "");
      toast.success("Post enviado com sucesso");
    } catch (e) {
      console.log(e);
    }
  };

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

  useEffect(() => {
    fetchPosts();
  }, []);

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
        {posts.map((item) => (
          <Box
            style={{ borderTop: "1px solid #838383", padding: "7rem 2rem" }}
            key={item.id}
          >
            <Post avatar={avatar}>{item.body}</Post>
          </Box>
        ))}
      </>
    </>
  );
};
