/* =========================================================
   CHARACTER DATA
========================================================= */

const charactersData = {

    Havoc: havocCharacters,

    Electro: electroCharacters,

    Aero: aeroCharacters,

    Glacio: glacioCharacters,

    Fusion: fusionCharacters,

    Spectro: spectroCharacters

};

const allCharacters = Object.values(charactersData).flat();


/* =========================================================
   TEAM MEMBER COLORS
========================================================= */

const memberColors = [
    "#00c8ff",
    "#ffd400",
    "#ff4dcc"
];


/* =========================================================
   TEAMS
========================================================= */

const teams = {

    camellya: camellyaTeams,

    yyxl: yyxlTeams,

    hiyuki: hiyukiTeams,

    augusta: augustaTeams

};


/* =========================================================
   DOM ELEMENTS
========================================================= */

const filters =
    document.querySelectorAll(".attribute-filter");

const characterGrid =
    document.querySelector(".characters");

const characterContent =
    document.getElementById("character-content");

const characterName =
    document.getElementById("character-name");

const characterDescription =
    document.getElementById("character-description");

const teamsContainer =
    document.getElementById("teams-container");

const header =
    document.querySelector("header");

const releaseSort =
    document.getElementById("releaseSort");


/* =========================================================
   RELEASE SORT
========================================================= */

let oldestFirst = true;


/* =========================================================
   DISPLAY CHARACTERS
========================================================= */

function displayCharacters(attribute = "all") {

    characterGrid.innerHTML = "";

    let characters;

    if (attribute === "all") {

        characters = allCharacters;

    } else {

        characters = charactersData[attribute] || [];

    }


    characters = [...characters].sort((a, b) => {

        const dateA = new Date(a.releaseDate);
        const dateB = new Date(b.releaseDate);

        return oldestFirst
            ? dateA - dateB
            : dateB - dateA;

    });


    characters.forEach(character => {

        const card =
            document.createElement("div");

        card.className =
            "character-card";


        card.innerHTML = `
            <img
                src="${character.image}"
                alt="${character.name}"
            >

            <span>
                ${character.name}
            </span>
        `;


        card.addEventListener("click", () => {

            showCharacter(character.id);

        });


        characterGrid.appendChild(card);

    });

}


/* =========================================================
   ATTRIBUTE FILTERS
========================================================= */

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(button => {

            button.classList.remove("active");

        });


        filter.classList.add("active");


        characterContent.style.display =
            "none";

        characterGrid.style.display =
            "grid";

        releaseSort.style.display =
            "";


        const attribute =
            filter.dataset.attribute;


        oldestFirst = true;

        releaseSort.textContent =
            "Oldest → Newest";


        displayCharacters(attribute);

    });

});


/* =========================================================
   RELEASE SORT
========================================================= */

releaseSort.addEventListener("click", () => {

    oldestFirst = !oldestFirst;


    releaseSort.textContent = oldestFirst
        ? "Oldest → Newest"
        : "Newest → Oldest";


    const activeFilter =
        document.querySelector(
            ".attribute-filter.active"
        );


    const attribute =
        activeFilter
            ? activeFilter.dataset.attribute
            : "all";


    displayCharacters(attribute);

});


/* =========================================================
   SHOW CHARACTER
========================================================= */

function showCharacter(id) {

    const character =
        allCharacters.find(
            character => character.id === id
        );


    if (!character) return;


    characterGrid.style.display =
        "none";

    releaseSort.style.display =
        "none";

    characterContent.style.display =
        "block";


    characterName.textContent =
        character.name;

    characterDescription.textContent =
        character.description || "";


    displayTeams(id);

}


/* =========================================================
   RENDER ROTATION
========================================================= */

function renderRotation(rotationSteps, team) {

    let html = "";

    let lastCharacter = null;


    rotationSteps.forEach(rotationStep => {

        /*
         * Rotation format:
         *
         * "Hiyuki: Intro, BA, HA, Lib"
         */

        const [characterName, ...actionParts] =
            rotationStep.split(":");


        const character =
            characterName.trim();


        const actionsText =
            actionParts.join(":").trim();


        if (!actionsText) return;


        const actions =
            actionsText
                .split(",")
                .map(action => action.trim())
                .filter(Boolean);


        const memberIndex =
            team.members.findIndex(
                member =>
                    member.name === character
            );


        const member =
            team.members[memberIndex];


        const characterColor =
            memberColors[memberIndex] || "#ffffff";


        actions.forEach(action => {

            /*
             * Show character image only
             * when the character changes.
             */

            if (
                character !== lastCharacter &&
                member
            ) {

                html += `
                    <div
                        class="rotation-character"
                        style="--character-color: ${characterColor}"
                    >
                        <img
                            src="${member.image}"
                            alt="${character}"
                        >
                    </div>
                `;


                lastCharacter =
                    character;

            }


            /*
             * Highlight anything inside:
             *
             * [[text]]
             */

            const formattedAction =
                action.replace(
                    /\[\[(.*?)\]\]/g,
                    '<span class="rotation-highlight">$1</span>'
                );


            html += `
                <span
                    class="rotation-step"
                    style="--character-color: ${characterColor}"
                >
                    ${formattedAction}
                </span>

                <span class="rotation-arrow">
                    →
                </span>
            `;

        });

    });


    return html;

}


