import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  email: sample([
    'demo@gmail.com',
    'example@gmail.com',
    'demo@gmail.com',
    'example@gmail.com',
    'demo@gmail.com',
    'example@gmail.com',
    'demo@gmail.com',
    'example@gmail.com',
    'demo@gmail.com',
    'example@gmail.com',
  ]),
  category: sample([
   'New Installation',
   'Questions',
   'Bug',
   'Support'
  ]),
  role: sample([
    "Agent",
    "Agent",
    "Agent",
    "Agent",
    "Agent",
    "Agent",
    "Agent",
    "Agent",
    "Agent",
    "Agent",
  ]),


  status: sample(['New Installation' ,'Bug','Support' ,'Questions']),
 
}));

export default users;
