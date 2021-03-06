import { Navbar, Footer, Loader, Services, Transactions, Welcome } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />  
      </div>
        {/* <Loader /> */}
        <Services />
        <Transactions />
        <Footer />
    </div>
  )
}

export default App;