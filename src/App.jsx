import { useState } from "react";

function App() {

  const [nome, setNome] = useState("memphis")

  const Formulario = () => {

    return (
      <div>
      <input 
      className="nome"
      name= "nome"
      onChange={(e)=>{nome=e.target.value}}
      placeholder="Digite um nome"
      type="text"/>
      <button onClick={()=>{alert(nome)}}>
        CLIQUE AQUI
      </button>
    </div>
    
      </div>
    )
  }

  return (
    <div>
      <h3>Pizzaria 2F</h3>
      <Formulario />
      <Formulario />
      <Formulario />

    </div>
  )
}

export default App