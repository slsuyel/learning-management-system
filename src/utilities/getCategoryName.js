

export const getCategoryName = (categoryId, categoryData) => {
    const category = categoryData.find(cat => cat.id === categoryId);

    console.log(categoryData);

    return category ? category.name : 'Unknown Category';
};