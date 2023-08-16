import { Button, Layout } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Error404 from "./pages/Error404";
import NewMovies from "./pages/NewMovies";
import PopularMovies from "./pages/PopularMovies";
import Search from "./pages/Search";

const App = () => {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <BrowserRouter>
        <Header style={{ zIndex: 1 }}>
					<Navbar />
				</Header>

        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-movies" element={<NewMovies />} />
            <Route path="/popular-movies" element={<PopularMovies />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Content>
      </BrowserRouter>
    </Layout>
  );
};
export default App;
