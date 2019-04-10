import 'isomorphic-unfetch';

const { API_URL } = process.env;

export const fetchAllIdeas = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};
