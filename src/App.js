import React from "react";
import Card from "./Components/Card";
import Data from "./data.json"
function App(){
        // items.push(<Card titleText={Data[i].title} descText={Data[i].desc}/>)
    let items=[];
    items=Data.map((item,index) => <Card key={index} titleText={item.title} descTest={item.desc} />);
 return <div>
     <h3 className="headingStyle">To Do App</h3>
      {items}
     </div>
}

export default App;