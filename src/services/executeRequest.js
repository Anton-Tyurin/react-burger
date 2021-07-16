export const executePostRequest = async (endPoint, formData, headers) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    credentials: "same-origin",
    body: JSON.stringify({ ...formData }),
  };
  try {
    const response = await fetch(endPoint, options);
    return await response?.json();
  } catch (e) {
    console.error(e);
  }
};

export const executeGetRequest = async (endPoint, headers) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    credentials: "same-origin",
  };
  try {
    const response = await fetch(endPoint, options);
    return await response?.json();
  } catch (e) {
    console.error(e);
  }
};

export const executePatchRequest = async (endPoint, formData, headers) => {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    credentials: "same-origin",
    body: JSON.stringify({ ...formData }),
  };
  try {
    const response = await fetch(endPoint, options);
    return await response?.json();
  } catch (e) {
    console.error(e);
  }
};
