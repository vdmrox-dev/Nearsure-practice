import WebFont from "webfontloader";
import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Header from "./CommonComponents/Header";
import Container from "./CommonComponents/Container";
import OrganizationsList from "./ViewComponents/OrganizationsList";
import OrganizationDetails from "./ViewComponents/OrganizationDetails";

export default function App() {
  WebFont.load({
    google: {
      families: ["Open Sans", "Quicksand"]
    }
  });

  return (
    <div className="App">
      <Header title="List of Organizations" />
      <Container>
        <Routes>
          <Route path="/" element={<OrganizationsList />} />
          <Route path="/details/:id" element={<OrganizationDetails />} />
        </Routes>
      </Container>
    </div>
  );
}
