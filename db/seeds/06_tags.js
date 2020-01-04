exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tags')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tags').insert([
        {
          resource_id: 37,
          name: 'CSS',
        },
        {
          resource_id: 29,
          name: 'Angular',
        },
        {
          resource_id: 32,
          name: 'React',
        },
        {
          resource_id: 76,
          name: 'Angular',
        },
        {
          resource_id: 85,
          name: 'HTML',
        },
        {
          resource_id: 158,
          name: 'Spring',
        },
        {
          resource_id: 34,
          name: 'MVC',
        },
        {
          resource_id: 88,
          name: 'Node',
        },
        {
          resource_id: 8,
          name: 'HTML',
        },
        {
          resource_id: 170,
          name: 'SQL',
        },
        {
          resource_id: 26,
          name: 'MVC',
        },
        {
          resource_id: 63,
          name: 'Angular',
        },
        {
          resource_id: 166,
          name: 'Vue',
        },
        {
          resource_id: 106,
          name: 'Angular',
        },
        {
          resource_id: 23,
          name: 'Postgres',
        },
        {
          resource_id: 23,
          name: 'ES6',
        },
        {
          resource_id: 57,
          name: 'CSS',
        },
        {
          resource_id: 98,
          name: 'MVC',
        },
        {
          resource_id: 116,
          name: 'Spring',
        },
        {
          resource_id: 16,
          name: 'Angular',
        },
        {
          resource_id: 164,
          name: 'ES6',
        },
        {
          resource_id: 190,
          name: 'Knex',
        },
        {
          resource_id: 165,
          name: 'SQL',
        },
        {
          resource_id: 75,
          name: 'Redux',
        },
        {
          resource_id: 92,
          name: 'Redux',
        },
        {
          resource_id: 139,
          name: 'SQL',
        },
        {
          resource_id: 37,
          name: 'Spring',
        },
        {
          resource_id: 96,
          name: 'Spring',
        },
        {
          resource_id: 112,
          name: 'Node',
        },
        {
          resource_id: 8,
          name: 'Node',
        },
        {
          resource_id: 43,
          name: 'Node',
        },
        {
          resource_id: 32,
          name: 'React',
        },
        {
          resource_id: 108,
          name: 'Express',
        },
        {
          resource_id: 52,
          name: 'Spring',
        },
        {
          resource_id: 84,
          name: 'Vue',
        },
        {
          resource_id: 168,
          name: 'CSS',
        },
        {
          resource_id: 73,
          name: 'Angular',
        },
        {
          resource_id: 89,
          name: 'Angular',
        },
        {
          resource_id: 88,
          name: 'React',
        },
        {
          resource_id: 92,
          name: 'MVC',
        },
        {
          resource_id: 174,
          name: 'Vue',
        },
        {
          resource_id: 2,
          name: 'Node',
        },
        {
          resource_id: 153,
          name: 'Node',
        },
        {
          resource_id: 51,
          name: 'Spring',
        },
        {
          resource_id: 198,
          name: 'Postgres',
        },
        {
          resource_id: 94,
          name: 'Knex',
        },
        {
          resource_id: 173,
          name: 'Express',
        },
        {
          resource_id: 43,
          name: 'Postgres',
        },
        {
          resource_id: 152,
          name: 'Vue',
        },
        {
          resource_id: 111,
          name: 'ES6',
        },
        {
          resource_id: 38,
          name: 'Knex',
        },
        {
          resource_id: 11,
          name: 'React',
        },
        {
          resource_id: 126,
          name: 'MVC',
        },
        {
          resource_id: 58,
          name: 'Express',
        },
        {
          resource_id: 136,
          name: 'Vue',
        },
        {
          resource_id: 93,
          name: 'MVC',
        },
        {
          resource_id: 79,
          name: 'Express',
        },
        {
          resource_id: 170,
          name: 'Spring',
        },
        {
          resource_id: 56,
          name: 'Vue',
        },
        {
          resource_id: 65,
          name: 'Node',
        },
        {
          resource_id: 40,
          name: 'Knex',
        },
        {
          resource_id: 187,
          name: 'Knex',
        },
        {
          resource_id: 31,
          name: 'Vue',
        },
        {
          resource_id: 53,
          name: 'CSS',
        },
        {
          resource_id: 182,
          name: 'Express',
        },
        {
          resource_id: 144,
          name: 'Vue',
        },
        {
          resource_id: 45,
          name: 'Postgres',
        },
        {
          resource_id: 58,
          name: 'Postgres',
        },
        {
          resource_id: 10,
          name: 'React',
        },
        {
          resource_id: 136,
          name: 'SQL',
        },
        {
          resource_id: 63,
          name: 'CSS',
        },
        {
          resource_id: 106,
          name: 'ES6',
        },
        {
          resource_id: 114,
          name: 'ES6',
        },
        {
          resource_id: 53,
          name: 'Knex',
        },
        {
          resource_id: 155,
          name: 'Node',
        },
        {
          resource_id: 144,
          name: 'Spring',
        },
        {
          resource_id: 102,
          name: 'Knex',
        },
        {
          resource_id: 12,
          name: 'SQL',
        },
        {
          resource_id: 195,
          name: 'CSS',
        },
        {
          resource_id: 102,
          name: 'Knex',
        },
        {
          resource_id: 182,
          name: 'Postgres',
        },
        {
          resource_id: 83,
          name: 'CSS',
        },
        {
          resource_id: 172,
          name: 'HTML',
        },
        {
          resource_id: 110,
          name: 'Postgres',
        },
        {
          resource_id: 108,
          name: 'Express',
        },
        {
          resource_id: 180,
          name: 'MVC',
        },
        {
          resource_id: 128,
          name: 'Angular',
        },
        {
          resource_id: 6,
          name: 'SQL',
        },
        {
          resource_id: 110,
          name: 'Express',
        },
        {
          resource_id: 137,
          name: 'Knex',
        },
        {
          resource_id: 121,
          name: 'Express',
        },
        {
          resource_id: 74,
          name: 'ES6',
        },
        {
          resource_id: 117,
          name: 'Express',
        },
        {
          resource_id: 71,
          name: 'React',
        },
        {
          resource_id: 183,
          name: 'Node',
        },
        {
          resource_id: 192,
          name: 'Spring',
        },
        {
          resource_id: 140,
          name: 'Node',
        },
        {
          resource_id: 73,
          name: 'Knex',
        },
        {
          resource_id: 97,
          name: 'Vue',
        },
        {
          resource_id: 36,
          name: 'Knex',
        },
        {
          resource_id: 79,
          name: 'Express',
        },
        {
          resource_id: 23,
          name: 'CSS',
        },
        {
          resource_id: 45,
          name: 'Redux',
        },
        {
          resource_id: 73,
          name: 'HTML',
        },
        {
          resource_id: 5,
          name: 'Knex',
        },
        {
          resource_id: 34,
          name: 'React',
        },
        {
          resource_id: 20,
          name: 'Node',
        },
        {
          resource_id: 177,
          name: 'Spring',
        },
        {
          resource_id: 31,
          name: 'Vue',
        },
        {
          resource_id: 6,
          name: 'Postgres',
        },
        {
          resource_id: 11,
          name: 'Postgres',
        },
        {
          resource_id: 7,
          name: 'ES6',
        },
        {
          resource_id: 125,
          name: 'Postgres',
        },
        {
          resource_id: 172,
          name: 'ES6',
        },
        {
          resource_id: 85,
          name: 'Knex',
        },
        {
          resource_id: 87,
          name: 'Spring',
        },
        {
          resource_id: 163,
          name: 'MVC',
        },
        {
          resource_id: 111,
          name: 'React',
        },
        {
          resource_id: 92,
          name: 'HTML',
        },
        {
          resource_id: 38,
          name: 'Vue',
        },
        {
          resource_id: 118,
          name: 'Knex',
        },
        {
          resource_id: 197,
          name: 'Express',
        },
        {
          resource_id: 159,
          name: 'Express',
        },
        {
          resource_id: 126,
          name: 'HTML',
        },
        {
          resource_id: 122,
          name: 'Redux',
        },
        {
          resource_id: 183,
          name: 'Vue',
        },
        {
          resource_id: 187,
          name: 'Knex',
        },
        {
          resource_id: 134,
          name: 'Angular',
        },
        {
          resource_id: 166,
          name: 'Vue',
        },
        {
          resource_id: 159,
          name: 'Angular',
        },
        {
          resource_id: 11,
          name: 'CSS',
        },
        {
          resource_id: 28,
          name: 'ES6',
        },
        {
          resource_id: 149,
          name: 'Knex',
        },
        {
          resource_id: 78,
          name: 'Angular',
        },
        {
          resource_id: 14,
          name: 'CSS',
        },
        {
          resource_id: 173,
          name: 'SQL',
        },
        {
          resource_id: 40,
          name: 'Node',
        },
        {
          resource_id: 195,
          name: 'Spring',
        },
        {
          resource_id: 61,
          name: 'MVC',
        },
        {
          resource_id: 88,
          name: 'MVC',
        },
        {
          resource_id: 44,
          name: 'React',
        },
        {
          resource_id: 184,
          name: 'Knex',
        },
        {
          resource_id: 18,
          name: 'React',
        },
        {
          resource_id: 65,
          name: 'Node',
        },
        {
          resource_id: 102,
          name: 'Postgres',
        },
        {
          resource_id: 62,
          name: 'Express',
        },
        {
          resource_id: 109,
          name: 'ES6',
        },
        {
          resource_id: 45,
          name: 'ES6',
        },
        {
          resource_id: 86,
          name: 'CSS',
        },
        {
          resource_id: 74,
          name: 'ES6',
        },
        {
          resource_id: 195,
          name: 'MVC',
        },
        {
          resource_id: 6,
          name: 'Postgres',
        },
        {
          resource_id: 54,
          name: 'Redux',
        },
        {
          resource_id: 105,
          name: 'HTML',
        },
        {
          resource_id: 1,
          name: 'SQL',
        },
        {
          resource_id: 175,
          name: 'HTML',
        },
        {
          resource_id: 46,
          name: 'Angular',
        },
        {
          resource_id: 132,
          name: 'React',
        },
        {
          resource_id: 176,
          name: 'Angular',
        },
        {
          resource_id: 115,
          name: 'React',
        },
        {
          resource_id: 36,
          name: 'CSS',
        },
        {
          resource_id: 5,
          name: 'Knex',
        },
        {
          resource_id: 168,
          name: 'Knex',
        },
        {
          resource_id: 22,
          name: 'HTML',
        },
        {
          resource_id: 149,
          name: 'ES6',
        },
        {
          resource_id: 137,
          name: 'SQL',
        },
        {
          resource_id: 187,
          name: 'MVC',
        },
        {
          resource_id: 98,
          name: 'Postgres',
        },
        {
          resource_id: 49,
          name: 'React',
        },
        {
          resource_id: 110,
          name: 'Postgres',
        },
        {
          resource_id: 55,
          name: 'Spring',
        },
        {
          resource_id: 85,
          name: 'Spring',
        },
        {
          resource_id: 123,
          name: 'Vue',
        },
        {
          resource_id: 108,
          name: 'Vue',
        },
        {
          resource_id: 107,
          name: 'Knex',
        },
        {
          resource_id: 164,
          name: 'Redux',
        },
        {
          resource_id: 34,
          name: 'Node',
        },
        {
          resource_id: 78,
          name: 'Vue',
        },
        {
          resource_id: 180,
          name: 'CSS',
        },
        {
          resource_id: 197,
          name: 'Postgres',
        },
        {
          resource_id: 164,
          name: 'ES6',
        },
        {
          resource_id: 196,
          name: 'CSS',
        },
        {
          resource_id: 93,
          name: 'Angular',
        },
        {
          resource_id: 115,
          name: 'Node',
        },
        {
          resource_id: 127,
          name: 'Express',
        },
        {
          resource_id: 125,
          name: 'SQL',
        },
        {
          resource_id: 32,
          name: 'Node',
        },
        {
          resource_id: 161,
          name: 'Knex',
        },
        {
          resource_id: 165,
          name: 'SQL',
        },
        {
          resource_id: 162,
          name: 'Redux',
        },
        {
          resource_id: 72,
          name: 'Express',
        },
        {
          resource_id: 122,
          name: 'Knex',
        },
        {
          resource_id: 91,
          name: 'Vue',
        },
        {
          resource_id: 101,
          name: 'Spring',
        },
        {
          resource_id: 60,
          name: 'Spring',
        },
        {
          resource_id: 6,
          name: 'Knex',
        },
        {
          resource_id: 71,
          name: 'Node',
        },
        {
          resource_id: 140,
          name: 'Express',
        },
        {
          resource_id: 43,
          name: 'Angular',
        },
        {
          resource_id: 153,
          name: 'MVC',
        },
        {
          resource_id: 57,
          name: 'Vue',
        },
        {
          resource_id: 90,
          name: 'React',
        },
        {
          resource_id: 29,
          name: 'SQL',
        },
        {
          resource_id: 94,
          name: 'React',
        },
        {
          resource_id: 164,
          name: 'Vue',
        },
        {
          resource_id: 69,
          name: 'Node',
        },
        {
          resource_id: 89,
          name: 'React',
        },
        {
          resource_id: 2,
          name: 'SQL',
        },
        {
          resource_id: 131,
          name: 'CSS',
        },
        {
          resource_id: 115,
          name: 'React',
        },
        {
          resource_id: 4,
          name: 'Postgres',
        },
        {
          resource_id: 71,
          name: 'CSS',
        },
        {
          resource_id: 67,
          name: 'Redux',
        },
        {
          resource_id: 193,
          name: 'SQL',
        },
        {
          resource_id: 36,
          name: 'Vue',
        },
        {
          resource_id: 79,
          name: 'Knex',
        },
        {
          resource_id: 45,
          name: 'Node',
        },
        {
          resource_id: 64,
          name: 'Angular',
        },
        {
          resource_id: 114,
          name: 'Node',
        },
        {
          resource_id: 14,
          name: 'Postgres',
        },
        {
          resource_id: 54,
          name: 'ES6',
        },
        {
          resource_id: 6,
          name: 'CSS',
        },
        {
          resource_id: 32,
          name: 'MVC',
        },
        {
          resource_id: 90,
          name: 'Knex',
        },
        {
          resource_id: 118,
          name: 'Node',
        },
        {
          resource_id: 29,
          name: 'Angular',
        },
        {
          resource_id: 105,
          name: 'HTML',
        },
        {
          resource_id: 52,
          name: 'Express',
        },
        {
          resource_id: 142,
          name: 'Angular',
        },
        {
          resource_id: 174,
          name: 'CSS',
        },
        {
          resource_id: 195,
          name: 'Postgres',
        },
        {
          resource_id: 45,
          name: 'Spring',
        },
        {
          resource_id: 168,
          name: 'Spring',
        },
        {
          resource_id: 99,
          name: 'Knex',
        },
        {
          resource_id: 65,
          name: 'ES6',
        },
        {
          resource_id: 140,
          name: 'Knex',
        },
        {
          resource_id: 50,
          name: 'Node',
        },
        {
          resource_id: 101,
          name: 'Angular',
        },
        {
          resource_id: 193,
          name: 'React',
        },
        {
          resource_id: 153,
          name: 'Redux',
        },
        {
          resource_id: 93,
          name: 'Angular',
        },
        {
          resource_id: 52,
          name: 'Postgres',
        },
        {
          resource_id: 156,
          name: 'Redux',
        },
        {
          resource_id: 65,
          name: 'HTML',
        },
        {
          resource_id: 60,
          name: 'Postgres',
        },
        {
          resource_id: 131,
          name: 'Redux',
        },
        {
          resource_id: 109,
          name: 'CSS',
        },
        {
          resource_id: 115,
          name: 'Knex',
        },
        {
          resource_id: 123,
          name: 'Angular',
        },
        {
          resource_id: 162,
          name: 'ES6',
        },
        {
          resource_id: 8,
          name: 'ES6',
        },
        {
          resource_id: 119,
          name: 'Redux',
        },
        {
          resource_id: 190,
          name: 'Vue',
        },
        {
          resource_id: 92,
          name: 'HTML',
        },
        {
          resource_id: 180,
          name: 'Postgres',
        },
        {
          resource_id: 155,
          name: 'Node',
        },
        {
          resource_id: 76,
          name: 'CSS',
        },
        {
          resource_id: 174,
          name: 'Redux',
        },
        {
          resource_id: 145,
          name: 'Express',
        },
        {
          resource_id: 29,
          name: 'Redux',
        },
        {
          resource_id: 22,
          name: 'React',
        },
        {
          resource_id: 147,
          name: 'MVC',
        },
        {
          resource_id: 31,
          name: 'SQL',
        },
        {
          resource_id: 109,
          name: 'React',
        },
        {
          resource_id: 102,
          name: 'Angular',
        },
        {
          resource_id: 153,
          name: 'HTML',
        },
        {
          resource_id: 16,
          name: 'HTML',
        },
        {
          resource_id: 190,
          name: 'Vue',
        },
        {
          resource_id: 128,
          name: 'Node',
        },
        {
          resource_id: 138,
          name: 'Vue',
        },
        {
          resource_id: 109,
          name: 'Express',
        },
        {
          resource_id: 121,
          name: 'Node',
        },
        {
          resource_id: 164,
          name: 'Postgres',
        },
        {
          resource_id: 154,
          name: 'React',
        },
        {
          resource_id: 198,
          name: 'Spring',
        },
        {
          resource_id: 36,
          name: 'Angular',
        },
        {
          resource_id: 111,
          name: 'SQL',
        },
        {
          resource_id: 152,
          name: 'SQL',
        },
        {
          resource_id: 55,
          name: 'Express',
        },
        {
          resource_id: 31,
          name: 'CSS',
        },
        {
          resource_id: 140,
          name: 'SQL',
        },
        {
          resource_id: 179,
          name: 'Postgres',
        },
        {
          resource_id: 171,
          name: 'React',
        },
        {
          resource_id: 162,
          name: 'ES6',
        },
        {
          resource_id: 81,
          name: 'Postgres',
        },
        {
          resource_id: 84,
          name: 'Vue',
        },
        {
          resource_id: 156,
          name: 'React',
        },
        {
          resource_id: 169,
          name: 'Spring',
        },
        {
          resource_id: 25,
          name: 'CSS',
        },
        {
          resource_id: 17,
          name: 'React',
        },
        {
          resource_id: 19,
          name: 'Express',
        },
        {
          resource_id: 4,
          name: 'Knex',
        },
        {
          resource_id: 131,
          name: 'Express',
        },
        {
          resource_id: 96,
          name: 'Redux',
        },
        {
          resource_id: 78,
          name: 'MVC',
        },
        {
          resource_id: 170,
          name: 'Redux',
        },
        {
          resource_id: 115,
          name: 'ES6',
        },
        {
          resource_id: 46,
          name: 'Knex',
        },
        {
          resource_id: 30,
          name: 'SQL',
        },
        {
          resource_id: 23,
          name: 'Angular',
        },
        {
          resource_id: 156,
          name: 'React',
        },
      ]);
    });
};
