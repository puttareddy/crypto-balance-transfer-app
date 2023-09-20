import {
  Navbar,
  Footer,
  Welcome,
  Transactions,
  Services,
  Loader,
} from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-white">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
