'use client'
export function WeekView() {
    /* Column */
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    /* Time from 00:00 to 23:30 */
    /* How this thing works:
    hour variable receive a 48 positions array. (_,i) -> (item value, index)
    h is the hours. Divided by 2 because I want the time divided into half-hour increments.
    m is the minutes. Check if "i" is even or odd. Even -> xx:00. Odd -> xx:30.
    String(h)-> "x"; String().padStart(2, '0') ->"0x"
     */
    /* Lines */
    const hours = Array.from({ length: 48 }, (_, i) => {
        const h = Math.floor(i / 2);
        const m = i % 2 === 0 ? '00' : '30';
        return `${String(h).padStart(2, '0')}:${m}`;
    });
    console.log(hours);

    return (
        <section className="mt-10">
            <div
                className="grid border"
                style={{
                    gridTemplateColumns: '80px repeat(7, 1fr)',
                    gridTemplateRows: `40px repeat(${hours.length}, 40px)`
                }}
            >
                {/* Header */}
                <div></div>
                {days.map(day => (
                    <div
                        key={day}
                        className="border text-center font-semibold flex items-center justify-center"
                    >
                        {day}
                    </div>
                ))}

                {/* Body */}
                {hours.map(hour => (
                    <>
                        {/* Hour column */}
                        <div
                            key={hour}
                            className="border text-right pr-2 text-sm flex items-center"
                        >
                            {hour}
                        </div>

                        {/* Day cells */}
                        {days.map(day => (
                            <div
                                key={`${day}-${hour}`}
                                className="border border-neutral-500 hover:bg-neutral-100 cursor-pointer"
                            />
                        ))}
                    </>
                ))}
            </div>

        </section>
    )
}