import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "./components/Form/Form.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();

  const login = (userData) => {
   const { email, password } = userData;
   const URL = `http://localhost:3001/rickandmorty/login/?email=${email}&password=${password}`;
   fetch(URL)
      .then((response) => response.json())
      .then((data) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
};

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    document.title = "Rick and Morty API";
    !access && navigate("/");
  }, [access]);

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== id;
      })
    );
  };

  const onSearch = (id) => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const charExists = characters.some((character) => character.id === data.id);

        if (charExists) {
          window.alert("¡Este personaje ya está en la lista!");
        } else if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
        
      })
      .catch((error) => window.alert("¡No hay personajes con este ID!"))
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} logout={logout} /> : null}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
