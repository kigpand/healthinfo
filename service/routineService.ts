import {IRoutine} from '../interface/IRoutine';

export async function getRoutine() {
  try {
    const result = await fetch('http://localhost:3010/routine', {
      method: 'get',
    });
    console.log('dsadsadsa');
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

export async function updateRoutineService(routine: IRoutine) {
  try {
    await fetch('http://localhost:3010/routine/updateRoutine', {
      method: 'put',
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

export async function deleteRoutineByCategory(category: string) {
  try {
    await fetch('http://localhost:3010/routine/deleteRoutineByCategory', {
      method: 'delete',
      body: JSON.stringify({category}),
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
