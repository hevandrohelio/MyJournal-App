'use client'
export default function Home() {
  function navButton() {
    console.log("Teste");
    
  }
  return (
    <section>
      <div>
        <nav><button onClick={navButton} className="navButton">≡</button></nav>
      </div>
    </section>
  );
}
