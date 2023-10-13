const getInfo = async (param, controller) => {
  const res = await fetch(param, { signal: controller.signal });
  return await res.json();
};

export default getInfo;
