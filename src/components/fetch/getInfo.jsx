const getInfo = async (param, controller) => {
  const res = await fetch(param, { signal: controller.signal });
  const data = await res.json();
  return data;
};

export default getInfo;
