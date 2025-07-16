"use client";

import React, { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();

const initialState = {
  todos: [],
};

const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
};

function todoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      if (!action.payload?.text.trim()) return state;
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      };
      return { todos: [newTodo, ...state.todos] };

    case ACTIONS.REMOVE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case ACTIONS.TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch, ACTIONS }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}
