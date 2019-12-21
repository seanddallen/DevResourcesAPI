exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('reviews').insert([
        {
          user_id: 6,
          resource_id: 10,
          rating: 1,
          content:
            'Elit elit incididunt sit do amet veniam nisi est velit consectetur occaecat nulla ea reprehenderit. Dolor eu labore aute mollit reprehenderit officia deserunt. Elit eu occaecat deserunt commodo et laborum anim voluptate amet pariatur. Occaecat mollit aliqua proident in aute. Et laborum ea id sit ut ipsum excepteur qui cillum pariatur aliquip do excepteur. In do aliqua aute exercitation fugiat occaecat dolor ipsum in.\r\n',
        },
        {
          user_id: 8,
          resource_id: 3,
          rating: 5,
          content:
            'Non deserunt commodo consectetur et aliqua nisi dolor quis. Sint dolor consectetur ut do nulla nostrud voluptate do tempor Lorem eu adipisicing laboris occaecat. Consequat tempor in consequat ullamco ad Lorem occaecat cupidatat.\r\n',
        },
        {
          user_id: 19,
          resource_id: 9,
          rating: 1,
          content:
            'Nulla anim nostrud ullamco anim officia Lorem sit nulla. Laboris minim duis duis dolor aliquip ut ipsum laborum do ut laborum velit exercitation. Irure officia ea amet cillum. Ex reprehenderit aliqua et mollit consectetur cupidatat consectetur aliqua. Sit elit mollit voluptate adipisicing esse incididunt sit officia ipsum sunt.\r\n',
        },
        {
          user_id: 11,
          resource_id: 8,
          rating: 4,
          content:
            'Fugiat pariatur cupidatat veniam est excepteur aute incididunt et excepteur nulla anim aliquip incididunt enim. Sint nisi eu esse ea laboris ut pariatur ex quis nostrud ut. Cupidatat cupidatat dolor esse pariatur labore reprehenderit tempor Lorem excepteur excepteur. Excepteur do sint quis excepteur aliquip aliquip velit incididunt. Ut proident aliqua ipsum et sunt aliquip. Nisi occaecat ut ea qui ipsum voluptate eu.\r\n',
        },
        {
          user_id: 1,
          resource_id: 9,
          rating: 5,
          content:
            'Quis ex excepteur proident fugiat do amet. Voluptate nisi culpa excepteur laboris ex ut do excepteur incididunt adipisicing aute irure fugiat consectetur. Est ipsum ut irure amet eiusmod consequat tempor cillum qui labore ad. Reprehenderit consequat pariatur exercitation nisi laboris Lorem occaecat. Culpa elit irure dolor adipisicing ex occaecat elit occaecat proident anim aliquip minim dolor est.\r\n',
        },
        {
          user_id: 4,
          resource_id: 4,
          rating: 5,
          content:
            'In sunt nisi qui reprehenderit consectetur. Adipisicing ut ad ullamco deserunt et sit anim dolore dolore ipsum sint aliquip sit. Et incididunt amet sint irure Lorem cupidatat duis. Ut id consequat laboris nostrud minim ut aute dolore mollit laborum. Sint sint esse qui tempor irure quis proident sit eu est ea sunt cillum est. Esse proident in aliqua aute cillum aliquip irure excepteur deserunt adipisicing amet proident consectetur.\r\n',
        },
        {
          user_id: 2,
          resource_id: 5,
          rating: 5,
          content:
            'Occaecat nostrud anim sit consectetur mollit aute labore dolor in aute anim amet in. Consequat occaecat commodo fugiat in esse. Pariatur incididunt reprehenderit et magna in adipisicing nostrud.\r\n',
        },
        {
          user_id: 2,
          resource_id: 2,
          rating: 4,
          content:
            'Est id ipsum amet proident eiusmod duis et occaecat sint aliquip veniam excepteur. Excepteur irure irure labore in aliquip aliquip. Cupidatat laboris ullamco eiusmod excepteur aute culpa ullamco nostrud nostrud aliqua cillum. Pariatur veniam mollit aliqua est et culpa dolore. Labore exercitation ut dolore adipisicing enim commodo laborum eiusmod.\r\n',
        },
        {
          user_id: 10,
          resource_id: 7,
          rating: 1,
          content:
            'Nisi laboris aute consequat duis aliquip deserunt quis. Proident elit irure cillum pariatur labore. Magna proident excepteur sit ut occaecat laboris irure dolor amet anim enim ullamco. Lorem pariatur fugiat nisi laborum laborum voluptate et est.\r\n',
        },
        {
          user_id: 6,
          resource_id: 6,
          rating: 1,
          content:
            'Eiusmod ut eiusmod consequat consectetur in velit cupidatat laboris tempor enim aute quis ad. Tempor dolore occaecat voluptate aliqua reprehenderit eu adipisicing nisi. Nulla aliquip fugiat dolor consectetur sint sint officia consequat officia nisi cillum sit.\r\n',
        },
        {
          user_id: 16,
          resource_id: 4,
          rating: 1,
          content:
            'Reprehenderit occaecat pariatur sunt sit sunt cillum velit adipisicing magna duis veniam ut consequat sit. Cillum eu exercitation nostrud tempor in ullamco elit. Tempor amet labore voluptate veniam minim. Nulla reprehenderit sunt magna id occaecat. Dolor fugiat ut velit velit tempor pariatur aliquip laborum et. Velit aliquip dolore ut enim.\r\n',
        },
        {
          user_id: 13,
          resource_id: 1,
          rating: 5,
          content:
            'Lorem eiusmod sit excepteur ullamco anim dolore labore. Duis ipsum amet mollit non aliqua cillum do nulla do excepteur ullamco in Lorem ullamco. Laboris mollit anim occaecat aliquip occaecat adipisicing id. Exercitation nostrud id occaecat nisi ea. Excepteur veniam anim amet consequat officia. Incididunt ullamco irure magna sint nostrud dolore labore pariatur minim. Dolore nulla nisi dolor sit reprehenderit in aute quis nostrud exercitation laboris.\r\n',
        },
        {
          user_id: 7,
          resource_id: 1,
          rating: 3,
          content:
            'Cillum occaecat labore veniam sunt pariatur elit laboris reprehenderit voluptate. Quis ullamco consectetur consequat laborum deserunt deserunt. Labore laboris culpa ullamco aliquip proident laborum exercitation proident culpa dolore. Proident ex culpa consequat sunt irure deserunt cupidatat ullamco laboris consectetur consequat commodo. Pariatur duis consequat voluptate pariatur adipisicing pariatur culpa. Voluptate officia irure magna enim occaecat adipisicing nisi enim sint minim quis occaecat proident.\r\n',
        },
        {
          user_id: 11,
          resource_id: 3,
          rating: 2,
          content:
            'Amet minim ipsum anim est ut cillum fugiat minim ipsum exercitation. Elit ipsum quis veniam exercitation minim magna reprehenderit. Qui labore quis adipisicing duis deserunt. Dolore proident occaecat exercitation incididunt quis nulla ullamco.\r\n',
        },
        {
          user_id: 3,
          resource_id: 8,
          rating: 1,
          content:
            'Elit incididunt laborum cillum elit nostrud ad commodo nostrud et. Veniam amet tempor labore eiusmod culpa nostrud. Veniam nulla ullamco ut Lorem incididunt officia tempor ullamco veniam sint minim consectetur pariatur. Ex proident duis aliqua adipisicing et sunt aute ea eiusmod veniam irure. Reprehenderit eu consectetur aute quis voluptate sit officia ad esse Lorem cillum tempor elit. Qui aliquip eiusmod deserunt labore tempor in ea officia tempor quis est nulla. Nulla laborum aliquip non aliquip veniam nisi voluptate cillum proident labore aute occaecat eiusmod veniam.\r\n',
        },
        {
          user_id: 15,
          resource_id: 8,
          rating: 5,
          content:
            'Enim sunt amet incididunt labore id quis labore. Veniam proident anim proident cupidatat qui incididunt ad dolor duis sit ad. Sint aliqua nostrud elit irure non duis et sunt ea. Ad nisi cillum consequat occaecat ullamco. Laboris eiusmod consequat laborum esse ea dolor veniam. Pariatur in commodo elit esse ea labore eu.\r\n',
        },
        {
          user_id: 14,
          resource_id: 1,
          rating: 1,
          content:
            'Ea exercitation tempor tempor excepteur aliquip deserunt et sit Lorem. Incididunt Lorem aliqua nisi tempor irure et ea. Aliquip veniam do enim in tempor voluptate in velit quis esse magna quis proident adipisicing. Consectetur eu sint commodo consectetur Lorem amet ullamco incididunt.\r\n',
        },
        {
          user_id: 19,
          resource_id: 7,
          rating: 5,
          content:
            'Esse aute amet excepteur elit duis sit laboris amet tempor ullamco velit. Veniam cupidatat ullamco eiusmod elit sit nisi in consequat exercitation enim minim commodo consectetur minim. Eu non quis laborum mollit velit. Minim et mollit qui incididunt quis ullamco veniam do cillum duis deserunt in. Irure minim est velit incididunt esse laboris cillum dolor non irure. Occaecat ad irure occaecat quis sunt est ullamco officia ut consequat aute.\r\n',
        },
        {
          user_id: 5,
          resource_id: 7,
          rating: 4,
          content:
            'Consectetur incididunt culpa quis in commodo duis. Ut et labore fugiat commodo non aliqua sunt. Fugiat qui tempor ut laboris culpa et in nulla sint. Aliquip ex dolor anim magna amet minim aute consectetur excepteur.\r\n',
        },
        {
          user_id: 12,
          resource_id: 1,
          rating: 2,
          content:
            'Nisi irure anim elit deserunt enim fugiat sit dolor dolore commodo culpa. Deserunt amet commodo commodo ut mollit voluptate. Voluptate adipisicing non aliquip ut adipisicing incididunt proident et voluptate labore sit non commodo enim. Minim quis ullamco ullamco laborum. Officia in elit labore mollit pariatur laborum magna aliqua ex ipsum. Pariatur dolore consectetur Lorem do minim adipisicing enim consectetur anim sit aliquip. Ut cupidatat laboris consequat adipisicing fugiat dolor est cupidatat sint voluptate ea cillum.\r\n',
        },
      ]);
    });
};
