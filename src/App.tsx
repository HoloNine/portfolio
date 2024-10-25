import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/main";
import Hero from "./layout/Hero/Hero";
import Socials from "./layout/Socials/Socials";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Socials />
      </Main>
      <Footer />
      <div></div>
    </>
  );
};

export default App;
