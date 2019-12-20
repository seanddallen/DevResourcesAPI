
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "first_name": "Bullock",
          "last_name": "Cherry",
          "username": "do",
          "email": "bullockcherry@accuprint.com",
          "freelance": true,
          "employed": true,
          "education": "Bootcamp",
          "years": "1-2",
          "experience": "Lead",
          "specialty": "Full Stack",
          "approved": true,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": "Admin",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 38
        },
        {
          "first_name": "Sadie",
          "last_name": "Noel",
          "username": "ut",
          "email": "sadienoel@accuprint.com",
          "freelance": true,
          "employed": false,
          "education": "CS Grad",
          "years": "10+",
          "experience": "Hobbiest",
          "specialty": "Machine Learning",
          "approved": true,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 135
        },
        {
          "first_name": "Robert",
          "last_name": "Mcpherson",
          "username": "consequat",
          "email": "robertmcpherson@accuprint.com",
          "freelance": false,
          "employed": false,
          "education": "Bootcamp",
          "years": "1-2",
          "experience": "Junior",
          "specialty": "Backend",
          "approved": true,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 218
        },
        {
          "first_name": "Teri",
          "last_name": "Lewis",
          "username": "tempor",
          "email": "terilewis@accuprint.com",
          "freelance": true,
          "employed": false,
          "education": "CS Grad",
          "years": "5-10",
          "experience": "Student",
          "specialty": "Full Stack",
          "approved": false,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 94
        },
        {
          "first_name": "Kline",
          "last_name": "Small",
          "username": "amet",
          "email": "klinesmall@accuprint.com",
          "freelance": false,
          "employed": true,
          "education": "Bootcamp",
          "years": "1-2",
          "experience": "Mid",
          "specialty": "Frontend",
          "approved": true,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 444
        },
        {
          "first_name": "Howe",
          "last_name": "Beck",
          "username": "officia",
          "email": "howebeck@accuprint.com",
          "freelance": true,
          "employed": false,
          "education": "CS Grad",
          "years": "10+",
          "experience": "Senior",
          "specialty": "Data Science",
          "approved": true,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 308
        },
        {
          "first_name": "Florine",
          "last_name": "Ingram",
          "username": "ullamco",
          "email": "florineingram@accuprint.com",
          "freelance": false,
          "employed": true,
          "education": "selfTaught",
          "years": "1-2",
          "experience": "Student",
          "specialty": "Frontend",
          "approved": true,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 268
        },
        {
          "first_name": "Pennington",
          "last_name": "Marks",
          "username": "eu",
          "email": "penningtonmarks@accuprint.com",
          "freelance": false,
          "employed": false,
          "education": "selfTaught",
          "years": "2-5",
          "experience": "Senior",
          "specialty": "Data Science",
          "approved": true,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 257
        },
        {
          "first_name": "Gould",
          "last_name": "Wall",
          "username": "esse",
          "email": "gouldwall@accuprint.com",
          "freelance": false,
          "employed": true,
          "education": "Bootcamp",
          "years": "10+",
          "experience": "Lead",
          "specialty": "Frontend",
          "approved": true,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 275
        },
        {
          "first_name": "Harrell",
          "last_name": "Lang",
          "username": "dolor",
          "email": "harrelllang@accuprint.com",
          "freelance": false,
          "employed": true,
          "education": "CS Grad",
          "years": "1-2",
          "experience": "Lead",
          "specialty": "Frontend",
          "approved": true,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 140
        },
        {
          "first_name": "Wanda",
          "last_name": "Salazar",
          "username": "eiusmod",
          "email": "wandasalazar@accuprint.com",
          "freelance": true,
          "employed": true,
          "education": "Bootcamp",
          "years": "5-10",
          "experience": "Junior",
          "specialty": "Data Science",
          "approved": true,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 66
        },
        {
          "first_name": "Deidre",
          "last_name": "Mckenzie",
          "username": "duis",
          "email": "deidremckenzie@accuprint.com",
          "freelance": true,
          "employed": false,
          "education": "selfTaught",
          "years": "0-1",
          "experience": "Student",
          "specialty": "Backend",
          "approved": true,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 71
        },
        {
          "first_name": "Lila",
          "last_name": "Cummings",
          "username": "Lorem",
          "email": "lilacummings@accuprint.com",
          "freelance": false,
          "employed": false,
          "education": "selfTaught",
          "years": "2-5",
          "experience": "Student",
          "specialty": "Data Science",
          "approved": false,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 468
        },
        {
          "first_name": "Janine",
          "last_name": "Booker",
          "username": "occaecat",
          "email": "janinebooker@accuprint.com",
          "freelance": true,
          "employed": true,
          "education": "Bootcamp",
          "years": "2-5",
          "experience": "Lead",
          "specialty": "Backend",
          "approved": false,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 211
        },
        {
          "first_name": "Snider",
          "last_name": "Hodge",
          "username": "commodo",
          "email": "sniderhodge@accuprint.com",
          "freelance": false,
          "employed": true,
          "education": "selfTaught",
          "years": "0-1",
          "experience": "Lead",
          "specialty": "Full Stack",
          "approved": false,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 238
        },
        {
          "first_name": "Jamie",
          "last_name": "Stevenson",
          "username": "dolore",
          "email": "jamiestevenson@accuprint.com",
          "freelance": false,
          "employed": true,
          "education": "CS Grad",
          "years": "0-1",
          "experience": "Student",
          "specialty": "Full Stack",
          "approved": true,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 308
        },
        {
          "first_name": "Eddie",
          "last_name": "Branch",
          "username": "nulla",
          "email": "eddiebranch@accuprint.com",
          "freelance": false,
          "employed": true,
          "education": "CS Grad",
          "years": "10+",
          "experience": "Senior",
          "specialty": "Data Science",
          "approved": false,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 162
        },
        {
          "first_name": "Antonia",
          "last_name": "Hatfield",
          "username": "consequat",
          "email": "antoniahatfield@accuprint.com",
          "freelance": false,
          "employed": false,
          "education": "CS Grad",
          "years": "5-10",
          "experience": "Junior",
          "specialty": "Machine Learning",
          "approved": false,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 339
        },
        {
          "first_name": "Cantrell",
          "last_name": "Mclaughlin",
          "username": "sint",
          "email": "cantrellmclaughlin@accuprint.com",
          "freelance": true,
          "employed": false,
          "education": "Bootcamp",
          "years": "2-5",
          "experience": "Hobbiest",
          "specialty": "Full Stack",
          "approved": true,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 28
        },
        {
          "first_name": "Dianne",
          "last_name": "Lee",
          "username": "ut",
          "email": "diannelee@accuprint.com",
          "freelance": false,
          "employed": false,
          "education": "CS Grad",
          "years": "10+",
          "experience": "Senior",
          "specialty": "Machine Learning",
          "approved": true,
          "linkedinUrl": "https://www.galvanize.com/",
          "personalUrl": "https://github.com/",
          "role": " User",
          "image": "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "githubUrl": "https://github.com/",
          "score": 89
        }
      ]);
    });
};
