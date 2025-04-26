
// import './App.css'
// import Product from './Day1/BasicProductPage'
// import ToDoList from './Day1/BasicTodo'
// import Profile from './Day1/PassingProps'
import Avatar from './Day1/PassingProps2'
import Item from './Day2/condRendering'
import CanVote from './Day2/condRendering2'
import ItemList from './Day3/condRendering3'
import StudentList from './Day3/condRendering4'
import StudentReport from './Day3/renderingLists'
import HardwareProducts from './Day3/renderingList2'
import PersonInfo from './Day4/stateInReact'
import PersonInfo2 from './Day4/stateInReact2'
import DisplayLeaders from './Day5/stateInReact3'
import FeedBackForm from './Day6/basicForm'
import ThemeSetter from './Day7/ThemeSet'
import ThemeProvider from './Day7/ThemeProvider'
import Students from './Day8/studentAPI'

function App() {

  return (
    <div>
      {/* <ToDoList /> */}
      {/* <Profile name="Ali" rollNo={32} department="Software"/>
      <Profile name="Khan" rollNo={33} department="Electrical"/>
      <Profile name="" rollNo={35}/> */}
      {/* <Avatar itemName={{
        "name": "Samsung TV",
      }} size={145} picLink="http://res.cloudinary.com/dj5vvjv9q/image/upload/v1742498595/vdqgyv6fgahlzjlobg1g.png" />

      <Avatar itemName={{
        "name": "DSL modem",
      }} size={160} picLink="http://res.cloudinary.com/dj5vvjv9q/image/upload/v1742125185/qjwlmfst05eay3xyibyh.png" />

      <Avatar itemName={{
        "name": "RAM"
      }} size={200} picLink="http://res.cloudinary.com/dj5vvjv9q/image/upload/v1742235524/bakglj65fhitejd7g6qu.png" />

      <ul>
        <li><Item isPacked={true} name="Space suite" quantity={6} /></li>
        <li><Item isPacked={true} name="Helmet with a golden leaf" quantity={7} /></li>
        <li><Item isPacked={false} name="Photo of Tam" quantity={4} /></li>
      </ul>

      <ol>
        <li><CanVote name="Ali" age={28} address="karachi" /></li>
        <li><CanVote name="hasan" age={11} address="Lahore"/></li>
        <li><CanVote name="Muhammad" age={78} address="Peshwar" /></li>
      </ol>


      <ItemList />
      <StudentList />
      <StudentReport />
      <HardwareProducts />

      {/*Chp 2 *

      <PersonInfo />
      <PersonInfo2 />
      <DisplayLeaders /> */}

      {/* <FeedBackForm /> */}

      {/* <ThemeProvider>
         <ThemeSetter />
      </ThemeProvider> */}

      {<Students />}

    
    </div>
  )
}

export default App
