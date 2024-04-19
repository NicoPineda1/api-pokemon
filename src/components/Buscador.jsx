import './buscador.css'
import { Buscar } from './Icons';

function Buscador({ busqueda, setBusqueda, buscarPokemon }) {
  
  return (
    <>
      <h3 className='titulo'>Buscador De Pokemones</h3>
      <form className='container-buscar' onSubmit={buscarPokemon}>
        <input type="text" placeholder='Escribe un nombre de pokemon' className='input-buscar'
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)} />
        <button className='btn-buscar' type='submit'>
          <Buscar />
          Buscar 
        </button>
      </form>
    </>
  )
}

export default Buscador;