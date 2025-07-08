
// import './App.css'
// import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
// import { notifications, totalNotificationSelector } from './atoms'
// import { useEffect } from 'react'
// import axios from 'axios'

// function App() {
//   return <RecoilRoot>
//     <MainApp />
//   </RecoilRoot>
// }

// function MainApp() {
//   const [networkCount, setNetworkCount] = useRecoilState(notifications)
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);

//   useEffect(() => {
//     // fetch
//     axios.get("http://localhost:3000/notifications")
//       .then(res => {
//         setNetworkCount(res.data)
//       })
//   }, [])

//   return (
//     <>
//       <button>Home</button>
      
//       <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
//       <button>Jobs {networkCount.jobs}</button>
//       <button>Messaging ({networkCount.messaging})</button>
//       <button>Notifications ({networkCount.notifications})</button>

//       <button>Me ({totalNotificationCount})</button>
//     </>
//   )
// }

// export default App




//the above one  is not the correct way to resolve this  
//and default wont be a async function  

//Selectors can be used as one way to incorporate asynchronous data into the Recoil data-flow graph. Please keep in mind that selectors represent "idempotent" functions: For a given set of inputs they should always produce the same results (at least for the lifetime of the application).

import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

/*  useEffect(() => {
    // fetch
    axios.get("http://localhost:3000/notifications")
      .then(res => {
        setNetworkCount(res.data)
      })
  }, [])*/


  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App

