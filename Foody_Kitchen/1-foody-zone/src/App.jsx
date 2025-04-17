import { useSelector } from "react-redux";
import FetchItems from "./components/fetchItems";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import LoadingSpinner from "./components/LoadingSpinner";
import { useEffect, useState } from "react";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const items = useSelector((store) => store.items);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(items);
  }, [items]);
  
  const searchedItem = (event) => {
    const searchValue = event.target.value.toLowerCase();
  
    if (!searchValue) {
      setFilteredData(items); 
      return;
    }
  
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(searchValue)
    );
  
    setFilteredData(filtered);
  };
  const timeOfFood = (event) => {
    const foodTime = event.toLowerCase();
  
    if (foodTime === "all") {
      setFilteredData(items); 
      return;
    }
  
    const filtered = items.filter(item =>
      item.type.toLowerCase().includes(foodTime)
    );
  
    setFilteredData(filtered);
  };

  return (
    <>
      <Header onSearch = {searchedItem} onTime={timeOfFood}/>
      <FetchItems />
      {fetchStatus.currentlyFetching ? (
        <LoadingSpinner />
      ) : (
        <MainBody item={filteredData} />
      )}
    </>
  );
}

export default App;
