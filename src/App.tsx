import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/main";
import Hero from "./layout/Hero/Hero";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
      </Main>
      <Footer />
      <div></div>
    </>
  );
};

export default App;
