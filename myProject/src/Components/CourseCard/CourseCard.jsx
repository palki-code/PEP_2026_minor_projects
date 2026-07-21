import "./CourseCard.css";

function CourseCard({ course }) {
  const getLevelBadgeClass = (level) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "badge-beginner";
      case "intermediate":
        return "badge-intermediate";
      case "advanced":
        return "badge-advanced";
      default:
        return "";
    }
  };

  return (
    <div className="course-card">
      <div className="course-image-container">
        <img src={course.image} alt={course.title} className="course-image" />
        <span className={`course-level-badge ${getLevelBadgeClass(course.level)}`}>
          {course.level}
        </span>
      </div>

      <div className="course-content">
        <h3 className="course-title" title={course.title}>
          {course.title}
        </h3>

        <div className="course-meta">
          <div className="meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span>{course.instructor}</span>
          </div>

          <div className="meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>{course.duration}</span>
          </div>
        </div>

        <div className="course-footer">
          <h4 className="course-price">₹{course.price}</h4>
          <button className="enroll-btn">Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;