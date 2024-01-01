import {IRoutine} from '../interface/IRoutine';

// export function addRoutine() {
//   fetch('http://localhost:3010', {
//     method: 'get',
//   });
// }

export async function getRoutine() {
  try {
    const result = await fetch('http://localhost:3010/', {
      method: 'get',
    });
    const data = await result.json();
    return data;
  } catch (e) {
    return e;
  }
}

export async function addRoutine(routine: IRoutine) {
  try {
    const result = await fetch('http://localhost:3010/addRoutine', {
      method: 'post',
      body: JSON.stringify(routine),
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
