

import './AddIssue.css'

function AddIssue() {

  return (
    <div className="add-issue">
        <form action="">
            <label> Description<input type="text" placeholder='Description of the issue...' /></label>
            <label>Assign to
                <select name="forDev" id="forDev">
                     <option value="Sali">Sali</option>
                     <option value="John">John</option>
                     <option value="Pradi">Pradi</option>
                     <option value="Alice">Alice</option>
                </select>
            </label>
            <label>Priority
                <select name="priority" id="priority">
                     <option value="Low">Low</option>
                     <option value="Medium">Medium</option>
                     <option value="High">High</option>
                     <option value="Extreme High">Extreme High</option>
                </select>
                <button type='submit'>Add Issue</button>
            </label>
        </form>
    </div>
  );
}

export default AddIssue;
