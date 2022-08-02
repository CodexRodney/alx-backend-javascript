export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) === undefined ? 0 : weakMap.get(endpoint);
  weakMap.set(endpoint, count + 1);
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
  console.log(weakMap);
}
