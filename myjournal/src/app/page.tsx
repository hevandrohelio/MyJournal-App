'use client'
export default function Home() {
  function navButton() {
    console.log("NavButton");
    
  }
  function viewRoutines(){
    console.log("ViewRoutine")
  }
  function createRoutine(){
    console.log("CreateRoutine");
    
  }
  let date = new Date();
  return (
    <section>
      <div className="flex flex-row">
        <nav><button onClick={navButton} className="navButton bg-neutral-600 w-25 h-15 rounded-sm border-1 border-neutral-200 hover:bg-neutral-700">≡</button>
        <button onClick={viewRoutines} className="viewRoutinesButton h-15 w-50 bg-neutral-600 rounded-sm ml-10 border-1 border-neutral-200 hover:bg-neutral-700">Routine</button>
        <button onClick={createRoutine} className="createRoutineButton h-15 w-15 bg-neutral-600 rounded-sm ml-5 border-1 border-neutral-200 hover:bg-neutral-700">+</button></nav>
        <h1 className="text-center">{date.toLocaleString()}</h1>
      </div>
    </section>
  );
}
