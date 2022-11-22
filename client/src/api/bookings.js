export const saveBookings = async (booking) => {
  const url = "http://localhost:8000/bookings";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(booking),
  });

  const data = await response.json();
  return data;
};

export const getAllBookings = async (email) => {
  const url = `http://localhost:8000/bookings?email=${email}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};
