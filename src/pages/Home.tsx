import HomeSearch from "@/components/Home/HomeSearch";
import HeroPride from "@/components/Home/HeroPride";
import SlidersWrapper from "@/components/ui/SlidersWrapper";
import HomeTrending from "@/components/Home/HomeTrending";
import HomePopular from "@/components/Home/HomePopular";

function Home() {
	return (
		<>
			<HomeSearch />
			<HeroPride />

			<HomeTrending />

			{/* popular */}
			<HomePopular />

			{/* free to watch */}
			{/* 
			<SlidersWrapper
				title="free to watch"
				options={[
					{ title: "movie", searchParam: "" },
					{ title: "TV", searchParam: "" },
				]}
			/> */}
		</>
	);
}
export default Home;
