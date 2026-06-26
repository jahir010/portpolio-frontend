'use client';

import React, { useState, useEffect, useRef } from 'react';
import { TitleBar } from '@components/TitleBar';
import { Sidebar } from '@components/Sidebar';
import { Terminal } from '@components/Terminal';
import { StatusBar } from '@components/StatusBar';
import { useCustomCursor, hiddenCursorElements } from '@lib/hooks';
import {
  renderBanner,
  renderAbout,
  renderHelp,
  renderLs,
  renderError,
  renderResumeDownload,
  createPromptLine,
  downloadResume,
} from '@lib/terminalContent';
import {
  portfolioData,
  skillsData,
  experienceData,
  projectsData,
  educationData,
  certificatesData,
  commands,
  systemInfo,
  fileStructure,
} from '@data/portfolioData';
import '@styles/globals.css';

export default function Home() {
  const { outerRef, innerRef } = useCustomCursor();
  const [currentSection, setCurrentSection] = useState('about');
  const [output, setOutput] = useState([]);

  useEffect(() => {
    hiddenCursorElements();
    // Initialize with welcome banner
    setOutput([
      ...renderBanner(),
      createPromptLine('cat about'),
      ...renderAbout(portfolioData),
    ]);
  }, []);

  const handleSectionClick = (section) => {
    setCurrentSection(section);
    handleCommand(`cat ${section}`);
  };

  const handleCommand = (cmd) => {
    const parts = cmd.trim().split(/\s+/);
    const base = parts[0].toLowerCase();
    const args = parts.slice(1);

    let newOutput = [];

    switch (base) {
      case 'help':
        newOutput = [...renderHelp(commands)];
        break;

      case 'ls':
        newOutput = [...renderLs(fileStructure)];
        break;

      case 'cat':
        if (args.length === 0) {
          newOutput = [
            createPromptLine(cmd),
            ...renderError('cat requires a filename.'),
          ];
        } else {
          const target = args[0].toLowerCase().replace('.py', '');
          const validSections = ['about', 'skills', 'experience', 'projects', 'education', 'certificates'];
          
          if (validSections.includes(target)) {
            newOutput = [createPromptLine(cmd)];
            setCurrentSection(target);
            
            switch (target) {
              case 'about':
                newOutput = [...newOutput, ...renderAbout(portfolioData)];
                break;
              case 'skills':
                newOutput = [...newOutput, ...renderSkills()];
                break;
              case 'experience':
                newOutput = [...newOutput, ...renderExperience()];
                break;
              case 'projects':
                newOutput = [...newOutput, ...renderProjects()];
                break;
              case 'education':
                newOutput = [...newOutput, ...renderEducation()];
                break;
              case 'certificates':
                newOutput = [...newOutput, ...renderCertificates()];
                break;
            }
          } else {
            newOutput = [
              createPromptLine(cmd),
              ...renderError(`"${args[0]}" not found.`),
            ];
          }
        }
        break;

      case 'resume':
        newOutput = [createPromptLine(cmd), ...renderResumeDownload()];
        downloadResume();
        break;

      case 'clear':
        newOutput = [];
        break;

      case 'whoami':
        newOutput = [
          createPromptLine(cmd),
          renderWhoami(),
        ].flat();
        break;

      case 'date':
        newOutput = [
          createPromptLine(cmd),
          { text: new Date().toString(), className: 'out-dim' },
          { text: '', className: '' },
        ];
        break;

      case 'pwd':
        newOutput = [
          createPromptLine(cmd),
          { text: '/home/jahirul/portfolio', className: 'out-green' },
          { text: '', className: '' },
        ];
        break;

      default:
        newOutput = [
          createPromptLine(cmd),
          { text: `<span class="out-red">Command not found: "${base}".</span>`, className: '' },
          { text: '<span class="out-dim">Type </span><span class="out-green">help</span><span class="out-dim"> for available commands.</span>', className: '' },
          { text: '', className: '' },
        ];
    }

    setOutput(newOutput);
  };

  const renderWhoami = () => [
    { text: '', className: '' },
    { text: '┌──────────────────────────────────────────┐', className: 'out-highlight' },
    { text: '│  <span class="out-bold">Md Jahirul Islam</span>                          │', className: 'out-highlight' },
    { text: '│  Python Backend Developer                │', className: 'out-highlight' },
    { text: '│  Dhaka, Bangladesh                       │', className: 'out-highlight' },
    { text: '│  jahirulislam92134@gmail.com             │', className: 'out-highlight' },
    { text: '│  500+ CP Problems Solved                 │', className: 'out-highlight' },
    { text: '│  1.5+ Years Experience                   │', className: 'out-highlight' },
    { text: '└──────────────────────────────────────────┘', className: 'out-highlight' },
    { text: '', className: '' },
  ];

  const renderSkills = () => {
    const lines = [
      { text: '', className: '' },
      { text: '╔══════════════════════════════════════════════════════════╗', className: 'out-cyan' },
      { text: '║  <span class="out-bold">⚙️ TECHNICAL SKILLS</span>                                        ║', className: 'out-cyan' },
      { text: '╚══════════════════════════════════════════════════════════╝', className: 'out-cyan' },
      { text: '', className: '' },
    ];

    skillsData.categories.forEach((cat) => {
      lines.push({ text: `<span class="out-highlight">▸ ${cat.name}:</span>`, className: '' });
      lines.push({ text: `  ${cat.items.join('  ·  ')}`, className: '' });
      lines.push({ text: '', className: '' });
    });

    return lines;
  };

  const renderExperience = () => {
    const lines = [
      { text: '', className: '' },
      { text: '╔══════════════════════════════════════════════════════════╗', className: 'out-cyan' },
      { text: '║  <span class="out-bold">💼 WORK EXPERIENCE</span>                                        ║', className: 'out-cyan' },
      { text: '╚══════════════════════════════════════════════════════════╝', className: 'out-cyan' },
      { text: '', className: '' },
    ];

    experienceData.experiences.forEach((exp) => {
      lines.push({
        text: `<span class="out-bold">▸ ${exp.position}</span>  <span class="out-dim">| ${exp.company} · ${exp.location}</span>`,
        className: '',
      });
      lines.push({ text: `  <span class="out-dim">📅 ${exp.startDate} – ${exp.endDate}</span>`, className: '' });
      exp.responsibilities.forEach((resp) => {
        lines.push({ text: `  ○ ${resp}`, className: '' });
      });
      lines.push({ text: '', className: '' });
    });

    return lines;
  };

  const renderProjects = () => {
    const lines = [
      { text: '', className: '' },
      { text: '╔══════════════════════════════════════════════════════════╗', className: 'out-cyan' },
      { text: '║  <span class="out-bold">📦 PROJECTS</span>                                               ║', className: 'out-cyan' },
      { text: '╚══════════════════════════════════════════════════════════╝', className: 'out-cyan' },
      { text: '', className: '' },
    ];

    projectsData.projects.forEach((project, idx) => {
      lines.push({
        text: `<span class="out-bold">${idx + 1}. ${project.name}</span>  <span class="out-dim">${project.date}</span>`,
        className: '',
      });
      lines.push({ text: `  <span class="out-blue">${project.tech}</span>`, className: '' });
      project.highlights.forEach((highlight) => {
        lines.push({ text: `  ○ ${highlight}`, className: '' });
      });
      lines.push({ text: `  <a href="${project.link}" target="_blank" class="term-link">🔗 View on GitHub</a>`, className: '' });
      lines.push({ text: '', className: '' });
    });

    return lines;
  };

  const renderEducation = () => {
    const lines = [
      { text: '', className: '' },
      { text: '╔══════════════════════════════════════════════════════════╗', className: 'out-cyan' },
      { text: '║  <span class="out-bold">🎓 EDUCATION</span>                                              ║', className: 'out-cyan' },
      { text: '╚══════════════════════════════════════════════════════════╝', className: 'out-cyan' },
      { text: '', className: '' },
    ];

    educationData.education.forEach((edu) => {
      lines.push({
        text: `<span class="out-bold">${edu.school}</span>  <span class="out-dim">· ${edu.location}</span>`,
        className: '',
      });
      lines.push({ text: `  ${edu.degree}  |  GPA: <span class="out-green">${edu.gpa}</span>`, className: '' });
      lines.push({ text: `  <span class="out-dim">📅 ${edu.startYear} – ${edu.endYear}</span>`, className: '' });
      lines.push({ text: '', className: '' });
    });

    return lines;
  };

  const renderCertificates = () => {
    const lines = [
      { text: '', className: '' },
      { text: '╔══════════════════════════════════════════════════════════╗', className: 'out-cyan' },
      { text: '║  <span class="out-bold">📜 CERTIFICATES</span>                                            ║', className: 'out-cyan' },
      { text: '╚══════════════════════════════════════════════════════════╝', className: 'out-cyan' },
      { text: '', className: '' },
    ];

    certificatesData.certificates.forEach((cert) => {
      lines.push({
        text: `<span class="out-orange">🏆 ${cert.title}</span>  <span class="out-dim">| ${cert.issuer}</span>`,
        className: '',
      });
      lines.push({
        text: `  ${cert.duration} · Completed ${cert.completedDate} · Certificate #${cert.certificateId}`,
        className: 'out-dim',
      });
      lines.push({ text: '', className: '' });
    });

    lines.push({ text: '╔══════════════════════════════════════════════════════════╗', className: 'out-purple' });
    lines.push({
      text: `║  <span class="out-bold">🏅 ${certificatesData.achievement.title}</span> solved on ${certificatesData.achievement.description}           ║`,
      className: 'out-purple',
    });
    lines.push({ text: '╚══════════════════════════════════════════════════════════╝', className: 'out-purple' });
    lines.push({ text: '', className: '' });

    return lines;
  };

  return (
    <>
      <div id="cursor-outer" ref={outerRef}></div>
      <div id="cursor-inner" ref={innerRef}></div>

      <div className="main-container">
        <TitleBar />
        <div className="body-layout">
          <Sidebar
            items={fileStructure}
            activeSection={currentSection}
            onItemClick={handleSectionClick}
            socialLinks={[
              { icon: 'github', url: 'https://github.com/jahir010' },
              { icon: 'linkedin-in', url: 'https://www.linkedin.com/in/jahirul-islam-5b448a245/' },
              { icon: 'envelope', url: 'mailto:jahirulislam92134@gmail.com' },
              { icon: 'phone-alt', url: 'tel:+8801521796083' },
            ]}
          />
          <Terminal initialContent={output} onCommand={handleCommand} />
        </div>
        <StatusBar systemInfo={systemInfo} />
      </div>
    </>
  );
}
