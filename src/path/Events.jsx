import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Events() {
     const [data, setData] = useState([]);
     useEffect(() => {
          fetch("http://localhost/module_b/public/api/v1/events")
               .then((res) => res.json())
               .then((json) => setData(json.events));
     }, []);

     return (
          <>
               <div className="heading">
                    <h1>Nền tảng đặt sự kiện</h1>
                    <button className="login-">Đăng nhập</button>
               </div>
               <div className="content">
                    {data?.map((event) => {
                         return (
                              <Link
                                   key={event.id}
                                   className="event"
                                   to={`/organizers/${event.organizer.slug}/events/${event.slug}`}
                              >
                                   <h1>{event.name}</h1>
                                   <p>
                                        {event.organizer.name}, {event.date}
                                   </p>
                              </Link>
                         );
                    })}
               </div>
          </>
     );
}
