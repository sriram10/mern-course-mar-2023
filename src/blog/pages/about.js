import styles from '../pageStyles/about.module.css';
import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';

const About = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <h1 className={styles.title}>About Page</h1>
      <h2>{date?.toLocaleDateString()}</h2>
      <p className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
        voluptates.
      </p>
      <DatePicker
        value={date}
        onChange={(newValue) => {
          console.log(newValue);
          setDate(newValue);
        }}
      />
      <ChildComp />
    </div>
  )
}
const ChildComp = () => {
  return (
    <h1 className='title'>Child</h1>
  )
}

export default About;