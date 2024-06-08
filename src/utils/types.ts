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
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: string;
	adult: boolean;
	title: string;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
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
	original_language: string;
	genre_ids: number[];
	popularity: number;
	first_air_date?: string;
	release_date?: string;
	vote_average: number;
	vote_count: number;
	origin_country?: string[];
}
