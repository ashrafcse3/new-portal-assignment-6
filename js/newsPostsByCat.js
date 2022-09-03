const displayNewsByCategories = (result) => {
    const newsCardContainer = document.getElementById('news-card-container');
    for (const post of result) {
        const divCard = document.createElement('div');
        divCard.classList.add('mb-5');
        console.log(post);
        divCard.innerHTML = `
        <div class="grid grid-cols-12 gap-4 card lg:card-side bg-white shadow-xl p-6">
            <div class="bg-white col-span-12 sm:col-span-4 lg:col-span-4">
                <figure><img class="rounded-xl" src="${post.thumbnail_url}" alt="Album"></figure>
            </div>
            <div class="bg-white col-span-12 sm:col-span-8 lg:col-span-8">
                <div class="card-body">
                    <h2 class="card-title">${post.title}</h2>
                    <p class="text-gray-400 text-sm leading-8">${post.details}</p>
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

                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        newsCardContainer.appendChild(divCard);
    }
}