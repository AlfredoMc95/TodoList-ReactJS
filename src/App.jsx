import TodoList from "./components/TodoList/TodoList";
import { ItemsProvider } from "./Context/ItemsContext";

function App() {
  return (
    <>
      <ItemsProvider>
        <TodoList />
      </ItemsProvider>
    </>
  );
}

export default App;
