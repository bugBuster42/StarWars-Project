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
  try {
    const res = await fetchPlus(
      param,
      {
        signal: controller.signal,
        cache: 'force-cache',
      },
      3,
    );
    return res.json();
  } catch (error) {
    if (controller.signal.aborted) {
      return;
    }
  }
  throw new Error();
};

export default getInfo;
