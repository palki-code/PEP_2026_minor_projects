import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function About() {
  return (
    <>
      <Navbar />

      <main className="page about-page">
        {/* Project Info Section */}
        <section className="about-hero">
          <h1 className="about-title">About this Portal</h1>
          <p className="about-lead">
            This workspace acts as a local catalog of programming paths. It compiles course lists, details, and project entry points to help organize learning materials for JavaScript, web engineering, and coding preparation.
          </p>
        </section>

        {/* Guidelines / Features Section */}
        <section className="guidelines-section">
          <h2>Portal Structure</h2>
          <div className="guidelines-list">
            <div className="guideline-item">
              <div className="guideline-num">01</div>
              <div className="guideline-content">
                <h3>Source Code Repositories</h3>
                <p>Every listed course is mapped to a matching Git branch or repository folder, ensuring that you can explore the active files locally.</p>
              </div>
            </div>

            <div className="guideline-item">
              <div className="guideline-num">02</div>
              <div className="guideline-content">
                <h3>Self-Paced Navigation</h3>
                <p>Designed as an offline dashboard, students can query courses and progress through material at their own speed with no remote server latency.</p>
              </div>
            </div>

            <div className="guideline-item">
              <div className="guideline-num">03</div>
              <div className="guideline-content">
                <h3>Vetted Development Tools</h3>
                <p>All curriculum guidelines are verified to build and run using modern node modules, Vite compilers, and standard databases.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;