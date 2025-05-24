export default function Header() {
  return (
    <header style={{
      backgroundColor: 'black',
      color: 'lime',
      fontFamily: 'monospace',
      padding: '1rem',
      borderBottom: '2px solid lime',
      textAlign: 'center',
    }}>
      <pre style={{ margin: 0 }}>
{String.raw`╔════════════════════════════════════════════╗
║     BITTERMAN CHRONICLES TERMINAL v1.0      ║
╚════════════════════════════════════════════╝`}
      </pre>
    </header>
  );
}