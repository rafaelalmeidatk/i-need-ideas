import 'isomorphic-unfetch';

const { API_URL } = process.env;

export const fetchAllIdeas = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const createIdea = async ({ content, category }) => {
  const res = await fetch(API_URL + '/create', {
    method: 'post',
    body: JSON.stringify({ content, category }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await res.json();
};
