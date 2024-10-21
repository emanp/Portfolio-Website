import NavigationBar from "../Components/NavigationBar";
import Banner from "../Components/Banner";

export default function Home()
{
    return (
        <div style={{ overflow: 'hidden'}}>
            <NavigationBar />
            <Banner />
        </div>
    )
}