export default function Footer() {
  const blocks = [
    { title: 'NEWS', links: [
      { text: '📰 Novinky', url: '#' },
      { text: '📢 Oznámení', url: '#' },
      { text: '🧾 Blog', url: '#' },
    ]},
    { title: 'WATCHAN', links: [
      { text: '📺 Stream', url: '#' },
      { text: '🎞️ Archiv', url: '#' },
      { text: '🕵️ Monitor', url: '#' },
    ]},
    { title: 'EMPTY', links: [
      { text: '📄 Prázdno', url: '#' },
      { text: '🚫 Nic', url: '#' },
      { text: '🌀 Ticho', url: '#' },
    ]}
  ];

  return (
    <footer className="footer-container">
      {blocks.map((block, index) => (
        <div key={index} className="footer-block">
          <pre className="footer-title">
{String.raw`╔════════════════════╗
║      ${block.title.padEnd(14)}║
╚════════════════════╝`}
          </pre>
          {block.links.map((link, i) => (
            <p key={i} className="footer-link">
              <a href={link.url}>{link.text}</a>
            </p>
          ))}
        </div>
      ))}
    </footer>
  );
}
