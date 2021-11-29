import './App.css';
import { MyButton } from './MyButton';
import Profile from './Profile';

// function App() {
//   return (
//     <>
//       <MyButton myText="this is button one" user="bob" />
//       <MyButton myText="button two" user="alice" />
//       <MyButton myText="button three" user="foo" />
//     </>
//   );
// }


function App() {
  const user = {
    name: 'Alice',
    email: 'alice@gmail.com',
    picture: 'https://bit.ly/2zVs57p'
  }
  return (
    <Profile data={user} />
  );
}

export default App;
