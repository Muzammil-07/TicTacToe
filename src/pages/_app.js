import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import NoteProvider from '@/context/NoteProvider'
 function App({ Component, pageProps }) {

  return (
    <NoteProvider >
<Component {...pageProps} />
</NoteProvider>
  )
  
}

export default App
