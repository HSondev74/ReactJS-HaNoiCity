import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Home = () => {
     const [eventCT, setEvent] = useState([]);
     useEffect(() => {
          fetch("http://localhost/BaiThi/public/api/v1/events")
               .then((res) => res.json())
               .then((data) => setEvent(data.events));
     }, []);

     return (
          <div className="home">
               <div
                    style={{ display: "flex", justifyContent: "space-between" }}
               >
                    <h1>Nen tang su kien</h1>

                    <nav>
                         <Link className="login-btn" to="/login">
                              Dang nhap
                         </Link>
                    </nav>
                    <section>
                         {eventCT.map((data) => {
                              var abc = { ...data.organizer };
                              return (
                                   <div key={data.id}>
                                        {data.name}
                                        <p>
                                             {abc[0].name}, ngay {data.date}
                                        </p>
                                   </div>
                              );
                         })}
                    </section>
               </div>
          </div>
     );
};

export default Home;
