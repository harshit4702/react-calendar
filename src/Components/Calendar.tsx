import { FC } from 'react';
import Box from './Box';
import * as dayjs from 'dayjs'

interface DateProps {
  today: Date;
  setToday: (date: Date) => void;
}

const allDays : string[] = [ "Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"]

const Calendar: FC<DateProps> = (props) : JSX.Element => {
  const { today , setToday } = props;

  const startOfMonth = dayjs(today).startOf('month')
  const startDay = dayjs(startOfMonth).day()
  const endOfMonth =  dayjs(today).endOf('month')
  const endDay = dayjs(endOfMonth).day()
  const numberOfDays = endOfMonth.diff(startOfMonth, 'day') + 1;

  const pastMonth = () =>{ 
    console.log(dayjs(today).subtract(1, 'month').toDate());
    setToday(dayjs(today).subtract(1, 'month').toDate());
  }

  const futureMonth = () => {
    setToday(dayjs(today).add(1, 'month').toDate());
  }

  const pastYear = () => {
    setToday(dayjs(today).subtract(1, 'year').toDate());
  }

  const futureYear = () => {
    setToday(dayjs(today).add(1, 'year').toDate());
  }

  const setDay = (day:number) => {
    setToday(dayjs(today).date(day).toDate())
  }

  return (
      <div className='container'>
        <Box onClick={pastYear}>{"<<"}</Box>

        <Box onClick={pastMonth}>{"<"}</Box>

        <Box className="parent" >
          {dayjs(today).format("MMMM YYYY")}
        </Box>
        <Box onClick={futureMonth}>{">"}</Box>
        <Box onClick={futureYear}>{">>"}</Box>
        {
          allDays.map((dayType) => {
            return (
              <Box key={dayType} >{dayType}</Box>
            )
          })
        }
        {
          Array.from({length: startDay}).map((_ , ind) => {
            return <Box key={ind}/>;
          })
        }
        {
          Array.from({length: numberOfDays}).map((_ , ind) => {
            return <Box 
                      className={`${dayjs(today).date() === ind+1 ? "active" : ""}`} 
                      onClick={() => setDay(ind+1)} key={ind}>{ind+1}
                    </Box>;
          })
        }
        {
          Array.from({length: 7-endDay-1}).map((_ , ind) => {
            return <Box key={ind} />;
          })
        }

      </div>
  );
};

export default Calendar;
