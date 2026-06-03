import resumeData from './resume.json';

// Inject header details
document.getElementById('name').textContent = resumeData.name;
document.getElementById('title').textContent = resumeData.title;
document.getElementById('summary').textContent = resumeData.summary;

// Configure navigation links
document.getElementById('link-email').href = `mailto:${resumeData.email}`;
document.getElementById('link-github').href = resumeData.github;
document.getElementById('link-linkedin').href = resumeData.linkedin;

// Render skill badges
const skillsContainer = document.getElementById('skills-list');
resumeData.skills.forEach(skill => {
    const badge = document.createElement('span');
    badge.className = 'skills-badge';
    badge.textContent = skill;
    skillsContainer.appendChild(badge);
});

// Render work experience entries
const experienceContainer = document.getElementById('experience-list');
resumeData.experience.forEach(job => {
    const jobDiv = document.createElement('div');
    jobDiv.className = 'job-entry';
    jobDiv.innerHTML = `
        <div class="job-header">
            <h3>${job.role} <span class="company-name">@ ${job.company}</span></h3>
            <span class="job-period">${job.period}</span>
        </div>
        <ul>
            ${job.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
        </ul>
    `;
    experienceContainer.appendChild(jobDiv);
});
