//types for api

type Result = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};
// arn't garanteed to get result from api
type SearchResult = {
  query?: {
    pages?: Result[];
  };
};
