import { Container } from "react-bootstrap";
import { users } from "./data";
import AppointmentCount from "./components/AppointmentCount";
import AppointmentList from "./components/AppointmentList";
import AppointmentActions from "./components/AppointmentActions";
import { useEffect, useState } from "react";

function App() {

  const [userData,setUserData] = useState(users)

  useEffect(()=> {
   setUserData([])
  },[]);

  const onDelete = () => {
    setUserData([]);
    console.log(userData);
  }

  const onViewUser = () => {
    setUserData(users);
  }

  return (
    <div className="font my-3">
      
      <Container className="my-5">
         {/* start row Appointment Count */}
           <AppointmentCount users={userData}/>
         {/* end row Appointment Count */}

         {/* start row Appointment List */}
          <AppointmentList users={userData}/>
         {/* end row Appointment List */}

         {/* start row Appointment Button */}
          <AppointmentActions deletUsers={onDelete} viewUsers={onViewUser}/>
         {/* start row Appointment Button */}

      </Container>
    </div>
  );
}

export default App;
