export async function addCategory(category: string) {
  try {
    await fetch('http://localhost:3010/category/addCategory', {
      method: 'post',
      body: JSON.stringify({category}),
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

export async function deleteCategory(category: string) {
  try {
    await fetch('http://localhost:3010/category/deleteCategory', {
      method: 'delete',
      body: JSON.stringify({category}),
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

export async function getCategory() {
  try {
    const result = await fetch('http://localhost:3010/category', {
      method: 'get',
    });
    const data = await result.json();
    return data;
  } catch (e) {
    console.error(e);
    return 'fail';
  }
}

export async function getCategoryOnce(category: string) {
  try {
    const result = await fetch(`http://localhost:3010/category/${category}`, {
      method: 'get',
    });
    const data = await result.json();
    return data;
  } catch (e) {
    return 'fail';
  }
}
