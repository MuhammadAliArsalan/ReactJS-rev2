
// import './App.css'
import Product from './Day1/BasicProductPage'
import ToDoList from './Day1/BasicTodo'
import Profile from './Day1/PassingProps'
function App() {

  return (
    <div>
      <ToDoList />
      <Profile name="Ali" rollNo={32} department="Software"/>
      <Profile name="Khan" rollNo={33} department="Electrical"/>
      <Profile name="" rollNo={35}/>

    </div>  
  )

}

export default App
