import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/home.css";

export default function Home() {
   return (
    <>
      <Header />
      {/* <main>
        <h>Welcome to the Student Initiative Group</h>
        <p>
          We are a student-led group hosting events, projects, and activities to
          empower our community.
        </p>


      </main> */}
      <section className="hero-section">
      <div className="hero-content">
        <h1 className="fade-in">Telugu Erlangen Association</h1>
        <p className="fade-in delay-1">
          A Student Initiative Organization.<br />
          From FAU. For the Students.
        </p>
        
      <div className="hero-circle fade-in delay-2"></div>
      </div>
      <div className="scroll-down">&#x2193;</div>
    </section>
      <Footer />
    </>
  );
}