import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main className="page home-page">
        {/* Hero Section */}
        <section className="hero-section">
          <span className="hero-tag">Course Portal</span>
          <h1 className="hero-title">
            Structured study paths for developers.
          </h1>
          <p className="hero-description">
            A collection of tutorials covering React, Node.js, databases, and algorithms. Straightforward explanations, complete code repositories, and practical layouts.
          </p>
          <div className="hero-ctas">
            <Link to="/dashboard" className="btn btn-primary">
              View All Courses
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Read Guidelines
            </Link>
          </div>
        </section>

        {/* Learning Paths Grid */}
        <section className="paths-section">
          <h2>Core Topics</h2>
          <div className="paths-grid">
            <div className="path-card">
              <h4>Full-Stack Development</h4>
              <p>Build end-to-end applications using MongoDB, Express, React, and Node.js. Focuses on database schema design, APIs, and React hooks.</p>
            </div>
            
            <div className="path-card">
              <h4>Data Structures & Algorithms</h4>
              <p>Understand search, sorting, trees, graphs, and dynamic programming. Designed for backend engineering and interview prep.</p>
            </div>

            <div className="path-card">
              <h4>Language Bootcamps</h4>
              <p>Deep-dives into core mechanics of Javascript, TypeScript, Python, and Java. Focuses on memory models, async processes, and syntax.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;