export const SetauthToken = (user) => {
  const currentUser = {
    email: user?.email,
  };
  console.log(currentUser);

  fetch(`http://localhost:8000/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("airCnc-token", data.token);
    });
};
