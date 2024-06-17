import PersonKnowfor from "@/components/People/PersonKnowfor";
import PersonBio from "@/components/People/PersonBio";
import PersonInfo from "@/components/People/PersonInfo";
import PersonImgs from "@/components/People/PersonImgs";
import { LoaderFunction, useLoaderData } from "react-router";
import { PersonMultiFetchResponse } from "@/utils/types";
import fetchPeopleMulti from "@/api/fetchPeopleMulti";

export const loader: LoaderFunction = async ({
	params,
}): Promise<PersonMultiFetchResponse | null> => {
	const { id } = params;
	try {
		const res = await fetchPeopleMulti({ id });
		return res;
	} catch (error) {
		console.log(error);
		return null;
	}
};

function SinglePerson() {
	const data = useLoaderData() as PersonMultiFetchResponse;
	console.log(data);

	return (
		<>
			<PersonInfo />
			<PersonBio />
			<PersonKnowfor />
			<PersonImgs />
		</>
	);
}
export default SinglePerson;
