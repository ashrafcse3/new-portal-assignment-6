const blogs = [
    {
        question: 'Difference between var, let, const?',
        asnwer: 'Firstly, var and let can be declared without initialization, but const cannot be initialized without declaring it. Var is function scoped, so if it is declared in the starting of a js page, it can access from anywhere that page. On the other hand, let and const is block scoped, so it can be accessed only from that mentioned block and block means {} curly braces. Thirdly, a var variable can be re declared, but let and const cannot be redeclared. Lastly, var and let variable values can be updated but const values are fixed, they cannot be updated.',
        image: 'images/var-let-const.png'
    },
    {
        question: 'Difference between arrow function and regular function?',
        asnwer: 'Firstly, if the arrow function contains only one expression then the curly braces and return statement can be omitted. On the other hand, a regular function always requires curly braces and the return statement if needed. Secondly, a regular function has an argument keyword which is used to get the parameters, but on the arrow function it is not available, although the rest operator can be used to do the same thing in the arrow function.',
        image: 'images/arrow-regular.png'
    },
    {
        question: 'Difference between Map, foreach, filter, find?',
        asnwer: 'Firstly, ForEach is used to loop through an array, and it simply runs a function through all of the elements of that array. Secondly, map function helps when all of the array elements need to change something else like making every array element multiply by two. Thirdly, filter function is used when you want to select a subset of multiple elements from an array. Finally, find function returns a single item and it will be the first matched item with your condition.',
        image: 'images/map-foreach.png'
    },
    {
        question: 'Why use template string?',
        asnwer: "Template string just works like the other single or double quotation string, but the main feature is that you can also add variables inside of that string without concatenation or doing something else. It's also used to output multiple lines in the html without giving a new line or break tag. Inside of the template string variables can be add, subtruct , divide or multiply with each other.",
        image: 'images/template-string.png'
    },
];

const blogCardContainer = document.getElementById('blog-card-container');
for (const blog of blogs) {
    const blogCard = document.createElement('div');
    blogCard.classList.add('mb-5');
    // console.log(post);
    blogCard.innerHTML = `
        <div class="grid grid-cols-12 gap-4 card lg:card-side bg-white shadow-xl p-6">
            <div class="bg-white col-span-12 sm:col-span-4 lg:col-span-4">
                <figure><img class="rounded-xl" src="${blog.image}" alt="Album"></figure>
            </div>
            <div class="bg-white col-span-12 sm:col-span-8 lg:col-span-8">
                <div class="card-body">
                    <h2 class="card-title text-3xl">${blog.question}</h2>
                    <p class="text-gray-400 text-md leading-8">${blog.asnwer}</p>
                </div>
            </div>
        </div>
    `;
    blogCardContainer.appendChild(blogCard);
}