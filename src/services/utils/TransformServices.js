import { getAllPosts } from "../PostsServices";
import { getAllUsers } from "../UserServices";

export const getAllPostByUser = async () => {
  const posts = await getAllPosts();
  const users = await getAllUsers();

  return posts.map((post) => {
    const user = users.find((user) => user.id === post.userId);
    return {
      ...post,
      ...user,
    };
  });
};
