import "../styles/footer.css";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white text-center p-4 mt-10">
//       <p>© {new Date().getFullYear()} Student Initiative Group</p>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {/* <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" />
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" />
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" />
            <span className="label">LinkedIn</span>
          </a>
        </li> */}
        <li>
          <a href="https://www.instagram.com/___t.e.a____/reels/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" />
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" />
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="teluguerlangenassociation@gmail.com">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mail-dot-ru.svg" alt="Email" />
            <span className="label">Email</span>
          </a>
        </li>
      </ul>

      <ul className="copyright">
        <li>© {new Date().getFullYear()} TEA Student Initiative Group. All rights reserved.</li>
      </ul>
    </footer>
  );
}