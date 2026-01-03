import{Routes,Route}from "react-router-dom";
import Login from "./pages/Login.Jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.Jsx";
import CustomerDashboard from "./pages/customer/CustomerDashboard.Jsx";
import UpdateRestaurant from "./pages/admin/UpdateRestaurant";
import ProtectedRoute from "./routes/ProtectedRoute.Jsx";
function App(){
  return(
    <Routes>
      <Route path="/"element={<Login/>}/>
      <Route path="/admin/dashboard"element={<ProtectedRoute role="admin">
        <AdminDashboard />
      </ProtectedRoute>}/>
      <Route path="/admin/restaurant/update/:id"
      element={
        <ProtectedRoute role="admin">
          <UpdateRestaurant />
        </ProtectedRoute>
      }/>
      <Route path="/customer/dashboard"
      element={
        <ProtectedRoute role="customer">
          <CustomerDashboard />
        </ProtectedRoute>
      }/>
    </Routes>
  );
}
export default App;