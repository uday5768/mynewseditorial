let imgs=[
    'https://static.toiimg.com/thumb/msid-98822930,imgsize-52888,width-800,height-600,resizemode-75/98822930.jpg',
    'https://m.cricbuzz.com/a/img/v1/300x200/i1/c268469/dc-came-up-with-an-all-round-dominant-show-to-dethrone-mi.jpg',
    'https://c.ndtvimg.com/2023-03/arndqmmo_mamata-banerjee-pti_625x300_02_March_23.jpg',
    'https://www.financialexpress.com/wp-content/uploads/2023/03/rs-2000-notes.jpg',
    'https://www.hindustantimes.com/ht-img/img/2023/03/21/550x309/xi_putin_1679370364993_1679370373121_1679370373121.jpeg',
];
export default function Leftbar(){
    return(
        <div>
            <div id="left-bar">
                <div id="left-bar-inner1">
                    <h3>TOP STORIES</h3>
                    <hr />
                </div>
                <div id="left-bar-inner2">
                    <div id="left-bar-inner2-left-bar">
                        <figure>
                            <a href="https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/ranveer-singh-led-baiju-bawra-not-happening-sanjay-leela-bhansali-switches-to-srk-and-salman-khan-with-new-ideas-exclusive/articleshow/98822985.cms?from=mdr" target="blank">
                                <figcaption>Ranveer Singh-led 'Baiju Bawra' NOT happening..</figcaption>
                                <img src={imgs[0]} alt="img" />
                            </a>   
                        </figure>
                         <hr />
                         <figure>
                             <a href="https://m.cricbuzz.com/cricket-news/126005/dominant-dc-dethrone-mi-to-top-spot" target="blank">
                                <figcaption>Dominant DC dethrone MI to top spot...</figcaption>
                                <img src={imgs[1]} alt="img" />
                             </a>   
                        </figure>
                         <hr />
                         <figure>
                             <a href="https://www.ndtv.com/india-news/bjp-wants-to-make-rahul-gandhi-a-hero-mamata-banerjee-rips-into-congress-3875149" target="blank">
                                <figcaption>"Rahul Gandhi Is PM Modi's Biggest TRP," Mamata...</figcaption>
                                <img src={imgs[2]} alt="img" />
                             </a>   
                        </figure>
                         <hr />
                         <figure>
                            <a href="https://www.financialexpress.com/money/why-are-banks-not-filling-atms-with-rs-2000-notes-fm-nirmala-sitharaman-replies/3017615/" target="blank">
                                <figcaption>Why are banks not filling ATMs with Rs 2000 notes...</figcaption>
                                <img src={imgs[3]} alt="img" />
                             </a>   
                        </figure>
                         <hr />
                         <figure>
                            <a href="https://www.hindustantimes.com/world-news/xi-jinping-tweaks-china-s-position-on-ukraine-war-goes-the-russia-way-101679370267718.html" target="blank">
                                <figcaption>Xi Jinping tweaks China’s position on Ukraine war...</figcaption>
                                <img src={imgs[4]} alt="img" />
                             </a>   
                        </figure>
                         <hr />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}