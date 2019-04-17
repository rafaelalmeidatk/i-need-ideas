import 'isomorphic-unfetch';

const { API_URL } = process.env;

export const fetchAllIdeas = async () => {
  const res = await fetch(API_URL, {
    credentials: 'include',
  });
  return await res.json();
};

export const createIdea = async ({ content, category }) => {
  const res = await fetch(API_URL + 'create', {
    method: 'post',
    credentials: 'include',
    body: JSON.stringify({ content, category }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
};

export const deleteIdea = async ({ id }) => {
  const res = await fetch(API_URL + 'delete', {
    method: 'post',
    credentials: 'include',
    body: JSON.stringify({ id }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
};
