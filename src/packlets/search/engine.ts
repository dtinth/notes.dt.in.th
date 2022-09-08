import MiniSearch, { Options } from "minisearch";
import stemmer from "stemmer";
import stopwords from "stopwords/english";

const englishStopwords = new Set(stopwords.english);
englishStopwords.delete("vs");
englishStopwords.delete("recent");

export const searchEngineOptions: Options<{ title: string }> = {
  idField: "id",
  tokenize: (string, fieldName) => {
    try {
      return string.match(/\w+/g) || [];
    } catch (error) {
      console.error("Cannot tokenize %s", fieldName, error);
      return [];
    }
  },
  processTerm: (term, _fieldName) => {
    const stem = stemmer(term);
    const termIsStopword = englishStopwords.has(term);
    if (term.length > 32) return null;
    return termIsStopword ? null : stem;
  },
  fields: ["text", "title", "links", "aka", "names"],
  storeFields: ["title", "topic", "aka"],
  searchOptions: {
    prefix: true,
    boost: { title: 3, link: 5, aka: 2 },
  },
};

export function createSearchEngineFromJson(data: any): MiniSearch {
  return MiniSearch.loadJSON(data, searchEngineOptions);
}
