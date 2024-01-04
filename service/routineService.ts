import {IRoutine} from '../interface/IRoutine';

// export function addRoutine() {
//   fetch('http://localhost:3010', {
//     method: 'get',
//   });
// }

export async function getRoutine() {
  try {
    const result = await fetch('http://localhost:3010/routine', {
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
    const result = await fetch('http://localhost:3010/routine/addRoutine', {
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

export async function getRoutineOnce(id: number) {
  try {
    const result = await fetch(`http://localhost:3010/routine/${id}`, {
      method: 'get',
    });
    const data = await result.json();
    return data;
  } catch (e) {
    console.error(e);
    return 'fail';
  }
}

export async function deleteRoutine(id: number) {
  try {
    await fetch(`http://localhost:3010/routine/delete`, {
      method: 'delete',
      body: JSON.stringify({id: id}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return 'success';
  } catch (e) {
    console.error(e);
    return 'fail';
  }
}
