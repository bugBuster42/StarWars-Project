const getInfo = async (param, controller) => {
  const res = await fetch(param, {
    signal: controller.signal,
    cache: 'force-cache',
  });
  return res.json();
};

export default getInfo;
