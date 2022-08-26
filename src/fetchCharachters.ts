export async function fetchRandomCharacters(num: number) {
  const idsArray: number[] = [];
  while (idsArray.length !== num) {
    const randomId = Math.floor(Math.random() * 825 + 1);
    if (idsArray.includes(randomId)) continue;
    else idsArray.push(randomId);
  }
  console.log(idsArray);

  const response = await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
            query  getChars($ids: [ID!]!){
                charactersByIds (ids: $ids ){
                    name,
                    image
                }
              }`,
      variables: { ids: idsArray },
    }),
  });

  const data = await response.json();
  console.log(data);

  return data["data"]["charactersByIds"];
}
