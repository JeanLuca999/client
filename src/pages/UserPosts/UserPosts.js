//HOOKS
import { useEffect, useState } from "react";
import { EditPost } from "../../components/EditPost";
import { useAuth } from "../../context/auth";

//SERVICES
import { getPostsByUserId } from "../../services/posts";
import { Box } from "../../styles/generics";

//IMAGES
import avatar from "../../assets/images/avatar.png";

export const UserPosts = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async (id) => {
    try {
      const response = await getPostsByUserId(id);
      if (response) {
        const { data } = response;
        setPosts(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const refreshPosts = async () => {
    await fetchPosts(user.id);
  };

  useEffect(() => {
    fetchPosts(user.id);
  }, [user.id]);

  return (
    <>
      {posts.map((post) => (
        <Box
          style={{ borderTop: "1px solid #838383", padding: "7rem 2rem" }}
          key={post.id}
        >
          <EditPost
            avatar={avatar}
            postId={post.id}
            refreshPosts={refreshPosts}
          >
            {post.body}
          </EditPost>
        </Box>
      ))}
    </>
  );
};
