import fetch from 'isomorphic-unfetch';

const fetchData = async ({
    url,
    method = 'POST',
    responseType = 'json',
    body,
    headers = {},
    ...params
  }) => {
    let defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  
    if (Object.keys(headers).length) {
      defaultHeaders = {
        ...defaultHeaders,
        ...headers,
      };
    }
  
    const options = {
      method,
      headers: { ...defaultHeaders },
      ...params,
    };
  
    if (body) {
      options.body = JSON.stringify(body);
    }
    try {
      const res = await fetch(url, options);
      return res[responseType]();
    } catch (err) {
      throw err;
    }
  };

  export default fetchData