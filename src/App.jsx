import Cards from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Service from "./components/service";
import Signup from "./components/signup";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Service />
      <Cards />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
