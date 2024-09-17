import './App.css';
import EditorWindow from './components/EditorWindow';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="app flex flex-col h-full w-full dark:bg-gray-950 p-2 text-black dark:text-gray-300">
      <Header />
      <main className="main grow py-2">
        <EditorWindow />
      </main>
      <Footer />
    </div>
  );
}

export default App;
