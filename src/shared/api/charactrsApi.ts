export async function fetchData(URL: string) {
  try {
    const response = await fetch(URL);

    if (response.status === 404) {
      throw new Error("No results found");
    }

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
