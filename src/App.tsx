import Toolbar from './components/Toolbar/Toolbar.tsx';
import MessageForm from './components/MessageForm/MessageForm.tsx';

function App() {
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main>
        <div className="d-flex justify-content-center mt-5">
          <MessageForm onSubmit={() => {}}/>
        </div>
      </main>
    </>
  );
}

export default App;
