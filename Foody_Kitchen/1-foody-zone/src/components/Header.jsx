
const Header = ({onSearch , onTime}) => {
    
 

  return (
    <div className="header">
      <div className="firstRow">
        <h1>
          F<span className="redColour">oo</span>dy Z
          <span className="redColour">o</span>ne
        </h1>
        <input onChange={onSearch} className="search" type="text" placeholder="Search here" />
      </div>
      <div className="secondRow">
        <button className="foodTime" onClick={()=>onTime("all")} >All</button>
        <button className="foodTime" onClick={()=>onTime("breakfast")}>
          Breakfast
        </button>
        <button className="foodTime" onClick={()=>onTime("lunch")}>Lunch</button>
        <button className="foodTime" onClick={()=>onTime("dinner")}>Dinner</button>
      </div>
    </div>
  );
};
export default Header;
