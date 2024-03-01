import baseApi from "../../api/baseApi";

const courseCategoryApi = baseApi.injectEndpoints({
    getCategories: baseApi.query({
        query: () => ({
            url: "/api/courses/categories",
            method: "GET",
        }),
        providesTags: ["categories"],
    }),

    deleteCategory: baseApi.mutation({
        query: (categoryId) => ({
            url: `/api/courses/categories/${categoryId}`,
            method: "DELETE",
        }),
        invalidatesTags: ["categories"],
    }),
});

export const { useGetCategoriesQuery, useDeleteCategoryMutation } = courseCategoryApi;
