exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ideas')
    .del()
    .then(async function() {
      // Inserts new seed entries
      return knex('ideas').insert([
        {
          content: 'where instead of becoming strong, you get weaker',
          category: 'game'
        },
        {
          content: 'where you can jump between buildings',
          category: 'game'
        },
        {
          content: 'in a post-apocalyptic world where the hero rides a zebra',
          category: 'book'
        },
        {
          content: 'that lets you see recipes based on what ingredients you have',
          category: 'app'
        },
        {
          content: 'that auto mutes depending on your location',
          category: 'app'
        },
        {
          content: 'that shows the best travel locations around the user',
          category: 'app'
        },
        {
          content: 'to listen to music and create playlists',
          category: 'app'
        },
        {
          content:
            'to keep track of your habits, you can see how frequent you are doing something new',
          category: 'app'
        },
        {
          content: 'that is a twitter dashboard to manage different accounts in one place',
          category: 'app'
        },
        {
          content: 'where you play as a cat',
          category: 'game'
        }
      ]);
    });
};
