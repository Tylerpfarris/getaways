export const registerUser = async (username, email, password ) => {
  const response = await fetch(`${process.env.BASE_URL}/users/create`, {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify({
      username,
      email,
      password,
    })
  });
  const result = await response.json();
  return result.status ? result: {status: 200}
}

export const loginUser = async ( email, password ) => {
  const response = await fetch(`${process.env.BASE_URL}/users/login`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify({
      
      email,
      password,
    })
  });
  const result = await response.json();
  return result.status ? result: {status: 200}
}

export const editUserFetch = async ( username, email, id ) => {
  const response = await fetch(`${process.env.BASE_URL}/users/edit/${id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify({
      username,
      email,
    })
  });
  const result = await response.json();
  console.log(result)
  return result.status ? result: {status: 200}
}

export const logOutUser = async () => {
  const json = await fetch(`${process.env.BASE_URL}/users/logout`,);
  const res = await json.json();
  return response
}