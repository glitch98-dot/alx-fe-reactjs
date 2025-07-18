import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Moses Kavoo" age={25} bio="React enthusiast from Kenya." />
      <Footer />
    </div>
  );
}
export default App;
