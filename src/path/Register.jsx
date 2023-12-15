import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ event, sessions, open }) {
     const [data, setData] = useState([]);
     const [Input, setInput] = useState([]);
     const [total, setTotal] = useState(0);
     const [isCheck, setIsCheck] = useState(true);
     const nav = useNavigate();
     const handleBuy = () => {
          alert("bạn đang ký thành công!");
          nav(-1);
     };
     const elTicket = useRef();
     const elSpan = useRef();

     useEffect(() => {
          if (elSpan.current) {
               elSpan.current.textContent = sessions
                    .filter((session) => Input.includes(session.id.toString()))
                    .reduce((acc, session) => acc + +session.cost, 0);
          }

          if (elTicket.current && event.tickets) {
               elTicket.current.textContent = event?.tickets
                    .filter((ticket) => data.includes(ticket.id.toString()))
                    .reduce((acc, ticket) => acc + +ticket.cost, 0);
          }
          setTotal(+elTicket.current.textContent + +elSpan.current.textContent);
     }, [Input, sessions, data, event, total]);

     console.log(sessions.filter((session) => Input.includes(session.id)));
     return (
          <div
               style={{
                    display: `${open ? "block" : "none"}`,
                    background: "#ccc",
                    position: "fixed",
                    zIndex: 1,
                    top: 10,
                    left: 500,
               }}
          >
               <h1>register</h1>
               <div
                    className="ticket"
                    style={{
                         display: "flex",
                         alignItems: "center",
                    }}
               >
                    {event.length == 0 ? (
                         <p>Loading...</p>
                    ) : (
                         event?.tickets.map((ticket) => {
                              {
                                   /* console.log(ticket); */
                              }
                              return (
                                   <div
                                        key={ticket.id}
                                        className={`ticket-item ${
                                             ticket.available ? "" : "disabled"
                                        }`}
                                        style={{
                                             border: "1px solid #000",
                                             width: "33%",
                                             padding: "20px",
                                        }}
                                   >
                                        {ticket.available ? (
                                             <input
                                                  type="checkbox"
                                                  value={ticket.id}
                                                  onChange={(e) => {
                                                       if (
                                                            !data.includes(
                                                                 e.target.value
                                                            )
                                                       ) {
                                                            setData([
                                                                 ...data,
                                                                 e.target.value,
                                                            ]);
                                                       } else {
                                                            setData(
                                                                 data.filter(
                                                                      (item) =>
                                                                           item !==
                                                                           e
                                                                                .target
                                                                                .value
                                                                 )
                                                            );
                                                       }
                                                  }}
                                             />
                                        ) : (
                                             <input
                                                  type="checkbox"
                                                  disabled={isCheck}
                                             />
                                        )}
                                        <span>{ticket.name}</span> {"  "}
                                        <span>{ticket.cost}.-</span>
                                   </div>
                              );
                         })
                    )}
               </div>
               <div>
                    <p>Lua chon them cac workshop ban muon dat: </p>
                    {sessions.map((sessions) => (
                         <div className="workshop" key={sessions.id}>
                              <input
                                   type="checkbox"
                                   value={sessions.id}
                                   onChange={(e) => {
                                        if (!Input.includes(e.target.value)) {
                                             setInput([
                                                  ...Input,
                                                  e.target.value,
                                             ]);
                                        } else {
                                             setInput(
                                                  Input.filter(
                                                       (item) =>
                                                            item !==
                                                            e.target.value
                                                  )
                                             );
                                        }
                                   }}
                              />{" "}
                              {sessions.title}
                         </div>
                    ))}
               </div>
               <div className="total">
                    <p>
                         ve su kien:{" "}
                         <span id="event-cost" ref={elTicket}>
                              .-
                         </span>
                    </p>
                    <p>
                         workshop bo sung:{" "}
                         <span id="event-cost" ref={elSpan}>
                              .-
                         </span>
                    </p>
                    <p>
                         tong :{" "}
                         <span id="event-cost">
                              {total}
                              .-
                         </span>
                    </p>
                    <button disabled={isCheck} onClick={handleBuy}>
                         Mua
                    </button>
               </div>
          </div>
     );
}
