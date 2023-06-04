import React, { useEffect, useRef } from 'react'
import { Button } from '../reuse'
import { gsap } from 'gsap'
import Background from '../../assets/personalBackground.svg'

function About() {
const discription = useRef()
useEffect(() => {

  const obeserver = new IntersectionObserver((entries)=>{
    const entry  = entries[1];
    console.log(entry);
    gsap.fromTo('.discription',{y: -100},{ y:0})
    gsap.fromTo(".BOXA", { x: -400,y: -200, },{duration: 1, x:0,y:20});
    gsap.fromTo(".BOXB", { x: -400,y: -200, },{duration: 2, x:0,y:20});
    gsap.fromTo(".BOXC", { x: -400,y: -200, },{duration: 3, x:0,y:20});
    gsap.fromTo(".BOXD", { x: 0,y: -200, },{duration: 3, x:-40,y:20});
    gsap.fromTo(".BOXE", {y: -200, },{duration: 2,y:20});
    gsap.fromTo(".Aboutme", {y: 200, },{duration: 10, y: 20});
    


  })
  obeserver.observe(discription.current)
})


 
  return (
    <div className='About w-full md:h-1/2 h-screen lg:h-screen   '>
      <div className=" z-10 absolute" > <img src={Background} alt="" /></div>
      <div className="w-full h-full z-20  md:flex ">
        <div className=" w-full md:w-2/5 h-1/2 md:h-full relative overflow-hidden">
          <div className="BOXA lg:w-[300px]  w-[150px] lg:h-[300px] h-[150px] relative bg-gray-600 left-20 top-20 rounded-lg z-20"></div>
          <div className="BOXB lg:w-[200px] w-[100px] h-[100px] lg:h-[200px] rounded-lg border-r-[2px] border-b-[2px] border-t-[2px] z-30 relative bottom-[20%]"></div>
          <div className="BOXC w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] relative bg-red-500 rounded-lg z-10 bottom-[30%] left-10"></div>

        </div>
        <div className="  w-full md:w-4/5 h-full md:h-2/3 flex relative " ref={discription}>
          <div className="discription  w-full h-3/5 md:h-full z-10 absolute ">
            <div className="w-full  h-full  p-4 ">
              <div className="discription w-full lg:h-1/6 md:text-2xl font-bold red flex text-xl">About Me</div>
              <div className="discription w-full lg:h-1/6 flex gap-4">
              <span className="h-1/6 md:text-5xl font-bold text-2xl"> I'm </span>
              <span className="h-1/6 md:text-5xl font-bold red text-2xl"> Shifas Va </span>
              </div>        
             <div className="discriptionB w-full h-1/6 flex gap-4">
              <span className="h-1/6 md:text-5xl text-3xl font-bold ">Front-end</span>
              <span className="h-1/6 md:text-5xl font-bold red text-3xl"> Developer </span>
              </div>
              <div className="w-full h-[100px] sm:h-[150px] overflow-scroll  flex font-semibold text-gray-600  text-xs  md:text-sm lg:text-lg">
                <div className="Aboutme w-full h-full ">
                <p>As a highly skilled and creative front-end developer, I excel at crafting visually stunning and engaging web applications. With expertise in HTML, CSS, and JavaScript,
                   I bring ideas to life with a keen eye for design and a dedication to delivering impressive user experiences. I thrive on collaborating with cross-functional teams to create pixel-perfect and responsive interfaces that exceed expectations.
                 Proactive and constantly learning, I stay up to date with the latest technologies to ensure my work remains attractive and impactful. With a track record of successful projects and a passion for front-end development, I am poised to make a remarkable impact. </p> 
                 </div>
                 </div>           
               <div className="w-full flex font-bold text-gray-800 text-xs md:text-sm lg:text-lg justify-center mt-2">
              Seeking a challenging role where i can utilize my skills and knowledge to contribute to a company's success.
              </div>
              <div className="w-full flex justify-start md:p-4  mt-4"><Button text='Dowload Cv'/></div>

            </div>


            <div className="flex w-full h-1/4 absolute ">
          <div className="BOXD lg:w-[280px] w-[150px] h-[150px] lg:h-[250px]  relative top-[30%] bg-gray-600  left-[60%] md:left-[65%] md:top-[80%] rounded-lg z-20 "></div>
          <div className="BOXE w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] relative border-[2px] md:border-0 md:bg-red-500 rounded-lg z-10  md:top-[35%] md:left-[25%] left-[5%] "></div>
          </div>
          </div>
        </div>
        </div>

    </div>
  )
}

export default About