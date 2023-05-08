import { optionObj } from '../components/formSelect/FormSelectInt';
const floors: optionObj[] = [];
const meetingRooms: optionObj[] = [];

for (let i = 3; i <= 27; i++) floors.push({ id: i - 3, name: i, value: i });
for (let i = 1; i <= 10; i++)
  meetingRooms.push({ id: i - 1, name: i, value: i });

export const mockData = {
  scrapers: [
    { id: 0, name: 'A', value: 'A' },
    { id: 1, name: 'B', value: 'B' },
  ],
  floors: floors,
  meetingRooms: meetingRooms,
};
