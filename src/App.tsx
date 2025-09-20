import { BrowserRouter, Routes, Route } from "react-router-dom";
import publicRoutes from "./routes";
import type { ReactNode } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.Page;
            let Layout;

            if (route.Layout) {
              Layout = route.Layout;
            } else {
              Layout = ({ children }: { children: ReactNode }) => (
                <>{children}</>
              );
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
