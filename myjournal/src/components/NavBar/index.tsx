'use client'
export function NavBar() {
    function navButton() {
        console.log("NavButton");

    }
    function viewRoutines() {
        console.log("ViewRoutine")
    }
    function createRoutine() {
        console.log("CreateRoutine");

    }
    function openNotes() {
        console.log("Open notes");
    }
    let date = new Date();
    return (
        <section>
            {/* Navigation */}
            <div className="flex flex-row justify-between sticky top-0 z-50 bg-background">
                {/* Settings, routines and add routine */}
                <nav>
                    <button onClick={navButton} className="navButton bg-neutral-600 w-25 h-15 rounded-sm border-1 border-neutral-200 hover:bg-neutral-700">≡</button>
                    <button onClick={viewRoutines} className="viewRoutinesButton h-15 w-50 bg-neutral-600 rounded-sm ml-10 border-1 border-neutral-200 hover:bg-neutral-700">Routine</button>
                    <button onClick={createRoutine} className="createRoutineButton h-15 w-15 bg-neutral-600 rounded-sm ml-5 border-1 border-neutral-200 hover:bg-neutral-700">+</button>
                </nav>
                {/* This text show the actual date and time */}
                <h1 className="text-center text-[42px]">{date.toLocaleString(
                    'pt-BR',
                    {   hour: '2-digit',
                        minute: '2-digit',
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour12: false,
                    }
                )}</h1>
                {/* Notes and views */}
                <nav className="flex">
                    <button className="openNotesButton bg-neutral-600 w-35 h-15 rounded-sm border-1 border-neutral-200 hover:bg-neutral-700">Notes</button>
                    <div>
                        <button className="searchButton h-15 w-15 bg-neutral-600 rounded-tl-lg ml-10 border-1 border-neutral-200 hover:bg-neutral-700">S</button>
                        <button className="listTasksButton h-15 w-15 bg-neutral-600 border-1 border-neutral-200 hover:bg-neutral-700">L</button>
                        <button className="monthViewButton h-15 w-15 bg-neutral-600 border-1 border-neutral-200 hover:bg-neutral-700">M</button>
                        <button className="weekViewButton h-15 w-15 bg-neutral-600 border-1 border-neutral-200 hover:bg-neutral-700">W</button>
                        <button className="yearViewButton h-15 w-15 bg-neutral-600 rounded-tr-lg border-1 border-neutral-200 hover:bg-neutral-700">Y</button>
                    </div>
                </nav>
            </div>
        </section>
    )
}