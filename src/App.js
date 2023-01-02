import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>로그인 하기</h1>
      <Link to='/login'>로그인</Link>
      <h1>회원가입 하기</h1>
      <Link to='/signup'>회원가입</Link>
    </div>
  );
}

export default App;
