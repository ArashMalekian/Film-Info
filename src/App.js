import {Provider} from 'react-redux'
import { Header } from './components/header/header/Header';
import { store } from "./redux/store";
import {ErrorBoundary} from 'react-error-boundary'
import { Main } from "./components/main/Main";
import { StateHandlerContext } from "./context/StateHandlerContext";
import  {Routes , Route}  from 'react-router-dom'
import { AboutFilm } from "./components/main/aboutFilm/AboutFilm";

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}


function App() {
  return (
    <ErrorBoundary 
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
    >
    <StateHandlerContext>
    <Provider store={store} >
    <div className="App">
      <Header />
      <Routes>
      <Route path="/:id" element={<AboutFilm />} />
      <Route path="/" element={<Main />} />
      </Routes>
    </div>
    </Provider>
    </StateHandlerContext>
    </ErrorBoundary>
  );
}

export default App;
