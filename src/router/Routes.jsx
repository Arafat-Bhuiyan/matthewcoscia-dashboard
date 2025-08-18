import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ContactSupport from "../pages/ContactSupport/ContactSupport";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import AccountDeletion from "../pages/AccountDeletionForm/DeleteForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <ContactSupport />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/account-deletion-form",
        element: <AccountDeletion />,
      },
    ],
  },
]);

export default router;
