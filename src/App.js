

import data from './component/data';
import Accordian from './component/topic_voice_data';
import Multiple_button from './component/accordian/indes';
import { useState } from 'react';
import Three_different_color from './different_color/color_project';
import Showcolor from './different_color/showcolor';
import colors from './different_color/datas';


function App() {
  // const [Enable,setEnable]=useState(false)
  // // const handler=()=>{
  // //   setEnable(!Enable)
  // // }
  return (
    <div className="App">
    
        <div>
          <Three_different_color/>
          <Showcolor/>
        </div>
 
   
        
    </div>
  );
}

export default App;
