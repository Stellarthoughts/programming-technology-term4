import React from 'react';
import './Tasks.css';
import { GetTasksForUser, CreateTask } from '../Requests/TaskRequest';
import { Checkbox } from '@mui/material/';
import { FormControlLabel } from '@mui/material';
import { FormGroup } from '@mui/material';
function TasksPage() {

	const userid = 1;

	React.useEffect(() => {
		console.log("GET");
		getTasks();		
	}, []);

	async function getTasks() {
		
		const body = await GetTasksForUser(userid);
		setTodos(body.data);
	}

	async function addTasks() {
		const body = await CreateTask("hey","privet",userid);
		setTodos(todos.concat(body.data));
	}

	const [todos, setTodos] = React.useState([]);
	const [checked, setChecked] = React.useState(false);

	return (
		<div className='tasks'>
			<h1>Polina's production </h1>
				<input
			  	placeholder='Add a todo task'
          type="text"
          className="todo-input" 
        />
        <button type="submit" className="button-add" onClick={addTasks}>
          Add
        </button>
				
				<div className='todolist'>
					<ul>
					{
						todos.map((x) => {
							return(
								<div key={x.id}>
									{/* <li>
										<input type="checkbox"/> {x.name}
									</li> */}
									<li>
									
									<Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)}/> {x.name}
																		
									</li>
								</div>
							);
						})
					}
					</ul>
				</div>

	
		</div>
	);
}
export default TasksPage; 