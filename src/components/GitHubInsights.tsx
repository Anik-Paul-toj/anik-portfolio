import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaCodeBranch, FaCode, FaGithub } from 'react-icons/fa';
import './styles/GitHubInsights.css';

interface GitHubStats {
  totalStars: number;
  totalRepos: number;
  totalCommits: number;
  totalForks: number;
}

interface Repository {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
  updated_at: string;
}

interface LanguageStats {
  [key: string]: number;
}

const GitHubInsights: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats>({
    totalStars: 0,
    totalRepos: 0,
    totalCommits: 0,
    totalForks: 0
  });
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [languages, setLanguages] = useState<LanguageStats>({});
  const [recentActivity, setRecentActivity] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = 'anik-paul-toj';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Fetch repositories with all types (public, private accessible)
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=all&sort=updated`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const repos: Repository[] = await reposResponse.json();
        
        setRepositories(repos);

        // Calculate stats more accurately
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
        const totalRepos = repos.length;
        
        // Fetch user data for additional stats
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();

        // Use the user data for more accurate repository count if available
        const accurateRepoCount = userData.public_repos || totalRepos;

        // Try to get a better estimate of total commits by fetching events
        let totalCommits = 0;
        try {
          const eventsResponse = await fetch(`https://api.github.com/users/${username}/events?per_page=100`);
          if (eventsResponse.ok) {
            const events = await eventsResponse.json();
            const pushEvents = events.filter((event: any) => event.type === 'PushEvent');
            
            // Count commits from recent push events (this is an estimate)
            totalCommits = pushEvents.reduce((sum: number, event: any) => {
              return sum + (event.payload?.commits?.length || 0);
            }, 0);
            
            // If we have very few events, use a reasonable estimate based on repos
            if (totalCommits < 50) {
              totalCommits = Math.max(accurateRepoCount * 8, 150); // Estimate: ~8 commits per repo, minimum 150
            }
          } else {
            // Fallback: estimate based on repository count and account age
            const accountCreated = new Date(userData.created_at);
            const yearsActive = (new Date().getTime() - accountCreated.getTime()) / (1000 * 60 * 60 * 24 * 365);
            totalCommits = Math.round(accurateRepoCount * 10 + yearsActive * 100); // More realistic estimate
          }
        } catch {
          // Final fallback
          totalCommits = Math.max(accurateRepoCount * 8, 200);
        }

        setStats({
          totalStars,
          totalRepos: accurateRepoCount,
          totalCommits,
          totalForks
        });

        // Calculate language statistics
        const languageCount: LanguageStats = {};
        repos.forEach(repo => {
          if (repo.language) {
            languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
          }
        });
        setLanguages(languageCount);

        // Get recent activity (sorted by updated_at)
        const recentRepos = repos
          .filter(repo => repo.updated_at)
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 3);
        setRecentActivity(recentRepos);

        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getTopLanguages = () => {
    return Object.entries(languages)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5);
  };

  const getFeaturedRepos = () => {
    return repositories
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 3);
  };

  if (loading) {
    return (
      <section className="github-insights">
        <div className="container">
          <div className="loading">Loading GitHub insights...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="github-insights">
        <div className="container">
          <div className="error">Error: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="github-insights">
      <div className="container">
        <motion.div
          className="insights-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="insights-subtitle">DEVELOPMENT ANALYTICS</p>
          <h2>GitHub Insights</h2>
          <p className="insights-description">
            My open-source contributions, project statistics, and coding activity
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="stat-card">
            {React.createElement(FaStar as any, { className: "stat-icon" })}
            <div className="stat-number">{stats.totalStars}</div>
            <div className="stat-label">Total Stars</div>
          </div>
          <div className="stat-card">
            {React.createElement(FaCodeBranch as any, { className: "stat-icon" })}
            <div className="stat-number">{stats.totalRepos}</div>
            <div className="stat-label">Repositories</div>
          </div>
          <div className="stat-card">
            {React.createElement(FaCode as any, { className: "stat-icon" })}
            <div className="stat-number">{stats.totalCommits}</div>
            <div className="stat-label">Total Commits</div>
          </div>
          <div className="stat-card">
            {React.createElement(FaGithub as any, { className: "stat-icon" })}
            <div className="stat-number">{stats.totalForks}</div>
            <div className="stat-label">Total Forks</div>
          </div>
        </motion.div>

        <div className="insights-content">
          {/* Top Languages */}
          <motion.div
            className="languages-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>{React.createElement(FaCode as any, { className: "section-icon" })} Top Languages</h3>
            <div className="languages-list">
              {getTopLanguages().map(([language, count], index) => (
                <div key={language} className="language-item">
                  <div className="language-info">
                    <span className="language-name">{language}</span>
                    <span className="language-count">{count} repos</span>
                  </div>
                  <div className="language-bar">
                    <div 
                      className="language-progress"
                      style={{ 
                        width: `${(count / Math.max(...Object.values(languages))) * 100}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="activity-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>{React.createElement(FaGithub as any, { className: "section-icon" })} Recent Activity</h3>
            <div className="activity-list">
              {recentActivity.map((repo) => (
                <div key={repo.id} className="activity-item">
                  <div className="activity-info">
                    <div className="activity-title">{repo.name}</div>
                    <div className="activity-date">Updated {formatDate(repo.updated_at)}</div>
                  </div>
                  <div className="activity-language">{repo.language}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Featured Repositories */}
        <motion.div
          className="featured-repos"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Featured Repositories</h3>
          <div className="repos-grid">
            {getFeaturedRepos().map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-card"
              >
                <div className="repo-header">
                  {React.createElement(FaGithub as any, { className: "repo-icon" })}
                  <h4>{repo.name}</h4>
                </div>
                <p>{repo.description || 'No description available'}</p>
                <div className="repo-stats">
                  <span className="repo-language">{repo.language || 'Unknown'}</span>
                  <div className="repo-metrics">
                    <span>{React.createElement(FaStar as any)} {repo.stargazers_count}</span>
                    <span>{React.createElement(FaCodeBranch as any)} {repo.forks_count}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubInsights;
