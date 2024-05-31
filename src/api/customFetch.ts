import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
export default function customFetch() {
	return axios.create({
		baseURL,
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjkxNDc4YjFkOGY0ZTFmMDIxZmM2NWFmYjdiODZkZCIsInN1YiI6IjY1MjFiNzYzMGNiMzM1MTZmODdlMDFhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ihQRMYJruH3nOYoIYCTWhanp_qFbnMnt1MH6BZYOiyk",
		},
	});
}
