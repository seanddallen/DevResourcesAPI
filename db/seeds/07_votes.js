exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('votes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('votes').insert([
        {
          user_id: 6,
          resource_id: 14,
          type: 'down',
        },
        {
          user_id: 2,
          resource_id: 5,
          type: 'down',
        },
        {
          user_id: 19,
          resource_id: 6,
          type: 'up',
        },
        {
          user_id: 18,
          resource_id: 12,
          type: 'up',
        },
        {
          user_id: 16,
          resource_id: 20,
          type: 'up',
        },
        {
          user_id: 13,
          resource_id: 13,
          type: 'up',
        },
        {
          user_id: 4,
          resource_id: 10,
          type: 'down',
        },
        {
          user_id: 15,
          resource_id: 4,
          type: 'down',
        },
        {
          user_id: 19,
          resource_id: 17,
          type: 'up',
        },
        {
          user_id: 4,
          resource_id: 19,
          type: 'down',
        },
        {
          user_id: 1,
          resource_id: 15,
          type: 'down',
        },
        {
          user_id: 17,
          resource_id: 11,
          type: 'up',
        },
        {
          user_id: 18,
          resource_id: 16,
          type: 'up',
        },
        {
          user_id: 3,
          resource_id: 20,
          type: 'up',
        },
        {
          user_id: 2,
          resource_id: 20,
          type: 'down',
        },
        {
          user_id: 5,
          resource_id: 8,
          type: 'up',
        },
        {
          user_id: 8,
          resource_id: 14,
          type: 'down',
        },
        {
          user_id: 9,
          resource_id: 13,
          type: 'down',
        },
        {
          user_id: 20,
          resource_id: 1,
          type: 'down',
        },
        {
          user_id: 6,
          resource_id: 5,
          type: 'down',
        },
        {
          user_id: 13,
          resource_id: 14,
          type: 'up',
        },
        {
          user_id: 12,
          resource_id: 17,
          type: 'down',
        },
        {
          user_id: 6,
          resource_id: 2,
          type: 'down',
        },
        {
          user_id: 15,
          resource_id: 8,
          type: 'down',
        },
        {
          user_id: 11,
          resource_id: 2,
          type: 'up',
        },
        {
          user_id: 17,
          resource_id: 9,
          type: 'down',
        },
        {
          user_id: 1,
          resource_id: 14,
          type: 'down',
        },
        {
          user_id: 4,
          resource_id: 2,
          type: 'down',
        },
        {
          user_id: 16,
          resource_id: 4,
          type: 'up',
        },
        {
          user_id: 8,
          resource_id: 2,
          type: 'down',
        },
        {
          user_id: 15,
          resource_id: 3,
          type: 'down',
        },
        {
          user_id: 2,
          resource_id: 6,
          type: 'up',
        },
        {
          user_id: 7,
          resource_id: 2,
          type: 'down',
        },
        {
          user_id: 16,
          resource_id: 19,
          type: 'up',
        },
        {
          user_id: 14,
          resource_id: 6,
          type: 'down',
        },
        {
          user_id: 15,
          resource_id: 14,
          type: 'down',
        },
        {
          user_id: 9,
          resource_id: 15,
          type: 'down',
        },
        {
          user_id: 14,
          resource_id: 1,
          type: 'up',
        },
        {
          user_id: 18,
          resource_id: 13,
          type: 'up',
        },
        {
          user_id: 10,
          resource_id: 6,
          type: 'down',
        },
        {
          user_id: 16,
          resource_id: 9,
          type: 'up',
        },
        {
          user_id: 14,
          resource_id: 12,
          type: 'up',
        },
        {
          user_id: 13,
          resource_id: 13,
          type: 'up',
        },
        {
          user_id: 20,
          resource_id: 8,
          type: 'down',
        },
        {
          user_id: 5,
          resource_id: 14,
          type: 'down',
        },
        {
          user_id: 5,
          resource_id: 5,
          type: 'up',
        },
        {
          user_id: 8,
          resource_id: 8,
          type: 'down',
        },
        {
          user_id: 18,
          resource_id: 2,
          type: 'up',
        },
        {
          user_id: 20,
          resource_id: 17,
          type: 'down',
        },
        {
          user_id: 2,
          resource_id: 4,
          type: 'up',
        },
      ]);
    });
};
