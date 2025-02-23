/**
 * Type definitions for Serper API requests and responses.
 */

/**
 * Search parameters for Serper API.
 */
export interface ISearchParams {
  /** The search query string */
  q: string;
  /** Geographical location for search results (e.g., "us") */
  gl?: string;
  /** Language for search results (e.g., "en") */
  hl?: string;
  /** Location for search results (e.g., "SoHo, New York, United States") */
  location?: string;
  /** Whether to autocorrect spelling in query */
  autocorrect?: boolean;
  /** Number of results per page */
  num?: number;
  /** Time-based search filter (e.g., "qdr:d" for past day) */
  tbs?: "qdr:h" | "qdr:d" | "qdr:w" | "qdr:m" | "qdr:y";
  /** Page number of results */
  page?: number;
}

/**
 * Scrape parameters for Serper API.
 */
export interface IScrapeParams {
  url: string;
  includeMarkdown?: boolean;
}

/**
 * Knowledge graph entry in search results.
 */
export interface IKnowledgeGraph {
  title: string;
  type: string;
  website?: string;
  description?: string;
  /** Key attributes (e.g., CEO, Founded date) */
  attributes?: Record<string, string>;
}

/**
 * Individual organic search result.
 */
export interface IOrganicResult {
  title: string;
  link: string;
  snippet: string;
  position: number;
}

/**
 * "People also ask" question and answer.
 */
export interface IPeopleAlsoAsk {
  question: string;
  snippet: string;
  link: string;
}

/**
 * Related search query suggestion.
 */
export interface IRelatedSearch {
  query: string;
}

/**
 * Complete search result from Serper API.
 */
export interface ISearchResult {
  /** Echo of search parameters */
  searchParameters: {
    q: string;
    gl?: string;
    hl?: string;
    location?: string;
    autocorrect?: boolean;
    type?: string;
    num?: number;
    page?: number;
    tbs?: "qdr:h" | "qdr:d" | "qdr:w" | "qdr:m" | "qdr:y";
  };
  /** Knowledge graph data if available */
  knowledgeGraph?: IKnowledgeGraph;
  /** Organic search results */
  organic: IOrganicResult[];
  /** "People also ask" questions */
  peopleAlsoAsk?: IPeopleAlsoAsk[];
  /** Related search queries */
  relatedSearches?: IRelatedSearch[];
}

/**
 * Represents the result of a scrape operation from the Serper API.
 */
export interface IScrapeResult {
  text: string;
  markdown?: string;
  metadata?: Record<string, string>;
  jsonld?: Record<string, any>;
  credits?: number;
}
