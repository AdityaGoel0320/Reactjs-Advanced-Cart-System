import React, { useState } from 'react'
import Cards from './Cards'
import arr from "./skillsArray"


export default function TechStack() {
  
  const [customArr, setcustomArr] = useState(arr)


  let filterItem = (clickedType) => {

    if (clickedType === "All") {
      setcustomArr(arr);
    } else {

      let ans = arr.filter((x) => {
        return x.type === clickedType

      })
      setcustomArr(ans)
      
    }
  }
  return (


    <>


      <div className='bg-orange-300  '>
        <h1 className='text-3xl font-bold uppercase flex justify-center items-center m-5'>

          TechStack
        </h1>



        <div className="text-3xl-m-5 p-3 bg-white " id='techStackBtn'>
          <button className='' onClick={() => filterItem("All")}>All</button>
          <button onClick={() => filterItem("Frontend")}>frontend</button>
          <button onClick={() => filterItem("Backend")}>Backend</button>
          <button onClick={() => filterItem("Other")}>Other</button>

        </div>

        <div className='techstack_container flex justify-center items-center flex-wrap m-5 gap-5'>
          {
            customArr.map((x) => {
              return <Cards className="mx-24" name={x.name} img={x.img} />
            })
          }
        </div>




      </div>
    </>

  )
}
