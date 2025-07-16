"use client";

import React, { useState } from "react";
import { useTodo } from "@/context/ToDoContext";
import styles from "./Todo.module.css";

export default function Todo() {
  const { state, dispatch, ACTIONS } = useTodo();
  const [text, setText] = useState("");

  const handleAdd = () => {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { text } });
    setText("");
  };

  return (
    <div className={styles.todoContainer}>
      <h2>Todo List</h2>
      <div className={styles.inputRow}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleAdd} className={styles.addButton}>
          Add
        </button>
      </div>

      <ul className={styles.todoList}>
        {state.todos.length === 0 && <li>No todos yet</li>}
        {state.todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? styles.completed : ""}>
            <span
              onClick={() =>
                dispatch({
                  type: ACTIONS.TOGGLE_TODO,
                  payload: { id: todo.id },
                })
              }
              className={styles.todoText}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  dispatch({
                    type: ACTIONS.TOGGLE_TODO,
                    payload: { id: todo.id },
                  });
                }
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.REMOVE_TODO,
                  payload: { id: todo.id },
                })
              }
              className={styles.removeButton}
              aria-label={`Remove todo: ${todo.text}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
