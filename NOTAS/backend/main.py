from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# CORS para permitir conectar desde React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo de datos
class Task(BaseModel):
    id: int | None = None
    title: str

# "Base de datos" en memoria
tasks = []
current_id = 1


@app.get("/tasks")
def get_tasks():
    return tasks


@app.post("/tasks")
def create_task(task: Task):
    global current_id
    task.id = current_id
    current_id += 1
    tasks.append(task.dict())
    return task


@app.put("/tasks/{task_id}")
def update_task(task_id: int, updated: Task):
    for t in tasks:
        if t["id"] == task_id:
            t["title"] = updated.title
            return t
    raise HTTPException(status_code=404, detail="Task not found")


@app.delete("/tasks/{task_id}")
def delete_task(task_id: int):
    for t in tasks:
        if t["id"] == task_id:
            tasks.remove(t)
            return {"message": "Deleted"}
    raise HTTPException(status_code=404, detail="Task not found")
