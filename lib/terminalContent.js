import React from 'react';

// Helper functions to create terminal output lines
export const createLine = (text, className = '') => ({
  text,
  className,
});

export const createPromptLine = (cmd) =>
  createLine(
    `<span class="out-prompt">jahirul@portfolio:~$</span> <span class="out-cmd">${cmd}</span>`
  );

export const renderBanner = () => [
  createLine('', 'out-cyan'),
  createLine(
    '╔══════════════════════════════════════════════════════════════════╗',
    'out-cyan'
  ),
  createLine(
    '║                                                                  ║',
    'out-cyan'
  ),
  createLine(
    '║   ██╗ █████╗ ██╗  ██╗██╗██████╗ ██╗   ██╗██╗                     ║',
    'out-cyan'
  ),
  createLine(
    '║   ██║██╔══██╗██║  ██║██║██╔══██╗██║   ██║██║                     ║',
    'out-cyan'
  ),
  createLine(
    '║   ██║███████║███████║██║██████╔╝██║   ██║██║                     ║',
    'out-cyan'
  ),
  createLine(
    '║  ██╔╝██╔══██║██╔══██║██║██╔══██╗██║   ██║██║                     ║',
    'out-cyan'
  ),
  createLine(
    '║  ██╔╝██║  ██║██║  ██║██║██║  ██║╚██████╔╝███████╗                ║',
    'out-cyan'
  ),
  createLine(
    '║  ╚═╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝                ║',
    'out-cyan'
  ),
  createLine(
    '║                                                                  ║',
    'out-cyan'
  ),
  createLine(
    '║     <span class="out-bold">Md Jahirul Islam</span> — Python Backend Developer                  ║',
    'out-cyan'
  ),
  createLine(
    '║     Dhaka, Bangladesh · 500+ CP Solved · 6+ Products Delivered   ║',
    'out-cyan'
  ),
  createLine(
    '║                                                                  ║',
    'out-cyan'
  ),
  createLine(
    '╚══════════════════════════════════════════════════════════════════╝',
    'out-cyan'
  ),
  createLine('', ''),
  createLine(
    '<span class="out-dim">Type </span><span class="out-highlight">help</span><span class="out-dim"> to see available commands.</span>',
    ''
  ),
  createLine(
    '<span class="out-dim">Type </span><span class="out-highlight">ls</span><span class="out-dim"> to list all sections.</span>',
    ''
  ),
  createLine(
    '<span class="out-dim">Type </span><span class="out-highlight">cat about</span><span class="out-dim"> to learn about me.</span>',
    ''
  ),
  createLine('', ''),
  createLine(
    '<span class="out-green">● System ready.</span>  Kernel: Python 3.11 · PostgreSQL 16 · Redis 7 · FastAPI',
    'out-dim'
  ),
  createLine('', ''),
];

export const renderAbout = (data) => [
  createLine('', ''),
  createLine(
    '╔══════════════════════════════════════════════════════════╗',
    'out-cyan'
  ),
  createLine(
    '║  <span class="out-bold">👤 ABOUT ME</span>                                              ║',
    'out-cyan'
  ),
  createLine(
    '╚══════════════════════════════════════════════════════════╝',
    'out-cyan'
  ),
  createLine('', ''),
  createLine(
    '┌──────────────────────────────────────────────────────────┐',
    'out-dim'
  ),
  createLine(
    `│  <span class="out-bold">${data.name}</span>                                         │`,
    ''
  ),
  createLine(
    `│  <span class="out-cyan">${data.title}</span>                              │`,
    ''
  ),
  createLine(
    `│  📍 ${data.location}                                    │`,
    ''
  ),
  createLine(
    `│  📧 ${data.email}                          │`,
    ''
  ),
  createLine(
    `│  📞 ${data.phone}                                       │`,
    ''
  ),
  createLine(
    '│  <span class="out-green">● Available for opportunities</span>                           │',
    ''
  ),
  createLine(
    '└──────────────────────────────────────────────────────────┘',
    'out-dim'
  ),
  createLine('', ''),
  createLine(
    `I'm a passionate <span class="out-bold">Python Backend Developer</span> with <span class="out-highlight">1.5+ years</span> of professional`,
    ''
  ),
  createLine(
    'experience crafting production-grade APIs using <span class="out-blue">FastAPI</span> and <span class="out-blue">Django</span>.',
    ''
  ),
  createLine(
    'I\'ve delivered scalable backend systems across <span class="out-highlight">6+ client products</span> at a software',
    ''
  ),
  createLine('agency, integrating real-time features, payment gateways, and third-party services.', ''),
  createLine('', ''),
  createLine(
    '<span class="out-dim">📊 Stats:</span>  <span class="out-green">500+ CP Problems</span>  |  <span class="out-green">6+ Client Products</span>  |  <span class="out-green">1.5+ Years Exp</span>',
    ''
  ),
  createLine('', ''),
  createLine(
    '<span class="out-dim">💡 Type </span><span class="out-highlight">resume</span><span class="out-dim"> to download my resume.</span>',
    ''
  ),
  createLine(
    '<span class="out-dim">💡 Type </span><span class="out-highlight">ls</span><span class="out-dim"> to list all sections.</span>',
    ''
  ),
];

