exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favorites')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('favorites').insert([
        {
          user_id: 13,
          resource_id: 15,
          note: 'Labore do reprehenderit esse aliqua nulla velit Lorem minim deserunt proident culpa.',
        },
        {
          user_id: 16,
          resource_id: 5,
          note: 'Ea adipisicing irure labore cillum irure Lorem est irure sunt.',
        },
        {
          user_id: 4,
          resource_id: 17,
          note: 'Reprehenderit sunt dolore aute do commodo amet laboris.',
        },
        {
          user_id: 1,
          resource_id: 10,
          note: 'Lorem qui excepteur sunt excepteur adipisicing.',
        },
        {
          user_id: 14,
          resource_id: 6,
          note: 'Voluptate voluptate culpa dolor sunt adipisicing qui aliqua laboris eu anim.',
        },
        {
          user_id: 15,
          resource_id: 18,
          note: 'Labore ex culpa sit incididunt veniam aute nostrud laboris laboris officia et mollit et fugiat.',
        },
        {
          user_id: 7,
          resource_id: 20,
          note: 'Ea dolore velit minim laborum ut anim aute ea ipsum laboris anim consequat ad.',
        },
        {
          user_id: 8,
          resource_id: 7,
          note:
            'Et laboris qui commodo quis voluptate dolor cillum exercitation nostrud tempor dolore cillum irure incididunt.',
        },
        {
          user_id: 18,
          resource_id: 16,
          note: 'Sunt elit est culpa eiusmod anim cupidatat labore do non.',
        },
        {
          user_id: 2,
          resource_id: 9,
          note: 'Culpa mollit occaecat pariatur nisi in.',
        },
        {
          user_id: 18,
          resource_id: 12,
          note: 'In commodo Lorem sit adipisicing officia est ullamco ad minim fugiat cillum mollit esse.',
        },
        {
          user_id: 18,
          resource_id: 13,
          note: 'Pariatur nostrud laboris tempor non in veniam dolor ex cillum incididunt ipsum culpa sint.',
        },
        {
          user_id: 11,
          resource_id: 10,
          note:
            'Proident pariatur elit fugiat in laborum cillum adipisicing sint ipsum laborum exercitation esse ea sit.',
        },
        {
          user_id: 16,
          resource_id: 1,
          note: 'Laboris reprehenderit et aliquip ullamco ipsum reprehenderit labore reprehenderit.',
        },
        {
          user_id: 5,
          resource_id: 13,
          note: 'Reprehenderit sunt veniam Lorem dolore tempor labore non nisi duis.',
        },
        {
          user_id: 5,
          resource_id: 14,
          note: 'Occaecat cillum laboris non anim adipisicing pariatur officia.',
        },
        {
          user_id: 18,
          resource_id: 15,
          note: 'Velit proident consectetur sint pariatur.',
        },
        {
          user_id: 1,
          resource_id: 7,
          note: 'Ea excepteur cupidatat sunt exercitation est cupidatat.',
        },
        {
          user_id: 5,
          resource_id: 5,
          note: 'Non cillum minim ea ea nostrud mollit.',
        },
        {
          user_id: 14,
          resource_id: 15,
          note: 'Qui officia qui culpa consectetur laborum et minim commodo dolore laboris.',
        },
      ]);
    });
};
