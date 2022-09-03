const displayNewsByCategories = (result, categoryName) => {
    const categoryItemsFound = document.getElementById('category-items-found');
    const newsCardContainer = document.getElementById('news-card-container');
    // console.log(result);

    //show the category name and total items found in html
    categoryItemsFound.innerText = `${result.length} items found for category ${categoryName}`;
    // To empty the earlier post news
    newsCardContainer.innerHTML = '';
    for (const post of result) {
        const divCard = document.createElement('div');
        divCard.classList.add('mb-5');
        // console.log(post);
        divCard.innerHTML = `
        <div class="grid grid-cols-12 gap-4 card lg:card-side bg-white shadow-xl p-6">
            <div class="bg-white col-span-12 sm:col-span-4 lg:col-span-4">
                <figure><img class="rounded-xl" src="${post.thumbnail_url}" alt="Album"></figure>
            </div>
            <div class="bg-white col-span-12 sm:col-span-8 lg:col-span-8">
                <div class="card-body">
                    <h2 class="card-title">${post.title}</h2>
                    <p class="text-gray-400 text-sm leading-8">${showPostDetailsByReducing(post.details)}</p>
                    <div class="card-actions">
                        <div class="stats shadow">

                            <div class="stat ">
                                <div class="stat-figure text-secondary">
                                    <div class="avatar">
                                        <div class="w-16 rounded-full">
                                            <img src="${post.author.img ? post.author.img : 'No picture'}" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-black">${post.author.name ? post.author.name : 'No author found'}</div>
                                    <div class="text-gray-400 text-sm">${post.author.published_date ? post.author.published_date : 'No date found'}</div>
                                </div>
                            </div>

                            <div class="stat">
                                <div class="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        class="inline-block w-8 h-8 stroke-current">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <div class="stat-title">Page Views</div>
                                <div class="stat-value text-secondary">${post.total_view ? post.total_view : 'No views'}</div>
                            </div>

                            <label for="my-modal-5">
                            <div class="stat" onclick="getSingleNewsDetails('${post._id}')">
                                <div class="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div class="stat-title">show</div>
                                <div class="stat-value">Full post</div>
                            </div>
                            </label>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        newsCardContainer.appendChild(divCard);
    }
}

const showPostDetailsByReducing = details => {
    const wordCount = details.length;
    if (wordCount > 600) {
        let reducedString = details.substr(0, 600);
        reducedString = reducedString + '<span class="text-black text-3xl">...</span>';
        return reducedString;
    }
    else return details;
};

async function getSingleNewsDetails(id) {
    const detailsUrl = `https://openapi.programming-hero.com/api/news/${id}`;
    const res = await fetch(detailsUrl);
    const data = await res.json();
    showNewsDetails(data.data[0]);
}

const showNewsDetails = data => {
    // console.log(data);
    const detailsTitle = document.getElementById('details-title');
    const detailsBody = document.getElementById('details-body');

    detailsTitle.innerText = data.title;
    detailsBody.innerHTML = `
    ${data.details} <br><br><br>
    Written by: <span class='font-bold'>${data.author.name ? data.author.name : 'No author found'}</span>
    on ${data.author.published_date ? data.author.published_date : 'No date found'}
    `;
};