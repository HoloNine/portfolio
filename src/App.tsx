import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/main";
import Hero from "./layout/Hero/Hero";
import Socials from "./layout/Socials/Socials";
import Intro from "./layout/Intro/Intro";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Socials />
        <Intro />
      </Main>
      <Footer />
      <div></div>
    </>
  );
};

export default App;
