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
  }),
});

export const {
  useLoginMutation,
  useDashboardStatsQuery,
} = authApi;
