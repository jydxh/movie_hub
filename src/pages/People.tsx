import fetchPopularPeople from "@/api/fetchPopularPeople";
import { PeopleListResponse } from "@/utils/types";
import { LoaderFunction, useLoaderData } from "react-router";

export const loader: LoaderFunction =
	async (): Promise<PeopleListResponse | null> => {
		try {
			const res = await fetchPopularPeople();
			return res;
		} catch (error) {
			console.log(error);
			return null;
		}
	};

function People() {
	const { results } = useLoaderData() as PeopleListResponse;
	console.log(results);
	return <div>People</div>;
}
export default People;
