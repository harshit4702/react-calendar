import { useState } from 'react';
import './App.css'
import Calendar from './Components/Calendar';
import dayjs from "dayjs";

function App() {
  const [today , setToday] = useState(new Date());
  
  console.log(setToday);
  
  return (
    <div className='wrapper'>
      <br />
      <br />
      <br />
      <br />
      <div>
        Selected Date : {dayjs(today).format("DD MMM YYYY")}
      </div>

      <div>
        <button className='button' onClick={() => setToday(new Date())}>Choose today</button>
      </div>
      <br />

      <Calendar today={today} setToday ={setToday}/>
    </div>
  )
}

export default App;