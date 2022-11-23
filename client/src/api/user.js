export const hostDataApi = async (host) => {
  const url = `http://localhost:8000/users/${host?.email}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(host),
  });

  const data = await response.json();
  console.log(data);
  return data;
};

export const getuser = async (email) => {
  const url = `http://localhost:8000/users/${email}`;

  const response = await fetch(url);

  const data = await response.json();
  return data;
};

export const getAllUsers = async () => {
  const url = "http://localhost:8000/users";

  const response = await fetch(url);
  const users = await response.json();
  return users;
};

export const makeHost = async (user) => {
  delete user._id;
  const response = await fetch(`http://localhost:8000/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ ...user, role: "host" }),
  });
  const users = await response.json();

  return users;
};
