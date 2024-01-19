import {IRoutine} from '../interface/IRoutine';

export async function getRecord() {
  try {
    const result = await fetch('http://localhost:3010/record', {
      method: 'get',
    });
    const data = await result.json();
    return data;
  } catch (e) {
    console.error(e);
    return 'fail';
  }
}

export async function addRecord(routine: IRoutine) {
  try {
    const record = {title: routine.title, category: routine.category, date: new Date()};
    await fetch('http://localhost:3010/record/addRecord', {
      method: 'post',
      body: JSON.stringify(record),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
