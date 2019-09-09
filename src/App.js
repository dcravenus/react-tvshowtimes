import React from "react";
import logo from "./logo.svg";
import "./App.css";

// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const showsWrapperStyles = css`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  scroll-snap-type: x mandatory;
`;

const cardStyles = css`
  display: inline-block;
  border-style: solid 1px;
  width: 100vw;
  height: 100vh;
  background: moccasin;

  scroll-snap-align: start;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: 20px;
  }

  div.grid-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content;
    height: 100%;
  }

  div.text-wrapper {
    margin: 20px 20px 50px;
    text-align: left;
  }

  p.latest-episode-title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: calc(100vw - 40px);
  }
`;

const ShowCard = ({ showData }) => {
  const imgUrl = showData.image && showData.image.original;
  const previouseEpisode = (showData["_embedded"] && showData["_embedded"].previousepisode) || {};
  return (
    <div css={cardStyles}>
      <div className="grid-wrapper">
        <img src={imgUrl}></img>
        <div className="text-wrapper">
          <p>Latest Episode</p>
          <p className="latest-episode-title">
            {previouseEpisode.season}.{previouseEpisode.number} {previouseEpisode.name}
          </p>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [showInfo, setShowInfo] = React.useState({});
  const [shows, setShows] = React.useState([]);

  const fetchShow = async () => {
    const response = await fetch(
      "http://api.tvmaze.com/shows/318?embed[]=episodes&embed[]=nextepisode&embed[]=previousepisode"
    );
    if (response.ok) {
      // const data = await response.json();
      const data = {
        id: 318,
        url: "http://www.tvmaze.com/shows/318/community",
        name: "Community",
        type: "Scripted",
        language: "English",
        genres: ["Comedy"],
        status: "Ended",
        runtime: 30,
        premiered: "2009-09-17",
        officialSite: "http://www.nbc.com/community",
        schedule: { time: "", days: ["Tuesday"] },
        rating: { average: 8.2 },
        weight: 85,
        network: null,
        webChannel: {
          id: 5,
          name: "YAHOO! View",
          country: { name: "United States", code: "US", timezone: "America/New_York" }
        },
        externals: { tvrage: 22589, thetvdb: 94571, imdb: "tt1439629" },
        image: {
          medium: "http://static.tvmaze.com/uploads/images/medium_portrait/2/5134.jpg",
          original: "http://static.tvmaze.com/uploads/images/original_untouched/2/5134.jpg"
        },
        summary:
          "<p><b>Community </b>is a smart, exuberant comedy that is consistently ranked as one of the most inventive and original half-hours on television. This ensemble comedy centers around a tight-knit group of friends who all met at what is possibly the world's worst educational institution - Greendale Community College.</p>",
        updated: 1558256914,
        _links: {
          self: { href: "http://api.tvmaze.com/shows/318" },
          previousepisode: { href: "http://api.tvmaze.com/episodes/162188" }
        },
        _embedded: {
          episodes: [
            {
              id: 31189,
              url: "http://www.tvmaze.com/episodes/31189/community-1x01-pilot",
              name: "Pilot",
              season: 1,
              number: 1,
              airdate: "2009-09-17",
              airtime: "",
              airstamp: "2009-09-17T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494736.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494736.jpg"
              },
              summary:
                '<p>Community" is a new NBC comedy series about a band of misfits who attend Greendale Community College. At the center of the group is Jeff Winger, a fast-talking lawyer whose degree has been revoked. With some help from his fellow classmates, Winger forms a study group who eventually learn more about themselves than their course work. The study group consists of Pierce a man whose life experience has brought him infinite wisdom; Britta a 28-year old drop out with something to prove; Shirley a sassy middle-aged divorcée; Abed a pop culture junkie; Annie a high-strung perfectionist; Troy a former high school football star and Spanish professor, Senor Chang.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31189" } }
            },
            {
              id: 31190,
              url: "http://www.tvmaze.com/episodes/31190/community-1x02-spanish-101",
              name: "Spanish 101",
              season: 1,
              number: 2,
              airdate: "2009-09-24",
              airtime: "",
              airstamp: "2009-09-24T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494737.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494737.jpg"
              },
              summary:
                "<p>When Senor Chang assigns a project which requires the class to partner up in pairs of two, Jeff conspires to become Britta's partner. Much to Jeff's dismay, his valiant attempt backfires and he ends up with an unwelcome partner. Meanwhile, Shirley and Annie help Britta with her latest social justice cause.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31190" } }
            },
            {
              id: 31191,
              url: "http://www.tvmaze.com/episodes/31191/community-1x03-introduction-to-film",
              name: "Introduction to Film",
              season: 1,
              number: 3,
              airdate: "2009-10-01",
              airtime: "",
              airstamp: "2009-10-01T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494738.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494738.jpg"
              },
              summary:
                '<p>Jeff signs up for a class, taught by a "Carpe Diem" inspired Professor Whitman, thinking he can coast through and get an easy A. Jeff quickly discovers he\'ll need to put in much more effort than expected just to pass. Meanwhile, Britta helps Abed with his dream of studying film.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31191" } }
            },
            {
              id: 31192,
              url: "http://www.tvmaze.com/episodes/31192/community-1x04-social-psychology",
              name: "Social Psychology",
              season: 1,
              number: 4,
              airdate: "2009-10-08",
              airtime: "",
              airstamp: "2009-10-08T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494739.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494739.jpg"
              },
              summary:
                "<p>Jeff and Shirley bond by gossiping about Britta's new boyfriend. When Jeff tries to stop and be a good friend to Britta, he discovers that gossip is a difficult monster to escape. Meanwhile, Annie joins Professor Duncan's psychology research team and recruits Troy and Abed as test subjects.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31192" } }
            },
            {
              id: 31193,
              url: "http://www.tvmaze.com/episodes/31193/community-1x05-advanced-criminal-law",
              name: "Advanced Criminal Law",
              season: 1,
              number: 5,
              airdate: "2009-10-15",
              airtime: "",
              airstamp: "2009-10-15T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494740.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494740.jpg"
              },
              summary:
                "<p>Senor Chang is on the hunt for a cheater and threatens to fail the entire class if the culprit doesn't come forward. When someone confesses, Jeff comes to their defense. Meanwhile, Annie recruits Pierce to write the new school song.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31193" } }
            },
            {
              id: 31194,
              url: "http://www.tvmaze.com/episodes/31194/community-1x06-football-feminism-and-you",
              name: "Football, Feminism and You",
              season: 1,
              number: 6,
              airdate: "2009-10-22",
              airtime: "",
              airstamp: "2009-10-22T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494741.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494741.jpg"
              },
              summary:
                "<p>Jeff needs to convince Troy to join the school's football team in order to save his career. Just when he thinks he has Troy convinced, Annie steps in and throws a wrench in the plan. Meanwhile, Shirley teaches Britta the etiquette of girl talk.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31194" } }
            },
            {
              id: 31195,
              url: "http://www.tvmaze.com/episodes/31195/community-1x07-introduction-to-statistics",
              name: "Introduction to Statistics",
              season: 1,
              number: 7,
              airdate: "2009-10-29",
              airtime: "",
              airstamp: "2009-10-29T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494742.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494742.jpg"
              },
              summary:
                "<p>Jeff has the hots for his statistics professor and is determined to take her out on a date. He finds the perfect opportunity to pursue her but it happens to interfere with a Day of the Dead party Annie is throwing for their Spanish class. Meanwhile, Pierce comes to terms with being old.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31195" } }
            },
            {
              id: 31196,
              url: "http://www.tvmaze.com/episodes/31196/community-1x08-home-economics",
              name: "Home Economics",
              season: 1,
              number: 8,
              airdate: "2009-11-05",
              airtime: "",
              airstamp: "2009-11-05T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494743.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494743.jpg"
              },
              summary:
                "<p>When the gang finds out Jeff is living out of his car, they offer their help. Meanwhile, Annie helps Troy plan the perfect date for another girl and Pierce joins Vaughn's band.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31196" } }
            },
            {
              id: 31197,
              url: "http://www.tvmaze.com/episodes/31197/community-1x09-debate-109",
              name: "Debate 109",
              season: 1,
              number: 9,
              airdate: "2009-11-12",
              airtime: "",
              airstamp: "2009-11-12T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494744.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494744.jpg"
              },
              summary:
                "<p>Professor Whitman and Dean Pelton convince Jeff to join the debate team after Annie's partner drops out right before the championship debate versus City College. Jeff naturally assumes he has the win in the bag but an obnoxious debater from the opposing team proves him wrong. Meanwhile, Shirley freaks out when Abed's films seem to predict the future and Pierce uses hypnotherapy to help Britta give up smoking.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31197" } }
            },
            {
              id: 31198,
              url: "http://www.tvmaze.com/episodes/31198/community-1x10-environmental-science",
              name: "Environmental Science",
              season: 1,
              number: 10,
              airdate: "2009-11-19",
              airtime: "",
              airstamp: "2009-11-19T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494745.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494745.jpg"
              },
              summary:
                "<p>When Senor Chang assigns an absurd amount of homework to his Spanish class the gang nominates Jeff to talk some sense into him. Jeff begrudgingly agrees and the two strike up an unlikely friendship which backfires when the gang realizes Jeff is receiving perks that they aren't. Meanwhile, Troy and Abed run into their own problems when their biology lab subject goes missing.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31198" } }
            },
            {
              id: 31199,
              url:
                "http://www.tvmaze.com/episodes/31199/community-1x11-the-politics-of-human-sexuality",
              name: "The Politics of Human Sexuality",
              season: 1,
              number: 11,
              airdate: "2009-12-03",
              airtime: "",
              airstamp: "2009-12-03T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494746.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494746.jpg"
              },
              summary:
                "<p>After a challenge from Britta, Jeff must find a girl for a double date with Pierce and his new girlfriend. Meanwhile, Britta and Shirley help Annie get an anatomical education for a presentation she must give at a special health fair for the school.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31199" } }
            },
            {
              id: 31200,
              url: "http://www.tvmaze.com/episodes/31200/community-1x12-comparative-religion",
              name: "Comparative Religion",
              season: 1,
              number: 12,
              airdate: "2009-12-10",
              airtime: "",
              airstamp: "2009-12-10T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494747.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494747.jpg"
              },
              summary:
                "<p>Shirley throws a Christmas party for the gang and much to her surprise learns her classmates come from various religious backgrounds. Meanwhile, Jeff is challenged by the school bully and faces the reality that he may fail Spanish 101.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31200" } }
            },
            {
              id: 31201,
              url: "http://www.tvmaze.com/episodes/31201/community-1x13-investigative-journalism",
              name: "Investigative Journalism",
              season: 1,
              number: 13,
              airdate: "2010-01-14",
              airtime: "",
              airstamp: "2010-01-14T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494748.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494748.jpg"
              },
              summary:
                "<p>The gang reunites after winter break and much to their surprise there's a new addition. One of their fellow classmates is eager to join their study group and the gang must decide whether or not this particular individual is worthy. Meanwhile, Jeff signs on as editor of the Greendale Gazette Journal.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31201" } }
            },
            {
              id: 31202,
              url: "http://www.tvmaze.com/episodes/31202/community-1x14-interpretive-dance",
              name: "Interpretive Dance",
              season: 1,
              number: 14,
              airdate: "2010-01-21",
              airtime: "",
              airstamp: "2010-01-21T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494749.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494749.jpg"
              },
              summary:
                "<p>The gang discovers that Jeff has a new girlfriend but he is determined to keep his affair a secret. Meanwhile, Troy and Britta have secrets of their own and decide to share it with their friends.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31202" } }
            },
            {
              id: 31203,
              url: "http://www.tvmaze.com/episodes/31203/community-1x15-romantic-expressionism",
              name: "Romantic Expressionism",
              season: 1,
              number: 15,
              airdate: "2010-02-04",
              airtime: "",
              airstamp: "2010-02-04T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494750.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494750.jpg"
              },
              summary:
                "<p>Jeff and Britta take an interest in Annie's love life when they discover she's interested in Vaughn. Elsewhere, Pierce struggles to fit in during Troy and Abed's movie night.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31203" } }
            },
            {
              id: 31204,
              url: "http://www.tvmaze.com/episodes/31204/community-1x16-communication-studies",
              name: "Communication Studies",
              season: 1,
              number: 16,
              airdate: "2010-02-11",
              airtime: "",
              airstamp: "2010-02-11T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494751.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494751.jpg"
              },
              summary:
                "<p>Jeff sets out to fix his relationship with Britta after things get awkward with a drunken phone call. Meanwhile, Annie and Shirley make plans to humiliate Senor Chang in order to defend Troy and Pierce's dignity.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31204" } }
            },
            {
              id: 31205,
              url: "http://www.tvmaze.com/episodes/31205/community-1x17-physical-education",
              name: "Physical Education",
              season: 1,
              number: 17,
              airdate: "2010-03-04",
              airtime: "",
              airstamp: "2010-03-04T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494752.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494752.jpg"
              },
              summary:
                "<p>Jeff is excited to show off his pool skills in his new billiards class, only to have his will tested when shorts, not designer jeans, are the required uniform to play. Meanwhile, the gang focuses on helping Abed woo a potential mate by bringing out different sides of his personality.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31205" } }
            },
            {
              id: 31206,
              url: "http://www.tvmaze.com/episodes/31206/community-1x18-basic-genealogy",
              name: "Basic Genealogy",
              season: 1,
              number: 18,
              airdate: "2010-03-11",
              airtime: "",
              airstamp: "2010-03-11T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494753.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494753.jpg"
              },
              summary:
                "<p>It's Family Day at Greendale Community College and the gang's families come to campus to join in the fun. Meanwhile, Jeff agrees to help Pierce connect with his stepdaughter Amber. Things take an interesting twist when Amber shows an interest in Jeff.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31206" } }
            },
            {
              id: 31207,
              url: "http://www.tvmaze.com/episodes/31207/community-1x19-beginner-pottery",
              name: "Beginner Pottery",
              season: 1,
              number: 19,
              airdate: "2010-03-18",
              airtime: "",
              airstamp: "2010-03-18T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494754.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494754.jpg"
              },
              summary:
                "<p>Jeff unexpectedly takes interest in his new pottery class when another student shows natural talent. Meanwhile, Pierce brings Britta, Shirley and Troy along for a ride at his boating class.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31207" } }
            },
            {
              id: 31208,
              url: "http://www.tvmaze.com/episodes/31208/community-1x20-the-science-of-illusion",
              name: "The Science of Illusion",
              season: 1,
              number: 20,
              airdate: "2010-03-25",
              airtime: "",
              airstamp: "2010-03-25T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494755.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494755.jpg"
              },
              summary:
                "<p>Pierce is willing to do and wear whatever it takes to reach a new level of ascension in his Buddhist church. Meanwhile, Britta secretly tries to shake her reputation as a buzzkill, resulting in a prank gone horribly wrong. Britta's misguided attempt at levity forces new campus security officers Annie and Shirley to investigate the crime.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31208" } }
            },
            {
              id: 31209,
              url:
                "http://www.tvmaze.com/episodes/31209/community-1x21-contemporary-american-poultry",
              name: "Contemporary American Poultry",
              season: 1,
              number: 21,
              airdate: "2010-04-22",
              airtime: "",
              airstamp: "2010-04-22T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494756.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494756.jpg"
              },
              summary:
                "<p>Jeff and Troy take on the chicken finger shortage that has a gripped Greendale Community College. Witnessing this show of activism by her fellow students causes Britta to struggle with the unsatisfactory number of causes she currently supports.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31209" } }
            },
            {
              id: 31210,
              url: "http://www.tvmaze.com/episodes/31210/community-1x22-the-art-of-discourse",
              name: "The Art of Discourse",
              season: 1,
              number: 22,
              airdate: "2010-04-29",
              airtime: "",
              airstamp: "2010-04-29T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494757.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494757.jpg"
              },
              summary:
                "<p>After Pierce crosses a line with Shirley, the group is forced to choose between the two. Meanwhile, Jeff and Britta face off against a group of young bullies, and their mother. Troy and Abed embark on a college bucket list of things they must accomplish before they graduate.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31210" } }
            },
            {
              id: 31211,
              url: "http://www.tvmaze.com/episodes/31211/community-1x23-modern-warfare",
              name: "Modern Warfare",
              season: 1,
              number: 23,
              airdate: "2010-05-06",
              airtime: "",
              airstamp: "2010-05-06T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494758.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494758.jpg"
              },
              summary:
                "<p>The sexual tension between Jeff and Britta becomes a hot topic among the study group. Meanwhile, what starts out as a simple contest for a chance at early class registration turns the peaceful campus of Greendale Community College into an all-out war zone. Friendships are tested, as only one student can be victorious.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31211" } }
            },
            {
              id: 31212,
              url:
                "http://www.tvmaze.com/episodes/31212/community-1x24-english-as-a-second-language",
              name: "English as a Second Language",
              season: 1,
              number: 24,
              airdate: "2010-05-13",
              airtime: "",
              airstamp: "2010-05-13T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494759.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494759.jpg"
              },
              summary:
                "<p>After the shocking discovery that Senor Chang does not have a teaching degree, Greendale Community College is forced to bring in a new Spanish teacher. Meanwhile, Troy discovers a trade he truly excels in -- plumbing.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31212" } }
            },
            {
              id: 31213,
              url: "http://www.tvmaze.com/episodes/31213/community-1x25-pascals-triangle-revisited",
              name: "Pascal's Triangle Revisited",
              season: 1,
              number: 25,
              airdate: "2010-05-20",
              airtime: "",
              airstamp: "2010-05-20T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494760.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494760.jpg"
              },
              summary:
                "<p>In the first season finale, jealousy runs rampant at Greendale as Britta and Professor Slater fight for the affection of Jeff. Meanwhile, Troy is confused when his best friend, Abed, doesn't invite him to move into his dorm room.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31213" } }
            },
            {
              id: 31214,
              url: "http://www.tvmaze.com/episodes/31214/community-2x01-anthropology-101",
              name: "Anthropology 101",
              season: 2,
              number: 1,
              airdate: "2010-09-23",
              airtime: "",
              airstamp: "2010-09-23T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494761.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494761.jpg"
              },
              summary:
                '<p>As classes resume at Greendale Community College for the fall, the "Community" study group gathers to tackle this year\'s big class, "Anthropology 101. " Television icon and multiple Emmy Award-winner Betty White guest stars as the esteemed, but slightly unhinged anthropology professor, June Bauer. Jeff Winger, struggles to establish decorum with Britta and Annie amidst the confusion that ensued at the season finale\'s "Transfer Dance," when Britta professed her love for Jeff and Jeff later shared a secret kiss with Annie. Meanwhile, Senor Chang decides to enroll as a student at Greendale Community College so that he too, can join the study group.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31214" } }
            },
            {
              id: 31215,
              url: "http://www.tvmaze.com/episodes/31215/community-2x02-accounting-for-lawyers",
              name: "Accounting for Lawyers",
              season: 2,
              number: 2,
              airdate: "2010-09-30",
              airtime: "",
              airstamp: "2010-09-30T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494762.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494762.jpg"
              },
              summary:
                '<p>When Jeff Winger runs into his former law firm colleague Alan Connor, the two re-connect and Jeff finds himself returning to some of his evil ways of late night partying and expensive suits. Alan takes Jeff to a law firm event to see his former boss, Ted, and the study group shows up to "rescue" him. While Annie, Abed and Troy sneak into the offices to gather dirt on Alan, Jeff watches in horror as Pierce, Britta and Shirley are corrupted by the lawyers.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31215" } }
            },
            {
              id: 31216,
              url:
                "http://www.tvmaze.com/episodes/31216/community-2x03-the-psychology-of-letting-go",
              name: "The Psychology of Letting Go",
              season: 2,
              number: 3,
              airdate: "2010-10-07",
              airtime: "",
              airstamp: "2010-10-07T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494763.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494763.jpg"
              },
              summary:
                "<p>Pierce deals with the death of his mother and the group comes together to comfort him in his time of need. Professor Duncan struggles to take over the anthropology class with no training, as Professor Bauer takes an unexpected leave of absence after her classroom hijinks put Jeff Winger in the hospital.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31216" } }
            },
            {
              id: 31217,
              url: "http://www.tvmaze.com/episodes/31217/community-2x04-basic-rocket-science",
              name: "Basic Rocket Science",
              season: 2,
              number: 4,
              airdate: "2010-10-14",
              airtime: "",
              airstamp: "2010-10-14T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494764.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494764.jpg"
              },
              summary:
                '<p>Dean Pelton decides that Greendale Community College must have its own flight simulator and cannot be bested by the competition, "City College," which is planning its own flight simulator. He enlists the study group to clean and refurbish the Greendale Community College simulator. As Jeff, Pierce, Britta, Annie, Shirley and Troy wash the tattered simulator down, they end up accidentally launching it - sending everyone on an unexpected journey into "outer space." Abed is left behind to try and navigate a safe "return" for everyone.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31217" } }
            },
            {
              id: 31218,
              url:
                "http://www.tvmaze.com/episodes/31218/community-2x05-messianic-myths-and-ancient-peoples",
              name: "Messianic Myths and Ancient Peoples",
              season: 2,
              number: 5,
              airdate: "2010-10-21",
              airtime: "",
              airstamp: "2010-10-21T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494765.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494765.jpg"
              },
              summary:
                "<p>Shirley gets inspired to create a religious film and asks Abed for his creative input only to discover that he wants to make one of his own. Meanwhile, Pierce comes to terms with being the oldest member of the group and is recruited by another set of students his own age.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31218" } }
            },
            {
              id: 31219,
              url: "http://www.tvmaze.com/episodes/31219/community-2x06-epidemiology",
              name: "Epidemiology",
              season: 2,
              number: 6,
              airdate: "2010-10-28",
              airtime: "",
              airstamp: "2010-10-28T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494766.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494766.jpg"
              },
              summary:
                "<p>Pierce and a few other Greendale students ingest a biohazard substance at the school Halloween Party, causing them to exhibit flu-like symptoms and begin turning into zombies. It is up to the rest of the gang to save themselves and the school when Dean Pelton locks them in with the zombie-infected student body.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31219" } }
            },
            {
              id: 31220,
              url: "http://www.tvmaze.com/episodes/31220/community-2x07-aerodynamics-of-gender",
              name: "Aerodynamics of Gender",
              season: 2,
              number: 7,
              airdate: "2010-11-04",
              airtime: "",
              airstamp: "2010-11-04T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494767.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494767.jpg"
              },
              summary:
                '<p>After a classroom smackdown with a group of "mean girls" led by Meghan, Britta, Shirley, and Annie bond with Abed by turning him into the ultimate "mean girl." Meanwhile, Jeff and Troy embrace a zen-like spirituality under the guidance of a groundskeeper when they come across a secret trampoline on campus. Determined to uncover the source of their new bliss, Pierce ends up taking a disastrous turn on the trampoline and lands in the hospital.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31220" } }
            },
            {
              id: 31221,
              url: "http://www.tvmaze.com/episodes/31221/community-2x08-cooperative-calligraphy",
              name: "Cooperative Calligraphy",
              season: 2,
              number: 8,
              airdate: "2010-11-11",
              airtime: "",
              airstamp: "2010-11-11T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494768.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494768.jpg"
              },
              summary:
                "<p>When Annie's pen goes missing, she suspects a member of her own study group is the thief. On a mission to find the pen and solve the mystery, the group takes a self-imposed lockdown and Jeff takes the lead in conducting the search. Meanwhile, Troy and Abed are itching to get out of the study room to make it to the Greendale Puppy Parade taking place in the quad.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31221" } }
            },
            {
              id: 31222,
              url:
                "http://www.tvmaze.com/episodes/31222/community-2x09-conspiracy-theories-and-interior-design",
              name: "Conspiracy Theories and Interior Design",
              season: 2,
              number: 9,
              airdate: "2010-11-18",
              airtime: "",
              airstamp: "2010-11-18T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494769.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494769.jpg"
              },
              summary:
                '<p>When Dean Pelton begins checking class schedules, he discovers that Jeff has listed a class that doesn\'t exist. Just when it appears Jeff will be caught in a lie, the mysterious "Professor Professorson" emerges from the shadows to confirm that Jeff has been taking his class, "Conspiracy Theories in U.S. History," at night school. When Jeff later admits to Annie that he\'s never seen Professor Professorson in his life, the two decide to find out who the professor really is. Meanwhile, Abed and Troy are busy building the most elaborate blanket fort that Greendale Community College has ever seen.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31222" } }
            },
            {
              id: 31223,
              url: "http://www.tvmaze.com/episodes/31223/community-2x10-mixology-certification",
              name: "Mixology Certification",
              season: 2,
              number: 10,
              airdate: "2010-12-02",
              airtime: "",
              airstamp: "2010-12-02T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494770.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494770.jpg"
              },
              summary:
                "<p>When the study group convenes to celebrate Troy's birthday, they realize he is actually turning 21 and decide to hit the bars! While Jeff and Britta ingest a few too many cocktails and get silly, Shirley gets busy pulling down incriminating photos of herself that are posted at the bar. Annie embraces the identify on her fake ID, while Abed delves into conversation with a fellow sci-fi nerd. </p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31223" } }
            },
            {
              id: 31224,
              url:
                "http://www.tvmaze.com/episodes/31224/community-2x11-abeds-uncontrollable-christmas",
              name: "Abed's Uncontrollable Christmas",
              season: 2,
              number: 11,
              airdate: "2010-12-09",
              airtime: "",
              airstamp: "2010-12-09T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494771.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494771.jpg"
              },
              summary:
                "<p>When Abed wakes up in stop-motion animation, he takes it as a sign that he and the group must re-discover the meaning of Christmas. Meanwhile, Jeff and Britta become growingly concerned about Abed's mental health and enlist the help of Professor Duncan. The group undergoes hypnosis to explore Abed's winter wonderland and soon unravel the truth behind Abed's madness.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31224" } }
            },
            {
              id: 31225,
              url: "http://www.tvmaze.com/episodes/31225/community-2x12-asian-population-studies",
              name: "Asian Population Studies",
              season: 2,
              number: 12,
              airdate: "2011-01-20",
              airtime: "",
              airstamp: "2011-01-20T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494772.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494772.jpg"
              },
              summary:
                '<p>Annie returns from spring break to find that her crush "Rich", the Dr., has enrolled at Greendale Community College, sparking a heated debate about whether to add Rich and/or Senor Chang to the study group. Shirley\'s ex-husband Andre is back in the picture and Shirley has some big news for everyone.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31225" } }
            },
            {
              id: 31226,
              url: "http://www.tvmaze.com/episodes/31226/community-2x13-celebrity-pharmacology",
              name: "Celebrity Pharmacology",
              season: 2,
              number: 13,
              airdate: "2011-01-27",
              airtime: "",
              airstamp: "2011-01-27T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494774.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494774.jpg"
              },
              summary:
                "<p>When Annie decides to stage a production at a local middle school to spread an important message about staying away from drugs, Pierce becomes overwhelmed with the excitement of performing and decides he needs a bigger role. When his over-the-top behavior threatens to ruin the production, Senor Chang comes to the rescue, earning admiration from the group.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31226" } }
            },
            {
              id: 31227,
              url: "http://www.tvmaze.com/episodes/31227/community-2x14-advanced-dungeons-dragons",
              name: "Advanced Dungeons & Dragons",
              season: 2,
              number: 14,
              airdate: "2011-02-03",
              airtime: "",
              airstamp: "2011-02-03T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494775.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494775.jpg"
              },
              summary:
                '<p>When Jeff becomes concerned about "Fat Neil," a fellow Greendale student who is a bit of a loner, Abed proposes that they invite him to play a game of Dungeons and Dragons to boost his spirits and his confidence. But when Pierce discovers that he\'s been excluded, he forces his way into the game and takes charge, disrupting their delicate plan.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31227" } }
            },
            {
              id: 31228,
              url:
                "http://www.tvmaze.com/episodes/31228/community-2x15-early-21st-century-romanticism",
              name: "Early 21st Century Romanticism",
              season: 2,
              number: 15,
              airdate: "2011-02-10",
              airtime: "",
              airstamp: "2011-02-10T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494777.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494777.jpg"
              },
              summary:
                "<p>Troy and Abed compete for the attentions of the college librarian, while Britta strives to be progressive and befriends a fellow female student whom she believes is gay. Meanwhile, Jeff finds himself reluctantly hosting an impromptu party at his apartment when Professor Duncan invites himself over to watch a soccer match.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31228" } }
            },
            {
              id: 31229,
              url:
                "http://www.tvmaze.com/episodes/31229/community-2x16-intermediate-documentary-filmmaking",
              name: "Intermediate Documentary Filmmaking",
              season: 2,
              number: 16,
              airdate: "2011-02-17",
              airtime: "",
              airstamp: "2011-02-17T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494778.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494778.jpg"
              },
              summary:
                '<p>Pierce ends up in the hospital after ingesting mysterious pills and believes he\'s dying. The study group gathers at his bedside as he imparts his "final" words of wisdom and shares specially chosen gifts - which are secretly meant to torment them. Britta struggles over what to do with her blank check for "charity," Jeff contemplates the possibility of meeting his long lost dad and Troy meets his idol LeVar Burton.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31229" } }
            },
            {
              id: 31230,
              url: "http://www.tvmaze.com/episodes/31230/community-2x17-intro-to-political-science",
              name: "Intro to Political Science",
              season: 2,
              number: 17,
              airdate: "2011-02-24",
              airtime: "",
              airstamp: "2011-02-24T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494779.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494779.jpg"
              },
              summary:
                "<p>As the school prepares for the Vice President's visit, Dean Pelton organizes the first student elections. Annie, who is determined to win, is pitted in a tough battle against Jeff, Leonard and Star Burns. Meanwhile, Abed has noticed the secret service agents casing the school and develops a clandestine friendship with special agent Robin Vohlers.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31230" } }
            },
            {
              id: 31231,
              url:
                "http://www.tvmaze.com/episodes/31231/community-2x18-custody-law-and-eastern-european-diplomacy",
              name: "Custody Law and Eastern European Diplomacy",
              season: 2,
              number: 18,
              airdate: "2011-03-17",
              airtime: "",
              airstamp: "2011-03-17T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494780.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494780.jpg"
              },
              summary:
                "<p>Annie organizes a baby shower for Shirley, while Shirley plots to keep Senor Chang out of her life. Meanwhile, Britta has a mysterious new love interest named Lukka, whose classroom poetry soon reveals a dark past.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31231" } }
            },
            {
              id: 31232,
              url: "http://www.tvmaze.com/episodes/31232/community-2x19-critical-film-studies",
              name: "Critical Film Studies",
              season: 2,
              number: 19,
              airdate: "2011-03-24",
              airtime: "",
              airstamp: "2011-03-24T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494781.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494781.jpg"
              },
              summary:
                "<p>Capitalizing on Abed's love of cinema and pop culture, Jeff plans a very special Pulp Fiction style surprise party for Abed's birthday. The tables turn, however, and while the study group awaits their arrival at a restaurant, Abed stages another dinner with an unsuspecting Jeff at another restaurant.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31232" } }
            },
            {
              id: 31233,
              url: "http://www.tvmaze.com/episodes/31233/community-2x20-competitive-wine-tasting",
              name: "Competitive Wine Tasting",
              season: 2,
              number: 20,
              airdate: "2011-04-14",
              airtime: "",
              airstamp: "2011-04-14T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494782.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494782.jpg"
              },
              summary:
                '<p>As everyone settles on their spring semester electives, Troy and Britta explore the fundamentals of acting, while Abed tackles an advanced study of 1980s sitcom "Who\'s The Boss?" with a professor who has written a book on the topic. Meanwhile, Pierce and Jeff enjoy a wine tasting class, where Pierce meets "Wu Mei" a mysterious Chinese woman who sweeps Pierce off his feet. Suspicious, Jeff vows to find out what\'d going on with Wu Mei and why she would agree to marry Pierce so quickly.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31233" } }
            },
            {
              id: 31234,
              url: "http://www.tvmaze.com/episodes/31234/community-2x21-paradigms-of-human-memory",
              name: "Paradigms of Human Memory",
              season: 2,
              number: 21,
              airdate: "2011-04-21",
              airtime: "",
              airstamp: "2011-04-21T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494788.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494788.jpg"
              },
              summary:
                "<p>As the study group gathers to assemble their 20th and final Anthropology diorama of the year, they begin reminiscing about their favorite times together - including a trip they made to a western ghost town, a last minute glee club performance, the clandestine trysts that Jeff and Britta have pulled off and the cornucopia of costumes that Dean Pelton has managed to wear over the year. Meanwhile, Troy's pet monkey returns, only to disappear back into the school's ventilation system. On the case, Senor Chang quickly dives in to retrieve the monkey - along with all the loot he has stolen.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31234" } }
            },
            {
              id: 31235,
              url:
                "http://www.tvmaze.com/episodes/31235/community-2x22-applied-anthropology-and-culinary-arts",
              name: "Applied Anthropology and Culinary Arts",
              season: 2,
              number: 22,
              airdate: "2011-04-28",
              airtime: "",
              airstamp: "2011-04-28T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494789.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494789.jpg"
              },
              summary:
                '<p>When the Anthropology class assembles for their final exam, Shirley notices a twinge, which quickly escalates into full-blown labor. As Jeff and Britta argue about how best to help, Chang is anxious to claim this "early" labor as clear evidence that it\'s a "Chang Baby!" Meanwhile, Greendale is hosting a World Food Festival in the parking lot and a riot ensues - Dean Pelton is caught in the crossfire.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31235" } }
            },
            {
              id: 31236,
              url: "http://www.tvmaze.com/episodes/31236/community-2x23-a-fistful-of-paintballs",
              name: "A Fistful of Paintballs",
              season: 2,
              number: 23,
              airdate: "2011-05-05",
              airtime: "",
              airstamp: "2011-05-05T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494790.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494790.jpg"
              },
              summary:
                "<p>As the Greendale student body enjoys their year-end picnic, Dean Pelton announces plans for a small, quick, safe game of paintball. As the game heats up, alliances are formed - and broken - and friendships are put to the test. When a mysterious and threatening figure emerges on the Greendale campus, it becomes apparent that this is no ordinary game of paintball.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31236" } }
            },
            {
              id: 31237,
              url: "http://www.tvmaze.com/episodes/31237/community-2x24-for-a-few-paintballs-more",
              name: "For a Few Paintballs More",
              season: 2,
              number: 24,
              airdate: "2011-05-12",
              airtime: "",
              airstamp: "2011-05-12T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494791.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494791.jpg"
              },
              summary:
                "<p>As the Greendale year-end paintball extravaganza continues, the game takes a dramatic turn with new intruders arriving on the scene. The study group battles it out on various fronts and despite their arguments over strategy - they are all in agreement that they must unite to defeat the enemy.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31237" } }
            },
            {
              id: 31238,
              url: "http://www.tvmaze.com/episodes/31238/community-3x01-biology-101",
              name: "Biology 101",
              season: 3,
              number: 1,
              airdate: "2011-09-22",
              airtime: "",
              airstamp: "2011-09-22T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494796.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494796.jpg"
              },
              summary:
                '<p>As the Greendale study group gathers in the library, they wonder whether they will see their old friend Pierce, who left the study group in a huff after last spring\'s paintball game. Jeff quickly butts heads with their new biology teacher Professor Kane and is kicked out of class - leading to a crisis within the group about whether they will all stay together. Dean Pelton is feeling empowered after a summer at "Dean Camp" but finds a new nemesis in Vice Dean Laybourne, dean of the highly regarded Air Conditioning Repair Annex at Greendale.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31238" } }
            },
            {
              id: 31239,
              url:
                "http://www.tvmaze.com/episodes/31239/community-3x02-geography-of-global-conflict",
              name: "Geography of Global Conflict",
              season: 3,
              number: 2,
              airdate: "2011-09-29",
              airtime: "",
              airstamp: "2011-09-29T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494797.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494797.jpg"
              },
              summary:
                '<p>As Chang settles into his new job as a campus security officer, Britta is overwhelmed with feelings of civil disobedience when a friend is taken hostage in a foreign country. Meanwhile, Annie enlists the study group to help her defeat her new "friend" Annie Kim in a Model United Nations competition, while Professor Cligoris struggles to maintain decorum.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31239" } }
            },
            {
              id: 31240,
              url: "http://www.tvmaze.com/episodes/31240/community-3x03-competitive-ecology",
              name: "Competitive Ecology",
              season: 3,
              number: 3,
              airdate: "2011-10-06",
              airtime: "",
              airstamp: "2011-10-06T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494798.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494798.jpg"
              },
              summary:
                "<p>As the study group sets to work on their first big assignment in biology - a terrarium - they are driven to distraction over how they should pair off to do their project. Elsewhere on campus, Chang patrols the school grounds looking for signs of trouble and imagines himself in a noir detective mystery.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31240" } }
            },
            {
              id: 31241,
              url: "http://www.tvmaze.com/episodes/31241/community-3x04-remedial-chaos-theory",
              name: "Remedial Chaos Theory",
              season: 3,
              number: 4,
              airdate: "2011-10-13",
              airtime: "",
              airstamp: "2011-10-13T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494799.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494799.jpg"
              },
              summary:
                "<p>When Troy and Abed decide to share an apartment, they host a party for the group, which takes on an altered reality as several scenarios play out.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31241" } }
            },
            {
              id: 31242,
              url:
                "http://www.tvmaze.com/episodes/31242/community-3x05-horror-fiction-in-seven-spooky-steps",
              name: "Horror Fiction in Seven Spooky Steps",
              season: 3,
              number: 5,
              airdate: "2011-10-27",
              airtime: "",
              airstamp: "2011-10-27T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494800.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494800.jpg"
              },
              summary:
                "<p>When Britta runs anonymous personality tests on everyone for a psychology class, one of the test results seems to indicate that someone in the group is deeply disturbed. At the group's Halloween pre-party, she enlists Jeff to help draw out the potential sociopath and the two of them lure everyone into telling their favorite horror stories. The results are spookey.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31242" } }
            },
            {
              id: 31243,
              url: "http://www.tvmaze.com/episodes/31243/community-3x06-advanced-gay",
              name: "Advanced Gay",
              season: 3,
              number: 6,
              airdate: "2011-11-03",
              airtime: "",
              airstamp: "2011-11-03T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494801.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494801.jpg"
              },
              summary:
                "<p>When Pierce learns that he and his Hawthorne wipes have become extremely popular, he decides to throw a big party - until his overbearing father, Cornelius Hawthorne shows up and puts the kibosh on the plans. Meanwhile, Troy finds himself being courted by Vice Dean Laybourne and his secretive Air Conditioning Repair Annex, as well as Greendale's resident janitor, Jerry.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31243" } }
            },
            {
              id: 31244,
              url: "http://www.tvmaze.com/episodes/31244/community-3x07-studies-in-modern-movement",
              name: "Studies in Modern Movement",
              season: 3,
              number: 7,
              airdate: "2011-11-10",
              airtime: "",
              airstamp: "2011-11-10T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494802.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494802.jpg"
              },
              summary:
                "<p>The study group pitches in to help when Annie decides to move in with Troy and Abed, but the plan breaks down when she becomes frustrated by their fun-loving lifestyle. Elsewhere, Dean Pelton discovers Jeff at the mall and blackmails him into spending a lovely afternoon together.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31244" } }
            },
            {
              id: 31245,
              url:
                "http://www.tvmaze.com/episodes/31245/community-3x08-documentary-filmmaking-redux",
              name: "Documentary Filmmaking: Redux",
              season: 3,
              number: 8,
              airdate: "2011-11-17",
              airtime: "",
              airstamp: "2011-11-17T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494803.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494803.jpg"
              },
              summary:
                "<p>When the school board asks Dean Pelton to make a new commercial for the school, he enlists the study group to star in his production. As he gets swept away with the project, more of the student body is pulled into the fray, including Magnitude, Fat Neil, Garrett, Leonard, Star-Burns and even Greendale alum and genuine celebrity, Luis Guzman. Meanwhile, Abed films all the activities for a documentary.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31245" } }
            },
            {
              id: 31246,
              url:
                "http://www.tvmaze.com/episodes/31246/community-3x09-foosball-and-nocturnal-vigilantism",
              name: "Foosball and Nocturnal Vigilantism",
              season: 3,
              number: 9,
              airdate: "2011-12-01",
              airtime: "",
              airstamp: "2011-12-01T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494804.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494804.jpg"
              },
              summary:
                '<p>When a group of arrogant students commandeer the foosball table at school, Jeff and Shirley unite to defeat them. Meanwhile, Annie accidentally breaks Abed\'s new limited edition "Dark Knight" DVD and claims that someone broke into the apartment and stole it. Things snowball out of control when Abed thinks he knows who took the DVD and sets about getting it back.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31246" } }
            },
            {
              id: 31247,
              url: "http://www.tvmaze.com/episodes/31247/community-3x10-regional-holiday-music",
              name: "Regional Holiday Music",
              season: 3,
              number: 10,
              airdate: "2011-12-08",
              airtime: "",
              airstamp: "2011-12-08T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494805.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494805.jpg"
              },
              summary:
                "<p>When the Greendale Glee Club is unexpectedly sidelined, the school's effervescent choir director Cory Radison sets about recruiting the study group members to fill in. Skeptical at first, they eventually fall under his hypnotic spell - one-by-one - singing and dancing their way to the annual Christmas Pageant.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31247" } }
            },
            {
              id: 31248,
              url:
                "http://www.tvmaze.com/episodes/31248/community-3x11-urban-matrimony-and-the-sandwich-arts",
              name: "Urban Matrimony and the Sandwich Arts",
              season: 3,
              number: 11,
              airdate: "2012-03-15",
              airtime: "",
              airstamp: "2012-03-15T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494806.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494806.jpg"
              },
              summary:
                '<p>Proposes that he and Shirley remarry and a wedding date is set. Britta and Annie get busy planning the wedding and Jeff prepares to give a wedding speech - while Troy and Abed get ready to be "normal" for the occasion. Meanwhile, Pierce and Shirley pitch a sandwich shop idea to Dean Pelton for the Greendale cafeteria.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31248" } }
            },
            {
              id: 31249,
              url:
                "http://www.tvmaze.com/episodes/31249/community-3x12-contemporary-impressionists",
              name: "Contemporary Impressionists",
              season: 3,
              number: 12,
              airdate: "2012-03-22",
              airtime: "",
              airstamp: "2012-03-22T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494807.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494807.jpg"
              },
              summary:
                "<p>As the study group returns after winter break, Jeff reveals that he's been seeing a shrink and he's on anti-anxiety medication. The newfound confidence leads him to experience debilitating levels of narcissism, which Britta tries to help him manage. Meanwhile, over the break, Abed developed a celebrity impersonator habit that has saddled him with debt. In order to help Abed shed his debt, the study group dons costumes and goes to work for Vincent as celebrity impersonators - appearing in character at a Bar Mitzvah celebration.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31249" } }
            },
            {
              id: 31250,
              url:
                "http://www.tvmaze.com/episodes/31250/community-3x13-digital-exploration-of-interior-design",
              name: "Digital Exploration of Interior Design",
              season: 3,
              number: 13,
              airdate: "2012-03-29",
              airtime: "",
              airstamp: "2012-03-29T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494808.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494808.jpg"
              },
              summary:
                "<p>As the new Greendale Subway shop opens in the cafeteria, Shirley, Pierce and Britta plot to bring about its early demise. Vice Dean Laybourne makes another attempt to get Troy to join the Air Conditioning Repair Annex, while Abed and Troy find themselves at odds over their competing pillow and blanket forts..</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31250" } }
            },
            {
              id: 31251,
              url: "http://www.tvmaze.com/episodes/31251/community-3x14-pillows-and-blankets",
              name: "Pillows and Blankets",
              season: 3,
              number: 14,
              airdate: "2012-04-05",
              airtime: "",
              airstamp: "2012-04-05T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494809.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494809.jpg"
              },
              summary:
                "<p>What started as a casual disagreement about blankets and pillows blossoms into all-our war on the Greendale campus. While insults are hurled and the study group chooses sides, Jeff tries desperately to negotiate a truce, but with neither Abed nor Troy budging on their principles or their real estate, the future looks grim for the former best friends..</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31251" } }
            },
            {
              id: 31252,
              url:
                "http://www.tvmaze.com/episodes/31252/community-3x15-origins-of-vampire-mythology",
              name: "Origins of Vampire Mythology",
              season: 3,
              number: 15,
              airdate: "2012-04-12",
              airtime: "",
              airstamp: "2012-04-12T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494810.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494810.jpg"
              },
              summary:
                '<p>When Britta\'s old flame "Blade" returns to town with the traveling carnival, she confesses to the group that she needs their help to stay away from him. While Annie, Troy and Abed scheme to keep her occupied and away from Blade, Jeff and Shirley head to the carnival to get a look at the mystery man. Meanwhile, Dean Laybourne enlists the help of Dean Pelton to convince Troy to join the Air Conditioning Repair Annex.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31252" } }
            },
            {
              id: 31253,
              url: "http://www.tvmaze.com/episodes/31253/community-3x16-virtual-systems-analysis",
              name: "Virtual Systems Analysis",
              season: 3,
              number: 16,
              airdate: "2012-04-19",
              airtime: "",
              airstamp: "2012-04-19T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494811.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494811.jpg"
              },
              summary:
                '<p>When the biology final exam is postponed, Jeff encourages everyone to join him for a three hour lunch, but Annie convinces Abed to let her spend some time with him in the dreamatorium instead. What starts as an innocent simulation of "Inspector Spacetime" becomes a more serious examination of the study group members and Annie learns a little bit about what makes Abed tick.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31253" } }
            },
            {
              id: 31254,
              url: "http://www.tvmaze.com/episodes/31254/community-3x17-basic-lupine-urology",
              name: "Basic Lupine Urology",
              season: 3,
              number: 17,
              airdate: "2012-04-26",
              airtime: "",
              airstamp: "2012-04-26T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494812.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494812.jpg"
              },
              summary:
                '<p>When Annie discovers the study group\'s yam experiment smashed to smithereens on the science lab floor, the group mobilizes to expose the criminal and save their grade. Once Abed and Troy think they have located the perpetrator, the group conducts a "trial," with a reluctant Professor Kane serving as judge. Jeff soon realizes, however, that the plot is thicker than anyone suspects.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31254" } }
            },
            {
              id: 31255,
              url: "http://www.tvmaze.com/episodes/31255/community-3x18-course-listing-unavailable",
              name: "Course Listing Unavailable",
              season: 3,
              number: 18,
              airdate: "2012-05-03",
              airtime: "",
              airstamp: "2012-05-03T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494813.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494813.jpg"
              },
              summary:
                "<p>As the study group comes to terms with the death of a beloved classmate, Jeff easily adjusts, while Britta acts as grief counselor to the rest, employing what she's learned in her psychology class. Meanwhile, Chang is on a mission to increase his policing powers at the school and when the memorial service disintegrates into a riot, he seizes the opportunity to take more control over campus security.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31255" } }
            },
            {
              id: 31256,
              url: "http://www.tvmaze.com/episodes/31256/community-3x19-curriculum-unavailable",
              name: "Curriculum Unavailable",
              season: 3,
              number: 19,
              airdate: "2012-05-10",
              airtime: "",
              airstamp: "2012-05-10T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494816.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494816.jpg"
              },
              summary:
                "<p>Abed becomes convinced that there is a conspiracy afoot and that Dean Pelton is an imposter. When Abed is apprehended sneaking around on campus, he is required to see a therapist, Dr. Heidi, or risk being sent to jail.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31256" } }
            },
            {
              id: 31257,
              url: "http://www.tvmaze.com/episodes/31257/community-3x20-digital-estate-planning",
              name: "Digital Estate Planning",
              season: 3,
              number: 20,
              airdate: "2012-05-17",
              airtime: "",
              airstamp: "2012-05-17T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494822.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494822.jpg"
              },
              summary:
                "<p>Pierce is summoned to Hawthorne Enterprises to discuss his inheritance with his deceased father's former right-hand man, Gilbert Lawson. The study group goes with him for moral support and must all pitch in to play the video game of their life on Pierce's behalf - or risk losing his inheritance.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31257" } }
            },
            {
              id: 31258,
              url: "http://www.tvmaze.com/episodes/31258/community-3x21-the-first-chang-dynasty",
              name: "The First Chang Dynasty",
              season: 3,
              number: 21,
              airdate: "2012-05-17",
              airtime: "",
              airstamp: "2012-05-17T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494824.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494824.jpg"
              },
              summary:
                "<p>With Chang in control of Greendale, the study group develops an elaborate plan to infiltrate the campus without being detected. While Chang becomes distracted planning a big birthday bash for himself, Jeff and the study group launch their sneak attack. Meanwhile, Troy enlists the help of the Air Conditioning Repair Annex to help with their break-in plan but knows he may be selling his soul to the devil.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31258" } }
            },
            {
              id: 31259,
              url: "http://www.tvmaze.com/episodes/31259/community-3x22-introduction-to-finality",
              name: "Introduction to Finality",
              season: 3,
              number: 22,
              airdate: "2012-05-17",
              airtime: "",
              airstamp: "2012-05-17T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494825.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494825.jpg"
              },
              summary:
                "<p>When Shirley and Pierce have a disagreement over their sandwich shop, Jeff agrees to argue on Shirley's behalf but much to his chagrin, Pierce retains Jeff's former colleague Alan Connor and the two must square off in \"Greendale Summer Fun Court.\" Meanwhile, Vice Dean Laybourne makes one last ditch effort to win Troy over to his Air Conditioning Repair Annex.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31259" } }
            },
            {
              id: 31260,
              url: "http://www.tvmaze.com/episodes/31260/community-4x01-history-101",
              name: "History 101",
              season: 4,
              number: 1,
              airdate: "2013-02-07",
              airtime: "",
              airstamp: "2013-02-07T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494826.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494826.jpg"
              },
              summary:
                "<p>The Study Group returns from summer break ready to tackle their fourth year of Community College. Jeff is particularly focused on graduating and is just a few credits away. When there is a mix-up with a history class registration, Dean Pelton institutes an elaborate physical competition for class space. Meanwhile, Britta helps Abed deal with the anxiety he is experiencing over the thought of the study group graduating and breaking up.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31260" } }
            },
            {
              id: 31261,
              url: "http://www.tvmaze.com/episodes/31261/community-4x02-paranormal-parentage",
              name: "Paranormal Parentage",
              season: 4,
              number: 2,
              airdate: "2013-02-14",
              airtime: "",
              airstamp: "2013-02-14T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494827.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494827.jpg"
              },
              summary:
                "<p>While on their way to Vicki's Halloween costume party, the study group makes a detour to Pierce's mansion when they learn he accidentally locked himself in his panic room. As Pierce languishes behind locked doors, the group searches the dark and eerie house for the book that holds the code to the door. Along the way they encounter a few of the house's secrets.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31261" } }
            },
            {
              id: 31262,
              url:
                "http://www.tvmaze.com/episodes/31262/community-4x03-conventions-of-space-and-time",
              name: "Conventions of Space and Time",
              season: 4,
              number: 3,
              airdate: "2013-02-21",
              airtime: "",
              airstamp: "2013-02-21T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494828.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494828.jpg"
              },
              summary:
                "<p>In support of Troy and Abed, the study group heads to InspecTiCon - the annual Inspector Spacetime Convention. Trouble begins when the group meets up with Abed's email \"pen-pal,\" Toby Davies, who's shared passion for Inspector Spacetime comes between Abed and Troy. Meanwhile, Annie leaves the convention floor to enjoy the luxuries of the hotel while Jeff relaxes in the bar with Lauren, an Inspector Spacetime fan.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31262" } }
            },
            {
              id: 31263,
              url:
                "http://www.tvmaze.com/episodes/31263/community-4x04-alternative-history-of-the-german-invasion",
              name: "Alternative History of the German Invasion",
              season: 4,
              number: 4,
              airdate: "2013-02-28",
              airtime: "",
              airstamp: "2013-02-28T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494829.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494829.jpg"
              },
              summary:
                '<p>After losing out in registration for "The History of Ice Cream," the study group begins their European History class with Professor Noel Cornwallis. To make matters worse, the group encounters the return of the arrogant German students from last season, which Jeff and Shirley faced over the foosball table. Meanwhile, much to Dean Pelton\'s dismay, Chang makes his return to campus.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31263" } }
            },
            {
              id: 31264,
              url:
                "http://www.tvmaze.com/episodes/31264/community-4x05-cooperative-escapism-in-familial-relations",
              name: "Cooperative Escapism in Familial Relations",
              season: 4,
              number: 5,
              airdate: "2013-03-07",
              airtime: "",
              airstamp: "2013-03-07T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494830.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494830.jpg"
              },
              summary:
                "<p>The study group heads to Shirley's for a Bennett-filled thanksgiving, which is so awkward that they immediately begin plotting their escape. Meanwhile, Jeff heads to his estranged father William's house, whom he hasn't seen since he was a child.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31264" } }
            },
            {
              id: 31265,
              url:
                "http://www.tvmaze.com/episodes/31265/community-4x06-advanced-documentary-filmmaking",
              name: "Advanced Documentary Filmmaking",
              season: 4,
              number: 6,
              airdate: "2013-03-14",
              airtime: "",
              airstamp: "2013-03-14T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494831.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494831.jpg"
              },
              summary:
                "<p>As the campus strives to get to the bottom of Chang's memory loss, Dean Pelton enlists the group to help secure a grant for further medical research and Abed films the activities for a documentary. Jeff, however, suspects there is more to Chang's memory loss than meets the eye.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31265" } }
            },
            {
              id: 31266,
              url:
                "http://www.tvmaze.com/episodes/31266/community-4x07-economics-of-marine-biology",
              name: "Economics of Marine Biology",
              season: 4,
              number: 7,
              airdate: "2013-03-21",
              airtime: "",
              airstamp: "2013-03-21T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494832.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494832.jpg"
              },
              summary:
                '<p>Dean Pelton sets his sights on "whale" and enlists Jeff, Britta and Annie to help in his recruiting efforts. Pierce finds out and is incensed. Meanwhile, Abed begins a new Greendale fraternity, while Troy and Shirley begin a physical education instruction class, in which Shirley excels... and Troy struggles.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31266" } }
            },
            {
              id: 31267,
              url: "http://www.tvmaze.com/episodes/31267/community-4x08-herstory-of-dance",
              name: "Herstory of Dance",
              season: 4,
              number: 8,
              airdate: "2013-04-04",
              airtime: "",
              airstamp: "2013-04-04T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494833.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494833.jpg"
              },
              summary:
                '<p>When Dean Pelton plans a "Sadie Hawkins" dance at Greendale, Britta plans a competing "Sophie B. Hawkins" dance in protest - but the joke is on Britta - who has confused Sophie B. Hawkins with Susan B. Anthony.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31267" } }
            },
            {
              id: 31268,
              url: "http://www.tvmaze.com/episodes/31268/community-4x09-intro-to-felt-surrogacy",
              name: "Intro to Felt Surrogacy",
              season: 4,
              number: 9,
              airdate: "2013-04-11",
              airtime: "",
              airstamp: "2013-04-11T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494834.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494834.jpg"
              },
              summary:
                "<p>The study group takes a wild balloon ride that crash lands in the woods and they end up spending some quality time together with a friendly mountain man.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31268" } }
            },
            {
              id: 31269,
              url: "http://www.tvmaze.com/episodes/31269/community-4x10-intro-to-knots",
              name: "Intro to Knots",
              season: 4,
              number: 10,
              airdate: "2013-04-18",
              airtime: "",
              airstamp: "2013-04-18T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494835.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494835.jpg"
              },
              summary:
                "<p>Jeff organizes a lovely holiday gathering at his apartment but Annie secretly invites Professor Cornwallis, to get in his good graces. When it becomes apparent that Professor Cornwallis intends to give them a bad grade on their joint History paper, the atmosphere quickly deteriorates and the group takes decisive action.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31269" } }
            },
            {
              id: 31270,
              url: "http://www.tvmaze.com/episodes/31270/community-4x11-basic-human-anatomy",
              name: "Basic Human Anatomy",
              season: 4,
              number: 11,
              airdate: "2013-04-25",
              airtime: "",
              airstamp: "2013-04-25T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494836.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494836.jpg"
              },
              summary:
                "<p>When Annie and Shirley learn that Leonard is actually holding the spot as the class valedictorian, they join forces to bring him down. Meanwhile, Troy and Abed reminisce about one of their favorite body switching films and when they inadvertently re-enact a critical scene, things start becoming a little funky at Greendale.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31270" } }
            },
            {
              id: 31271,
              url: "http://www.tvmaze.com/episodes/31271/community-4x12-heroic-origins",
              name: "Heroic Origins",
              season: 4,
              number: 12,
              airdate: "2013-05-02",
              airtime: "",
              airstamp: "2013-05-02T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494837.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494837.jpg"
              },
              summary:
                "<p>Abed, becomes convinced that the study group was destined to meet at Greendale and pieces together everyone's past - revealing that their lives have been intertwined for years. Meanwhile, Chang plots to destroy Greendale once and for all.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31271" } }
            },
            {
              id: 31272,
              url:
                "http://www.tvmaze.com/episodes/31272/community-4x13-advanced-introduction-to-finality",
              name: "Advanced Introduction to Finality",
              season: 4,
              number: 13,
              airdate: "2013-05-09",
              airtime: "",
              airstamp: "2013-05-09T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494838.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494838.jpg"
              },
              summary:
                '<p>Jeff achieves enough credits to graduate and contemplates graduation - and beyond. Meanwhile, the study group revisits the "darkest timeline".</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31272" } }
            },
            {
              id: 31273,
              url: "http://www.tvmaze.com/episodes/31273/community-5x01-repilot",
              name: "Repilot",
              season: 5,
              number: 1,
              airdate: "2014-01-02",
              airtime: "",
              airstamp: "2014-01-02T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494839.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494839.jpg"
              },
              summary:
                "<p>Jeff returns to Greendale when his former law partner Alan Connor recruits him to gather evidence for a lawsuit he is pursuing. Dean Pelton is thrilled to see Jeff back at Greendale. Thinking he is there to help save the school, he quickly calls the study group back together - surprising Jeff with a reunion.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31273" } }
            },
            {
              id: 31274,
              url: "http://www.tvmaze.com/episodes/31274/community-5x02-introduction-to-teaching",
              name: "Introduction to Teaching",
              season: 5,
              number: 2,
              airdate: "2014-01-02",
              airtime: "",
              airstamp: "2014-01-02T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494840.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494840.jpg"
              },
              summary:
                '<p>Jeff settles into a new job at Greendale and adjusts to the expectations of being on staff - Professor Hickey shows him the ropes and shares some pointers on how to manage unruly and demanding students. Meanwhile, Abed convinces the study group to take a new class, "Nicolas Cage: Good or Bad," with Professor Garrity.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31274" } }
            },
            {
              id: 31275,
              url:
                "http://www.tvmaze.com/episodes/31275/community-5x03-basic-intergluteal-numismatics",
              name: "Basic Intergluteal Numismatics",
              season: 5,
              number: 3,
              airdate: "2014-01-09",
              airtime: "",
              airstamp: "2014-01-09T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494842.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494842.jpg"
              },
              summary:
                "<p>Everyone is up in arms when an anonymous bandit starts dropping coins down people's pants. While Dean Pelton mobilizes the school to investigate, Jeff and Annie pursue their own theories - methodically interrogating staff members. When someone eventually confesses, the school heaves a sigh of relief, but Jeff thinks there is more to the story than meets the eye.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31275" } }
            },
            {
              id: 31276,
              url: "http://www.tvmaze.com/episodes/31276/community-5x04-cooperative-polygraphy",
              name: "Cooperative Polygraphy",
              season: 5,
              number: 4,
              airdate: "2014-01-16",
              airtime: "",
              airstamp: "2014-01-16T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494843.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494843.jpg"
              },
              summary:
                "<p>After Pierce Hawthorne's unexpected passing, a team of investigators headed by the no-nonsense Mr. Stone, arrives at Greendale to submit the study group to lie detector tests before they can be considered for distributions under the will. Tensions mount as Mr. Stone digs in with the questions and the group members learn a little more about one another than they wished.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31276" } }
            },
            {
              id: 31277,
              url: "http://www.tvmaze.com/episodes/31277/community-5x05-geothermal-escapism",
              name: "Geothermal Escapism",
              season: 5,
              number: 5,
              airdate: "2014-01-23",
              airtime: "",
              airstamp: "2014-01-23T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494844.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494844.jpg"
              },
              summary:
                "<p>As Troy prepares to leave Greendale, Abed organizes an epic going away activity befitting his best friend's departure. What starts out as a fun little game grows into a heated, high-stakes competition destined to make history at Greendale. Joel McHale, Gillian Jacobs, Alison Brie, Yvette Nicole Brown, Jim Rash and Ken Jeong star.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31277" } }
            },
            {
              id: 31278,
              url:
                "http://www.tvmaze.com/episodes/31278/community-5x06-analysis-of-cork-based-networking",
              name: "Analysis of Cork-Based Networking",
              season: 5,
              number: 6,
              airdate: "2014-01-30",
              airtime: "",
              airstamp: "2014-01-30T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494845.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494845.jpg"
              },
              summary:
                "<p>It's time for the midterm dance and Annie sets about getting the Greendale cafeteria ready for the festivities. She and Professor Hickey team to navigate Greendale's custodial corridors of power and must negotiate with Bob Waite, the politically savvy Greendale head custodian, and his right-hand man Lapari. They must also contend with Debra Chambers, Greendale's head of I.T. and Waldron, Greendale's head of parking, in what becomes an increasingly complex hierarchy of staff.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31278" } }
            },
            {
              id: 31279,
              url:
                "http://www.tvmaze.com/episodes/31279/community-5x07-bondage-and-beta-male-sexuality",
              name: "Bondage and Beta Male Sexuality",
              season: 5,
              number: 7,
              airdate: "2014-02-27",
              airtime: "",
              airstamp: "2014-02-27T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494846.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494846.jpg"
              },
              summary:
                "<p>Professor Duncan decides it's time to seduce Britta and Jeff counsels him on how to close the deal. Meanwhile, Britta runs into some old friends and realizes that they have moved on from their shared anarchist views of the past. Abed runs afoul of Professor Hickey when he accidentally damages some drawings Hickey has been laboring over. When Hickey restrains Abed as punishment, the two wind up spending some meaningful time together. Meanwhile, Chang finds himself performing an impromptu one-man show for a ghostly audience.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31279" } }
            },
            {
              id: 31280,
              url:
                "http://www.tvmaze.com/episodes/31280/community-5x08-app-development-and-condiments",
              name: "App Development and Condiments",
              season: 5,
              number: 8,
              airdate: "2014-03-06",
              airtime: "",
              airstamp: "2014-03-06T17:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494847.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494847.jpg"
              },
              summary:
                "<p>Dean Pelton invites two designers to Greendale to beta test their new social networking Application. What starts as a fun social interaction of ranking classmates turns into an all-out class war as Greendale students compete for the highest score. Jeff and Shirley battle for supremacy, while Britta rails against the very concept. Meanwhile, Professor Hickey goes underground - literally - until the whole thing blows over.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31280" } }
            },
            {
              id: 31281,
              url:
                "http://www.tvmaze.com/episodes/31281/community-5x09-vcr-maintenance-and-educational-publishing",
              name: "VCR Maintenance and Educational Publishing",
              season: 5,
              number: 9,
              airdate: "2014-03-13",
              airtime: "",
              airstamp: "2014-03-13T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494848.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494848.jpg"
              },
              summary:
                "<p>When Jeff, Shirley and Professor Hickey happen upon a hidden cache of textbooks, the discovery leads to some interesting power shifts as the group struggles with how to monetize their windfall. Meanwhile, Abed and Annie decide it's time for a new roommate. Abed wants his friend Rachel to move in, while Annie wants her brother to move in. When they decide to play an old VCR game to determine the winner, things get a little intense.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31281" } }
            },
            {
              id: 31282,
              url:
                "http://www.tvmaze.com/episodes/31282/community-5x10-advanced-advanced-dungeons-dragons",
              name: "Advanced Advanced Dungeons & Dragons",
              season: 5,
              number: 10,
              airdate: "2014-03-20",
              airtime: "",
              airstamp: "2014-03-20T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494849.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494849.jpg"
              },
              summary:
                '<p>Professor Hickey reveals that his estranged son Hank did not invite him to his grandson\'s birthday. The group decides to help father and son reunite through a rousing game of "Dungeons and Dragons."</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/31282" } }
            },
            {
              id: 31283,
              url: "http://www.tvmaze.com/episodes/31283/community-5x11-gi-jeff",
              name: "G.I. Jeff",
              season: 5,
              number: 11,
              airdate: "2014-04-03",
              airtime: "",
              airstamp: "2014-04-03T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494850.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494850.jpg"
              },
              summary: "<p>The study group gets animated in the vein of the 1980's 'G.I. Joe'.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31283" } }
            },
            {
              id: 31284,
              url: "http://www.tvmaze.com/episodes/31284/community-5x12-basic-story",
              name: "Basic Story",
              season: 5,
              number: 12,
              airdate: "2014-04-10",
              airtime: "",
              airstamp: "2014-04-10T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494851.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494851.jpg"
              },
              summary:
                "<p>As Subway makes plans to purchase the Greendale campus for their own Subway University, the study group members contemplate the end of an era. Jeff considers a generous offer of employment he has received from Subway, while Britta considers an offer she has received from Jeff. Meanwhile, Dean Pelton tells Annie and Abed about Greendale's first Dean Russell Borchert, which leads to an interesting and potentially lucrative discovery in the walls of Greendale.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31284" } }
            },
            {
              id: 31285,
              url: "http://www.tvmaze.com/episodes/31285/community-5x13-basic-sandwich",
              name: "Basic Sandwich",
              season: 5,
              number: 13,
              airdate: "2014-04-17",
              airtime: "",
              airstamp: "2014-04-17T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494852.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494852.jpg"
              },
              summary:
                "<p>The group learns the history of Greendale's first Dean, Russell Borchert, a reclusive, wealthy genius who disappeared amid a personal scandal in the 1970s. Once Shirley and Hickey locate the school's blueprints, Annie and Abed lead the search for Borchert's old computer lab, which was sealed off years ago. Subway returns to Greendale with plans to take over the campus for a Subway University and they enlist Chang to secretly keep tabs on the study group. Meanwhile, Jeff and Britta make a grown-up decision about their futures.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/31285" } }
            },
            {
              id: 117721,
              url: "http://www.tvmaze.com/episodes/117721/community-6x01-ladders",
              name: "Ladders",
              season: 6,
              number: 1,
              airdate: "2015-03-17",
              airtime: "",
              airstamp: "2015-03-17T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/9/24098.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/9/24098.jpg"
              },
              summary:
                '<p>In the Season 6 premiere, a roof collapses under the weight of four decades of errant Frisbees, and Francesca "Frankie" Dart takes over as CFO of Greendale with a plan of fiscal responsibility that includes canceling seemingly pointless classes. Meanwhile, Britta, Annie, Jeff and Abed turn a floundering Shirley\'s Sandwiches into a speakeasy after Frankie bans alcohol on campus.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/117721" } }
            },
            {
              id: 117722,
              url:
                "http://www.tvmaze.com/episodes/117722/community-6x02-lawnmower-maintenance-and-postnatal-care",
              name: "Lawnmower Maintenance and Postnatal Care",
              season: 6,
              number: 2,
              airdate: "2015-03-17",
              airtime: "",
              airstamp: "2015-03-17T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/9/24097.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/9/24097.jpg"
              },
              summary:
                "<p>The Dean's purchase of a virtual-reality system could bankrupt the school, so Jeff must find the device's creator to save Greendale. Meanwhile, Britta moves in with Annie and Abed, but learns her parents have been paying her debts; and Chang is bitten by a cat.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/117722" } }
            },
            {
              id: 151361,
              url: "http://www.tvmaze.com/episodes/151361/community-6x03-basic-crisis-room-decorum",
              name: "Basic Crisis Room Decorum",
              season: 6,
              number: 3,
              airdate: "2015-03-24",
              airtime: "",
              airstamp: "2015-03-24T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/10/26405.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/10/26405.jpg"
              },
              summary:
                "<p>A claim that a dog graduated from Greendale could damage the school's reputation, so Abed goes after the animal with an attack ad. Meanwhile, Britta and Elroy bond over a band; and Chang dabbles in pornography.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/151361" } }
            },
            {
              id: 151744,
              url:
                "http://www.tvmaze.com/episodes/151744/community-6x04-queer-studies-advanced-waxing",
              name: "Queer Studies & Advanced Waxing",
              season: 6,
              number: 4,
              airdate: "2015-03-31",
              airtime: "",
              airstamp: "2015-03-31T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/10/26406.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/10/26406.jpg"
              },
              summary:
                '<p>The school board invites the Dean to become a member as long as he promotes his "homosexuality." Chang auditions for "The Karate Kid," with Annie\'s help, and endures abusive treatment from the director. Abed tries to save baby birds nesting on the Greendale internet router with the help of Elroy.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/151744" } }
            },
            {
              id: 152642,
              url:
                "http://www.tvmaze.com/episodes/152642/community-6x05-laws-of-robotics-party-rights",
              name: "Laws of Robotics & Party Rights",
              season: 6,
              number: 5,
              airdate: "2015-04-07",
              airtime: "",
              airstamp: "2015-04-07T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/10/26407.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/10/26407.jpg"
              },
              summary:
                "<p>Jeff (Joel McHale) squares off against a charming prison inmate Willy (Guest Star Brian Van Holt ) who's attending Greendale via telerobot. Britta (Gillian Jacobs) enlists Abed (Danny Pudi) to get around Annie's (Alison Brie) rules against parties in their apartment. Jim</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/152642" } }
            },
            {
              id: 153076,
              url: "http://www.tvmaze.com/episodes/153076/community-6x06-basic-email-security",
              name: "Basic Email Security",
              season: 6,
              number: 6,
              airdate: "2015-04-14",
              airtime: "",
              airstamp: "2015-04-14T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/10/26408.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/10/26408.jpg"
              },
              summary:
                "<p>A malicious hacker threatens to publicize everyone's personal emails unless Greendale cancels a racist comic's performance.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/153076" } }
            },
            {
              id: 154164,
              url: "http://www.tvmaze.com/episodes/154164/community-6x07-advanced-safety-features",
              name: "Advanced Safety Features",
              season: 6,
              number: 7,
              airdate: "2015-04-21",
              airtime: "",
              airstamp: "2015-04-21T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/10/26409.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/10/26409.jpg"
              },
              summary:
                "<p>A former boyfriend lures Britta into joining Honda's guerilla marketing campaign. Jeff looks to get Elroy to like him.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/154164" } }
            },
            {
              id: 155206,
              url: "http://www.tvmaze.com/episodes/155206/community-6x08-intro-to-recycled-cinema",
              name: "Intro to Recycled Cinema",
              season: 6,
              number: 8,
              airdate: "2015-04-28",
              airtime: "",
              airstamp: "2015-04-28T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494856.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494856.jpg"
              },
              summary:
                "<p>Chang leaves Greendale to pursue fame in Hollywood. Abed agrees to complete his unfinished film with the support of Frankie, her movie producer friend Maury and Jeff.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/155206" } }
            },
            {
              id: 155207,
              url: "http://www.tvmaze.com/episodes/155207/community-6x09-grifting-101",
              name: "Grifting 101",
              season: 6,
              number: 9,
              airdate: "2015-05-05",
              airtime: "",
              airstamp: "2015-05-05T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494858.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494858.jpg"
              },
              summary:
                "<p>When a clever clever con man, Professor DeSalvo, uses his class to cheat the study group, they enlist Jeff to get revenge. The situation goes awry as Britta and Dean Pelton get involved in Jeff and Professor DeSalvo's scamming competition.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/155207" } }
            },
            {
              id: 156874,
              url:
                "http://www.tvmaze.com/episodes/156874/community-6x10-basic-rv-repair-and-palmistry",
              name: "Basic RV Repair and Palmistry",
              season: 6,
              number: 10,
              airdate: "2015-05-12",
              airtime: "",
              airstamp: "2015-05-12T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494859.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494859.jpg"
              },
              summary:
                "<p>During a road trip to unload one of Greendale's useless artifacts, Abed turns a situation into a flashback-filled feature film.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/156874" } }
            },
            {
              id: 157055,
              url: "http://www.tvmaze.com/episodes/157055/community-6x11-modern-espionage",
              name: "Modern Espionage",
              season: 6,
              number: 11,
              airdate: "2015-05-19",
              airtime: "",
              airstamp: "2015-05-19T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494862.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494862.jpg"
              },
              summary:
                "<p>A secret paintball game could ruin Frankie's initiative to clean up Greendale.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/157055" } }
            },
            {
              id: 161159,
              url: "http://www.tvmaze.com/episodes/161159/community-6x12-wedding-videography",
              name: "Wedding Videography",
              season: 6,
              number: 12,
              airdate: "2015-05-26",
              airtime: "",
              airstamp: "2015-05-26T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494863.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494863.jpg"
              },
              summary:
                "<p>Abed films a wedding when Garrett gets married to a classmate to whom he shares a surprising connection.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/161159" } }
            },
            {
              id: 162188,
              url:
                "http://www.tvmaze.com/episodes/162188/community-6x13-emotional-consequences-of-broadcast-television",
              name: "Emotional Consequences of Broadcast Television",
              season: 6,
              number: 13,
              airdate: "2015-06-02",
              airtime: "",
              airstamp: "2015-06-02T16:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494864.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/197/494864.jpg"
              },
              summary:
                "<p>In the Season 6 finale, Abed asks the members of the group to imagine a plot for a TV show's seventh season.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/162188" } }
            }
          ],
          previousepisode: {
            id: 162188,
            url:
              "http://www.tvmaze.com/episodes/162188/community-6x13-emotional-consequences-of-broadcast-television",
            name: "Emotional Consequences of Broadcast Television",
            season: 6,
            number: 13,
            airdate: "2015-06-02",
            airtime: "",
            airstamp: "2015-06-02T16:00:00+00:00",
            runtime: 30,
            image: {
              medium: "http://static.tvmaze.com/uploads/images/medium_landscape/197/494864.jpg",
              original: "http://static.tvmaze.com/uploads/images/original_untouched/197/494864.jpg"
            },
            summary:
              "<p>In the Season 6 finale, Abed asks the members of the group to imagine a plot for a TV show's seventh season.</p>",
            _links: { self: { href: "http://api.tvmaze.com/episodes/162188" } }
          }
        }
      };
      const data2 = {
        id: 396,
        url: "http://www.tvmaze.com/shows/396/gravity-falls",
        name: "Gravity Falls",
        type: "Animation",
        language: "English",
        genres: ["Adventure", "Mystery", "Supernatural"],
        status: "Ended",
        runtime: 30,
        premiered: "2012-06-15",
        officialSite: null,
        schedule: { time: "19:00", days: ["Monday"] },
        rating: { average: 9.3 },
        weight: 88,
        network: {
          id: 25,
          name: "Disney XD",
          country: { name: "United States", code: "US", timezone: "America/New_York" }
        },
        webChannel: null,
        externals: { tvrage: 31839, thetvdb: 259972, imdb: "tt1865718" },
        image: {
          medium: "http://static.tvmaze.com/uploads/images/medium_portrait/2/6140.jpg",
          original: "http://static.tvmaze.com/uploads/images/original_untouched/2/6140.jpg"
        },
        summary:
          "<p>Twin brother and sister Dipper and Mabel Pines are in for an unexpected adventure when they spend the summer with their great Uncle in the mysterious town of Gravity Falls, Oregon.</p>",
        updated: 1561106179,
        _links: {
          self: { href: "http://api.tvmaze.com/shows/396" },
          previousepisode: { href: "http://api.tvmaze.com/episodes/483406" }
        },
        _embedded: {
          episodes: [
            {
              id: 39048,
              url: "http://www.tvmaze.com/episodes/39048/gravity-falls-1x01-tourist-trapped",
              name: "Tourist Trapped",
              season: 1,
              number: 1,
              airdate: "2012-06-15",
              airtime: "21:55",
              airstamp: "2012-06-16T01:55:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37873.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37873.jpg"
              },
              summary:
                "<p>When Dipper and Mabel Pines arrive to spend their summer break in the remote town of Gravity Falls, Mabel's suspiciously weird new boyfriend causes the twins to come face to face with the town's strange and uncanny secrets.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39048" } }
            },
            {
              id: 39049,
              url:
                "http://www.tvmaze.com/episodes/39049/gravity-falls-1x02-the-legend-of-the-gobblewonker",
              name: "The Legend of the Gobblewonker",
              season: 1,
              number: 2,
              airdate: "2012-06-29",
              airtime: "21:30",
              airstamp: "2012-06-30T01:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37874.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37874.jpg"
              },
              summary:
                "<p>When Dipper and Mabel hear rumors that a lake monster lives at the bottom of the local lake, they enlist Soos to take them on a boating expedition to prove that it really does exist, instead of going with Stan Pines to go fishing.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39049" } }
            },
            {
              id: 39050,
              url: "http://www.tvmaze.com/episodes/39050/gravity-falls-1x03-headhunters",
              name: "Headhunters",
              season: 1,
              number: 3,
              airdate: "2012-06-30",
              airtime: "21:25",
              airstamp: "2012-07-01T01:25:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37875.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37875.jpg"
              },
              summary:
                "<p>When someone tampers with Mabel's life-size wax statue, she and Dipper set out to find the culprit. Meanwhile, Grunkle Stan mourns over the loss of his wax doppelganger.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39050" } }
            },
            {
              id: 39051,
              url:
                "http://www.tvmaze.com/episodes/39051/gravity-falls-1x04-the-hand-that-rocks-the-mabel",
              name: "The Hand That Rocks the Mabel",
              season: 1,
              number: 4,
              airdate: "2012-07-06",
              airtime: "21:30",
              airstamp: "2012-07-07T01:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37876.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37876.jpg"
              },
              summary:
                "<p>Dipper and Mabel discover their seemingly cherubic new neighbor, Lil' Gideon, happens to be the town's adored psychic. But when Dipper convinces Mabel to go on a date with Gideon to question his authenticity, she soon learns that his cuteness can fade all too quickly.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39051" } }
            },
            {
              id: 39052,
              url: "http://www.tvmaze.com/episodes/39052/gravity-falls-1x05-the-inconveniencing",
              name: "The Inconveniencing",
              season: 1,
              number: 5,
              airdate: "2012-07-13",
              airtime: "21:30",
              airstamp: "2012-07-14T01:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37877.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37877.jpg"
              },
              summary:
                "<p>When Dipper tries to impress Wendy by acting older than he really is, he's invited to join a group of teenagers that leads to an old abandoned convenience store that may be haunted. Mabel tags along for the ride but gets sidetracked when she sees a discontinued line of flavored candies that sends her on an unexpected adventure.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39052" } }
            },
            {
              id: 39053,
              url: "http://www.tvmaze.com/episodes/39053/gravity-falls-1x06-dipper-vs-manliness",
              name: "Dipper vs. Manliness",
              season: 1,
              number: 6,
              airdate: "2012-07-20",
              airtime: "21:30",
              airstamp: "2012-07-21T01:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37878.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37878.jpg"
              },
              summary:
                "<p>In a quest to attain manliness, Dipper ventures into the forest to battle the notorious Multi-Bear. Meanwhile, Mabel tries to teach Grunkle Stan how to be attractive to women, particularly the waitress in the local diner, Lazy Susan,.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39053" } }
            },
            {
              id: 39054,
              url: "http://www.tvmaze.com/episodes/39054/gravity-falls-1x07-double-dipper",
              name: "Double Dipper",
              season: 1,
              number: 7,
              airdate: "2012-08-10",
              airtime: "21:00",
              airstamp: "2012-08-11T01:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37879.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37879.jpg"
              },
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39054" } }
            },
            {
              id: 39055,
              url: "http://www.tvmaze.com/episodes/39055/gravity-falls-1x08-irrational-treasure",
              name: "Irrational Treasure",
              season: 1,
              number: 8,
              airdate: "2012-08-17",
              airtime: "21:30",
              airstamp: "2012-08-18T01:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37880.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37880.jpg"
              },
              summary:
                "<p>When Dipper and Mabel discover evidence that the reported town founder is a hoax, they set out to expose the historical cover-up and prove that Mabel's silliness is not a bad thing.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39055" } }
            },
            {
              id: 39056,
              url: "http://www.tvmaze.com/episodes/39056/gravity-falls-1x09-the-time-travelers-pig",
              name: "The Time Traveler's Pig",
              season: 1,
              number: 9,
              airdate: "2012-08-24",
              airtime: "21:30",
              airstamp: "2012-08-25T01:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37881.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37881.jpg"
              },
              summary:
                "<p>When Dipper wishes he could go back in time and undo a mistake he made, he discovers there is a time machine that can help him do just that. Meanwhile, it's love at first sight for Mabel when she wins a pet pig at the fair.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39056" } }
            },
            {
              id: 39057,
              url: "http://www.tvmaze.com/episodes/39057/gravity-falls-1x10-fight-fighters",
              name: "Fight Fighters",
              season: 1,
              number: 10,
              airdate: "2012-09-14",
              airtime: "21:30",
              airstamp: "2012-09-15T01:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37882.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37882.jpg"
              },
              summary:
                "<p>After being challenged to a video game battle by Wendy's boyfriend Robbie, Dipper is shocked when his favorite playable fighter, Rumble McSkirmish, comes to life to defend him. But Dipper soon loses control over Rumble McSkirmish and has to find a way to stop him.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39057" } }
            },
            {
              id: 39058,
              url: "http://www.tvmaze.com/episodes/39058/gravity-falls-1x11-little-dipper",
              name: "Little Dipper",
              season: 1,
              number: 11,
              airdate: "2012-09-28",
              airtime: "21:30",
              airstamp: "2012-09-29T01:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37883.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37883.jpg"
              },
              summary:
                "<p>Dipper feels self-conscious that Mabel is taller than him and is becoming the alpha twin, so he seeks out a magic way to grow himself the same height. Meanwhile, Lil' Gideon takes advantage of Dipper's and Mabel's height discrepancies.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39058" } }
            },
            {
              id: 39059,
              url: "http://www.tvmaze.com/episodes/39059/gravity-falls-1x12-summerween",
              name: "Summerween",
              season: 1,
              number: 12,
              airdate: "2012-10-05",
              airtime: "21:00",
              airstamp: "2012-10-06T01:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37884.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37884.jpg"
              },
              summary:
                "<p>It's Gravity Falls' version of Halloween in Summer with Jack-o-Melons and lots of trick-or-treating. Dipper and Mabel are excited to join in on the fun, but when Wendy casually mentions that trick-or-treating is for kids, Dipper's whole outlook on the evening changes. The night gets even more complicated when a monster that Dipper accidentally insulted makes them fulfill his candy quota by night's end or else he will eat them.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39059" } }
            },
            {
              id: 39060,
              url: "http://www.tvmaze.com/episodes/39060/gravity-falls-1x13-boss-mabel",
              name: "Boss Mabel",
              season: 1,
              number: 13,
              airdate: "2013-02-15",
              airtime: "21:00",
              airstamp: "2013-02-16T02:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37885.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37885.jpg"
              },
              summary:
                "<p>When Mabel questions the way Stan runs the Shack, he challenges her to a bet - whoever can make the most money in three days wins the chance to run the Shack however they wish for the rest of the summer. Mabel takes the bet and implements a new bossing method that coddles her employees and gives them the freedom to follow their hopes and dreams. Unfortunately, the results are not as expected and Mabel finds herself just trying to get back some normalcy. Meanwhile, Grunkle Stan sets off to win big money on a television game show.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39060" } }
            },
            {
              id: 39061,
              url: "http://www.tvmaze.com/episodes/39061/gravity-falls-1x14-bottomless-pit",
              name: "Bottomless Pit!",
              season: 1,
              number: 14,
              airdate: "2013-03-01",
              airtime: "21:00",
              airstamp: "2013-03-02T02:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37886.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37886.jpg"
              },
              summary:
                "<p>When Stan, Dipper, Mabel and Soos find themselves falling into a bottomless pit, they each decide to tell a different story to pass the time.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39061" } }
            },
            {
              id: 39062,
              url: "http://www.tvmaze.com/episodes/39062/gravity-falls-1x15-the-deep-end",
              name: "The Deep End",
              season: 1,
              number: 15,
              airdate: "2013-03-15",
              airtime: "21:00",
              airstamp: "2013-03-16T01:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37887.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37887.jpg"
              },
              summary:
                "<p>When Mabel befriends a cute Merman trapped in the deep end of the public pool, she's determined to return him to his family in the ocean - even though that means her whirlwind.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39062" } }
            },
            {
              id: 39063,
              url: "http://www.tvmaze.com/episodes/39063/gravity-falls-1x16-carpet-diem",
              name: "Carpet Diem",
              season: 1,
              number: 16,
              airdate: "2013-04-05",
              airtime: "21:00",
              airstamp: "2013-04-06T01:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37888.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37888.jpg"
              },
              summary:
                "<p>When Dipper discovers a hidden room inside the Mystery Shack, he is happy to claim it as his own space, but there is one problem - Mabel wants the room too. The duo compete to win the room with a contest that gets even trickier when they learn the room's carpet has electric body swapping properties.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39063" } }
            },
            {
              id: 39064,
              url: "http://www.tvmaze.com/episodes/39064/gravity-falls-1x17-boyz-crazy",
              name: "Boyz Crazy",
              season: 1,
              number: 17,
              airdate: "2013-04-19",
              airtime: "21:00",
              airstamp: "2013-04-20T01:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37889.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37889.jpg"
              },
              summary:
                "<p>When Mabel discovers that her favorite boy band is actually a bunch of imprisoned clones, she sets them free, only to decide on keeping them for herself. Meanwhile, Dipper is convinced that Robbie plans to brainwash Wendy with a secret message hidden inside one of his songs.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39064" } }
            },
            {
              id: 39065,
              url: "http://www.tvmaze.com/episodes/39065/gravity-falls-1x18-land-before-swine",
              name: "Land Before Swine",
              season: 1,
              number: 18,
              airdate: "2013-06-28",
              airtime: "21:00",
              airstamp: "2013-06-29T01:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37890.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37890.jpg"
              },
              summary:
                "<p>When a prehistoric beast snatches Mabel's beloved pig Waddles, the Pines family must journey to a land trapped in time to rescue him.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39065" } }
            },
            {
              id: 39066,
              url: "http://www.tvmaze.com/episodes/39066/gravity-falls-1x19-dreamscaperers",
              name: "Dreamscaperers",
              season: 1,
              number: 19,
              airdate: "2013-07-12",
              airtime: "21:00",
              airstamp: "2013-07-13T01:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37891.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37891.jpg"
              },
              summary:
                "<p>Dipper, Mabel and Soos must travel through Grunkle Stan's mind to defeat a tricky dream demon summoned by Lil Gideon.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39066" } }
            },
            {
              id: 39067,
              url: "http://www.tvmaze.com/episodes/39067/gravity-falls-1x20-gideon-rises",
              name: "Gideon Rises",
              season: 1,
              number: 20,
              airdate: "2013-08-02",
              airtime: "20:30",
              airstamp: "2013-08-03T00:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37892.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37892.jpg"
              },
              summary:
                "<p>After 'Lil Gideon swindles the Mystery Shack away from Stan, everything in Gravity Falls appears to be even more west of weird - Dipper, Mabel and Grunkle Stan are forced to move in with Soos and his grandmother, while the town remains enamored with Gideon's charm. Meanwhile, Grunkle Stan isn't certain he can take care of the twins and is considering sending them back home. With their summer in Gravity Falls threatening to come to an end, Mabel and Dipper decide to take on Gideon and win back their home.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39067" } }
            },
            {
              id: 39068,
              url: "http://www.tvmaze.com/episodes/39068/gravity-falls-2x01-scary-oke",
              name: "Scary-Oke",
              season: 2,
              number: 1,
              airdate: "2014-08-01",
              airtime: "21:00",
              airstamp: "2014-08-02T01:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37893.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37893.jpg"
              },
              summary:
                '<p>The Pines family resolves to get back to normal after the Li\'l Gideon incident. They throw a "Mystery Shack is Back" party, but some unwelcome guests crash the celebration.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/39068" } }
            },
            {
              id: 39069,
              url: "http://www.tvmaze.com/episodes/39069/gravity-falls-2x02-into-the-bunker",
              name: "Into the Bunker",
              season: 2,
              number: 2,
              airdate: "2014-08-04",
              airtime: "21:30",
              airstamp: "2014-08-05T01:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37894.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37894.jpg"
              },
              summary:
                "<p>Dipper's secret journal pages lead him and the gang to the author's hidden bunker where they find themselves face-to-face with a mysterious figure from Gravity Falls' lore.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39069" } }
            },
            {
              id: 39070,
              url: "http://www.tvmaze.com/episodes/39070/gravity-falls-2x03-the-golf-war",
              name: "The Golf War",
              season: 2,
              number: 3,
              airdate: "2014-08-11",
              airtime: "21:30",
              airstamp: "2014-08-12T01:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37895.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37895.jpg"
              },
              summary:
                "<p>After being belittled by Pacifica one too many times, Mabel challenges her to a miniature golf-off which gets a tad out of control when some local residents offer their help.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39070" } }
            },
            {
              id: 39071,
              url: "http://www.tvmaze.com/episodes/39071/gravity-falls-2x04-sock-opera",
              name: "Sock Opera",
              season: 2,
              number: 4,
              airdate: "2014-09-08",
              airtime: "21:00",
              airstamp: "2014-09-09T01:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37896.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37896.jpg"
              },
              summary:
                "<p>Mabel decides to put on a sock puppet rock opera to impress a local puppeteer, but her show goes awry when Dipper's drive to uncover journal secrets leads to a supernatural disaster.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39071" } }
            },
            {
              id: 39072,
              url: "http://www.tvmaze.com/episodes/39072/gravity-falls-2x05-soos-and-the-real-girl",
              name: "Soos and the Real Girl",
              season: 2,
              number: 5,
              airdate: "2014-09-22",
              airtime: "20:30",
              airstamp: "2014-09-23T00:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37897.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37897.jpg"
              },
              summary:
                "<p>Soos needs a date for his cousin Reggie's engagement party and looks to a dating simulator game to help him talk to girls.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39072" } }
            },
            {
              id: 39073,
              url:
                "http://www.tvmaze.com/episodes/39073/gravity-falls-2x06-little-gift-shop-of-horrors",
              name: "Little Gift Shop of Horrors",
              season: 2,
              number: 6,
              airdate: "2014-10-04",
              airtime: "21:00",
              airstamp: "2014-10-05T01:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37898.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37898.jpg"
              },
              summary:
                "<p>In three separate mysterious tales, Stan is cursed by a Witch, Waddles accidentally eats a bowl of brain-enhancing jelly and builds a machine that allows him to speak for the first time, and Mabel faces her fear of Claymotion.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39073" } }
            },
            {
              id: 39074,
              url:
                "http://www.tvmaze.com/episodes/39074/gravity-falls-2x07-society-of-the-blind-eye",
              name: "Society of the Blind Eye",
              season: 2,
              number: 7,
              airdate: "2014-10-27",
              airtime: "20:30",
              airstamp: "2014-10-28T00:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37899.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37899.jpg"
              },
              summary:
                "<p>The kids, along with Old Man McGucket's help, discover there is a secret society in Gravity Falls.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/39074" } }
            },
            {
              id: 44366,
              url: "http://www.tvmaze.com/episodes/44366/gravity-falls-2x08-blendins-game",
              name: "Blendin's Game",
              season: 2,
              number: 8,
              airdate: "2014-11-10",
              airtime: "20:30",
              airstamp: "2014-11-11T01:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37900.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37900.jpg"
              },
              summary:
                "<p>Blendin Blandin returns to fight Dipper and Mabel in a futuristic battle that could trap the two of them forever in time jail.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/44366" } }
            },
            {
              id: 44370,
              url: "http://www.tvmaze.com/episodes/44370/gravity-falls-2x09-the-love-god",
              name: "The Love God",
              season: 2,
              number: 9,
              airdate: "2014-11-26",
              airtime: "20:00",
              airstamp: "2014-11-27T01:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37901.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37901.jpg"
              },
              summary:
                "<p>Mabel takes matchmaking too far when she steals a love potion from a real love god.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/44370" } }
            },
            {
              id: 120572,
              url:
                "http://www.tvmaze.com/episodes/120572/gravity-falls-2x10-northwest-mansion-noir",
              name: "Northwest Mansion Noir",
              season: 2,
              number: 10,
              airdate: "2015-02-16",
              airtime: "20:30",
              airstamp: "2015-02-17T01:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37902.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37902.jpg"
              },
              summary:
                "<p>Pacifica enlists Dipper's help to rid the Northwest Mansion of a ghost before he wreaks havoc on her fancy party. Nathan Fillion reprises his role as Pacifica's father, Preston Northwest.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/120572" } }
            },
            {
              id: 140722,
              url: "http://www.tvmaze.com/episodes/140722/gravity-falls-2x11-not-what-he-seems",
              name: "Not What He Seems",
              season: 2,
              number: 11,
              airdate: "2015-03-09",
              airtime: "20:30",
              airstamp: "2015-03-10T00:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37903.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37903.jpg"
              },
              summary:
                "<p>After government agents take Stan into custody, Dipper and Mabel question how much they really know about their Grunkle Stan. Nick Offerman guest stars as Agent Powers.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/140722" } }
            },
            {
              id: 171252,
              url: "http://www.tvmaze.com/episodes/171252/gravity-falls-2x12-a-tale-of-two-stans",
              name: "A Tale of Two Stans",
              season: 2,
              number: 12,
              airdate: "2015-07-13",
              airtime: "20:30",
              airstamp: "2015-07-14T00:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37904.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37904.jpg"
              },
              summary:
                '<p>Cornered underneath the Mystery Shack, Stan must finally reveal the secrets of his past and his mysterious portal to Dipper and Mabel. Academy Award winner J.K. Simmons ("Whiplash") recurs as Stan\'s twin brother.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/171252" } }
            },
            {
              id: 185074,
              url:
                "http://www.tvmaze.com/episodes/185074/gravity-falls-2x13-dungeons-dungeons-more-dungeons",
              name: "Dungeons, Dungeons, & More Dungeons",
              season: 2,
              number: 13,
              airdate: "2015-08-03",
              airtime: "20:30",
              airstamp: "2015-08-04T00:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37905.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37905.jpg"
              },
              summary:
                '<p>Dipper finds an unlikely friend to join him with his newest obsession, a board game called "Dungeons, Dungeons &amp; More Dungeons.".</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/185074" } }
            },
            {
              id: 185075,
              url:
                "http://www.tvmaze.com/episodes/185075/gravity-falls-2x14-the-stanchurian-candidate",
              name: "The Stanchurian Candidate",
              season: 2,
              number: 14,
              airdate: "2015-08-24",
              airtime: "20:30",
              airstamp: "2015-08-25T00:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37906.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/37906.jpg"
              },
              summary:
                "<p>When Grunkle Stan decides to run for mayor, Dipper and Mabel have their work cut out for them trying to turn their gaffe-prone uncle into the perfect candidate.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/185075" } }
            },
            {
              id: 206152,
              url: "http://www.tvmaze.com/episodes/206152/gravity-falls-2x15-the-last-mabelcorn",
              name: "The Last Mabelcorn",
              season: 2,
              number: 15,
              airdate: "2015-09-07",
              airtime: "20:30",
              airstamp: "2015-09-08T00:30:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/39281.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/15/39281.jpg"
              },
              summary:
                "<p>A new threat leads Mabel to venture into the enchanted realm of the unicorns. Meanwhile, Dipper learns an unexpected twist about the enigmatic Bill Cipher.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/206152" } }
            },
            {
              id: 206153,
              url: "http://www.tvmaze.com/episodes/206153/gravity-falls-2x16-roadside-attraction",
              name: "Roadside Attraction",
              season: 2,
              number: 16,
              airdate: "2015-09-21",
              airtime: "20:00",
              airstamp: "2015-09-22T00:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/193/484263.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/193/484263.jpg"
              },
              summary:
                "<p>Grunkle Stan takes the kids with him on a road-trip to sabotage all the other tourist traps in Oregon.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/206153" } }
            },
            {
              id: 246467,
              url:
                "http://www.tvmaze.com/episodes/246467/gravity-falls-2x17-dipper-and-mabel-vs-the-future",
              name: "Dipper and Mabel vs. the Future",
              season: 2,
              number: 17,
              airdate: "2015-10-12",
              airtime: "20:00",
              airstamp: "2015-10-13T00:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/193/484264.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/193/484264.jpg"
              },
              summary: "<p>Mabel decides to plan for her and Dipper's 13th birthday party.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/246467" } }
            },
            {
              id: 373257,
              url: "http://www.tvmaze.com/episodes/373257/gravity-falls-2x18-weirdmageddon-1",
              name: "Weirdmageddon (1)",
              season: 2,
              number: 18,
              airdate: "2015-10-26",
              airtime: "20:00",
              airstamp: "2015-10-27T00:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/193/484265.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/193/484265.jpg"
              },
              summary:
                "<p>Bill has returned to take down the Pines family. But this time he has brought some of his friends with him.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/373257" } }
            },
            {
              id: 390549,
              url:
                "http://www.tvmaze.com/episodes/390549/gravity-falls-2x19-weirdmageddon-2-escape-from-reality",
              name: "Weirdmageddon (2): Escape from Reality",
              season: 2,
              number: 19,
              airdate: "2016-02-12",
              airtime: "21:00",
              airstamp: "2016-02-13T02:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/193/484266.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/193/484266.jpg"
              },
              summary:
                "<p>Dipper, Soos and Wendy must save Mabel from a strange new world, while Bill's forces plan their next move.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/390549" } }
            },
            {
              id: 483406,
              url:
                "http://www.tvmaze.com/episodes/483406/gravity-falls-2x20-weirdmageddon-3-take-back-the-falls",
              name: "Weirdmageddon (3): Take Back the Falls",
              season: 2,
              number: 20,
              airdate: "2016-02-15",
              airtime: "19:00",
              airstamp: "2016-02-16T00:00:00+00:00",
              runtime: 44,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/44/111819.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/44/111819.jpg"
              },
              summary:
                "<p>Ford discovers Bill's true motives and a final confrontation with Bill leads to the Pines family's ultimate fate and greatest sacrifice.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/483406" } }
            }
          ],
          previousepisode: {
            id: 483406,
            url:
              "http://www.tvmaze.com/episodes/483406/gravity-falls-2x20-weirdmageddon-3-take-back-the-falls",
            name: "Weirdmageddon (3): Take Back the Falls",
            season: 2,
            number: 20,
            airdate: "2016-02-15",
            airtime: "19:00",
            airstamp: "2016-02-16T00:00:00+00:00",
            runtime: 44,
            image: {
              medium: "http://static.tvmaze.com/uploads/images/medium_landscape/44/111819.jpg",
              original: "http://static.tvmaze.com/uploads/images/original_untouched/44/111819.jpg"
            },
            summary:
              "<p>Ford discovers Bill's true motives and a final confrontation with Bill leads to the Pines family's ultimate fate and greatest sacrifice.</p>",
            _links: { self: { href: "http://api.tvmaze.com/episodes/483406" } }
          }
        }
      };
      const data3 = {
        id: 376,
        url: "http://www.tvmaze.com/shows/376/portlandia",
        name: "Portlandia",
        type: "Scripted",
        language: "English",
        genres: ["Comedy"],
        status: "Ended",
        runtime: 30,
        premiered: "2011-01-21",
        officialSite: "http://www.ifc.com/shows/portlandia",
        schedule: { time: "22:00", days: ["Thursday"] },
        rating: { average: 7.4 },
        weight: 74,
        network: {
          id: 65,
          name: "IFC",
          country: { name: "United States", code: "US", timezone: "America/New_York" }
        },
        webChannel: null,
        externals: { tvrage: 27219, thetvdb: 213221, imdb: "tt1780441" },
        image: {
          medium: "http://static.tvmaze.com/uploads/images/medium_portrait/150/375346.jpg",
          original: "http://static.tvmaze.com/uploads/images/original_untouched/150/375346.jpg"
        },
        summary:
          '<p><b>Portlandia</b> is a follow up to the Fred Armisen (SNL)/Carrie Brownstein comedy collaboration, Thunderant. In the new IFC series (executive- produced by Lorne Michaels), the pair lovingly skewer the people and values of Portland, Ore. by introducing us to Portland archetypes like a militant bike messenger, feminist bookstore owners and an arts &amp; crafts couple who "put birds on things."</p>',
        updated: 1521905079,
        _links: {
          self: { href: "http://api.tvmaze.com/shows/376" },
          previousepisode: { href: "http://api.tvmaze.com/episodes/1415871" }
        },
        _embedded: {
          episodes: [
            {
              id: 34495,
              url: "http://www.tvmaze.com/episodes/34495/portlandia-1x01-farm",
              name: "Farm",
              season: 1,
              number: 1,
              airdate: "2011-01-21",
              airtime: "22:30",
              airstamp: "2011-01-22T03:30:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34495" } }
            },
            {
              id: 34496,
              url: "http://www.tvmaze.com/episodes/34496/portlandia-1x02-a-song-for-portland",
              name: "A Song for Portland",
              season: 1,
              number: 2,
              airdate: "2011-01-28",
              airtime: "22:30",
              airstamp: "2011-01-29T03:30:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34496" } }
            },
            {
              id: 34497,
              url: "http://www.tvmaze.com/episodes/34497/portlandia-1x03-aimee",
              name: "Aimee",
              season: 1,
              number: 3,
              airdate: "2011-02-04",
              airtime: "22:30",
              airstamp: "2011-02-05T03:30:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34497" } }
            },
            {
              id: 34498,
              url: "http://www.tvmaze.com/episodes/34498/portlandia-1x04-mayor-is-missing",
              name: "Mayor is Missing",
              season: 1,
              number: 4,
              airdate: "2011-02-11",
              airtime: "22:30",
              airstamp: "2011-02-12T03:30:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34498" } }
            },
            {
              id: 34500,
              url: "http://www.tvmaze.com/episodes/34500/portlandia-1x05-baseball",
              name: "Baseball",
              season: 1,
              number: 5,
              airdate: "2011-02-18",
              airtime: "22:30",
              airstamp: "2011-02-19T03:30:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34500" } }
            },
            {
              id: 34499,
              url: "http://www.tvmaze.com/episodes/34499/portlandia-1x06-blunderbuss",
              name: "Blunderbuss",
              season: 1,
              number: 6,
              airdate: "2011-02-25",
              airtime: "22:30",
              airstamp: "2011-02-26T03:30:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34499" } }
            },
            {
              id: 34501,
              url: "http://www.tvmaze.com/episodes/34501/portlandia-2x01-mixology",
              name: "Mixology",
              season: 2,
              number: 1,
              airdate: "2012-01-06",
              airtime: "22:00",
              airstamp: "2012-01-07T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34501" } }
            },
            {
              id: 34502,
              url: "http://www.tvmaze.com/episodes/34502/portlandia-2x02-one-moore-episode",
              name: "One Moore Episode",
              season: 2,
              number: 2,
              airdate: "2012-01-13",
              airtime: "22:00",
              airstamp: "2012-01-14T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34502" } }
            },
            {
              id: 34503,
              url: "http://www.tvmaze.com/episodes/34503/portlandia-2x03-cool-wedding",
              name: "Cool Wedding",
              season: 2,
              number: 3,
              airdate: "2012-01-20",
              airtime: "22:00",
              airstamp: "2012-01-21T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34503" } }
            },
            {
              id: 34504,
              url: "http://www.tvmaze.com/episodes/34504/portlandia-2x04-grover",
              name: "Grover",
              season: 2,
              number: 4,
              airdate: "2012-01-27",
              airtime: "22:00",
              airstamp: "2012-01-28T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34504" } }
            },
            {
              id: 34505,
              url: "http://www.tvmaze.com/episodes/34505/portlandia-2x05-cops-redesign",
              name: "Cops Redesign",
              season: 2,
              number: 5,
              airdate: "2012-02-03",
              airtime: "22:00",
              airstamp: "2012-02-04T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34505" } }
            },
            {
              id: 34506,
              url: "http://www.tvmaze.com/episodes/34506/portlandia-2x06-cat-nap",
              name: "Cat Nap",
              season: 2,
              number: 6,
              airdate: "2012-02-10",
              airtime: "22:00",
              airstamp: "2012-02-11T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34506" } }
            },
            {
              id: 34507,
              url: "http://www.tvmaze.com/episodes/34507/portlandia-2x07-motorcycle",
              name: "Motorcycle",
              season: 2,
              number: 7,
              airdate: "2012-02-17",
              airtime: "22:00",
              airstamp: "2012-02-18T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34507" } }
            },
            {
              id: 34508,
              url:
                "http://www.tvmaze.com/episodes/34508/portlandia-2x08-feminist-bookstores-10th-anniversary",
              name: "Feminist Bookstore's 10th Anniversary",
              season: 2,
              number: 8,
              airdate: "2012-02-24",
              airtime: "22:00",
              airstamp: "2012-02-25T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34508" } }
            },
            {
              id: 34509,
              url: "http://www.tvmaze.com/episodes/34509/portlandia-2x09-no-olympics",
              name: "No Olympics",
              season: 2,
              number: 9,
              airdate: "2012-03-02",
              airtime: "22:00",
              airstamp: "2012-03-03T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34509" } }
            },
            {
              id: 34510,
              url: "http://www.tvmaze.com/episodes/34510/portlandia-2x10-brunch-village",
              name: "Brunch Village",
              season: 2,
              number: 10,
              airdate: "2012-03-09",
              airtime: "22:00",
              airstamp: "2012-03-10T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34510" } }
            },
            {
              id: 34511,
              url: "http://www.tvmaze.com/episodes/34511/portlandia-3x01-winter-in-portlandia",
              name: "Winter in Portlandia",
              season: 3,
              number: 1,
              airdate: "2012-12-14",
              airtime: "22:30",
              airstamp: "2012-12-15T03:30:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34511" } }
            },
            {
              id: 34512,
              url: "http://www.tvmaze.com/episodes/34512/portlandia-3x02-take-back-mtv",
              name: "Take Back MTV",
              season: 3,
              number: 2,
              airdate: "2013-01-04",
              airtime: "22:00",
              airstamp: "2013-01-05T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34512" } }
            },
            {
              id: 34513,
              url: "http://www.tvmaze.com/episodes/34513/portlandia-3x03-missionaries",
              name: "Missionaries",
              season: 3,
              number: 3,
              airdate: "2013-01-04",
              airtime: "22:30",
              airstamp: "2013-01-05T03:30:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34513" } }
            },
            {
              id: 34514,
              url: "http://www.tvmaze.com/episodes/34514/portlandia-3x04-ninas-birthday",
              name: "Nina's Birthday",
              season: 3,
              number: 4,
              airdate: "2013-01-11",
              airtime: "22:00",
              airstamp: "2013-01-12T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34514" } }
            },
            {
              id: 34515,
              url: "http://www.tvmaze.com/episodes/34515/portlandia-3x05-squiggleman",
              name: "Squiggleman",
              season: 3,
              number: 5,
              airdate: "2013-01-18",
              airtime: "22:00",
              airstamp: "2013-01-19T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34515" } }
            },
            {
              id: 34516,
              url: "http://www.tvmaze.com/episodes/34516/portlandia-3x06-off-the-grid",
              name: "Off the Grid",
              season: 3,
              number: 6,
              airdate: "2013-01-25",
              airtime: "22:00",
              airstamp: "2013-01-26T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34516" } }
            },
            {
              id: 34517,
              url: "http://www.tvmaze.com/episodes/34517/portlandia-3x07-the-temp",
              name: "The Temp",
              season: 3,
              number: 7,
              airdate: "2013-02-01",
              airtime: "22:00",
              airstamp: "2013-02-02T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34517" } }
            },
            {
              id: 34518,
              url: "http://www.tvmaze.com/episodes/34518/portlandia-3x08-soft-opening",
              name: "Soft Opening",
              season: 3,
              number: 8,
              airdate: "2013-02-08",
              airtime: "22:00",
              airstamp: "2013-02-09T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34518" } }
            },
            {
              id: 34519,
              url: "http://www.tvmaze.com/episodes/34519/portlandia-3x09-alexandra",
              name: "Alexandra",
              season: 3,
              number: 9,
              airdate: "2013-02-15",
              airtime: "22:00",
              airstamp: "2013-02-16T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34519" } }
            },
            {
              id: 34520,
              url: "http://www.tvmaze.com/episodes/34520/portlandia-3x10-no-fo-o-fo-bridge",
              name: "No-Fo-O-Fo-Bridge",
              season: 3,
              number: 10,
              airdate: "2013-02-22",
              airtime: "22:00",
              airstamp: "2013-02-23T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34520" } }
            },
            {
              id: 34521,
              url: "http://www.tvmaze.com/episodes/34521/portlandia-3x11-blackout",
              name: "Blackout",
              season: 3,
              number: 11,
              airdate: "2013-03-01",
              airtime: "22:00",
              airstamp: "2013-03-02T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34521" } }
            },
            {
              id: 34522,
              url: "http://www.tvmaze.com/episodes/34522/portlandia-4x01-sharing-finances",
              name: "Sharing Finances",
              season: 4,
              number: 1,
              airdate: "2014-02-27",
              airtime: "22:00",
              airstamp: "2014-02-28T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34522" } }
            },
            {
              id: 34523,
              url: "http://www.tvmaze.com/episodes/34523/portlandia-4x02-ecoterrorists",
              name: "Ecoterrorists",
              season: 4,
              number: 2,
              airdate: "2014-03-06",
              airtime: "22:00",
              airstamp: "2014-03-07T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34523" } }
            },
            {
              id: 34524,
              url: "http://www.tvmaze.com/episodes/34524/portlandia-4x03-celery-guy",
              name: "Celery Guy",
              season: 4,
              number: 3,
              airdate: "2014-03-13",
              airtime: "22:00",
              airstamp: "2014-03-14T02:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34524" } }
            },
            {
              id: 34525,
              url: "http://www.tvmaze.com/episodes/34525/portlandia-4x04-pull-out-king",
              name: "Pull-Out King",
              season: 4,
              number: 4,
              airdate: "2014-03-20",
              airtime: "22:00",
              airstamp: "2014-03-21T02:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34525" } }
            },
            {
              id: 34526,
              url: "http://www.tvmaze.com/episodes/34526/portlandia-4x05-spyke-drives",
              name: "Spyke Drives",
              season: 4,
              number: 5,
              airdate: "2014-03-27",
              airtime: "22:00",
              airstamp: "2014-03-28T02:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34526" } }
            },
            {
              id: 34527,
              url: "http://www.tvmaze.com/episodes/34527/portlandia-4x06-bahama-knights",
              name: "Bahama Knights",
              season: 4,
              number: 6,
              airdate: "2014-04-03",
              airtime: "22:00",
              airstamp: "2014-04-04T02:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34527" } }
            },
            {
              id: 34528,
              url: "http://www.tvmaze.com/episodes/34528/portlandia-4x07-trail-blazers",
              name: "Trail Blazers",
              season: 4,
              number: 7,
              airdate: "2014-04-10",
              airtime: "22:00",
              airstamp: "2014-04-11T02:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34528" } }
            },
            {
              id: 34529,
              url: "http://www.tvmaze.com/episodes/34529/portlandia-4x08-late-in-life-drug-use",
              name: "Late in Life Drug Use",
              season: 4,
              number: 8,
              airdate: "2014-04-17",
              airtime: "22:00",
              airstamp: "2014-04-18T02:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34529" } }
            },
            {
              id: 34530,
              url: "http://www.tvmaze.com/episodes/34530/portlandia-4x09-3d-printer",
              name: "3D Printer",
              season: 4,
              number: 9,
              airdate: "2014-04-24",
              airtime: "22:00",
              airstamp: "2014-04-25T02:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34530" } }
            },
            {
              id: 34531,
              url: "http://www.tvmaze.com/episodes/34531/portlandia-4x10-getting-away",
              name: "Getting Away",
              season: 4,
              number: 10,
              airdate: "2014-05-01",
              airtime: "22:00",
              airstamp: "2014-05-02T02:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/34531" } }
            },
            {
              id: 116531,
              url:
                "http://www.tvmaze.com/episodes/116531/portlandia-5x01-the-story-of-toni-and-candace",
              name: "The Story of Toni and Candace",
              season: 5,
              number: 1,
              airdate: "2015-01-08",
              airtime: "22:00",
              airstamp: "2015-01-09T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/116531" } }
            },
            {
              id: 116532,
              url: "http://www.tvmaze.com/episodes/116532/portlandia-5x02-the-fiancee",
              name: "The Fiancée",
              season: 5,
              number: 2,
              airdate: "2015-01-15",
              airtime: "22:00",
              airstamp: "2015-01-16T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/116532" } }
            },
            {
              id: 116533,
              url: "http://www.tvmaze.com/episodes/116533/portlandia-5x03-healthcare",
              name: "Healthcare",
              season: 5,
              number: 3,
              airdate: "2015-01-22",
              airtime: "22:00",
              airstamp: "2015-01-23T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/116533" } }
            },
            {
              id: 116534,
              url: "http://www.tvmaze.com/episodes/116534/portlandia-5x04-seaworld",
              name: "Seaworld",
              season: 5,
              number: 4,
              airdate: "2015-01-29",
              airtime: "22:00",
              airstamp: "2015-01-30T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "",
              _links: { self: { href: "http://api.tvmaze.com/episodes/116534" } }
            },
            {
              id: 129501,
              url: "http://www.tvmaze.com/episodes/129501/portlandia-5x05-4th-of-july",
              name: "4th of July",
              season: 5,
              number: 5,
              airdate: "2015-02-05",
              airtime: "22:00",
              airstamp: "2015-02-06T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/101/253240.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/101/253240.jpg"
              },
              summary:
                "<p>While Dave and Kath plan the best barbeque ever, the mayor goes underground to find fireworks for the city's celebration.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/129501" } }
            },
            {
              id: 129502,
              url: "http://www.tvmaze.com/episodes/129502/portlandia-5x06-fashion",
              name: "Fashion",
              season: 5,
              number: 6,
              airdate: "2015-02-12",
              airtime: "22:00",
              airstamp: "2015-02-13T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary:
                '<p>Quinn is recruited to be the face of a discount company\'s rebranding campaign, while Spyke gets caught with unlicensed "The Simpsons" merchandise.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/129502" } }
            },
            {
              id: 129503,
              url: "http://www.tvmaze.com/episodes/129503/portlandia-5x07-doug-becomes-a-feminist",
              name: "Doug Becomes a Feminist",
              season: 5,
              number: 7,
              airdate: "2015-02-19",
              airtime: "22:00",
              airstamp: "2015-02-20T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary:
                "<p>Doug considers the fact that he may be a male feminist, while Sandra gives Rideshare a shot.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/129503" } }
            },
            {
              id: 129504,
              url: "http://www.tvmaze.com/episodes/129504/portlandia-5x08-house-for-sale",
              name: "House for Sale",
              season: 5,
              number: 8,
              airdate: "2015-02-26",
              airtime: "22:00",
              airstamp: "2015-02-27T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary:
                "<p>The landlord moves into Carrie and Fred's house; Kath and Dave look to purchase a new home that they plan to renovate.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/129504" } }
            },
            {
              id: 129505,
              url: "http://www.tvmaze.com/episodes/129505/portlandia-5x09-you-can-call-me-al",
              name: "You Can Call Me Al",
              season: 5,
              number: 9,
              airdate: "2015-03-05",
              airtime: "22:00",
              airstamp: "2015-03-06T03:00:00+00:00",
              runtime: 30,
              image: null,
              summary: "<p>Dave and Kath try to squeeze in rehearsals for a karaoke party.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/129505" } }
            },
            {
              id: 129506,
              url: "http://www.tvmaze.com/episodes/129506/portlandia-5x10-dead-pets",
              name: "Dead Pets",
              season: 5,
              number: 10,
              airdate: "2015-03-12",
              airtime: "22:00",
              airstamp: "2015-03-13T02:00:00+00:00",
              runtime: 30,
              image: null,
              summary:
                "<p>Police round up unusual suspects after a taxidermy establishment is burned down.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/129506" } }
            },
            {
              id: 483073,
              url: "http://www.tvmaze.com/episodes/483073/portlandia-6x01-pickathon",
              name: "Pickathon",
              season: 6,
              number: 1,
              airdate: "2016-01-21",
              airtime: "22:00",
              airstamp: "2016-01-22T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/44/111635.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/44/111635.jpg"
              },
              summary:
                "<p>In the Season 6 premiere, the Flaming Lips headline the town's big music festival, which Brendan and Michelle attend via drone.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/483073" } }
            },
            {
              id: 561041,
              url: "http://www.tvmaze.com/episodes/561041/portlandia-6x02-going-gray",
              name: "Going Gray",
              season: 6,
              number: 2,
              airdate: "2016-01-28",
              airtime: "22:00",
              airstamp: "2016-01-29T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/44/111637.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/44/111637.jpg"
              },
              summary:
                "<p>When Fred awakens with a head of grey hair, he decides it's time to find out just how old he is, while Carrie contemplates a life-altering decision.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/561041" } }
            },
            {
              id: 561042,
              url: "http://www.tvmaze.com/episodes/561042/portlandia-6x03-shville",
              name: "Shville",
              season: 6,
              number: 3,
              airdate: "2016-02-04",
              airtime: "22:00",
              airstamp: "2016-02-05T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/44/111634.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/44/111634.jpg"
              },
              summary:
                "<p>Fred considers a life-changing move to Austin; unexpected guests show up at Carrie's, and motherhood arrives for her.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/561042" } }
            },
            {
              id: 591621,
              url: "http://www.tvmaze.com/episodes/591621/portlandia-6x04-weirdo-beach",
              name: "Weirdo Beach",
              season: 6,
              number: 4,
              airdate: "2016-02-11",
              airtime: "22:00",
              airstamp: "2016-02-12T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/44/111638.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/44/111638.jpg"
              },
              summary:
                "<p>The Weirdos head to the beach but run into problems with their hearse; an office worker is upset with colleagues using her new charger.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/591621" } }
            },
            {
              id: 591624,
              url: "http://www.tvmaze.com/episodes/591624/portlandia-6x05-breaking-up",
              name: "Breaking Up",
              season: 6,
              number: 5,
              airdate: "2016-02-18",
              airtime: "22:00",
              airstamp: "2016-02-19T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/45/113635.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/45/113635.jpg"
              },
              summary:
                "<p>Claire has had enough of Doug's behavior and breaks up with him; Claire and Doug date new people and discover surprising things about themselves.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/591624" } }
            },
            {
              id: 591625,
              url: "http://www.tvmaze.com/episodes/591625/portlandia-6x06-tada",
              name: "TADA",
              season: 6,
              number: 6,
              airdate: "2016-02-25",
              airtime: "22:00",
              airstamp: "2016-02-26T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/47/118814.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/47/118814.jpg"
              },
              summary:
                "<p>Kath and Dave's accident leaves them temporarily disabled and feeling insignificant; a car service app user dodges surge pricing by calling a cab.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/591625" } }
            },
            {
              id: 591626,
              url: "http://www.tvmaze.com/episodes/591626/portlandia-6x07-family-emergency",
              name: "Family Emergency",
              season: 6,
              number: 7,
              airdate: "2016-03-03",
              airtime: "22:00",
              airstamp: "2016-03-04T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/47/118815.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/47/118815.jpg"
              },
              summary:
                "<p>Louis C.K. cancels a show in Portland due to a family emergency; Fred and Carrie are asked to judge a plume contest.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/591626" } }
            },
            {
              id: 591627,
              url: "http://www.tvmaze.com/episodes/591627/portlandia-6x08-first-feminist-city",
              name: "First Feminist City",
              season: 6,
              number: 8,
              airdate: "2016-03-10",
              airtime: "22:00",
              airstamp: "2016-03-11T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/48/120934.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/48/120934.jpg"
              },
              summary:
                "<p>Portland is declared the most feminist city in the country and Toni and Candace try to deal with all of the attention; the town opens a Femi-Mart.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/591627" } }
            },
            {
              id: 591628,
              url: "http://www.tvmaze.com/episodes/591628/portlandia-6x09-lance-is-smart",
              name: "Lance is Smart",
              season: 6,
              number: 9,
              airdate: "2016-03-17",
              airtime: "22:00",
              airstamp: "2016-03-18T02:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/49/123298.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/49/123298.jpg"
              },
              summary:
                "<p>Lance joins an intellectual crowd; Nina hires a tutor to help her win over Lance's new friends.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/591628" } }
            },
            {
              id: 591629,
              url: "http://www.tvmaze.com/episodes/591629/portlandia-6x10-noodle-monster",
              name: "Noodle Monster",
              season: 6,
              number: 10,
              airdate: "2016-03-24",
              airtime: "22:00",
              airstamp: "2016-03-25T02:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/50/125713.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/50/125713.jpg"
              },
              summary:
                "<p>A ramen creature terrorizes Portland; the mayor enlists Fred and Carrie to help impress a major brand visiting the city.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/591629" } }
            },
            {
              id: 979048,
              url: "http://www.tvmaze.com/episodes/979048/portlandia-7x01-the-storytellers",
              name: "The Storytellers",
              season: 7,
              number: 1,
              airdate: "2017-01-05",
              airtime: "22:00",
              airstamp: "2017-01-06T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/92/230332.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/92/230332.jpg"
              },
              summary:
                "<p>Fred and Carrie consult with a storytelling expert. A traveler checks into an unconventional hotel. The weirdos discover Bed, Bath and Beyond.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/979048" } }
            },
            {
              id: 1029541,
              url: "http://www.tvmaze.com/episodes/1029541/portlandia-7x02-carrie-dates-a-hunk",
              name: "Carrie Dates a Hunk",
              season: 7,
              number: 2,
              airdate: "2017-01-12",
              airtime: "22:00",
              airstamp: "2017-01-13T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/93/232985.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/93/232985.jpg"
              },
              summary:
                '<p>Carrie gets a hunky new beau for whom Fred doesn\'t care; Melanie and Lars decide on a rug; Drew and Andy consider the question, "What about men?"</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/1029541" } }
            },
            {
              id: 1030184,
              url:
                "http://www.tvmaze.com/episodes/1030184/portlandia-7x03-freds-cell-phone-company",
              name: "Fred's Cell Phone Company",
              season: 7,
              number: 3,
              airdate: "2017-01-19",
              airtime: "22:00",
              airstamp: "2017-01-20T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/94/235216.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/94/235216.jpg"
              },
              summary:
                "<p>Fred undertakes a new business venture that poses some problems; Kate and Sam experience the pitfalls of long-distance romance; Drew and Andy plan a funeral service; Nina gives a massage chair to Lance and it's a game-changer.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1030184" } }
            },
            {
              id: 1030185,
              url: "http://www.tvmaze.com/episodes/1030185/portlandia-7x04-separation-anxiety",
              name: "Separation Anxiety",
              season: 7,
              number: 4,
              airdate: "2017-01-26",
              airtime: "22:00",
              airstamp: "2017-01-27T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/94/237495.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/94/237495.jpg"
              },
              summary:
                "<p>Despite retiring, Toni and Candace realize there is still some unfinished business to deal with; Drew and Andy give gingerbread cookies a new look; Peter and Nance indulge in a new protein diet; and the rats consider the charms of squirrels.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1030185" } }
            },
            {
              id: 1034449,
              url: "http://www.tvmaze.com/episodes/1034449/portlandia-7x05-amore",
              name: "Amore",
              season: 7,
              number: 5,
              airdate: "2017-02-02",
              airtime: "22:00",
              airstamp: "2017-02-03T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/96/240889.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/96/240889.jpg"
              },
              summary:
                '<p>Fred has a marriage arranged. A Couple opens a movie theater with a real at-home experience. A school hires a bully to teach children grit. A creepy guy keeps commenting "Beautiful" on social media posts.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/1034449" } }
            },
            {
              id: 1034450,
              url: "http://www.tvmaze.com/episodes/1034450/portlandia-7x06-friend-replacement",
              name: "Friend Replacement",
              season: 7,
              number: 6,
              airdate: "2017-02-09",
              airtime: "22:00",
              airstamp: "2017-02-10T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/97/243970.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/97/243970.jpg"
              },
              summary:
                "<p>Carrie looks for a new friend. Jill's office anxieties cause her to try a radical diet. Drew and Andy host a film festival. A scientist pitches the cure for modern life. Ghavin opens an elaborate box set.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1034450" } }
            },
            {
              id: 1034451,
              url: "http://www.tvmaze.com/episodes/1034451/portlandia-7x07-portland-secedes",
              name: "Portland Secedes",
              season: 7,
              number: 7,
              airdate: "2017-02-16",
              airtime: "22:00",
              airstamp: "2017-02-17T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/98/247033.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/98/247033.jpg"
              },
              summary:
                "<p>Fred and Carrie help the Mayor secede Portland from the United States. The eco-terrorists receive an award for Best Protest. Peter thinks he might be Banksy. Dave and Kath leave passive-aggressive notes on cars.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1034451" } }
            },
            {
              id: 1076325,
              url: "http://www.tvmaze.com/episodes/1076325/portlandia-7x08-ants",
              name: "Ants",
              season: 7,
              number: 8,
              airdate: "2017-02-23",
              airtime: "22:00",
              airstamp: "2017-02-24T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/100/251512.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/100/251512.jpg"
              },
              summary:
                '<p>Nina and Lance deal with an ant infestation. The mayor attempts to break a world record. "Time Tailors" evaluate a man\'s schedule. The eco-terrorists brainstorm how to make an impressive event entrance.</p>',
              _links: { self: { href: "http://api.tvmaze.com/episodes/1076325" } }
            },
            {
              id: 1076326,
              url: "http://www.tvmaze.com/episodes/1076326/portlandia-7x09-passenger-rating",
              name: "Passenger Rating",
              season: 7,
              number: 9,
              airdate: "2017-03-02",
              airtime: "22:00",
              airstamp: "2017-03-03T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/100/251513.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/100/251513.jpg"
              },
              summary:
                "<p>Carrie tries to improve her passenger rating on a ride sharing app. A local actor teaches a boss how to fire employees. The National Small Talk Convention takes place. Sandra develops a close relationship with her customer service representative.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1076326" } }
            },
            {
              id: 1076327,
              url: "http://www.tvmaze.com/episodes/1076327/portlandia-7x10-misunderstood-miracles",
              name: "Misunderstood Miracles",
              season: 7,
              number: 10,
              airdate: "2017-03-09",
              airtime: "22:00",
              airstamp: "2017-03-10T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/101/253897.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/101/253897.jpg"
              },
              summary:
                "<p>Sandra teaches a pit bull self-control. Fred and Carrie attempt protesting for cyclist rights. Lisa and Bryce sell instant garbage. A couple explains alcohol to their adult son. Fred discovers models.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1076327" } }
            },
            {
              id: 1290229,
              url: "http://www.tvmaze.com/episodes/1290229/portlandia-8x01-riot-spray",
              name: "Riot Spray",
              season: 8,
              number: 1,
              airdate: "2018-01-18",
              airtime: "22:00",
              airstamp: "2018-01-19T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/142/357247.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/142/357247.jpg"
              },
              summary:
                "<p>Spyke gets his old band back together; podcasters investigate a police station; Candace brings Toni to her childhood summer home; Brendan and Michelle consider buying a van.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1290229" } }
            },
            {
              id: 1367902,
              url: "http://www.tvmaze.com/episodes/1367902/portlandia-8x02-shared-workspace",
              name: "Shared Workspace",
              season: 8,
              number: 2,
              airdate: "2018-01-25",
              airtime: "22:00",
              airstamp: "2018-01-26T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/143/359798.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/143/359798.jpg"
              },
              summary:
                "<p>Toni and Candace get involved in women's healthcare; Peter and Nance deal with a spicy sushi situation; Kathleen becomes the first female partner at her firm; and a single guy interrupts a couples' dinner.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1367902" } }
            },
            {
              id: 1367903,
              url: "http://www.tvmaze.com/episodes/1367903/portlandia-8x03-no-thank-you",
              name: "No Thank You",
              season: 8,
              number: 3,
              airdate: "2018-02-01",
              airtime: "22:00",
              airstamp: "2018-02-02T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/144/361915.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/144/361915.jpg"
              },
              summary:
                "<p>Fred &amp; Carrie help Rachel navigate the world of dating apps. Kath &amp; Dave take on an escape room. Joey tries therapy. Andy &amp; Drew swear off women.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1367903" } }
            },
            {
              id: 1367904,
              url: "http://www.tvmaze.com/episodes/1367904/portlandia-8x04-abracadabra",
              name: "Abracadabra",
              season: 8,
              number: 4,
              airdate: "2018-02-08",
              airtime: "22:00",
              airstamp: "2018-02-09T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/145/364229.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/145/364229.jpg"
              },
              summary:
                "<p>Nina &amp; Lance tell the story of how they met. A couple uses distraction cancelling glasses. Peter &amp; Nance look forward to breakfast.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1367904" } }
            },
            {
              id: 1389479,
              url: "http://www.tvmaze.com/episodes/1389479/portlandia-8x05-open-relationship",
              name: "Open Relationship",
              season: 8,
              number: 5,
              airdate: "2018-02-15",
              airtime: "22:00",
              airstamp: "2018-02-16T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/146/365999.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/146/365999.jpg"
              },
              summary:
                "<p>Doug &amp; Claire try an open relationship. A company uses VR for an important meeting. The Mayor waits for a helicopter. Fred steps on a snail.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1389479" } }
            },
            {
              id: 1389480,
              url: "http://www.tvmaze.com/episodes/1389480/portlandia-8x06-you-do-you",
              name: "You Do You",
              season: 8,
              number: 6,
              airdate: "2018-02-22",
              airtime: "22:00",
              airstamp: "2018-02-23T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/146/366000.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/146/366000.jpg"
              },
              summary:
                "<p>andra discovers she can have it all. Jamie's co-workers help her get over a cold. Portland adds more lanes to the freeway. Fred and Carrie prepare for a natural disaster. Kath and Dave learn the art of taking photobooth pictures. A trampoline company's legal department experiences another hectic day.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1389480" } }
            },
            {
              id: 1389481,
              url: "http://www.tvmaze.com/episodes/1389481/portlandia-8x07-most-pro-city",
              name: "Most Pro City",
              season: 8,
              number: 7,
              airdate: "2018-03-01",
              airtime: "22:00",
              airstamp: "2018-03-02T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/147/369086.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/147/369086.jpg"
              },
              summary:
                "<p>The Mayor sets out to prove Portland's diversity. Text message drama unfolds during a business meeting. Activists on a hunger strike take a cheat day.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1389481" } }
            },
            {
              id: 1389482,
              url: "http://www.tvmaze.com/episodes/1389482/portlandia-8x08-peter-follows-pnk",
              name: "Peter Follows P!nk",
              season: 8,
              number: 8,
              airdate: "2018-03-08",
              airtime: "22:00",
              airstamp: "2018-03-09T03:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/148/371386.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/148/371386.jpg"
              },
              summary:
                "<p>Peter &amp; Nance interact with celebs on social media. James rides his bike to work. Gil &amp; George say Oh, Hello to Toni &amp; Candace.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1389482" } }
            },
            {
              id: 1415870,
              url: "http://www.tvmaze.com/episodes/1415870/portlandia-8x09-long-way-back",
              name: "Long Way Back",
              season: 8,
              number: 9,
              airdate: "2018-03-15",
              airtime: "22:00",
              airstamp: "2018-03-16T02:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/149/373373.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/149/373373.jpg"
              },
              summary:
                "<p>The Weirdos lose their favorite trash can, which takes an unexpected journey throughout the city; Malcolm and Kris visit their pediatrician; Peter and Nance wonder why they've never been hacked; Fred and Carrie just give up</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1415870" } }
            },
            {
              id: 1415871,
              url: "http://www.tvmaze.com/episodes/1415871/portlandia-8x10-rose-route",
              name: "Rose Route",
              season: 8,
              number: 10,
              airdate: "2018-03-22",
              airtime: "22:00",
              airstamp: "2018-03-23T02:00:00+00:00",
              runtime: 30,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/150/375604.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/150/375604.jpg"
              },
              summary:
                "<p>The Mayor cuts deals all over town to secure the perfect route for the Portland Marathon; Fred and Carrie decide to run to break their addiction to news alerts; Candace's house guest Dolly quickly becomes her new best friend.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1415871" } }
            }
          ],
          previousepisode: {
            id: 1415871,
            url: "http://www.tvmaze.com/episodes/1415871/portlandia-8x10-rose-route",
            name: "Rose Route",
            season: 8,
            number: 10,
            airdate: "2018-03-22",
            airtime: "22:00",
            airstamp: "2018-03-23T02:00:00+00:00",
            runtime: 30,
            image: {
              medium: "http://static.tvmaze.com/uploads/images/medium_landscape/150/375604.jpg",
              original: "http://static.tvmaze.com/uploads/images/original_untouched/150/375604.jpg"
            },
            summary:
              "<p>The Mayor cuts deals all over town to secure the perfect route for the Portland Marathon; Fred and Carrie decide to run to break their addiction to news alerts; Candace's house guest Dolly quickly becomes her new best friend.</p>",
            _links: { self: { href: "http://api.tvmaze.com/episodes/1415871" } }
          }
        }
      };
      const data4 = {
        id: 24268,
        url: "http://www.tvmaze.com/shows/24268/on-becoming-a-god-in-central-florida",
        name: "On Becoming a God in Central Florida",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Comedy"],
        status: "Running",
        runtime: 60,
        premiered: "2019-08-25",
        officialSite: "https://www.sho.com/on-becoming-a-god-in-central-florida",
        schedule: { time: "22:00", days: ["Sunday"] },
        rating: { average: 7.3 },
        weight: 100,
        network: {
          id: 9,
          name: "Showtime",
          country: { name: "United States", code: "US", timezone: "America/New_York" }
        },
        webChannel: null,
        externals: { tvrage: null, thetvdb: 349638, imdb: "tt6398232" },
        image: {
          medium: "http://static.tvmaze.com/uploads/images/medium_portrait/205/513021.jpg",
          original: "http://static.tvmaze.com/uploads/images/original_untouched/205/513021.jpg"
        },
        summary:
          "<p><b>On Becoming a God in Central Florida</b> follows Krystal Stubbs, a minimum-wage water park employee who lies, schemes and cons her way up the ranks of Founders American Merchandise (FAM) — the cultish, flag-waving, multibillion-dollar pyramid scheme that drove her to ruin in the first place, run by the powerful Obie Garbeau II. Determined to make a better life for herself, Krystal dives deep into FAM and develops a tangled relationship with FAM's most loyal and fanatical follower Cody, until her business begins to affect those closest to her, including Ernie, her affable water park boss, and his FAM-skeptic wife Bets.</p>",
        updated: 1567716935,
        _links: {
          self: { href: "http://api.tvmaze.com/shows/24268" },
          previousepisode: { href: "http://api.tvmaze.com/episodes/1690195" },
          nextepisode: { href: "http://api.tvmaze.com/episodes/1690196" }
        },
        _embedded: {
          episodes: [
            {
              id: 1672185,
              url:
                "http://www.tvmaze.com/episodes/1672185/on-becoming-a-god-in-central-florida-1x01-the-stinker-thinker",
              name: "The Stinker Thinker",
              season: 1,
              number: 1,
              airdate: "2019-08-25",
              airtime: "22:00",
              airstamp: "2019-08-26T02:00:00+00:00",
              runtime: 45,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/208/521254.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/208/521254.jpg"
              },
              summary:
                "<p>Krystal Stubbs doubles down on her husband's dreams while he wrestles with leaving his J-O-B. Cody loses a friend, but meets his hero.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1672185" } }
            },
            {
              id: 1690194,
              url:
                "http://www.tvmaze.com/episodes/1690194/on-becoming-a-god-in-central-florida-1x02-the-gloomy-zoomies",
              name: "The Gloomy-Zoomies",
              season: 1,
              number: 2,
              airdate: "2019-08-25",
              airtime: "22:45",
              airstamp: "2019-08-26T02:45:00+00:00",
              runtime: 45,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/208/521256.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/208/521256.jpg"
              },
              summary:
                "<p>Krystal networks her way into an opportunity in the beauty pageant industry. Cody tries to be his own workhorse. Ernie builds a time capsule.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1690194" } }
            },
            {
              id: 1690195,
              url:
                "http://www.tvmaze.com/episodes/1690195/on-becoming-a-god-in-central-florida-1x03-a-positive-spin",
              name: "A Positive Spin!",
              season: 1,
              number: 3,
              airdate: "2019-09-01",
              airtime: "22:00",
              airstamp: "2019-09-02T02:00:00+00:00",
              runtime: 60,
              image: {
                medium: "http://static.tvmaze.com/uploads/images/medium_landscape/209/524132.jpg",
                original:
                  "http://static.tvmaze.com/uploads/images/original_untouched/209/524132.jpg"
              },
              summary:
                "<p>Krystal and Cody throw a rally. Ernie tries to connect with his son. Stan finds a new supplier for the water park.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1690195" } }
            },
            {
              id: 1690196,
              url:
                "http://www.tvmaze.com/episodes/1690196/on-becoming-a-god-in-central-florida-1x04-manifest-destinee",
              name: "Manifest Destinee",
              season: 1,
              number: 4,
              airdate: "2019-09-08",
              airtime: "22:00",
              airstamp: "2019-09-09T02:00:00+00:00",
              runtime: 60,
              image: null,
              summary:
                "<p>Stricken with a bird disease, Krystal goes on an odyssey. A collection of vintage motivational tapes just might change Cody's destiny. Ernie tries recruiting.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1690196" } }
            },
            {
              id: 1690197,
              url:
                "http://www.tvmaze.com/episodes/1690197/on-becoming-a-god-in-central-florida-1x05-many-masters",
              name: "Many Masters",
              season: 1,
              number: 5,
              airdate: "2019-09-15",
              airtime: "22:00",
              airstamp: "2019-09-16T02:00:00+00:00",
              runtime: 60,
              image: null,
              summary:
                "<p>Obie and Louise Garbeau host a lavish motivational retreat at Paradise Cay for Washington-level entrepreneurs.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1690197" } }
            },
            {
              id: 1690198,
              url:
                "http://www.tvmaze.com/episodes/1690198/on-becoming-a-god-in-central-florida-1x06-american-merchandise",
              name: "American Merchandise",
              season: 1,
              number: 6,
              airdate: "2019-09-22",
              airtime: "22:00",
              airstamp: "2019-09-23T02:00:00+00:00",
              runtime: 60,
              image: null,
              summary:
                "<p>Krystal rubs elbows with the upper crust. Cody makes a surprising business proposal. Ernie finds his rhythm as a recruiter and celebrates with pizza.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1690198" } }
            },
            {
              id: 1691235,
              url:
                "http://www.tvmaze.com/episodes/1691235/on-becoming-a-god-in-central-florida-1x07-flint-glass",
              name: "Flint Glass",
              season: 1,
              number: 7,
              airdate: "2019-09-29",
              airtime: "22:00",
              airstamp: "2019-09-30T02:00:00+00:00",
              runtime: 60,
              image: null,
              summary:
                "<p>Krystal takes initiative and drums up some press for her business. Cody finally gets some one-on-one coaching. Bets isn't sure about FAM.</p>",
              _links: { self: { href: "http://api.tvmaze.com/episodes/1691235" } }
            },
            {
              id: 1691236,
              url:
                "http://www.tvmaze.com/episodes/1691236/on-becoming-a-god-in-central-florida-1x08-birthday-party",
              name: "Birthday Party",
              season: 1,
              number: 8,
              airdate: "2019-10-06",
              airtime: "22:00",
              airstamp: "2019-10-07T02:00:00+00:00",
              runtime: 60,
              image: null,
              summary: null,
              _links: { self: { href: "http://api.tvmaze.com/episodes/1691236" } }
            },
            {
              id: 1691237,
              url:
                "http://www.tvmaze.com/episodes/1691237/on-becoming-a-god-in-central-florida-1x09-wham-bam-thank-you-fam",
              name: "Wham Bam Thank You Fam",
              season: 1,
              number: 9,
              airdate: "2019-10-13",
              airtime: "22:00",
              airstamp: "2019-10-14T02:00:00+00:00",
              runtime: 60,
              image: null,
              summary: null,
              _links: { self: { href: "http://api.tvmaze.com/episodes/1691237" } }
            },
            {
              id: 1698193,
              url:
                "http://www.tvmaze.com/episodes/1698193/on-becoming-a-god-in-central-florida-1x10-go-getters-gonna-go-getcha",
              name: "Go Getters Gonna Go Getcha",
              season: 1,
              number: 10,
              airdate: "2019-10-20",
              airtime: "22:30",
              airstamp: "2019-10-21T02:30:00+00:00",
              runtime: 60,
              image: null,
              summary: null,
              _links: { self: { href: "http://api.tvmaze.com/episodes/1698193" } }
            }
          ],
          nextepisode: {
            id: 1690196,
            url:
              "http://www.tvmaze.com/episodes/1690196/on-becoming-a-god-in-central-florida-1x04-manifest-destinee",
            name: "Manifest Destinee",
            season: 1,
            number: 4,
            airdate: "2019-09-08",
            airtime: "22:00",
            airstamp: "2019-09-09T02:00:00+00:00",
            runtime: 60,
            image: null,
            summary:
              "<p>Stricken with a bird disease, Krystal goes on an odyssey. A collection of vintage motivational tapes just might change Cody's destiny. Ernie tries recruiting.</p>",
            _links: { self: { href: "http://api.tvmaze.com/episodes/1690196" } }
          },
          previousepisode: {
            id: 1690195,
            url:
              "http://www.tvmaze.com/episodes/1690195/on-becoming-a-god-in-central-florida-1x03-a-positive-spin",
            name: "A Positive Spin!",
            season: 1,
            number: 3,
            airdate: "2019-09-01",
            airtime: "22:00",
            airstamp: "2019-09-02T02:00:00+00:00",
            runtime: 60,
            image: {
              medium: "http://static.tvmaze.com/uploads/images/medium_landscape/209/524132.jpg",
              original: "http://static.tvmaze.com/uploads/images/original_untouched/209/524132.jpg"
            },
            summary:
              "<p>Krystal and Cody throw a rally. Ernie tries to connect with his son. Stan finds a new supplier for the water park.</p>",
            _links: { self: { href: "http://api.tvmaze.com/episodes/1690195" } }
          }
        }
      };
      setShowInfo(data);
      console.log(data);
      setShows([data, data2, data3, data4]);
    }
  };

  React.useEffect(() => {
    fetchShow();
  }, []);

  return (
    <div className="App">
      <div className="shows-wrapper" css={showsWrapperStyles}>
        {shows.map(show => {
          return <ShowCard key={show.id} showData={show}></ShowCard>;
        })}
      </div>
    </div>
  );
}

export default App;
