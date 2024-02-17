import React from "react";
import GitHubCalendar from "react-github-calendar";
import "../Styles/Statistics.css";

const Statistics = () => {
  const selectLastSixMonths = (contributions) => {
    const b = contributions.filter((activity) => {
      const date = new Date(activity.date);
      const dateNow = Date.now() - 6 * 30.4 * 24 * 60 * 60 * 1000;
      const c = date.getTime() >= dateNow ? true : false;
      return c;
    });
    return b;
  };

  return (
    <div className="mt-28" id='statistics'>
      <h1 className="text-center font-medium text-3xl shadow-md shadow-red-200 mx-8">
        GitHub's<span className="text-orange-200"> Stats</span>
      </h1>
      <div className="mt-11 githubConatiner">
        <div className="fist">
          <div>
            <a href="https://git.io/streak-stats">
              <img
                id="github-streak-stats"
                src="https://github-readme-streak-stats.herokuapp.com?user=Hari3199&theme=highcontrast&border_radius=5"
                alt="GitHub Streak"
              />
            </a>
          </div>
          <div className="second react-activity-calendar">
            <GitHubCalendar
              username="Hari3199"
              transformData={selectLastSixMonths}
              labels={{
                totalCount: "{{count}} commits in last 6 months",
              }}
              blockSize={19}
              blockMargin={5}
              fontSize={20}
              hideTotalCount={true}
              theme={{
                light: ["hsl(0, 0%, 92%)", "rebeccapurple"],
                dark: ["hsl(0, 0%, 10%)", "#FF9E7C"],
              }}
              style={{
                color: "#FF9E7C",
                margin: "auto",
                padding: "15px",
              }}
            />
          </div>
          <div thired>
          <a href="https://git.io/streak-stats">
            <img
              id="github-streak-stats"
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Hari3199&theme=calm&bg_color=0d1117&title_color=FF9E7C&text_color=FFAB89&icon_color=FFAB89&border_color=FF9E7C&border_radius=5
              "

              alt="GitHub Streak"
            />
          </a>
        </div>
        </div>
    
        {/* <div style={{ height: "0px" }}>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Hari3199&layout=compact&theme=calm"
            alt=""
            id="github-top-langs"
            style={{ height: "0px" }}
          />
        </div>
        <div style={{ height: "0px" }}>
          <img
            src="https://github-readme-stats.vercel.app/api?username=Hari3199&show_icons=true&theme=calm"
            id="github-stats-card"
            alt=""
            style={{ height: "0px" }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Statistics;
