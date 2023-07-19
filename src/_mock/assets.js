import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const assets = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),

  item: sample([
  'IP Address',
  'System',
  'Windows',
  'Software',
  'Printer Type',
  'Printer Company',
  'Internet'
  ]),

//   role: sample([
//     "Agent",
//     "Agent",
//     "Agent",
//     "Agent",
//     "Agent",
//     "Agent",
//     "Agent",
//     "Agent",
//     "Agent",
//     "Agent",
//   ]),



 
}));

export default assets;
