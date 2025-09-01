'use client'

import { useState } from 'react'

export default function FiltroImoveis() {
  const [buildingType, setBuildingType] = useState('')
  const [transactionType, setTransactionType] = useState('')
  const [city, setCity] = useState('São Paulo')
  const [neighborhood, setNeighborhood] = useState('')

  const neighborhoodsSP = [
    'Cidades de São Paulo',
    'Centro',
    'Pinheiros',
    'Vila Madalena',
    'Moema',
    'Brooklin',
    'Itaim Bibi',
  ]

  function handleSearch() {
    alert(`Filtro:
      Tipo: ${buildingType}
      Transação: ${transactionType}
      Cidade: ${city}
      Bairro: ${neighborhood}
    `)
  }

  return (
    
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center', marginTop: '1rem' }}>
      <select value={buildingType} onChange={e => setBuildingType(e.target.value)}>
        <option value="" disabled  > Imóvel </option>
     <option value="Apartment" >Apartamento</option>
        <option value="House">Casa</option>
      </select>

<select
      value={transactionType}
      onChange={(e) => setTransactionType(e.target.value)}
    >
      <option value="" disabled>
        Opção de Negócio
      </option>
      <option value="alugar">Alugar</option>
      <option value="comprar">Comprar</option>
    </select>
  

      <select value={neighborhood} onChange={e => setNeighborhood(e.target.value)}>
        {neighborhoodsSP.map(bairro => (
          <option key={bairro} value={bairro}>
            {bairro}
          </option>
        ))}
      </select>

      <button
        onClick={handleSearch}
        style={{
          backgroundColor: '#9b6c02',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
        
        }}
      >
        Buscar
      </button>
    </div>
  )
}
