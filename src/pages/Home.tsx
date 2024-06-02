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
		</>
	);
}
export default Home;
