import ProductsList from "../../Components/ProductsList";
import SearchBar from "../../Components/SearchBar";

const Home = () => {
  return (
    <div className="flex flex-col">
      <SearchBar />
      <ProductsList />
    </div>
  );
};

export default Home;
