import "./Level.css";
export default function Level({num}) {
  console.log(num)
  return (
    <div className="loading-wave title-icon">
        
      <div className="loading-bar" style={{background: 'var(--coquelicot)'}}></div>
      <div className="loading-bar" style={{background: (num === 2 || num === 3) &&'var(--coquelicot)'}}></div>
      <div className="loading-bar" style={{background: num === 3 &&'var(--coquelicot)'}}></div>
    </div>
  );
}
