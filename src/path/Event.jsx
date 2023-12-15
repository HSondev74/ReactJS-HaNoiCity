import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Register from "./Register";

export default function Event() {
     const { os, es } = useParams();
     console.log(os, es);
     const [event, setEvent] = useState([]);
     const [open, setOpen] = useState(false);
     useEffect(() => {
          fetch(
               `http://localhost/module_b/public/api/v1/organizers/${os}/events/${es}`
          )
               .then((res) => res.json())
               .then((detail) => setEvent(detail.events));
     }, []);

     const sessions = useMemo(() => {
          let output = [];
          event?.channels?.map((channel) =>
               channel?.rooms.map((room) =>
                    room.sessions.map((session) => {
                         output.push(session);
                    })
               )
          );

          return output.filter((session) => session.type === "workshop");
     }, [event]);
     const openModal = () => setOpen(!open);
     return (
          <>
               <div className="heading">
                    <h1>{event?.name}</h1>
                    <button className="register" onClick={openModal}>
                         Đăng kí sự kiện này
                    </button>
               </div>

               <div className="">
                    <div className="timeline">
                         <p>9:00</p>
                         <p>11:00</p>
                         <p>13:00</p>
                         <p>15:00</p>
                    </div>

                    <div className="content">
                         {event.channels?.map((channel) => (
                              <div className="row" key={channel.id}>
                                   <div className="channel">
                                        <h2>{channel.name}</h2>
                                   </div>
                                   <div>
                                        {channel.rooms.map((room) => (
                                             <div key={room.id}>
                                                  <p className="room">
                                                       {room.name}
                                                  </p>
                                                  <div className="session-row">
                                                       {room.sessions.map(
                                                            (session) => {
                                                                 return (
                                                                      <p
                                                                           className="session"
                                                                           key={
                                                                                session.id
                                                                           }
                                                                      >
                                                                           {
                                                                                session.title
                                                                           }
                                                                      </p>
                                                                 );
                                                            }
                                                       )}
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         ))}
                    </div>
                    <Register event={event} sessions={sessions} open={open} />
               </div>
          </>
     );
}
