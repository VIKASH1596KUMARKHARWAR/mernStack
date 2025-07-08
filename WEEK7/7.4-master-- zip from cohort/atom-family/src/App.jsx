
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';

//fetching the set of multiplle todo items >>> is what where we need the atom family

function App() {
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));//diff - passing atomFamily instead atom

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
