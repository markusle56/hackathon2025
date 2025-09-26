export default function SessionCard() {
    const session = {
        title: "Title",
        description: "I'm working on WDC Practical 5. Really need some help atm.",
        icons : ["/img/users-round.svg", "/img/clock.svg"],
        people: 2,
        capacity: 4,
        start_time: "13:00",
        end_time: "16:00",
        tags: ["Computer Science", "WDC"]
    };
      
    const tag = session.tags.map(tag => <li key={tag}>{tag}</li>);
    
    return (
      <div className="max-w-3xs rounded-lg overflow-hidden border-solid border-black border-1 ">
        {/* <ImageCarousel/> */}

        <div className="px-6 py-4 pl-2">
          <div className="font-bold text-xl mb-2">{session.title}</div>
          <p className="text-gray-700 text-base">{session.description}</p>
        </div>
        <div className="pl-2">
          <span><img src="/img/users-round.svg" alt="users icon" className="inline-block mr-1"/></span>
          <span className="mr-4">{session.people}/{session.capacity}</span>
          <span><img src={session.icons[1]} alt="clock icon" className="inline-block mr-1"/></span>
          <span>{session.start_time} - {session.end_time}</span>
        </div>
        <div className="px-6 pt-4 pb-1 pl-2">
          {session.tags.map(tag => (
            <span
                key={tag}
                className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-light text-gray-700 mr-2 mb-1">
                {tag}
            </span>
         ))}
        </div>
        <div className="justify-center">
          <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md w-60 mb-2 mx-auto block cursor-pointer">
            Join this session
          </button>
        </div>
      </div>
  );
}