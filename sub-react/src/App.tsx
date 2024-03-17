import React from "react";
import { onMounted } from 'veact'
import LoadingBar from 'react-top-loading-bar'

import { ENV, VITE_ENV, APP_COLOR_PRIMARY, ENABLEd_HASH_ROUTER } from '@/config'
import { useLoadingState } from '@/state/loading'
import RouterPage from '@/routes'

const App: React.FC = () => {
  const loadingState = useLoadingState()
  onMounted(() => {
    console.info(`Run! env: ${ENV}, vite env: ${JSON.stringify(VITE_ENV)}`)
  })
  return (<div className="app" id="app">
    <LoadingBar
      shadow={false}
      height={3}
      waitingTime={200}
      loaderSpeed={600}
      className={loadingState.state.failed ? 'red' : APP_COLOR_PRIMARY}
      color={loadingState.state.failed ? 'red' : APP_COLOR_PRIMARY}
      progress={loadingState.state.percent}
    />
    <RouterPage />
  </div>);
}

export default App;
