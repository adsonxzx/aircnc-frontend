import React, {useState, useMemo} from 'react'
import api from '../../services/api'

import iconCam from '../../assets/camera.svg'
import './style.css'

export default function New({history}) {

  // States
  const [thumbnail , setThumbnail] = useState(null)
  const [company, setCompany] = useState('')
  const [techs, setTechs] = useState('')
  const [price, setPrice] = useState('')

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null
  }, [thumbnail])

  // Handle Submit
  async function handleSubmit(event){
    event.preventDefault()
    const data = new FormData()
    data.append('thumbnail', thumbnail)
    data.append('company', company)
    data.append('techs', techs)
    data.append('price', price)

    await api.post('/spots', data)
    history.push('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label 
        className={preview ? 'form-file has-bgimage' : 'form-file'}
        style={{backgroundImage: `url(${preview})`}}
      >
        <img src={iconCam} alt=""/>
        <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
      </label>


      <div className="form-input">
        <label htmlFor="company">EMPRESA *</label>
        <input 
          value={company} 
          id="company" 
          name="company" 
          type="text" 
          placeholder="Sua empresa incrível" 
          onChange={event => setCompany(event.target.value)}
        />
      </div>

      <div className="form-input">
        <label htmlFor="techs">TECNOLOGIAS * <span>(separados por vírgulas)</span></label>
        <input 
          value={techs} 
          id="techs" 
          name="techs" 
          type="text" 
          placeholder="Quais tecnologias usam ?" 
          onChange={event => setTechs(event.target.value)}
        />
      </div>

      <div className="form-input">
        <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
        <input 
          value={price} 
          type="text" 
          id="price" 
          name="price" 
          placeholder="Valor cobrado por dia" 
          onChange={event => setPrice(event.target.value)}
        />
      </div>

      <button className="btn-cadastrar">CADASTRAR</button>
    </form>
  )
}