import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // === LOGIN ===
    login: builder.mutation({
      query: (data) => ({
        url: "/accounts/signin/",
        method: "POST",
        body: data,
      }),
    }),
    // === Dashboard ===
    dashboardStats: builder.query({
      query: () => ({
        url: "/dashboard-stats/",
        method: "GET",
      }),
    }),
    // === Users List ===
    usersList: builder.query({
      query: () => ({
        url: "/accounts/users/",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
    // === User Detail ===
    userDetail: builder.query({
      query: (id) => ({
        url: `/accounts/users/${id}/`,
        method: "GET",
      }),
    }),
    // === Update User ===
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/accounts/users/${id}/update/`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
    // === Delete User ===
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/accounts/users/${id}/delete/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
    // === Update Terms & Conditions ===
    termsConditions: builder.mutation({
      query: (data) => ({
        url: "/cores/terms-conditions/update/",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
    // === Update Privacy Policy ===
    privacyPolicy: builder.mutation({
      query: (data) => ({
        url: "/cores/privacy-policy/update/",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useLoginMutation,
  useDashboardStatsQuery,
  useUsersListQuery,
  useUserDetailQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useTermsConditionsMutation,
  usePrivacyPolicyMutation,
} = authApi;
