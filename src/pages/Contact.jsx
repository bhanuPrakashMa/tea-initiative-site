// src/pages/AboutUs.jsx

import Header from "../components/Header";
import Footer from "../components/Footer";
// import SubMenu from "../components/SubMenu"; 
import "../styles/AboutUs.css"; // <-- 2. Import the new CSS file

function AboutUs() {
    return (
        <div>
            <Header />        
            {/* 3. Apply a class name for styling */}
            <main className="about-page-content"> 
                <h1>About Us</h1>
                <p>
                    Telugu Erlangen Association (TEA) at FAU is a student-run organization that fosters a 
                    welcoming and inclusive community for all students at FAU while introducing and celebrating 
                    the vibrant heritage of Telugu culture. Founded by students passionate about their language and customs, 
                    TEA provides a platform for cultural exchange, personal growth, and professional networking, helping students 
                    feel connected and engaged on campus through shared experiences. TEA organizes a variety of events, including 
                    traditional dance and music performances, cultural festivals, and movie screenings, to bring the essence of
                    Telugu culture to life at FAU. Language meet-ups, mentorship programs, and academic seminars not only connect 
                    Telugu-speaking students to their roots but also offer practical support to new students, such as guidance with accommodation and acclimation. 
                    The organization also prioritizes emotional and mental well-being, ensuring that all students feel supported both personally and 
                    professionally during their university journey. In addition to its work with Telugu students, TEA collaborates with other cultural 
                    groups to promote understanding and appreciation of Telugu traditions across the university. By contributing to FAU’s vibrant cultural diversity, 
                    TEA builds a community where students from all backgrounds can connect, celebrate, and thrive, enriching the campus experience for everyone.
                </p>
            </main>
            <Footer />
        </div> 
    );
}

export default AboutUs;