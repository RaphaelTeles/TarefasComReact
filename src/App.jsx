
import { useState } from 'react'
import { Item, Container, TodoList, Input, Button, List } from './styles'


function App(){
 const [ tasks, setTasks ] = useState( [ ])
 const [ InputValue, setInputValue ] = useState('')
  // const tasks = ['Comprar Pão', 'Finalizar módulo de JavaScript']
  
 
  
  function inputChange(event){
    setInputValue(event.target.value) 
   
}
  function buttonClick(){
   setTasks([...tasks, InputValue])
  
  }


return(
<Container>
  <TodoList>
  <Input placeholder="Digite Sua Tarefa" onChange={inputChange}/>
  <Button onClick={buttonClick}>Adicionar Tarefas</Button>
  
  <List>
    {
      tasks.map((item, index) =>(
        <Item key= {index}> {item}</Item>
      ))
    }
  </List>
  </TodoList> 
  </Container>
)}

export default App
  