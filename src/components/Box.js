import React, {useState} from 'react'

import styles from './Box.module.css'

export default function Box(){

    const [color, setColor] = useState('')
    const [boxes, setBoxes] = useState([])

     function handleSubmit(event){
         event.preventDefault();
        
         const box = {
             color
         };
         setBoxes([ ... boxes, box])
         setColor('')
         
        }

        function handBoxClick(index){
            console.log('you clicked :' + index) 
       
           }
        
    


    return(
        <>
        <div> 
            <form onSubmit={handleSubmit}>
           <h1><label>Color:</label></h1>
           {/* <input placeholder="height"/>
           <input placeholder="weight"/> */}
           <input value={color}
           onChange={event =>setColor(event.target.value)} 
           />
        

           <button>Add</button>
            </form>
       
        </div>
        <div className={styles.container}>
            {boxes.map((box, idx) => (
                <div 
                className={styles.box} 
                key={idx}
                style={{
                    background:box.color
                    // width:  box.width,
                    // height: box.height

                }}
                onClick={() =>handBoxClick(idx)}
                
                >
           
                </div>
            ))}
            

        </div>
        



        </> 

    )

}

