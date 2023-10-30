import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import DefaultComponent from './component/DefaultComponent/DefaultComponent'
function App() {

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layoyt = route.isShowHeader ? DefaultComponent : Fragment 
            return (
              <Route key={route.path} path={route.path} element={
                  <Layoyt>
                  <Page />
                  </Layoyt>
                }
              />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}
export default App