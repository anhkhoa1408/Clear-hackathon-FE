import React, { useEffect } from 'react'
import BigIdea from './BigIdea'
import DeploymentPlant from './DeploymentPlant'
import Insight from './Insight'
import Story from './Story'

function HomePage() {
  useEffect(() => {
    
  }, [])
  return (
    <div id="home" className='home'>
      <Story />
      <Insight />
      <BigIdea />
      <DeploymentPlant />
    </div>
  )
}

export default HomePage