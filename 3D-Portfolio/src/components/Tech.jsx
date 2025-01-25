import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { div } from 'framer-motion/client'
import { styles } from '../styles'




const Tech = () => {
  return (
    <div className='flex flex-col flex-wrap justify-start gap-10'>


      <div className='flex flex-col '>
        <p className={`${styles.sectionSubText}`}>My bests</p>
        <h3 className={`${styles.sectionHeadText}`}>TECHNOLOGYS.</h3> 
        </div> 
      

      <div className='grid grid-cols-2 grid-rows-5 gap-12 sm:grid-cols-5 sm:grid-rows-2'>
        {technologies.map((technology)=>(
        
            <div className='w-28 h-28' key={technology.name}>
              <div className='font-bold ml-6'>
              <p>{technology.name}</p>
              
              </div>
        
              <BallCanvas icon={technology.icon}/>
              </div>
        ))}
      </div>
      

    </div>
  )
}

export default SectionWrapper(Tech,'')