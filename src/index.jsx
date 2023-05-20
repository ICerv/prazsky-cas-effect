import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {

  const [datetime, setDatetime] = useState('2020-11-13T22:46')
  const [timezone, setTimezone] = useState('Europe/Prague')
  useEffect(() => {
    const fetchTimezoneData = () => {

      // alert('Toto je první zobrazení komponenty.');
      // fetch('https://worldtimeapi.org/api/timezone/Europe/Prague')
      fetch(`https://worldtimeapi.org/api/timezone/${timezone}`)
        .then(response => response.json())
        .then(data => {
          const datetime = data.datetime
          setDatetime(datetime);

        })
    }
    fetchTimezoneData();

  }, [timezone])

  const handleTimezoneChange = (event) => {
    setTimezone(event.target.value)
  }


  return (
    <div className="container">
      <h1>Aktuální čas</h1>
      <p>{datetime}</p>

      <select value={timezone} onChange={handleTimezoneChange}>
        <option value="America/New_York">New York</option>
        <option value="Europe/London">Londýn</option>
        <option value="Europe/Moscow">Moskva</option>
        <option value="Europe/Prague">Praha</option>
        <option value="Asia/Hong_Kong">Hong Kong</option>
        <option value="Asia/Jerusalem">Jeruzalém</option>
      </select>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);


