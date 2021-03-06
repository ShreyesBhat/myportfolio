import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Topbar from "./components/topbar/Topbar";
import { ThemeContext } from "./context";
import ReactPageScroller from "react-page-scroller";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Topbar />
      <ReactPageScroller>
        <Intro />
        <About />
        <Contact />
      </ReactPageScroller>
    </div>
  );
};

export default App;
