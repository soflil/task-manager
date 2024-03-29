import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import "./TaskForm.css";

const schema = z.object({
  item: z.string().min(1, { message: "Task needs to be at least 1 carachter" }),
});

type FormData = z.infer<typeof schema>;

const TaskForm = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    setTasks([...tasks, data.item]);
    reset();
  };

  return (
    <>
      <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <span className="col-10">
            <input
              {...register("item", { required: true, minLength: 1 })}
              type="search reset"
              className="form-control form-input"
              id="item"
              placeholder="Add item here..."
              autoComplete="off"
              autoFocus={true}
            />
          </span>
          <span className="col form-span">
            <button
              disabled={!isValid}
              type="submit"
              className="btn btn-primary add-btn"
            >
              Add
            </button>
          </span>
        </div>
        {errors.item && <p className="error-message">{errors.item.message}</p>}
      </form>

      <ul className="list-ul list-group">
        {tasks.map((task, index) => (
          <li key={index} className="task-li list-group-item">
            {task}
            <span className="icon icon-single">
              <MdDelete />
            </span>
            <span className="icon icon-single">
              <FaCheck />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskForm;
