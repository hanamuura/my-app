import './App.css';
import {StartPage} from "./pages/StartPage";
import {Route, Routes} from "react-router-dom";
import {BookPage} from "./pages/BookPage";
import {routes} from "./Routes"

function App() {
  return(
      <>
        <Routes>
          <Route path={routes.startPage} element={<StartPage/>} />
          <Route path={routes.bookPage} element={<BookPage/>} />
        </Routes>
      </>
  )
}

export default App;