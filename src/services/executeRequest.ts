export const executePostRequest = async (endPoint: string, formData: any, headers?: any) => {
  const options: any = {
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

export const executeGetRequest = async (endPoint: string, headers?: any) => {
  const options: any = {
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

export const executePatchRequest = async (endPoint: string, formData: any, headers?: any) => {
  const options: any = {
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
