import onl2 from './assets/onl2.png';
import scoreboard from './assets/scoreboard.png';
import instagramClone from './assets/instagram-clone.png';
import blog from './assets/blog.png';
import jobBoard from './assets/job-board.png';
import members from './assets/members.png';
import github from './assets/github.png';
import link from './assets/link.png';
import email from './assets/email.svg';
import linkedIn from './assets/linkedin-white.png';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Navbar />
      <header>
        <h1>
          I'm Owen Whitsett,
          <br />a New York-based web developer.
        </h1>
      </header>
      <main>
        <h2 id="work">My work</h2>
        <div className="grid-container">
          <div className="card">
            <aside>
              <img src={onl2} alt="Opening Night Lighting Thumbnail" />
            </aside>
            <article>
              <div className="title-box">
                <h3>Opening Night Lighting LLC Website</h3>
                <div className="link-box">
                  <a
                    href="http://www.openingnightlighting.com/"
                    className="link-icon"
                    title="Opening Night Lighting LLC Website"
                  >
                    <img src={link} />
                  </a>
                </div>
              </div>
              <p className="card-description">
                Complete re-design of the Opening Night Lighting LLC. website
                using HTML, CSS and React with TypeScript. Refreshed home-page,
                added HTTPS to hosting provider and created responsive page with
                mobile layout.
              </p>
            </article>
          </div>
          <div className="card">
            <aside>
              <img src={scoreboard} alt="NBA Scoreboard Thumbnail" />
            </aside>
            <article>
              <div className="title-box">
                <h3>NBA Scoreboard</h3>
                <div className="link-box">
                  <a
                    href="https://github.com/Taaaaab/nba-scoreboard"
                    className="link-icon"
                    title="Github Repository for NBA Scoreboard"
                  >
                    <img src={github} />
                  </a>
                  <a
                    href="https://nba-scoreboard.onrender.com/"
                    className="link-icon"
                    title="NBA Scoreboard deployed on Render"
                  >
                    <img src={link} />
                  </a>
                </div>
              </div>
              <p className="card-description">
                React app to display daily NBA scoreboard data. Project to
                practice using Node with Express backend to serve NBA league
                data API to frontend React app. Using TypeScript for frontend
                with Interface types for JSON data. Display includes game score,
                game status, team names, team records and player statistics for
                game leaders.
              </p>
            </article>
          </div>
          <div className="card">
            <aside>
              <img src={instagramClone} alt="Instagram Clone Thumbnail" />
            </aside>
            <article>
              <div className="title-box">
                <h3>Instagram Clone</h3>
                <div className="link-box">
                  <a
                    href="https://github.com/Taaaaab/instagram-clone"
                    className="link-icon"
                    title="Github Repository for Instagram Clone"
                  >
                    <img src={github} />
                  </a>
                  <a
                    href="https://taaaaab.github.io/instagram-clone/#/"
                    className="link-icon"
                    title="Instagram Clone Deployed on Github Pages"
                  >
                    <img src={link} />
                  </a>
                </div>
              </div>
              <p className="card-description">
                Clone of Instagram created using React and Google's Firebase.
                Project to practice using React framework, React Router and
                Firebase for authentication and storage. Users can create
                account using Firebase email authentication and upload images.
                Images are stored using Firebase Storage and displayed in React
                component with working like and comment system.
              </p>
            </article>
          </div>
          <div className="card">
            <aside>
              <img src={blog} alt="Blog API Thumbnail" />
            </aside>
            <article>
              <div className="title-box">
                <h3>Blog API</h3>
                <div className="link-box">
                  <a
                    href="https://github.com/Taaaaab/blog-api"
                    className="link-icon"
                    title="Github Repository for Blog API"
                  >
                    <img src={github} />
                  </a>
                  <a
                    href="https://blog-api-jrk0.onrender.com/"
                    className="link-icon"
                    title="Blog API deployed on Render"
                  >
                    <img src={link} />
                  </a>
                </div>
              </div>
              <p className="card-description">
                Blog created using Express/Node and MongoDB (with Mongoose).
                Project to practice using an API only backend to create, read,
                update and delete blog posts and comments (saved using Mongoose
                schema to MongoDB Atlas). Homepage with script to fetch and
                display blog posts and comments. Bootstrap used for CSS styling
                of cards.
              </p>
            </article>
          </div>
          <div className="card">
            <aside>
              <img src={jobBoard} alt="Job Board Web Scraper Thumbnail" />
            </aside>
            <article>
              <div className="title-box">
                <h3>Job Board Web Scraper</h3>
                <div className="link-box">
                  <a
                    href="https://github.com/Taaaaab/job-board-web-scraper"
                    className="link-icon"
                    title="Github Repository for Job Board Web Scraper"
                  >
                    <img src={github} />
                  </a>
                </div>
              </div>
              <p className="card-description">
                Web scraper of indeed.com, hubstaff.com & dice.com job board
                postings using Puppeteer. Complete project has script to scrape
                3 job boards, save data as 3 JSON files which are then displayed
                using Express/Node (EJS template engine).
              </p>
            </article>
          </div>
          <div className="card">
            <aside>
              <img src={members} alt="Members Only Thumbnail" />
            </aside>
            <article>
              <div className="title-box">
                <h3>Members Only</h3>
                <div className="link-box">
                  <a
                    href="https://github.com/Taaaaab/members-only"
                    className="link-icon"
                    title="Github Repository for Members Only"
                  >
                    <img src={github} />
                  </a>
                  <a
                    href="https://members-only-4j01.onrender.com/"
                    className="link-icon"
                    title="Members Only deployed on Render"
                  >
                    <img src={link} />
                  </a>
                </div>
              </div>
              <p className="card-description">
                Message board project (created with Express/Node and EJS
                template engine) to test authentication using passportJS and
                bcryptjs. Guest visitors only able to view message text.
                Signed-in users able to post messages and view the
                author/timestamp. Admin users given the same view with
                additional ability to delete posts. Users and messages stored
                using MongoDB with Mongoose Schema.
              </p>
            </article>
          </div>
        </div>
      </main>
      <div className="contact-box">
        <h2 id="contact">Contact</h2>
        <a
          href="mailto:owen.whitsett@gmail.com"
          title="Email for Owen Whitsett"
          className="contact-links"
        >
          <img src={email} className="email" />
          owen.whitsett@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/owen-w"
          title="LinkedIn for Owen Whitsett"
          className="contact-links"
        >
          <img
            className="linkedin-icon"
            src={linkedIn}
            alt="Owen Whitsett LinkedIn"
          />
          LinkedIn
        </a>
        <Footer />
      </div>
    </div>
  );
}

export default App;
