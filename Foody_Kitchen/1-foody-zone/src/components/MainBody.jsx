import Card from "./Card";
const MainBody = ({item}) => {
  
  return (
    <div className="thirdRow">
      <div className="cardItems">
      {item.map(item => <Card key={item.name} cardItem={item}/>)}
     </div>
    </div>
  );
};
export default MainBody;
