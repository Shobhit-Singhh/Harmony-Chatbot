const CalendarSection = () => {
    return (
        <div className="flex flex-col justify-center m-4">
            <div className="text-xl pb-2 flex items-center">
                <span>Calendar</span>
                <span className="ml-3">&#8594;</span>
            </div>
            <div className="flex justify-center">
                <img className="max-w-[500px] w-full" src="/assets/calendar.png" alt="calendar" />
            </div>
        </div>
    );
};

export default CalendarSection;
