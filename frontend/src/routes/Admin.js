import { Route, Routes} from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardNav from "../components/Dashboard/DashboardNav";
import Categories from '../pages/Categoties';
import User from "../pages/User";
import Products from "../components/Table/Products";
import CreateProductDetailForm from "../components/Form/CreateProduct";
import Warehouse from "../pages/Warehouse";
import UserSale from "../components/Table/UserSale";
import UserCustomer from "../components/Table/UserCustomer";
import Inventory from "../components/Form/Inventory";
import Profile from "../pages/Profile";
const Admin = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<DashboardNav />}>
            <Route path="" element={<Dashboard />}/>
            <Route path="categories" element={<Categories />}/>
            <Route path="users" element={<User />}/>
            <Route path="staffs" element={<UserSale />}/>
            <Route path="customers" element={<UserCustomer />}/>
            <Route path="products" element={<Products />}/>
            <Route path="add_product" element={<CreateProductDetailForm />}/>
            <Route path="inventory" element={<Inventory />}/>
            <Route path="warehouse" element={<Warehouse />}/>
            <Route path="profile" element={<Profile />}/>
        </Route>
    </Routes>
    </>
  );
};
export default Admin;
