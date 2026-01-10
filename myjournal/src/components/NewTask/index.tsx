'use client'
import "./new-task.css"
export function NewTask() {
    return (
        <div className="border w-100 h-100 p-2">
            <div>
                <form action="">
                    <input type="text"className="text-[40px] w-95" placeholder="New Task"/>
                    <br />
                    <hr />
                    <label htmlFor="date" className="tasks_form_text">Date: </label>
                    <input type="date" name="" id="" className="input_text" />
                    <br />
                    <label htmlFor="time" className="tasks_form_text">Time: </label>
                    <input type="time" name="" id="" className="input_text" /> - <input type="time" name="" id="" className="input_text"></input>
                    <br />
                    <label htmlFor="repeat" className="tasks_form_text">Repeat</label>
                    <div>
                        <button type="button" className="weekday_r_btn">S</button>
                        <button type="button" className="weekday_r_btn">M</button>
                        <button type="button" className="weekday_r_btn">T</button>
                        <button type="button" className="weekday_r_btn">W</button>
                        <button type="button" className="weekday_r_btn">T</button>
                        <button type="button" className="weekday_r_btn">F</button>
                        <button type="button" className="weekday_r_btn">S</button>
                    </div>
                </form>
                <div>
                    <button className="rounded-full border w-20 h-10 m-3 hover:bg-rose-800">Discard</button>
                    <button className="rounded-full border w-20 h-10 hover:bg-neutral-500">Save</button>
                </div>
            </div>
        </div>
    )
}