const allNewsCategories = async () => {
    try {
        const url = 'https://openapi.programming-hero.com/api/news/categories';
        const res = await fetch(url);
        const data = await res.json();
        displayAllCategories(data.data.news_category);
    } catch (error) {
        console.log(error);
    }
};

const displayAllCategories = (categories) => {
    const categoryContainerUl = document.getElementById('category-ul-container');
    console.log(categories);
    categories.forEach(category => {
        // console.log(category);
        const categoryLi = document.createElement('li');
        const categoryLiAnchor = document.createElement('a');
        // color all news option at the first loading
        // if (category.category_name === 'All News') {
        //     categoryLi.classList.add('text-purple-600', 'bg-purple-100', 'rounded-xl');
        // }

        categoryLiAnchor.innerText = category.category_name;
        categoryLi.onclick = function () {
            // show a loading spinner in here
            showLoadingSpinner(true);
            // categoryLi.classList.remove('text-purple-600', 'bg-purple-100', 'rounded-xl');

            // if (category.category_id) {
            //     categoryLi.classList.add('text-purple-600', 'bg-purple-100', 'rounded-xl');
            // }
            fetchNewsByCategories(category.category_id, category.category_name);
        };
        categoryLi.appendChild(categoryLiAnchor);
        categoryContainerUl.appendChild(categoryLi);
    });
};

const showLoadingSpinner = boolean => {
    const loadingSpinnerDiv = document.getElementById('category-loading-spinner');
    if (boolean) {
        loadingSpinnerDiv.classList.remove('hidden');
    }
    else {
        loadingSpinnerDiv.classList.add('hidden');
    }
};

const fetchNewsByCategories = async (categoryID, categoryName) => {
    try {
        const categoryUrl = `https://openapi.programming-hero.com/api/news/category/${categoryID}`;

        const res = await fetch(categoryUrl);
        const data = await res.json();

        displayNewsByCategories(data.data, categoryName);
    } catch (error) {
        console.log(error);
    }

};

// news posts displayed on the newsPostsByCat js file

allNewsCategories();