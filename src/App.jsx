import { Route, Routes, Navigate } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { pages } from "./router/main-router";
import { nanoid } from "nanoid";
import { NotFound } from "./pages/404page/not-found";
import { ProductDetail } from "./pages/product-detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {pages.map((route) => (
            <Route index={route.path ? false : true} key={nanoid()} path={route.path} element={route.component} />
          ))}
          <Route path="*" element={<NotFound/>} />
          <Route path="products/:id" element={<ProductDetail/>}/>
        </Route>
      </Routes>
    </>
  );
}


export default App;
