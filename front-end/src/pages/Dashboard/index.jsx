
import { Outlet } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout";
import MenuSelection from "../../components/MenuSelection";
import Container from "../../components/ContainerContent";

export default function Dashboard() {
  const userData = localStorage.getItem("userData");
  const data = JSON.parse(userData);
  const name = data.user.name;

  // const {userData} = useContext(UserContext())

  return (
    <DashboardLayout>
      <MenuSelection name={name} />
      <Container>
        <Outlet />
      </Container>
    </DashboardLayout>
  );
}
