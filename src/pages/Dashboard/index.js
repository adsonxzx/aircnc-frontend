import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

import './style.css'
import TitleText from '../../components/TitleText'

export default function Dashboard() {

  const [spots, setSpots] = useState([])

  useEffect(() => {
    async function loadSpots() {
      const { data } = await api.get('/dashboard')
      setSpots(data)
    }

    loadSpots()
  }, [])

  return (
    <div className="dashboard">

      <TitleText />

      {/* User Actions */}
      <div className="user-actions">
        <span className="aceita">Aceitar</span>
        <span className="rejeitar">Rejeitar</span>
      </div>

      {/* lista de spots */}
      <ul className="list-spots">
        {
          spots.map(spot => (
            <li className="card-spot" key={spot._id}>
              <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
              <span className="company">{spot.company}</span>
              <span className="price">{spot.price ? `R$ ${spot.price}/dia` : 'GRATUITO'}</span>
            </li>
          ))
        }
      </ul>

      <Link to="/new">
        <button className="btn-cadastrar" href="#">Cadastrar novo Spot</button>
      </Link>
    </div>
  )
}