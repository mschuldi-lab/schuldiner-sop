import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// GitHub API Endpoints
const REPO_OWNER = 'mschuldi-lab';
const REPO_NAME = 'schuldiner-sop';
const COMMITS_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/commits?per_page=1`;
const CONTRIB_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contributors`;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  // State for dynamic data
  const [lastUpdate, setLastUpdate] = useState({ date: 'Loading...', author: '' });
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ... (Keep your existing useEffect code here, it hasn't changed) ...
    async function fetchData() {
      try {
        // 1. Fetch Last Commit Date & Author
        const commitRes = await fetch(COMMITS_URL);
        const commitData = await commitRes.json();
        
        if (commitData.length > 0) {
          const commit = commitData[0];
          const dateObj = new Date(commit.commit.committer.date);
          
          const formattedDate = dateObj.toLocaleString("en-US", { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
          });

          // Get author: Try GitHub login first, fallback to Git commit name
          const authorName = commit.author ? commit.author.login : commit.commit.author.name;

          setLastUpdate({
            date: formattedDate,
            author: authorName
          });
        }

        // 2. Fetch Contributors
        const contribRes = await fetch(CONTRIB_URL);
        const contribData = await contribRes.json();
        if (Array.isArray(contribData)) {
          setContributors(contribData.map(user => user.login));
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
        setLastUpdate({ date: "April 2025", author: "Unknown" });
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        
        <Heading as="h1" className="hero__title">
          Standard Operating Procedures
        </Heading>

        <h2 className="hero__subtitle year_edition">
          Edition&nbsp;
          <div className="roller">
            <div id="rolltext">
              {/* Start Year */}
              <div className="year-past">2008</div>
              
              {/* The Fast Scroll Years */}
              <div className="year-past">2009</div>
              <div className="year-past">2010</div>
              <div className="year-past">2011</div>
              <div className="year-past">2012</div>
              <div className="year-past">2013</div>
              <div className="year-past">2014</div>
              <div className="year-past">2015</div>
              <div className="year-past">2016</div>
              <div className="year-past">2017</div>
              <div className="year-past">2018</div>
              <div className="year-past">2019</div>
              <div className="year-past">2020</div>
              <div className="year-past">2021</div>
              <div className="year-past">2022</div>
              <div className="year-past">2023</div>
              <div className="year-past">2024</div>
              <div className="year-past">2025</div>

              {/* Final Destination */}
              <div className="year-current">2026</div>
            </div>
          </div>
        </h2>
        

        <img 
          src="/schuldiner-sop/img/SOP_illustration.png" // Added leading slash for better path resolving
          alt="Schuldiner Lab SOP Illustration" // Important for accessibility
          style={{
            maxWidth: '100%',      // Ensures it doesn't overflow on mobile
            height: 'auto',        // Maintains aspect ratio
            width: '450px',        // Sets a balanced maximum size for desktop
            display: 'block',      // Required for margin auto to work
            margin: '0 auto 2rem auto', // Center horizontally and add space below
            borderRadius: '12px',  // adds a nice rounded corner effect
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'  // adds a subtle shadow to make it pop
          }}
        />
              
        {/* Dynamic Last Update with Time & Author */}
        <div style={{ 
          fontSize: '1.2rem', 
          marginBottom: '2rem', 
          opacity: 0.9,
          display: 'flex',          // Enables flexible layout
          flexDirection: 'column',  // Stacks items vertically (new lines)
          alignItems: 'center',     // Centers items horizontally
          gap: '0.2rem'             // Adds a tiny space between the lines
        }}>
          <span>
            Last Updated: <strong>{lastUpdate.date}</strong>
          </span>
          
          {lastUpdate.author && (
            <span>
              by <strong>@{lastUpdate.author}</strong>
            </span>
          )}
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto 2rem auto', fontSize: '1.2rem', fontStyle: 'italic' }}>
          <p>
            "Here is your guide to all the inside info and special tips that will make your work and life in the Schuldi lab easier and more productive!"
          </p>
        </div>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            📖 Start Reading
          </Link>
        </div>

        {/* Dynamic Contributors List */}
        <div style={{ marginTop: '3rem', fontSize: '0.9rem', opacity: 0.8 }}>
          <strong>Wiki Contributors (GitHub):</strong> <br/>
          {loading ? (
            <span>Loading...</span>
          ) : (
            <span>
              {contributors.length > 0 ? contributors.join(', ') : "Maya, Rosario, Hadar, Yeynit, Lior, Reut, Ofir, Sarah, Noga, Olga, Dunya, Mor, Din, Hanni & Terry"}
            </span>
          )}
        </div>
        
        {/* Original SOP Contributors (Static Credit) */}
        <div style={{ marginTop: '1rem', fontSize: '0.8rem', opacity: 0.6 }}>
          <em>Original SOP 2025 Content by: Maya, Rosario, Hadar, Yeynit, Lior, Reut, Ofir, Sarah, Noga, Olga, Dunya, Mor, Din, Hanni & Terry</em> 
        </div>

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Schuldiner Lab SOP">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}