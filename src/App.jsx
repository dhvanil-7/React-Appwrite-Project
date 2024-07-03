import conf from './conf/conf.js'

function App() {
  console.log(conf.VITE_APPWRITE_ENDPOINT_URL)

  return (
    <>
      <h1>Blog with appwrite</h1>
    </>
  )
}

export default App
