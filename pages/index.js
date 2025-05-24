import stories from '../data/stories.json';
import Header from '../components/Header.jsx';

export default function Home() {
  return (
      <Header />
    <main style={{ backgroundColor: 'black', color: 'lime', fontFamily: 'monospace', minHeight: '100vh', padding: '2rem' }}>
      <h1>Bitterman Chronicles</h1>
      <h2>Příběhy z kryptosvěta</h2>
      {stories.map(story => (
        <div key={story.id} style={{ marginBottom: '2rem' }}>
          <h3>{story.title}</h3>
          <p><em>{story.date}</em></p>
          <p>{story.content}</p>
        </div>
      ))}
    </main>
  );
}
