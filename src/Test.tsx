import { useCallback, useEffect, useRef, useState } from "react";
import fetchHomePopular from "./api/fetchHomePopular";
import { MovieResult } from "./utils/types";
import { LoaderFunction, useLoaderData } from "react-router";

const options = {
	//root: null,
	rootMargin: "200px",
	threshold: 0.5,
};

export const loader: LoaderFunction = async () => {
	const res = await fetchHomePopular("1");
	return res;
};

function Test() {
	const initalData = useLoaderData() as MovieResult[];
	const [data, setData] =
		useState<MovieResult[]>(
			initalData
		); /* use the react-router-loader to fetch the intial data  */
	const [isLoading, setIsLoading] = useState(false);
	//const [isVisiable, setIsVisiable] = useState(false);
	const divRef = useRef<HTMLDivElement | null>(null);
	const pageRef = useRef<number>(2);
	const [isInfiniteScrollEnabled, setIsInfiniteScrollEnabled] = useState(false);

	const fetchData = async (page: string) => {
		console.log("fetching");
		setIsLoading(true);
		const newData = await fetchHomePopular(page);
		setData(prev => [...prev, ...newData]);
		setIsLoading(false);
	};

	const ObserverCallBack = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			const target = entries[0];
			if (target.isIntersecting && !isLoading) {
				pageRef.current++;
				fetchData(pageRef.current.toString());
			}
		},
		[isLoading]
	);

	useEffect(() => {
		const currentDivRef = divRef.current;
		if (isInfiniteScrollEnabled) {
			const observer = new IntersectionObserver(ObserverCallBack, options);
			if (currentDivRef) {
				observer.observe(currentDivRef);
			}

			return () => {
				if (currentDivRef) {
					observer.unobserve(currentDivRef);
				}
			};
		}
	}, [ObserverCallBack, isInfiniteScrollEnabled]);

	const handleLoadMoreClick = () => {
		setIsInfiniteScrollEnabled(true);
	};

	return (
		<div>
			{data.map((item, index) => {
				const { title, id } = item;
				return <div key={id + index}>{title}</div>;
			})}
			<div ref={divRef}>{isLoading && <p>Loading more items...</p>}</div>
			{!isInfiniteScrollEnabled && (
				<button onClick={handleLoadMoreClick} disabled={isLoading}>
					{isLoading ? "Loading..." : "Load More"}
				</button>
			)}
		</div>
	);
}
export default Test;
