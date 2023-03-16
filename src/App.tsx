import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main, Recruit } from "pages";

// eslint-disable-next-line
const Projects = lazy(() => import("./pages/Projects/ProjectsPage"));

function App() {
  return (
    <Container>
      <Router>
        <Suspense fallback={<div>Loading ..</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/recruit" element={<Recruit />} />
          </Routes>
        </Suspense>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
