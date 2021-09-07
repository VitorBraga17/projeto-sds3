import NavBar from "componentes/NavBar";
import DataTable from "componentes/NavBar/DataTable";
import Footer from "componentes/NavBar/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className= "container">
        <h1 className="text-primary">Olá Mundo</h1>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
