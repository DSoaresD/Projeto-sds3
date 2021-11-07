import Datatable from "components/Datatable";
import Footer from "components/footer";
import Navbar from "components/navbar";

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <h1 className="text-primary">ola mundo!</h1>
      <Datatable />
      </div>
      <Footer />
      </>
  );
}

export default App;
