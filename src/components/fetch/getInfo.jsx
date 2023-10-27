const fetchPlus = (url, options = {}, retries) =>
  fetch(url, options)
    .then((res) => {
      if (res.ok) {
        return res;
      }
      if (retries > 0) {
        return fetchPlus(url, options, retries - 1);
      }
      throw new Error(res.status);
    })
    .catch(() => {
      if (retries > 0) {
        return fetchPlus(url, options, retries - 1);
      }
    });

const getInfo = async (param, controller) => {
  const res = await fetch(
    param,
    {
      signal: controller.signal,
      cache: 'force-cache',
    },
    3,
  );
  return res.json();
};

export default getInfo;
