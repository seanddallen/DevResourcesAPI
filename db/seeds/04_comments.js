exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('comments').insert([
        {
          user_id: 17,
          review_id: 3,
          content:
            'Aliquip elit do voluptate ullamco veniam adipisicing voluptate id eiusmod duis minim sint exercitation. Sit adipisicing adipisicing deserunt incididunt mollit dolor Lorem aliquip elit anim. Commodo cupidatat consequat consectetur reprehenderit sunt est voluptate incididunt velit officia amet dolor consectetur. Occaecat anim esse eiusmod culpa occaecat sint aliquip nulla enim voluptate voluptate aliquip mollit ad. Mollit sint aute commodo eiusmod reprehenderit.\r\n',
        },
        {
          user_id: 8,
          review_id: 3,
          content:
            'Mollit reprehenderit exercitation eu aute aliqua ea. Dolore nostrud duis sint velit nostrud ipsum mollit tempor. Ad ut elit fugiat duis. Non do amet reprehenderit pariatur ea consequat dolor mollit enim aliquip quis mollit occaecat.\r\n',
        },
        {
          user_id: 2,
          review_id: 20,
          content:
            'Dolore excepteur nostrud quis amet veniam ex. Veniam irure nostrud minim cillum id sunt eu nulla eu voluptate anim consequat laboris reprehenderit. Minim eu amet laboris eiusmod aliqua enim dolore adipisicing sunt irure eiusmod. Officia ipsum commodo ullamco tempor irure tempor in sit pariatur ex velit deserunt.\r\n',
        },
        {
          user_id: 7,
          review_id: 4,
          content:
            'Duis ea magna reprehenderit est. Adipisicing pariatur esse proident anim proident aliquip ad Lorem Lorem aliqua officia duis ullamco duis. In dolore in velit ad adipisicing consequat.\r\n',
        },
        {
          user_id: 16,
          review_id: 20,
          content:
            'Ex enim officia dolore nostrud aliquip nulla aliqua fugiat est. Excepteur dolor in cillum dolor magna officia cupidatat eiusmod nisi deserunt. Ad laboris et sunt ut consectetur ad duis dolor nulla veniam proident ad. Veniam labore irure cupidatat sit velit et consectetur do. Minim aliquip enim duis excepteur ullamco id anim nostrud dolor. Consectetur excepteur exercitation sint nulla labore qui veniam esse enim ipsum proident esse veniam. Consequat non officia nisi quis elit exercitation nulla Lorem aute.\r\n',
        },
        {
          user_id: 19,
          review_id: 9,
          content:
            'Et qui ut labore ullamco voluptate labore exercitation laborum consequat. Magna occaecat eu do magna minim. Aliquip id cupidatat est consequat magna pariatur reprehenderit in labore.\r\n',
        },
        {
          user_id: 15,
          review_id: 4,
          content:
            'Eu culpa do pariatur dolore incididunt magna eiusmod pariatur. Culpa commodo id consequat cupidatat commodo ea nisi sit commodo culpa enim laboris duis. Proident sint commodo officia ullamco excepteur officia in aliquip voluptate esse do irure sit officia.\r\n',
        },
        {
          user_id: 17,
          review_id: 2,
          content:
            'Sit fugiat consequat irure et aliqua occaecat dolore magna excepteur do tempor ullamco enim. Proident exercitation aliqua voluptate in. Ut esse qui duis culpa et.\r\n',
        },
        {
          user_id: 13,
          review_id: 17,
          content:
            'Qui sint aliquip deserunt velit. Officia proident laborum adipisicing ea consequat fugiat ullamco sint ea et cillum dolor nostrud consequat. Commodo proident elit excepteur deserunt sit sint exercitation Lorem elit adipisicing. Occaecat ut est sint sit veniam amet sint. Laboris do commodo Lorem eu minim.\r\n',
        },
        {
          user_id: 10,
          review_id: 16,
          content:
            'Incididunt do aliqua ad tempor fugiat cupidatat pariatur laborum non est labore. Enim culpa eu nostrud incididunt laborum nostrud minim Lorem. Aliquip minim officia fugiat cillum eu laboris eu sint incididunt irure nulla.\r\n',
        },
        {
          user_id: 15,
          review_id: 18,
          content:
            'Lorem aliquip adipisicing culpa voluptate aliquip excepteur laboris do qui incididunt esse quis sunt. Labore incididunt sint culpa non ipsum dolor deserunt. Ut in deserunt labore ea. Sunt tempor nisi laborum aute tempor commodo. Elit esse velit qui ex sint esse. Exercitation ullamco qui dolore ex magna dolore anim. Veniam sit in aliqua enim occaecat ea ex non deserunt.\r\n',
        },
        {
          user_id: 19,
          review_id: 4,
          content:
            'Pariatur amet reprehenderit excepteur duis pariatur nisi amet pariatur consectetur laborum dolor. Tempor cillum anim cupidatat et cupidatat tempor. Sint laboris magna voluptate mollit.\r\n',
        },
        {
          user_id: 13,
          review_id: 7,
          content:
            'Ex consequat eiusmod enim adipisicing anim reprehenderit mollit exercitation ipsum. Commodo elit officia nulla anim nulla et sint cillum laboris amet ea nulla nisi sint. Incididunt excepteur tempor magna consectetur ad. Culpa aute laborum duis quis duis nostrud magna eiusmod tempor deserunt nisi anim. In tempor in ex dolor nisi quis voluptate cupidatat id voluptate. Ut deserunt laborum proident pariatur tempor do duis sit irure. Cupidatat aute ut laboris anim commodo officia elit.\r\n',
        },
        {
          user_id: 1,
          review_id: 12,
          content:
            'Adipisicing voluptate ex adipisicing magna voluptate. Cillum enim cillum non laborum exercitation esse. Reprehenderit pariatur ullamco sit nisi incididunt. Aliqua consequat dolore reprehenderit aute est.\r\n',
        },
        {
          user_id: 10,
          review_id: 20,
          content:
            'Ad pariatur minim officia minim sit aliqua Lorem ipsum sunt. Ullamco aute ullamco dolor commodo incididunt laborum sunt ea pariatur ullamco sit. Magna cupidatat aute et tempor anim dolore do deserunt et ad labore elit. Consectetur adipisicing esse magna reprehenderit enim excepteur eiusmod mollit dolore ullamco qui proident cillum dolore. Nisi excepteur id nostrud reprehenderit quis enim dolore proident pariatur dolore nulla irure. Excepteur et ipsum proident magna.\r\n',
        },
        {
          user_id: 7,
          review_id: 12,
          content:
            'Quis occaecat sint dolor exercitation ullamco deserunt ullamco dolore. Id reprehenderit consectetur ad reprehenderit et enim duis aute Lorem deserunt pariatur esse nostrud irure. Ullamco do sit sunt aliquip. Eiusmod cupidatat voluptate ipsum cillum officia minim. Veniam proident qui ut laboris cillum consectetur occaecat et aliquip elit enim deserunt voluptate anim.\r\n',
        },
        {
          user_id: 4,
          review_id: 17,
          content:
            'Culpa culpa irure esse voluptate incididunt aliquip laborum ullamco. Magna id reprehenderit dolore veniam exercitation enim dolore dolor deserunt quis aliquip. Nisi sit anim fugiat excepteur voluptate veniam. Do eu sunt voluptate irure reprehenderit deserunt velit. Ipsum labore magna sunt fugiat laboris est magna. Deserunt sint ea cillum nulla sunt eu aliquip est.\r\n',
        },
        {
          user_id: 14,
          review_id: 13,
          content:
            'Est aliqua ipsum ipsum eu proident. Deserunt mollit tempor ex labore nisi enim ad pariatur qui. Aliqua in incididunt voluptate aute esse non labore et amet occaecat culpa.\r\n',
        },
        {
          user_id: 18,
          review_id: 18,
          content:
            'Velit ea laborum duis exercitation enim consectetur veniam deserunt tempor voluptate ea ullamco tempor. Mollit dolor culpa aliqua veniam ex occaecat eiusmod anim labore voluptate aliquip aliqua. Esse esse dolore pariatur irure ea dolor commodo laboris sit.\r\n',
        },
        {
          user_id: 5,
          review_id: 10,
          content:
            'Cillum enim laboris qui occaecat cupidatat dolore. Ex Lorem laborum veniam nostrud et reprehenderit mollit quis ut id proident. Aliquip cillum in duis dolore consequat non non ipsum ipsum sunt elit eu. Et voluptate incididunt sunt cillum aliquip ipsum. Aliquip ullamco enim officia do quis dolore occaecat ullamco aute officia deserunt aute veniam. Non laborum pariatur ex laborum.\r\n',
        },
      ]);
    });
};
