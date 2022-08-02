export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
	let count = weakMap.get(endpoint) === undefined ? 0 : weakMap.get(endpoint);
	weakMap.set(endpoint, count + 1);
	if( count >= 5 ) {
		throw new Error("Endpoint load is high");
	}
}
