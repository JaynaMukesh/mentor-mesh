import React, { useState } from 'react';

const SessionScheduler: React.FC = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [mentor, setMentor] = useState('');

  const handleSchedule = () => {
    // Logic to schedule a session with the selected mentor
    console.log(`Session scheduled with ${mentor} on ${date} at ${time}`);
  };

  return (
    <div className="session-scheduler">
      <h2>Schedule a Session</h2>
      <div>
        <label htmlFor="mentor">Select Mentor:</label>
        <select id="mentor" value={mentor} onChange={(e) => setMentor(e.target.value)}>
          <option value="">Select a mentor</option>
          {/* Add mentor options here */}
        </select>
      </div>
      <div>
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="time">Select Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button onClick={handleSchedule}>Schedule Session</button>
    </div>
  );
};

export {SessionScheduler};