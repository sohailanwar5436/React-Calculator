import React, { useState } from 'react';

const App = () => {
  const [task, settask] = useState("");
  const [maintask, setmaintask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { task }]);
    settask("");
  };
  const deleteHandler = (index) => {
  const updatedTasks = maintask.filter((_, i) => i !== index);
  setmaintask(updatedTasks);
};

  let showtask = <h2 className='heading'>No task avaliable</h2>;

  if (maintask.length > 0) {
    showtask = maintask.map((t, i) => {
      return (
        <li>
        <div key={i}>
          <h3>{t.task}</h3>
        </div>
        <button onClick={() => deleteHandler(i)}>Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <h2>Sohail Todo List for day</h2>
      <form onSubmit={submithandler}>
        <input
          type="text"
          placeholder='Enter First Your Task '
          value={task}
          onChange={(e) => {
            settask(e.target.value);
          }}
        />
        <button>Add Task</button>
      </form>
      <div className='tasktaker'>
        <ul>{showtask}</ul>
      </div>
    </>
  );
};

export default App;