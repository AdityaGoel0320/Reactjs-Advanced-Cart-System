import React from 'react'
import Cards from './Cards'

export default function TechStack() {
  let arr = [
    {
      name: "HTML",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fhtml-5--v1.png&w=128&q=75",
      id: "Frontend"
    },
    {
      name: "CSS",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fcss3.png&w=128&q=75",
      id: "Frontend"

    },
    {
      name: "JavaScript",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fjavascript--v1.png&w=128&q=75",
      id: "Frontend"


    } , 
    {
      name: "HTML",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fhtml-5--v1.png&w=128&q=75",
      id: "Frontend"
    },
    {
      name: "CSS",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fcss3.png&w=128&q=75",
      id: "Frontend"

    },
    {
      name: "JavaScript",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fjavascript--v1.png&w=128&q=75",
      id: "Frontend"


    } , {
      name: "HTML",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fhtml-5--v1.png&w=128&q=75",
      id: "Frontend"
    },
    {
      name: "CSS",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fcss3.png&w=128&q=75",
      id: "Frontend"

    },
    {
      name: "JavaScript",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fjavascript--v1.png&w=128&q=75",
      id: "Frontend"


    } , {
      name: "HTML",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fhtml-5--v1.png&w=128&q=75",
      id: "Frontend"
    },
    {
      name: "CSS",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fcss3.png&w=128&q=75",
      id: "Frontend"

    },
    {
      name: "JavaScript",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fjavascript--v1.png&w=128&q=75",
      id: "Frontend"


    } , 

  ]
  return (
    <div>
      TechStack

      <div className='techstack_container'>
        {
          arr.map((x) => {
            return <Cards name={x.name} img={x.img} />
          })
        }
      </div>




    </div>

  )
}
