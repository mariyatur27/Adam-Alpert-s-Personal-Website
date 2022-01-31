var articles = [
    {
        "title" : "Pangea.app Launches To Help College Students Freelance",
        "publisher" : "Crunchbase News",
        "image" : "https://2utfff4d3dkt3biit53nsvep-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/craigslist_competitors.png",
        "description" : "Over the past 20 years, tuition rates have spiked by more than 150 percent. More students are pursuing their degrees, only to graduate with a staggering amount of debt, and getting a flexible college job to offset living costs while accruing that debt isn’t always easy. One Rhode Island-based startup is aiming to help students leverage their talents and interests to freelance in their communities.",
        "link": "https://news.crunchbase.com/news/pangea-app-launches-to-help-college-students-freelance/"
    },
    {
        "title" : "Rhode Island's Pangea.app selected for Y Combinator",
        "publisher" : "RHODEISLANDINNO",
        "image" : "https://media.bizj.us/view/img/11927404/pangea-house-2*900xx885-667-107-0.jpg",
        "description" : "Unbeknownst to most, the Providence-based startup Pangea.app has quietly been working its way through the same accelerator that has churned out unicorns like Stripe, Airbnb and Coinbase.",
        "link": "https://www.bizjournals.com/rhodeisland/inno/stories/news/2021/03/09/rhode-islands-pangea-app-selected-for-y-combinator.html"
    },
    {
        "title" : "Pangea.app raises $400K pre-seed round to help connect student workers with businesses",
        "publisher" : "Tech Crunch",
        "image" : "https://techcrunch.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-10-at-2.34.42-PM.png?w=1390&crop=1",
        "description" : "Pangea.app, a Providence, Rhode Island-based startup has raised a $400,000 pre-seed round, it told TechCrunch this week. The company’s new capital, raised as a post-money SAFE, comes from PJC, a Boston-based venture capital firm and Underdog Labs. Previously, Pangea.app raised money from angel investors.",
        "link": "https://techcrunch.com/2020/04/10/pangea-app-raises-400k-seed-round-to-help-connect-student-workers-with-businesses/"
    },
];

var portfolio = [
    {
        "work_name": "First Sample Work",
        "work_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum dapibus leo ac egestas. Fusce eget urna odio. Nullam et porta leo. Vestibulum in lobortis urna. Pellentesque rhoncus posuere leo, ut ornare est bibendum vitae. Maecenas fringilla risus vitae condimentum molestie. Nunc scelerisque eu odio sed facilisis. In vestibulum placerat erat, quis malesuada turpis.",
        "date": "2022-01-28",
        "link": "https://www.about.pangea.app/",
        "class": "professional",
        "thumbnail": "https://web-static.wrike.com/blog/content/uploads/2019/12/Why-is-Project-Management-an-Important-Skill-for-Managers-1-896x518.jpg?av=d09fe2e5cc91c1cd98cd986c43c0e666"
    },
    {
        "work_name": "Second Sample Work",
        "work_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum dapibus leo ac egestas. Fusce eget urna odio. Nullam et porta leo. Vestibulum in lobortis urna. Pellentesque rhoncus posuere leo, ut ornare est bibendum vitae. Maecenas fringilla risus vitae condimentum molestie. Nunc scelerisque eu odio sed facilisis. In vestibulum placerat erat, quis malesuada turpis.",
        "date": "2022-01-28",
        "link": "https://www.about.pangea.app/",
        "class": "personal",
        "thumbnail": "https://web-static.wrike.com/blog/content/uploads/2019/12/Why-is-Project-Management-an-Important-Skill-for-Managers-1-896x518.jpg?av=d09fe2e5cc91c1cd98cd986c43c0e666"
    },
    {
        "work_name": "Third Sample Work",
        "work_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum dapibus leo ac egestas. Fusce eget urna odio. Nullam et porta leo. Vestibulum in lobortis urna. Pellentesque rhoncus posuere leo, ut ornare est bibendum vitae. Maecenas fringilla risus vitae condimentum molestie. Nunc scelerisque eu odio sed facilisis. In vestibulum placerat erat, quis malesuada turpis.",
        "date": "2022-01-28",
        "link": "https://www.about.pangea.app/",
        "class": "professional",
        "thumbnail": "https://web-static.wrike.com/blog/content/uploads/2019/12/Why-is-Project-Management-an-Important-Skill-for-Managers-1-896x518.jpg?av=d09fe2e5cc91c1cd98cd986c43c0e666"
    }
];

var skills = [
    {
        "title" : "UI/UX DESIGN",
        "description": "To an English person, it will seem like simplified English,told me what",
        "icon_name": "bi-briefcase",
        "links" : [
            {"url" : "", "name": ""}
        ]
    },
    {
        "title" : "MOBILE APPS",
        "description": "To an English person, it will seem like simplified English,told me what",
        "icon_name": "bi-binoculars",
        "links" : [
            {"url" : "", "name": ""}
        ]
    },
    {
        "title" : "BRAND IDENTITY",
        "description": "To an English person, it will seem like simplified English,told me what",
        "icon_name": "bi-card-checklist",
        "links" : [
            {"url" : "", "name": ""}
        ]
    },
    {
        "title" : "WEB DESIGN",
        "description": "To an English person, it will seem like simplified English,told me what",
        "icon_name": "bi-bar-chart",
        "links" : [
            {"url" : "", "name": ""}
        ]
    },
    {
        "title" : "PHOTOGRAPHY",
        "description": "To an English person, it will seem like simplified English,told me what",
        "icon_name": "bi-calendar4-week",
        "links" : [
            {"url" : "", "name": ""}
        ]
    },
    {
        "title" : "ANALYTICS",
        "description": "To an English person, it will seem like simplified English,told me what",
        "icon_name": "bi-brightness-high",
        "links" : [
            {"url" : "", "name": ""}
        ]
    },
];

var dataFetched = false;

async function fetch_data() {
    if (window.location.protocol == "file:") {
        // For security reasons, scripts can't load files over the file: protocol
        // Just mark data as fetched, and return.
        console.log("Running from a file, won't attempt to get data from .json files");
        dataFetched = true;
        return;
    }
    // Get recipes from js/recipes.json
    articles = await (await fetch("js/articles.json")).json();
    portfolio = await (await fetch("js/portfolio.json")).json();
    skills = await (await fetch("js/skills.json")).json();
}