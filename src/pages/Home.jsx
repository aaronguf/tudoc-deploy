import React, {useContext} from 'react'
import { useNavigate } from 'react-router'
import { Context } from '../js/store/appContext.js';


const Home = () => {
    const { store, actions} = useContext(Context)
    const navigate = useNavigate();

  return (
    <div>Home

        <h5>Personas en global: {store.personas}</h5>
    </div>
  )
}

export default Home