/* =========================================================
   DISPLAY TEAMS
========================================================= */

function displayTeams(characterId) {

    const characterTeams =
        teams[characterId] || [];


    teamsContainer.innerHTML = "";


    if (!characterTeams.length) {

        teamsContainer.innerHTML = `
            <p class="team-description">
                No teams available yet.
            </p>
        `;

        return;

    }


    characterTeams.forEach(team => {

        const teamCard =
            document.createElement("div");

        teamCard.className =
            "team-card";


        /* -------------------------------------------------
           TEAM INFO
        ------------------------------------------------- */

        const teamInfo =
            document.createElement("div");

        teamInfo.className =
            "team-info";


        /* -------------------------------------------------
           TEAM TITLE
        ------------------------------------------------- */

        const teamTitle =
            document.createElement("h3");

        teamTitle.textContent =
            team.name;


        /* -------------------------------------------------
           TEAM MEMBERS
        ------------------------------------------------- */

        const teamMembers =
            document.createElement("div");

        teamMembers.className =
            "team-members";


        team.members.forEach((member, index) => {

            const memberCard =
                document.createElement("div");

            memberCard.className =
                `team-member member-${index + 1}`;


            memberCard.innerHTML = `
                <div class="member-color"></div>

                <img
                    src="${member.image}"
                    alt="${member.name}"
                >

                <span>
                    ${member.name}
                </span>
            `;


            teamMembers.appendChild(
                memberCard
            );

        });


        /* -------------------------------------------------
           TEAM DESCRIPTION
        ------------------------------------------------- */

        const teamDescription =
            document.createElement("p");

        teamDescription.className =
            "team-description";


        /*
         * innerHTML allows links and other
         * custom HTML inside descriptions.
         */

        teamDescription.innerHTML =
            team.description || "";


        /* -------------------------------------------------
           BUILD TEAM INFO
        ------------------------------------------------- */

        teamInfo.appendChild(
            teamTitle
        );

        teamInfo.appendChild(
            teamMembers
        );

        teamInfo.appendChild(
            teamDescription
        );

        teamCard.appendChild(
            teamInfo
        );


        /* -------------------------------------------------
           TEAM ROTATION
        ------------------------------------------------- */

        if (team.rotation) {

            const rotationContainer =
                document.createElement("div");

            rotationContainer.className =
                "team-rotation";


            /* OPENER */

            if (
                team.rotation.opener &&
                team.rotation.opener.length
            ) {

                const opener =
                    document.createElement("div");

                opener.className =
                    "rotation-section";


                opener.innerHTML = `
                    <h4 class="rotation-title">
                        Opener
                    </h4>

                    <div class="rotation-line">
                        ${renderRotation(
                    team.rotation.opener,
                    team
                )}
                    </div>
                `;


                rotationContainer.appendChild(
                    opener
                );

            }


            /* LOOP */

            if (
                team.rotation.loop &&
                team.rotation.loop.length
            ) {

                const loop =
                    document.createElement("div");

                loop.className =
                    "rotation-section";


                loop.innerHTML = `
                    <h4 class="rotation-title">
                        Loop
                    </h4>

                    <div class="rotation-line">
                        ${renderRotation(
                    team.rotation.loop,
                    team
                )}
                    </div>
                `;


                rotationContainer.appendChild(
                    loop
                );

            }


            teamCard.appendChild(
                rotationContainer
            );

        }


        teamsContainer.appendChild(
            teamCard
        );

    });

}


/* =========================================================
   NOTES DROPDOWN
========================================================= */

const notesButton =
    document.querySelector(".nav-button");

const notesPanel =
    document.querySelector(".dropdown");

const notesItem =
    document.querySelector(".nav-item");


function closeDropdowns() {

    notesPanel.classList.remove(
        "show"
    );

    notesButton.classList.remove(
        "active"
    );

}


notesButton.addEventListener(
    "click",
    event => {

        event.stopPropagation();


        notesPanel.classList.toggle(
            "show"
        );


        notesButton.classList.toggle(
            "active",
            notesPanel.classList.contains(
                "show"
            )
        );

    }
);


document.addEventListener(
    "click",
    event => {

        if (
            !notesItem.contains(
                event.target
            )
        ) {

            closeDropdowns();

        }

    }
);


/* =========================================================
   NAVBAR SCROLL
========================================================= */

let lastScrollY =
    window.scrollY;

let scrollTimeout;


window.addEventListener(
    "scroll",
    () => {

        const currentScrollY =
            window.scrollY;


        if (
            currentScrollY > lastScrollY &&
            currentScrollY > 60
        ) {

            header.classList.add(
                "hide"
            );

        } else {

            header.classList.remove(
                "hide"
            );

        }


        header.classList.add(
            "scroll-dim"
        );


        clearTimeout(
            scrollTimeout
        );


        scrollTimeout = setTimeout(
            () => {

                header.classList.remove(
                    "scroll-dim"
                );

            },
            300
        );


        lastScrollY =
            currentScrollY;

    }
);


/* =========================================================
   INITIAL LOAD
========================================================= */

displayCharacters();