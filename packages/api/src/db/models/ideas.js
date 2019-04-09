import knex from '../knex';

export const findIdeaById = async id => {
  const ideas = await knex('ideas').where({ id });
  return ideas && ideas[0];
};

export const createIdea = async ({ content, category }) => {
  let id = null;

  try {
    const result = await knex('ideas')
      .insert({
        content,
        category
      })
      .returning('id');
    id = result[0];
  } catch (err) {
    console.error('Something wrong happened!', err);
    return null;
  }

  return id;
};
