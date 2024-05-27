export const getAllPosts = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
  return response.json();
};
