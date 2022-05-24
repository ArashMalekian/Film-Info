import { Header } from "./components/header/Header";
import {Provider} from 'react-redux'
import { store } from "./redux/store";
import {ErrorBoundary} from 'react-error-boundary'
import { Main } from "./components/main/Main";
import { StateHandlerContext } from "./context/StateHandlerContext";

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
      <Main />
    </div>
    </Provider>
    </StateHandlerContext>
    </ErrorBoundary>
  );
}

export default App;
