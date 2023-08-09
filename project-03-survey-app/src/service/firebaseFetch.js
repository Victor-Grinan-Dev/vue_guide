export const fetchFirebase = (url, method, body) => {
  fetch(url, {
    method: method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
