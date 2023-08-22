import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './page/Main';
import Questions from './page/Questions';
import Tags from './page/Tags';
import Companies from './page/Companies';
import Login from './page/Login';
import MyPage from './page/MyPage';
import Signup from './page/Sign_up';
import QuestionRegister from './page/QuestionRegister';
import QuestionDetail from './page/QuestionDetail';
import SearchList from './page/Search_list';
import QuestionEdit from './page/QuestionEdit';

function App() {
  const [isData, setIsData] = useState([]);

  const getData = () => {
    return axios
      .get('http://localhost:5000/questionData')
      .then((res) => {
        setIsData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app__body">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/questions" element={<Questions isData={isData} />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<Signup />} />
          <Route path="/questions" element={<Questions />} />
          <Route
            path="/question/:id"
            element={<QuestionDetail isData={isData} />}
          />
          <Route path="/question_register" element={<QuestionRegister />} />
          <Route path="/search" element={<SearchList />} />
          <Route path="/question_register/:id" element={<QuestionEdit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
