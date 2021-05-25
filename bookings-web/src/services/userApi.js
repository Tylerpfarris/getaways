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

export const editUserFetch = async ( username, newUsername, originalEmail, newEmail ) => {
  const response = await fetch(`${process.env.BASE_URL}/users/edit`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify({
      username,
      newUsername,
      originalEmail,
      newEmail
    })
  });
  const result = await response.json();
  console.log(result)
   return result.status ? result : { status: 200 }
}

export const logOutUser = async () => {
   const res = await fetch(`${process.env.BASE_URL}/users/logout`, {
     credentials: 'included'
  });
   const json = await res.json();
   localStorage.removeItem('TOKEN')
   return json;
}