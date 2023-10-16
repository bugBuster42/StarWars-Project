const getInfo = async (param, controller) => {
  const res = await fetch(param, { signal: controller.signal });
  return res.json();
};

export default getInfo;
