'use client'
export function WeekView() {
    /* Column */
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
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
        <section>

        </section>
    )
}