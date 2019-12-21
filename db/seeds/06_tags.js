exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tags')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tags').insert([
        {
          resource_id: 1,
          tags: 'sint',
        },
        {
          resource_id: 13,
          tags: 'commodo',
        },
        {
          resource_id: 10,
          tags: 'exercitation',
        },
        {
          resource_id: 20,
          tags: 'adipisicing',
        },
        {
          resource_id: 13,
          tags: 'et',
        },
        {
          resource_id: 20,
          tags: 'cillum',
        },
        {
          resource_id: 8,
          tags: 'nisi',
        },
        {
          resource_id: 11,
          tags: 'nisi',
        },
        {
          resource_id: 4,
          tags: 'incididunt',
        },
        {
          resource_id: 4,
          tags: 'proident',
        },
        {
          resource_id: 10,
          tags: 'duis',
        },
        {
          resource_id: 3,
          tags: 'minim',
        },
        {
          resource_id: 15,
          tags: 'cupidatat',
        },
        {
          resource_id: 10,
          tags: 'anim',
        },
        {
          resource_id: 1,
          tags: 'id',
        },
        {
          resource_id: 4,
          tags: 'esse',
        },
        {
          resource_id: 15,
          tags: 'sint',
        },
        {
          resource_id: 4,
          tags: 'elit',
        },
        {
          resource_id: 5,
          tags: 'dolor',
        },
        {
          resource_id: 16,
          tags: 'eiusmod',
        },
        {
          resource_id: 17,
          tags: 'incididunt',
        },
        {
          resource_id: 15,
          tags: 'magna',
        },
        {
          resource_id: 20,
          tags: 'velit',
        },
        {
          resource_id: 5,
          tags: 'eiusmod',
        },
        {
          resource_id: 10,
          tags: 'duis',
        },
        {
          resource_id: 6,
          tags: 'nostrud',
        },
        {
          resource_id: 18,
          tags: 'nulla',
        },
        {
          resource_id: 19,
          tags: 'veniam',
        },
        {
          resource_id: 12,
          tags: 'fugiat',
        },
        {
          resource_id: 7,
          tags: 'cillum',
        },
        {
          resource_id: 1,
          tags: 'ad',
        },
        {
          resource_id: 18,
          tags: 'Lorem',
        },
        {
          resource_id: 18,
          tags: 'proident',
        },
        {
          resource_id: 8,
          tags: 'fugiat',
        },
        {
          resource_id: 3,
          tags: 'anim',
        },
        {
          resource_id: 10,
          tags: 'anim',
        },
        {
          resource_id: 18,
          tags: 'pariatur',
        },
        {
          resource_id: 18,
          tags: 'dolore',
        },
        {
          resource_id: 5,
          tags: 'culpa',
        },
        {
          resource_id: 4,
          tags: 'elit',
        },
      ]);
    });
};
