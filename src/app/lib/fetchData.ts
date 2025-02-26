export async function fetchData() {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve("Fetched Data!"), 1000);
  });
}
