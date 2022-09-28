import React from 'react';
import { RiRefreshLine, RiDeleteBin2Line } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';
function TodosActions({ todos, deleteTodos, resetTodos, completedTodosCount }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>

      <Button
        title="Clear completed todos"
        onClick={deleteTodos}
        disabled={!completedTodosCount}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
