import HomeSearch from "@/components/Home/HomeSearch";
import HeroPride from "@/components/Home/HeroPride";
import Sliders from "@/components/ui/Sliders";

function Home() {
	return (
		<>
			<HomeSearch />
			<HeroPride />

			{/*  trending  */}
			<Sliders title="trending" options={["today", "this week"]} />
		</>
	);
}
export default Home;
