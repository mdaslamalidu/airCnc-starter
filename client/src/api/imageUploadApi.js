export const getImageApi = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const url =
    "https://api.imgbb.com/1/upload?key=dcca9949ed124ec4ad8d08fc11efcf29";

  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  return data.data.url;
};
