import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section id="work-experience" title="Work Experience" items={[
          "Job Title at Company - Year",
          "Job Title at Company - Year"
        ]} />
        <Section id="degrees" title="Degrees" items={[
          "Bachelor's in Field - University - Year",
          "Master's in Field - University - Year"
        ]} />
        <Section id="scholarships" title="Scholarships" items={[
          "Scholarship Name - Year",
          "Scholarship Name - Year"
        ]} />
        <Section id="publications" title="Publications" items={[
          "Publication Title - Journal/Conference - Year",
          "Publication Title - Journal/Conference - Year"
        ]} />
      </main>
      <Footer />
    </div>
  );
}

export default App;