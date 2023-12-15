import "../App.css";

export default function Error() {
     return (
          <>
               <div class="container">
                    <div class="heading">
                         <h1>Tiêu đề sự kiện</h1>
                         <button class="register">Đăng kí</button>
                    </div>
                    <div class="timeline">
                         <p>9:00</p>
                         <p>11:00</p>
                         <p>13:00</p>
                         <p>15:00</p>
                    </div>
                    <div class="content">
                         <div class="row">
                              <div class="channel">
                                   <h2>Kênh 1</h2>
                                   <div class="rooms">
                                        <div class="room">
                                             <p>Phòng 1</p>
                                             <p>Tiêu đề buổi thảo luận</p>
                                        </div>
                                        <div class="room">
                                             <p>Phòng 2</p>
                                             <p>Tiêu đề buổi đào tạo</p>
                                        </div>
                                   </div>
                              </div>
                              <div class="channel">
                                   <h2>Kênh 2</h2>
                                   <div class="rooms">
                                        <div class="room">
                                             <p>Phòng 3</p>
                                             <p>Tiêu đề buổi hội thảo</p>
                                        </div>
                                        <div class="room">
                                             <p>Phòng 4</p>
                                             <p>Tiêu đề buổi trao đổi</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
