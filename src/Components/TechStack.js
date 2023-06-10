import React, { useState } from 'react'
import Cards from './Cards'



export default function TechStack() {
  let arr = [
    {
      name: "HTML",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fhtml-5--v1.png&w=128&q=75",
      type: "Frontend"
    },
    {
      name: "CSS",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fcss3.png&w=128&q=75",
      type: "Frontend"

    },
    {
      name: "JavaScript",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fjavascript--v1.png&w=128&q=75",
      type: "Frontend"


    },

    {
      name: "React",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fultraviolet%2F120%2Fnull%2Freact--v1.png&w=128&q=75",
      type: "Frontend"

    },
    {
      name: "TailwindCSS",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Ftailwindcss.png&w=128&q=75",
      type: "Frontend"

    }, {
      name: " ChakraUI",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fchakra-ui.png&w=128&q=75",
      type: "Frontend"

    }, {
      name: "BootStrap",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fbootstrap.png&w=128&q=75",
      type: "Frontend"

    }, {
      name: "SAAS",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fsass.png&w=128&q=75",
      type: "Frontend"

    }, {
      name: "Material UI",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fmaterial-ui.png&w=128&q=75",
      type: "Frontend"
    },



    {
      name: "Node Js",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Ffluency%2F144%2Fnull%2Fnode-js.png&w=128&q=75",
      type: "Backend",
    },



    {
      name: "Express Js",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fios%2F150%2Fnull%2Fexpress-js.png&w=128&q=75",
      type: "Backend",

    },
    {
      name: "MongoDB",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fexternal-tal-revivo-color-tal-revivo%2F96%2Fnull%2Fexternal-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png&w=128&q=75",
      type: "Backend",

    },
    {
      name: "MySQL",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fmysql-logo.png&w=128&q=75",
      type: "Backend",

    },
    {
      name: "Googling",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fgoogle-logo.png&w=128&q=75",
      type: "Other",
    },
    {
      name: "GitHub",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fmaterial-outlined%2F96%2Fnull%2Fgithub.png&w=128&q=75",
      type: "Other",
    },
    {
      name: "Git",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fgit.png&w=128&q=75",
      type: "Other",
    },

    {
      name: "Java",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F144%2Fnull%2Fjava-coffee-cup-logo--v1.png&w=128&q=75",
      type: "Other",
    }, {
      name: "Vercel",
      img: "https://res.cloudinary.com/lifecodes/image/upload/v1677508669/Portfolio/gd1ferzh1vbopo15yysy.svg",
      type: "Other",
    }, {
      name: "Netlify",
      img: "https://jigarsable.vercel.app/_next/image?url=https%3A%2F%2Fimg.icons8.com%2Fexternal-tal-revivo-shadow-tal-revivo%2F96%2Fnull%2Fexternal-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png&w=128&q=75",
      // img : "../images/contact.jpg", 
      type: "Other",
    },


  ]

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



        <div className="text-3xl-m-5 p-3" id='techStackBtn'>
          <button onClick={() => filterItem("All")}>All</button>
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
