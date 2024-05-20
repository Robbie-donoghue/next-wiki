export default async function getWikiResults(searchTerm: string) {
  // params required for wikipedia API
  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: searchTerm,
    gsrlimit: "20",
    prop: "pageimages|extracts",
    exchars: "100",
    exintro: "true",
    explaintext: "true",
    exlimit: "max",
    format: "json",
    origin: "*",
  });
  //endpoint for english wikipedia api + ? query and searchParams
  const response = await fetch(
    "https://en.wikipedia.org/w/api.php?" + searchParams
  );
  //return the response in a json obj
  return response.json();
}
