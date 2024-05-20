import getWikiResults from "@/lib/getWikiResults";
type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function page({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  //could be undefined
  const results: Result[] | undefined = data?.query.pages;
  return <div>page</div>;
}
