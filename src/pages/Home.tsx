import HomeSearch from "@/components/Home/HomeSearch";
import HeroPride from "@/components/Home/HeroPride";

import HomeTrending from "@/components/Home/HomeTrending";
import HomePopular from "@/components/Home/HomePopular";
import HomeFreeWatch from "@/components/Home/HomeFreeWatch";

function Home() {
	return (
		<>
			<HomeSearch />
			<HeroPride />

			<HomeTrending />

			{/* popular */}
			<HomePopular />

			{/* free to watch */}
			<HomeFreeWatch />
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
