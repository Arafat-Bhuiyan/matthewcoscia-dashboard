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
    }),
  }),
});

export const {
  useLoginMutation,
  useDashboardStatsQuery,
  useUsersListQuery,
} = authApi;
