import searchIcon from "../assets/icons8-search (1).svg";
import { useDispatch, useSelector } from "react-redux";
import { filterProductsList, setSearchText } from "../store/shoppingSlice";
import { useEffect } from "react";
const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.shoppingData);

  const handleSearchText = (e) => {
    const { value } = e.target;
    console.log("value", value);
    dispatch(setSearchText(value));
  };

  useEffect(() => {
    dispatch(filterProductsList(searchText));
  }, [searchText, dispatch]);
  return (
    <div className=" flex justify-center items-center mt-10">
      <div className="relative">
        <input
          type="text"
          value={searchText}
          className=" pl-5 border border-solid border-black w-96  shadow-lg h-8 rounded-lg"
          placeholder="Enter the name of the product...."
          onChange={handleSearchText}
        ></input>
        <div className="absolute flex justify-center items-center inset-y-0 right-0 pr-3">
          <img src={searchIcon} alt={`${searchIcon}`}></img>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
