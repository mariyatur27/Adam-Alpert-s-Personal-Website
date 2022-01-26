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
}