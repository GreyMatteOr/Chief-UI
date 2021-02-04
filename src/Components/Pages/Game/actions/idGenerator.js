let nextId = 0;

export const getId = () => {
  nextId++
  return nextId;
}
