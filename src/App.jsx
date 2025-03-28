import { useState } from "react";

function App() {

  const [nome, setNome] = useState("memphis")

  return (
    <div>
      <h3>Pizzaria 2f</h3>
      <input className="nome"
      name= "nome"
      onChange={(e)=>{nome=e.target.value}}
      placeholder="Digite um nome"
      type="text"/>
      <button onClick={()=>{alert(nome)}}>
        CLIQUE AQUI
      </button>
    </div>
  )
}

export default App