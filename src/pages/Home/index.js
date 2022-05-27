import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/slices/counterSlice';

export const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);

  const addOne = () => {
    dispatch(increment());
  };

  const minusOne = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>Home Page</h1>

      <button aria-label='Increment value' onClick={() => addOne()}>
        Increment
      </button>
      <span>{counter.value}</span>
      <button aria-label='Decrement value' onClick={() => minusOne()}>
        Decrement
      </button>
    </div>
  );
};
