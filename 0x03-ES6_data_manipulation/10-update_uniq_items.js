export default function updateUniqueItems(groceries) {
  const newGroceries = groceries;
  try {
    for (const x of newGroceries.entries()) {
      if (x[1] === 1) {
        newGroceries.set(x[0], 100);
      }
    }
  } catch (error) {
    throw new Error('Cannot process');
  }
  return newGroceries;
}