export const renderHelp = (commands) => [
  createLine('', ''),
  createLine(
    '╔══════════════════════════════════════════════════════════╗',
    'out-cyan'
  ),
  createLine(
    '║  <span class="out-bold">📋 AVAILABLE COMMANDS</span>                                      ║',
    'out-cyan'
  ),
  createLine(
    '╚══════════════════════════════════════════════════════════╝',
    'out-cyan'
  ),
  createLine('', ''),
  ...commands.map((cmd) =>
    createLine(
      `  <span class="out-green">${cmd.cmd}</span>${' '.repeat(Math.max(0, 15 - cmd.cmd.length))}  ${cmd.description}`,
      ''
    )
  ),
  createLine('', ''),
  createLine(
    '<span class="out-dim">💡 Tip: Use sidebar buttons or keyboard shortcuts 1-6 to navigate.</span>',
    ''
  ),
  createLine('', ''),
];

export const renderLs = (files) => [
  createLine('', ''),
  createLine('<span class="out-highlight">📁 portfolio/</span>', ''),
  ...files.map((file) =>
    createLine(
      `  📄 <span class="out-green">${file.name}</span>${' '.repeat(Math.max(0, 20 - file.name.length))}— ${file.label}`,
      ''
    )
  ),
  createLine('', ''),
  createLine(
    `<span class="out-dim">${files.length} files. Use </span><span class="out-green">cat &lt;filename&gt;</span><span class="out-dim"> to read.</span>`,
    ''
  ),
  createLine('', ''),
];

export const renderError = (message) => [
  createLine('', ''),
  createLine(`<span class="out-red">Error: ${message}</span>`, ''),
  createLine(
    '<span class="out-dim">Use </span><span class="out-green">ls</span><span class="out-dim"> to see available sections.</span>',
    ''
  ),
  createLine('', ''),
];

export const renderResumeDownload = () => [
  createLine('', ''),
  createLine('<span class="out-green">📄 Generating resume...</span>', ''),
  createLine('<span class="out-green">✅ Resume downloaded as Md_Jahirul_Islam_Resume.txt</span>', ''),
  createLine('', ''),
];

export const downloadResume = () => {
  const content = `MD JAHIRUL ISLAM
    Python Backend Developer
    Dhaka, Bangladesh | jahirulislam92134@gmail.com | +8801521796083
    GitHub: github.com/jahir010 | LinkedIn: linkedin.com/in/jahirul-islam-5b448a245

    SUMMARY
    Python backend developer with 1.5+ years of professional experience building production-grade APIs using FastAPI and Django. Delivered scalable backend systems across 6+ client products at a software agency, integrating real-time features, payment gateways, and third-party services. Strong foundation in data structures and algorithms with 500+ competitive programming problems solved.

    TECHNICAL SKILLS
    Languages: Python, SQL, C/C++
    Frameworks: FastAPI, Django, Tortoise ORM, Celery, WebSocket, Pydantic
    Databases: PostgreSQL, MySQL, SQLite, Redis
    DevOps: Docker, Git, GitHub Actions
    Integrations: Stripe, Razorpay, Cashfree, Firebase FCM, Google Translate API, Selenium, BeautifulSoup

    EXPERIENCE
    Python Backend Developer | Softvence Agency, Dhaka | Oct 2025 – Jun 2026
    Backend Developer | gradmate.ai, New York, USA (Remote) | Feb 2025 – Sept 2025

    PROJECTS
    Quikle | Pet Fence Marketplace | RealStory | Archicopro

    EDUCATION
    B.Sc. CSE | Manarat International University | CGPA: 3.42/4.00 | 2020–2024

    CERTIFICATES
    Data Scientist in Python | DataCamp | Nov 2024
    Associate Data Scientist in Python | DataCamp | Nov 2024
    500+ problems solved on Vjudge, Codeforces, CSES
    `;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Md_Jahirul_Islam_Resume.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
