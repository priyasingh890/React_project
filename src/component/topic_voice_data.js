// import { useState } from "react"
// import data from "./data"
// import "./style.css"
// const Accordian=()=>{
//     const[Selected,setSelected]=useState(null)
//     const[EnableMultiSelection,setEnableMultiSelection]=useState(false)
//     const [Multiple,setMultiple]=useState([]);
//     const handleSingleSelection=(CurrentId)=>{
//         setSelected(CurrentId===Selected ? null :CurrentId )
//     }
//     console.log(Multiple)
//     const handleMultiSelection=(CurrentId)=>{
//         // console.log(CurrentId,"KK")
//         const copyMultiple=[...Multiple]
//         // console.log(copyMultiple,"data check")
//         const findIndexofCurrentId=copyMultiple.indexOf(CurrentId)
//         // console.log(findIndexofCurrentId,CurrentId,"siya")
//         if (findIndexofCurrentId===-1)copyMultiple.push(CurrentId);
     
//         setMultiple(copyMultiple)
//         console.log(copyMultiple)
        
//     }
    
//     return(
//         <div className="wrapper">
//             <button className="Enablebutton" onClick={()=>setEnableMultiSelection(!EnableMultiSelection)}>{EnableMultiSelection ? "single Enable Selection":"multiple Enable Selection"}</button>
//             <div className='box'>{
//                 data.map(item=>
//                     <button className="heading_button" onClick={EnableMultiSelection ? ()=> handleMultiSelection(item.id):()=>{handleSingleSelection(item.id)}}>{item.title}{
//                         EnableMultiSelection ? Multiple.indexOf(item.id) !== -1 && (
//                             <div className="heading">{item.content}</div>
//                         ):Selected===item.id && (
//                             <div className="heading">{item.content}</div>
//                         )
                    
//                     }
                   
//                 </button>
//                 )
//             }
                

//             </div>
//         </div>
//     )
// }
// export default Accordian