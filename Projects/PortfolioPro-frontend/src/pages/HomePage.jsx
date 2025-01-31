import React, {useEffect, useState} from 'react'
import { fetchProject } from '../data/api'
import SignupForm from './SignUp'

function HomePage() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchProject().then(data => setProjects(data))
  }, [])
  return (
    <div>

      <h1>Showcase Your Work with PortfolioPro</h1>
      <p>Create, manage, and share your projects effortlessly</p>
      <div>
        < SignupForm/>
      </div>

    
    
    </div>
  )
}

export default HomePage