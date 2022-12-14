import { useDispatch, useSelector } from 'react-redux';
import {
  countSelector,
  increment,
  decrement,
  postsSelector,
} from './features/counter/counterSlice';
import { useGetPostsQuery } from './features/posts/postsSlice';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const count = useSelector(countSelector);
  // const posts = useSelector(postsSelector);
  const dispatch = useDispatch();
  const { posts } = useGetPostsQuery();

  console.log(posts);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={() => dispatch(decrement())}>count is {count}</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
