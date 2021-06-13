const { REACT_APP_API_URL: url } = process.env



const get = async (endpoint, config) => {
  try {
    const fetching = await fetch(url + endpoint, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        ...config?.headers
      },
    });
    const response = await fetching.json();
    return response;

  } catch (err) {
    throw err
  }
}

const post = async (endpoint, data, config) => {
  try {
    const fetching = await fetch(url + endpoint, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        ...config?.headers
      },
      body: JSON.stringify(data),
    });
    const response = await fetching.json();
    return response;

  } catch (err) {
    throw err
  }
}

const del = async (endpoint, data, config) => {
  try {
    const fetching = await fetch(url + endpoint, {
      method: 'DELETE',
      headers: {
        'accept': 'application/json',
        ...config?.headers
      },
      body: JSON.stringify(data),
    });
    const response = await fetching.json();
    return response;

  } catch (err) {
    throw err
  }
}

const put = async (endpoint, data, config) => {
  try {
    const fetching = await fetch(url + endpoint, {
      headers: {
        'accept': 'application/json',
        ...config?.headers
      },
      method: 'PUT',
      body: JSON.stringify(data),
    });
    const response = await fetching.json();
    return response;

  } catch (err) {
    throw err
  }
}

const dataProvider = { get, post, del, put }

export default dataProvider