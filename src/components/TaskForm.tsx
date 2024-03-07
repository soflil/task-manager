import "./TaskForm.css";

const TaskForm = () => {
  return (
    <>
      <form className="task-form">
        <div className="row">
          <input
            type="search"
            className="form-control form-input col"
            id="item"
            placeholder="Add item here..."
            autoComplete="off"
          />
          <button type="submit" className="btn btn-primary add-btn">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
