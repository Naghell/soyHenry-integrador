import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form/Form.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

const EMAIL = "admin@admin.com";
const PASSWORD = "administrador";

function App() {
   const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  };

  const logout = () => {
   setAccess(false);
   navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} logout={logout} /> : null}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
