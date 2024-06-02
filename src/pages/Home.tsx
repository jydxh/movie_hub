import HomeSearch from "@/components/Home/HomeSearch";
import HeroPride from "@/components/Home/HeroPride";
import SlidersWrapper from "@/components/ui/SlidersWrapper";

function Home() {
	return (
		<>
			<HomeSearch />
			<HeroPride />

			{/*  trending  */}
			<SlidersWrapper
				title="trending"
				options={[
					{ title: "today", searchParam: "day" },
					{ title: "this week", searchParam: "week" },
				]}
			/>
			{/* trailers */}
			<SlidersWrapper
				title="latest trailers"
				options={[
					{ title: "popular", searchParam: "" },
					{ title: "streaming", searchParam: "" },
					{ title: "on TV", searchParam: "" },
					{ title: "for rent", searchParam: "" },
					{ title: "in theatres", searchParam: "" },
				]}
			/>

			{/* popular */}

			<SlidersWrapper
				title="What's Popular"
				options={[
					{ title: "streaming", searchParam: "" },
					{ title: "on TV", searchParam: "" },
					{ title: "for rent", searchParam: "" },
					{ title: "In theatres", searchParam: "" },
				]}
			/>

			{/* free to watch */}

			<SlidersWrapper
				title="free to watch"
				options={[
					{ title: "movie", searchParam: "" },
					{ title: "TV", searchParam: "" },
				]}
			/>
		</>
	);
}
export default Home;
