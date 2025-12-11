import { useState, useEffect } from "react";

function TaskForm({ addTask, editTask, currentTask }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    currentTask ? editTask(title) : addTask(title);
    setTitle("");
  };

  const formStyle = {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  };

  const inputStyle = {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px 15px",
    background: currentTask ? "#ff9800" : "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={title}
        style={inputStyle}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" style={buttonStyle}>
        {currentTask ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
}

export default TaskForm;
