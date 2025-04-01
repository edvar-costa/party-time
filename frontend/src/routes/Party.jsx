import partyFetch from "../axios/config"

import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'


const party = () => {
    const {id} = useParams()
    const [party, setParty] = useState(null)


    //load party

    useEffect(() => {
        const loadParty = async () => {
        const res = await partyFetch.get(`/parties/${id}`)

        console.log(res.data)

        setParty(res.data)
        }
        loadParty()
        
    }, [])

    if(!party) return <p>Carregando...</p>

  return (
    <div className="party">
        <h1>{party.title}</h1>
        <div className="actions-container">
            <Link className="btn-secondary">Editar</Link>
            <button className="btn-secondary">Excluir</button>
        </div>
        <p>Orçamento: R${party.budget}</p>
        <h3>Serviços Contratado</h3>
        <div className="services-container">
            {party.services.map((service)=>(
                <div className="service" key={service.id}>
                    <img src={service.image} alt={service.name} />
                </div>
            ))}
        </div>
    
    </div>
  )
}
export default party