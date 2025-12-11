import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const container = {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "bold",
  };

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async (title) => {
    await createTask({ title });
    loadTasks();
  };

  const editTask = async (title) => {
    await updateTask(taskToEdit.id, { title });
    setTaskToEdit(null);
    loadTasks();
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div style={container}>
      <h1 style={titleStyle}>Lista de Tareas</h1>

      <TaskForm 
        addTask={addTask}
        editTask={editTask}
        currentTask={taskToEdit}
      />

      <TaskList 
        tasks={tasks}
        onDelete={removeTask}
        onEdit={setTaskToEdit}
      />
    </div>
  );
}

export default App;
