export const query = async (url: string, data?: any, method?: RequestInit['method']): Promise<any> => {
  let res = null;

  const params: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    params.body = JSON.stringify({
      ...data,
    });
  }

  await fetch(`${process.env.REACT_APP_SERVER_URL}${url}`, params)
    .then((response) => response.json())
    .then((data) => (res = data))
    .catch((error) => console.error(error));

  return res;
};
