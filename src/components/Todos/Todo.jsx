import React from 'react';
import styles from './Todo.module.css';
import { RiCalendarTodoFill } from 'react-icons/ri';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiCalendarTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <AiOutlineCheckCircle
        onClick={() => {
          toggleTodo(todo.id);
        }}
        className={styles.checkIcon}
      />
      <AiOutlineCloseCircle
        onClick={() => {
          deleteTodo(todo.id);
        }}
        className={styles.deleteIcon}
      />
    </div>
  );
}

export default Todo;
