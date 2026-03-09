import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ContactSupport from "../pages/ContactSupport/ContactSupport";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import AccountDeletion from "../pages/AccountDeletionForm/DeleteForm";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <ProtectedRoute>
            <ContactSupport />
          </ProtectedRoute>
        ),
      },
      {
        path: "/privacy-policy",
        element: (
          <ProtectedRoute>
            <PrivacyPolicy />
          </ProtectedRoute>
        ),
      },
      {
        path: "/account-deletion-form",
        element: (
          <ProtectedRoute>
            <AccountDeletion />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
