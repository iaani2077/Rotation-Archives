
/* =========================
   CHANGELOG DATA
========================= */

const changelogData = [

    {
        date: "23 SEP 2026",
        text: [
            "Update V1.1"
        ]
    },

    {
        date: "18 SEP 2026",
        text: "Added several Hiyuki rotations."
    },

    {
        date: "10 SEP 2026",
        text: "Updated several existing rotations."
    },

    {
        date: "08 SEP 2026",
        text: "v1.0"
    }

];


/* =========================
   LANDING PAGE
   SHOW LATEST 2
========================= */

const latestChangelog =
    document.getElementById("latest-changelog");


if (latestChangelog) {

    changelogData
        .slice(0, 2)
        .forEach(update => {

            latestChangelog.innerHTML += `

                <div class="update">

                    <span class="update-date">
                        ${update.date}
                    </span>

                    <p>
                        ${update.text}
                    </p>

                </div>

            `;

        });

}


/* =========================
   CHANGELOG PAGE
   SHOW ALL
========================= */

const fullChangelog =
    document.getElementById("full-changelog");


if (fullChangelog) {

    changelogData.forEach(update => {

        fullChangelog.innerHTML += `

            <article class="changelog-entry">

                <span class="entry-date">
                    ${update.date}
                </span>

                <p class="entry-text">
                    ${update.text}
                </p>

            </article>

        `;

    });

}
