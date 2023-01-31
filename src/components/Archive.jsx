import React, { useContext } from 'react'
import { UserContext } from '../pages/Home'

const Archive = () => {
  const { calls, setCalls } = useContext(UserContext)

  return (
    <div>
      <p>
        Completely synergize resource taxing relationships via premier niche
        markets. Professionally cultivate one-to-one customer service with
        robust ideas.
        <br />
        <br />
        Dynamically innovate resource-leveling customer service for state of the
        art customer service.
      </p>
    </div>
  )
}

export default Archive
