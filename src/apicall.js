export const apiCall = async (fn) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return fn(data);
};
