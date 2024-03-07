import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./TaskForm.css";

const schema = z.object({
  item: z.string().min(1, { message: "Task needs to be at least 1 carachter" }),
});

type FormData = z.infer<typeof schema>;

const TaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    return console.log(data);
  };

  return (
    <>
      <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <input
            {...register("item", { required: true, minLength: 1 })}
            type="search"
            className="form-control form-input col"
            id="item"
            placeholder="Add item here..."
            autoComplete="off"
            autoFocus={true}
          />
          <button type="submit" className="btn btn-primary add-btn">
            Add
          </button>
        </div>
        {errors.item && <p className="error-message">{errors.item.message}</p>}
      </form>
    </>
  );
};

export default TaskForm;
