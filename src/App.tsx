import './App.css';
import { Footer } from './components/footer';
import { HeaderContent } from './components/headerContent';
import { AppRoutes } from './routes';

function App() {
  return (
    <div>
      <AppRoutes />
      <HeaderContent />
      <Footer />
    </div>
  );
}

export default App;
