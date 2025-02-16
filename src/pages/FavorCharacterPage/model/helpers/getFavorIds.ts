export const getFavorIds = () => {
  const keys: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key!);

    if (value === "true" && key && !isNaN(Number(key))) {
      keys.push(key);
    }
  }
  return keys.sort((a, b) => Number(a) - Number(b)).join(",");
};
