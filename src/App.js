import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout'
import { Fragment } from "react";
function App() {
  const test = publicRoutes
  console.log('public: ', test);

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {

            const Page = route.component;

            let Layout = DefaultLayout
            if (route.layout === null) {
              Layout = Fragment
            } else Layout = route.layout ? route.layout : DefaultLayout

            return (
              <Route
                key={index}
                path={route.path}
                element={

                  <Layout><Page /></Layout>

                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;



