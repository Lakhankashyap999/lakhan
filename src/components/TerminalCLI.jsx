import React, { useState, useRef, useEffect } from 'react';

const TerminalCLI = ({ personal, skills, experience, projects }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '⚡ Welcome to Lakhan OS Terminal [v2.4.0]' },
    { type: 'system', text: 'Type "help" or click the quick pills below to explore.' }
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const runCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newEntry = { type: 'user', text: `$ ${cmd}` };
    let response = [];

    switch (trimmed) {
      case 'help':
        response = [
          { type: 'output', text: 'Available commands:' },
          { type: 'output', text: '  about        - View engineering background & philosophy' },
          { type: 'output', text: '  skills       - Print full engineering tech stack' },
          { type: 'output', text: '  experience   - View roles at Shankrai Pvt Ltd & Freelance' },
          { type: 'output', text: '  projects     - List flagship production builds' },
          { type: 'output', text: '  contact      - Get direct contact channels (Phone/Email)' },
          { type: 'output', text: '  hire         - Ready to make an offer? Initiate connection!' },
          { type: 'output', text: '  clear        - Clear terminal history' }
        ];
        break;
      case 'about':
        response = [
          { type: 'output', text: `👤 Name: ${personal.name}` },
          { type: 'output', text: `💼 Role: ${personal.role}` },
          { type: 'output', text: `📍 Location: ${personal.location}` },
          { type: 'output', text: `🎓 Education: MCA @ AKTU (2024-2026) | BCA @ CCSU` },
          { type: 'output', text: `💡 Bio: ${personal.about}` }
        ];
        break;
      case 'skills':
        response = [
          { type: 'output', text: '⚡ CORE TECH STACK:' },
          { type: 'output', text: '  Frontend : React.js, TypeScript, Redux Toolkit, Tailwind, React Query' },
          { type: 'output', text: '  Backend  : Node.js, Express.js, RESTful Architecture, WebSockets' },
          { type: 'output', text: '  Databases: MongoDB, PostgreSQL, Redis Caching, SQL' },
          { type: 'output', text: '  Cloud/Ops: AWS (EC2/S3), Docker, GitHub Actions, Linux CLI' }
        ];
        break;
      case 'experience':
        response = [
          { type: 'output', text: '🏢 WORK HISTORY:' },
          ...experience.map(e => ({
            type: 'output',
            text: `  • ${e.title} @ ${e.company} (${e.date}) - ${e.location}`
          }))
        ];
        break;
      case 'projects':
        response = [
          { type: 'output', text: '🚀 KEY PROJECTS:' },
          ...projects.map(p => ({
            type: 'output',
            text: `  • ${p.title} (${p.category}) - ${p.url || 'Internal'}`
          }))
        ];
        break;
      case 'contact':
        response = [
          { type: 'output', text: `📧 Email    : ${personal.email}` },
          { type: 'output', text: `📞 Phone    : ${personal.phone}` },
          { type: 'output', text: `💼 LinkedIn : ${personal.linkedin}` },
          { type: 'output', text: `🐙 GitHub   : ${personal.github}` }
        ];
        break;
      case 'hire':
        response = [
          { type: 'success', text: '🎉 Fantastic decision! Lakhan is available for Full-Time and contract roles.' },
          { type: 'success', text: `Directly drop an email to: ${personal.email} or call ${personal.phone}.` }
        ];
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        return;
      default:
        response = [
          { type: 'error', text: `Command not recognized: "${cmd}". Type "help" for a list of valid commands.` }
        ];
    }

    setHistory(prev => [...prev, newEntry, ...response]);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    runCommand(input);
  };

  return (
    <div className="terminal-cli-wrapper">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-title">
          <i className="fas fa-terminal"></i> lakhan@developer-console: ~
        </div>
        <div className="terminal-badge">LIVE REPL</div>
      </div>

      <div className="terminal-body">
        {history.map((line, idx) => (
          <div key={idx} className={`terminal-line ${line.type}`}>
            {line.text}
          </div>
        ))}
        <div ref={bottomRef} />

        <form onSubmit={handleSubmit} className="terminal-input-form">
          <span className="prompt-symbol">lakhan@sys:~$</span>
          <input
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type 'help', 'skills', 'hire'..."
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>

      <div className="terminal-quick-pills">
        <span className="pills-label">Quick Commands:</span>
        {['about', 'skills', 'projects', 'experience', 'contact', 'hire', 'clear'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            className="pill-btn"
            onClick={() => runCommand(cmd)}
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TerminalCLI;
