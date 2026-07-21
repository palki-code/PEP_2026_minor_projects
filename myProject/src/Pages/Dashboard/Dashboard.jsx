import { useState } from "react";
import "./Dashboard.css";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CourseCard from "../../Components/CourseCard/CourseCard";
import coursesData from "../../data/data";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <>
      <Navbar />

      <main className="page dashboard">
        <div className="dashboard-header">
          <h1>Browse Courses</h1>
          <p>Explore our library of premium tech courses and start upgrading your coding skills today.</p>
        </div>

        {/* Search and Category Filters Panel */}
        <div className="filters-container">
          <div className="search-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="search-icon"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search by course title or instructor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="clear-search" 
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>

          <div className="level-filters">
            {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
              <button
                key={level}
                className={`filter-pill ${selectedLevel === level ? "active" : ""}`}
                onClick={() => setSelectedLevel(level)}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Display */}
        {filteredCourses.length > 0 ? (
          <div className="courseContainer">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="no-results-icon"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            <h3>No Courses Found</h3>
            <p>
              We couldn't find any courses matching your search criteria. Try adjusting your query or filters.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSearchTerm("");
                setSelectedLevel("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;