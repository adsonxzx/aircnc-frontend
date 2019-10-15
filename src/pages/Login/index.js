import React, { useState } from 'react'
import { setAuthId } from '../../services/auth'
import api from '../../services/api'
import TitleText from '../../components/TitleText'

export default ({ history }) => {

  // State
  const [email, setEmail] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const { data: { _id: id } } = await api.post("/sessions", { email })
    setAuthId(id)
    history.push('/dashboard')
  }

  return (
    <>
      <TitleText />

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="email"> E-MAIL * </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        <button type="submit" className="btn-cadastrar">Entrar</button>

      </form>
    </>
  )
}