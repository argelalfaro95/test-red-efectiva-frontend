export const getAllUsers = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
  return response.json();
};
