import knex from '../knex';

export const getAllIdeas = async () => {
  return await knex('ideas')
    .select('id', 'content', 'category')
    .orderBy('updated_at', 'desc');
};

export const findIdeaById = async id => {
  const ideas = await knex('ideas').where({ id });
  return ideas && ideas[0];
};

export const createIdea = async ({ content, category, createdBy }) => {
  let id = null;

  try {
    const result = await knex('ideas')
      .insert({
        content,
        category,
        created_by: createdBy
      })
      .returning('id');
    id = result[0];
  } catch (err) {
    console.error('Something wrong happened!', err);
    return null;
  }

  return id;
};

export const deleteIdea = async ({ id, userId }) => {
  const idea = await findIdeaById(id);

  if (idea.created_by !== userId) {
    // User is trying to delete an idea that isn't from him
    return { error: 'FORBIDDEN' };
  }

  try {
    await knex('ideas')
      .where({ id })
      .del();
  } catch (err) {
    console.error('Something wrong happened!', err);
    return { error: 'UNKNOWN' };
  }

  return { success: true };
};
