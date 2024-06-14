export const baseImgUrl = "https://image.tmdb.org/t/p";

// Common Media interface
export interface Media {
	backdrop_path: string;
	id: number;
	overview: string;
	poster_path: string;
	media_type: string;
	adult: boolean;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	vote_average: number;
	vote_count: number;
}

// Movie interface extending Media
export interface Movie extends Media {
	original_title: string;
	title: string;
	release_date: string;
	video: boolean;
}

// TV Show interface extending Media
export interface TVShow extends Media {
	original_name: string;
	name: string;
	first_air_date: string;
	origin_country: string[];
}

//TrendingAllResult interface
export interface TrendingAllResult extends Media {
	original_title?: string;
	title?: string;
	release_date?: string;
	video?: boolean;
	original_name?: string;
	name?: string;
	first_air_date?: string;
	origin_country?: string[];
}

// Trending All Response interface
export interface TrendingAllResponse {
	page: number;
	total_pages: number;
	total_results: number;
	results: TrendingAllResult[];
}

// People Known For interface
export interface PeopleKnownFor {
	backdrop_path: string;
	id: number;
	original_name?: string;
	overview: string;
	poster_path: string;
	media_type: MediaType;
	adult: boolean;
	name?: string;
	original_language: OriginalLanguage;
	genre_ids: number[];
	popularity: number;
	first_air_date?: Date;
	vote_average: number;
	vote_count: number;
	origin_country?: string[];
	original_title?: string;
	title?: string;
	release_date?: Date;
	video?: boolean;
}
export enum OriginalLanguage {
	En = "en",
	Es = "es",
	Fr = "fr",
	Th = "th",
	Tr = "tr",
}
export enum MediaType {
	Movie = "movie",
	Tv = "tv",
}

// Trending People Response interface
export interface TrendingPeopleResponse {
	page: number;
	total_pages: number;
	total_results: number;
	results: TrendingPeople[];
}

// Trending People interface
export interface TrendingPeople {
	id: number;
	original_name: string;
	media_type: string;
	adult: boolean;
	name: string;
	popularity: number;
	gender: number;
	known_for_department: string;
	profile_path: string;
	known_for: PeopleKnownFor[];
}

export interface MovieResult {
	/* adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number; */
	backdrop_path: string | null;
	id: number;
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: "movie";
	adult: boolean;
	title: string;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	first_air_date?: string;
	name?: string;
}

export interface MovieData {
	page: number;
	results: MovieResult[];
	total_pages: number;
	total_results: number;
}

export interface TVResults {
	backdrop_path: string;
	id: number;
	original_name: string;
	overview: string;
	poster_path: string;
	media_type: "tv";
	adult: boolean;
	name: string;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	first_air_date: string;
	vote_average: number;
	vote_count: number;
	origin_country: string[];
}
export interface TVResponse {
	page: number;
	results: TVResults[];
	total_pages: number;
	total_results: number;
}

export interface PersonResult {
	id: number;
	original_name: string;
	media_type: "person";
	adult: boolean;
	name: string;
	popularity: number;
	gender: number;
	known_for_department: string;
	profile_path: string | null;
	known_for: KnownForItem[];
}

export interface CollectionResult {
	adult: boolean;
	backdrop_path: string;
	id: number;
	name: string;
	original_language: string;
	original_name: string;
	overview: string;
	poster_path: string;
}
export interface CollectionResultResponse {
	page: number;
	results: Array<CollectionResult>;
	total_pages: number;
	total_results: number;
}

export interface MovieResultResponse {
	page: number;
	results: Array<MovieResult>;
	total_pages: number;
	total_results: number;
	dates?: { maximum: string; minumum: string };
}

export interface MultiSearchResponse {
	page: number;
	results: Array<MovieResult | PersonResult | TVResults>;
	total_pages: number;
	total_results: number;
}

export interface KnownForItem {
	backdrop_path: string | null;
	id: number;
	original_name: string;
	overview: string;
	poster_path: string | null;
	media_type: "tv" | "movie";
	adult: boolean;
	name?: string;
	title: string;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	first_air_date?: string;
	release_date?: string;
	vote_average: number;
	vote_count: number;
	origin_country?: string[];
}
export interface PeopleListResponse {
	page: number;
	results: PeopleListResult[];
	total_pages: number;
	total_results: number;
}

export interface PeopleListResult {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
	known_for: KnownForItem[];
}

export interface Genre {
	id: number;
	name: string;
}

export interface MovieListResponse {
	page: number;
	results: MovieListResult[];
	total_pages: number;
	total_results: number;
}

export interface MovieListResult {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface TvListResult {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	first_air_date: string;
	name: string;
	vote_average: number;
	vote_count: number;
}
export interface TvListResponse {
	page: number;
	results: TvListResult[];
	total_pages: number;
	total_results: number;
}

export interface BelongsToCollection {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
}
export interface ProductionCompany {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}
export interface ProductionCountry {
	iso_3166_1: string;
	name: string;
}
export interface SpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}

export interface MovieDetailResponse {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: BelongsToCollection;
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: Date;
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
