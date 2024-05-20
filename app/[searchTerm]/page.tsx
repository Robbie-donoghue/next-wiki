import getWikiResults from "@/lib/getWikiResults";
type Props = {
  params: {
    searchTerm: string;
  };
};

//metadata
export async function generateMetaData({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  //browsers use %20 as spaces, get rid of these and replaace them with normal spaces
  const displayTerm = searchTerm.replaceAll("%20", "");

  // if no result
  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }
  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

export default async function page({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  //could be undefined
  const results: Result[] | undefined = data?.query?.pages;
  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen ">
      {results ? (
        Object.values(results).map((result) => {
          return <p>{JSON.stringify(result)}</p>;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found!`}</h2>
      )}
    </main>
  );
  return content;
}
