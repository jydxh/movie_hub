import axios from "axios";

async function searchKeywordQuery() {
	try {
		const res = await axios.get(
			"https://www.themoviedb.org/search/trending?language=en-CA&query=hello"
		);
		return res.data;
	} catch (error) {
		console.log(error);
	}
}
export default searchKeywordQuery;
