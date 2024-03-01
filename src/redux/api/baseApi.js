import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://lms.tepriganjhighschool.edu.bd",
        credentials: "include",
    }),
    tagTypes: ["supply"],
    endpoints: () => ({}),
});

export default baseApi;
