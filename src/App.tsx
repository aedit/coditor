import EditorWindow from './components/EditorWindow';
import Footer from './components/Footer';
import Header from './components/Header';
import { ContextProvider } from './contexts/App.context';

function App() {
  return (
    <ContextProvider>
      <div className="app flex flex-col h-full w-full bg-gray-100 dark:bg-gray-800 p-2 text-black dark:text-gray-300">
        <Header />
        <main className="main grow py-2">
          <EditorWindow />
        </main>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
