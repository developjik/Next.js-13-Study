import { lazy, Suspense } from "react";

const RemoteViteReactPage = lazy(() => import("common/page"));

function App() {
  return (
    <>
      <div style={{ background: "blue" }}>Host Home</div>

      <div style={{ width: "50vw", height: "100px" }}>
        <Suspense>
          <RemoteViteReactPage />
        </Suspense>
      </div>
    </>
  );
}

export default App;
