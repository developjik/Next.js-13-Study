import { lazy, Suspense } from "react";
import Button from "remote_vite_react/component";

const RemoteViteReactPage = lazy(() => import("remote_vite_react/page"));

const RemoteViteReactComponent = lazy(
  () => import("remote_vite_react/component"),
);

function App() {
  return (
    <>
      <div style={{ background: "blue" }}>Host Home</div>

      <div style={{ width: "50vw", height: "100px" }}>
        {/* <RemoteViteReactComponent /> */}
        {/* <Suspense>
        </Suspense> */}

        <Button />
        <Suspense>
          <RemoteViteReactPage />
        </Suspense>
      </div>
    </>
  );
}

export default App;
