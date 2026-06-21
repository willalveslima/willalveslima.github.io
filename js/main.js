document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSkillBars();
    fetchGitHubRepos('willalveslima');
});

/**
 * Theme Management (Light / Dark Mode)
 */
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    // Check for saved theme preference, otherwise check system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let currentTheme = 'light';
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        currentTheme = 'dark';
    }

    // Apply initial theme
    setTheme(currentTheme);

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update toggle icon
    const themeIcon = document.querySelector('#theme-toggle i');
    if (themeIcon) {
        themeIcon.className = theme === 'dark' ? 'fa fa-sun-o' : 'fa fa-moon-o';
    }
}

/**
 * Animate Skill Bars on Page Load
 */
function initSkillBars() {
    const progressBars = document.querySelectorAll('.skill-progress-bar');
    // Set a tiny timeout to allow the transition to fire smoothly after layout render
    setTimeout(() => {
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            if (progress) {
                bar.style.width = progress + '%';
            }
        });
    }, 150);
}

/**
 * Fetch GitHub Repositories Dynamically & Render Securely
 */
const LANGUAGE_COLORS = {
    'JavaScript': '#f1e05a',
    'Python': '#3572A5',
    'Java': '#b07219',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'TypeScript': '#3178c6',
    'Shell': '#89e051',
    'Jupyter Notebook': '#DA5B0B'
};

async function fetchGitHubRepos(username) {
    const reposContainer = document.getElementById('github-repos-container');
    if (!reposContainer) return;

    try {
        // Fetch up to 100 repositories sorted by latest update
        // Using HTTPS as mandated by security skills
        const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) {
            throw new Error(`GitHub API returned status ${response.status}`);
        }

        const data = await response.json();
        
        // Filter out forks and draft/private repositories (GitHub API returns public anyway)
        // Sort descending by stars, then by update date
        const filteredRepos = data
            .filter(repo => !repo.fork && !repo.archived)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6); // Limit to top 6 repositories

        // Clear loading indicator safely
        reposContainer.replaceChildren();

        if (filteredRepos.length === 0) {
            const noReposMessage = document.createElement('p');
            noReposMessage.textContent = 'Nenhum repositório público encontrado.';
            noReposMessage.style.gridColumn = '1 / -1';
            noReposMessage.style.textAlign = 'center';
            reposContainer.appendChild(noReposMessage);
            return;
        }

        // Render repositories using secure DOM APIs to prevent XSS
        filteredRepos.forEach(repo => {
            const repoCard = document.createElement('a');
            repoCard.href = repo.html_url;
            repoCard.target = '_blank';
            repoCard.rel = 'noopener noreferrer';
            repoCard.classList.add('repo-card');

            // Header (Name & Icon)
            const headerDiv = document.createElement('div');
            
            const titleElement = document.createElement('h3');
            titleElement.classList.add('repo-name');
            
            const repoIcon = document.createElement('i');
            repoIcon.className = 'fa fa-folder-open-o';
            titleElement.appendChild(repoIcon);
            
            const nameText = document.createTextNode(repo.name);
            titleElement.appendChild(nameText);
            headerDiv.appendChild(titleElement);

            // Description
            const descElement = document.createElement('p');
            descElement.classList.add('repo-desc');
            descElement.textContent = repo.description || 'Sem descrição cadastrada no repositório.';
            headerDiv.appendChild(descElement);
            
            repoCard.appendChild(headerDiv);

            // Metadata Footer
            const metaDiv = document.createElement('div');
            metaDiv.classList.add('repo-meta');

            // Language
            const langSpan = document.createElement('span');
            langSpan.classList.add('repo-lang');
            if (repo.language) {
                const dot = document.createElement('span');
                dot.classList.add('lang-dot');
                dot.style.backgroundColor = LANGUAGE_COLORS[repo.language] || 'var(--accent-color)';
                langSpan.appendChild(dot);
                
                const langText = document.createTextNode(repo.language);
                langSpan.appendChild(langText);
            } else {
                langSpan.textContent = 'Desconhecido';
            }
            metaDiv.appendChild(langSpan);

            // Stats (Stars & Forks)
            const statsSpan = document.createElement('span');
            statsSpan.classList.add('repo-stats');

            // Stars
            const starItem = document.createElement('span');
            starItem.classList.add('repo-stat-item');
            const starIcon = document.createElement('i');
            starIcon.className = 'fa fa-star-o';
            starItem.appendChild(starIcon);
            const starText = document.createTextNode(` ${repo.stargazers_count}`);
            starItem.appendChild(starText);
            statsSpan.appendChild(starItem);

            // Forks
            if (repo.forks_count > 0) {
                const forkItem = document.createElement('span');
                forkItem.classList.add('repo-stat-item');
                const forkIcon = document.createElement('i');
                forkIcon.className = 'fa fa-code-fork';
                forkItem.appendChild(forkIcon);
                const forkText = document.createTextNode(` ${repo.forks_count}`);
                forkItem.appendChild(forkText);
                statsSpan.appendChild(forkItem);
            }

            metaDiv.appendChild(statsSpan);
            repoCard.appendChild(metaDiv);

            reposContainer.appendChild(repoCard);
        });

    } catch (error) {
        // Securely handle log: only print a non-sensitive message
        console.error('Erro ao obter repositórios do GitHub.');

        // Render beautiful fallback error state
        reposContainer.replaceChildren();

        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error-message');
        
        const errorIcon = document.createElement('i');
        errorIcon.className = 'fa fa-exclamation-triangle';
        errorDiv.appendChild(errorIcon);
        
        const errorText = document.createElement('p');
        errorText.textContent = 'Não foi possível carregar os repositórios dinamicamente.';
        errorDiv.appendChild(errorText);

        const githubLink = document.createElement('a');
        githubLink.href = `https://github.com/${encodeURIComponent(username)}`;
        githubLink.target = '_blank';
        githubLink.rel = 'noopener noreferrer';
        githubLink.classList.add('cta-btn');
        githubLink.style.marginTop = '1rem';
        
        const githubIcon = document.createElement('i');
        githubIcon.className = 'fa fa-github';
        githubLink.appendChild(githubIcon);
        
        const linkText = document.createTextNode('Ver Projetos no GitHub');
        githubLink.appendChild(linkText);
        
        errorDiv.appendChild(githubLink);
        reposContainer.appendChild(errorDiv);
    }
}
