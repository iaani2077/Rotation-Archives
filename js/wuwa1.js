/* =========================
   CHARACTER DATA
========================= */

const charactersData = {

    Havoc: havocCharacters,

    Electro: electroCharacters,

    Aero: aeroCharacters,

    Glacio: glacioCharacters,

    Fusion: fusionCharacters,

    Spectro: spectroCharacters

};


/* =========================
   HELPERS
========================= */

function getAllCharacters() {

    return Object.values(charactersData).flat();

}


function findCharacterById(id) {

    return getAllCharacters().find(
        character => character.id === id
    );

}


const memberColors = [
    "#00c8ff",
    "#ffd400",
    "#ff4dcc"
];


/* =========================
   TEAMS
========================= */

/*
    Each character's teams are stored in a separate file
    inside ./teams/ for easier editing and adding new teams.

    Example:
    ./teams/camellya.js
    ./teams/yyxl.js
    ./teams/hiyuki.js
*/

const teams = {

    camellya: camellyaTeams,

    yyxl: yyxlTeams,

    hiyuki: hiyukiTeams,

    augusta: augustaTeams

};


/* =========================
   DOM
========================= */

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


/* =========================
   CHARACTER DISPLAY
========================= */

function displayCharacters(attribute = "all") {

    characterGrid.innerHTML = "";

    const characters =
        attribute === "all"
            ? getAllCharacters()
            : charactersData[attribute] || [];


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


/* =========================
   ATTRIBUTE FILTERS
========================= */

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        const attribute =
            filter.dataset.attribute;


        filters.forEach(item =>
            item.classList.remove("active")
        );


        filter.classList.add("active");


        characterContent.style.display =
            "none";

        characterGrid.style.display =
            "grid";


        displayCharacters(attribute);

    });

});


/* =========================
   CHARACTER PAGE
========================= */

function showCharacter(id) {

    const character =
        findCharacterById(id);


    if (!character) return;


    characterGrid.style.display =
        "none";

    characterContent.style.display =
        "block";


    characterName.textContent =
        character.name;


    characterDescription.textContent =
        character.description;


    displayTeams(id);


}


/* =========================
   TEAM DISPLAY
========================= */

function displayTeams(characterId) {

    teamsContainer.innerHTML = "";


    const characterTeams =
        teams[characterId] || [];


    if (!characterTeams.length) {

        teamsContainer.innerHTML =
            "<p>No teams have been added yet.</p>";

        return;

    }


    characterTeams.forEach(team => {

        const teamCard =
            document.createElement("div");


        teamCard.className =
            "team-card";


        const teamInfo =
            document.createElement("div");


        teamInfo.className =
            "team-info";


        teamInfo.innerHTML = `

                <h3>
                    ${team.name}
                </h3>

                <div class="team-members"></div>

                <p class="team-description">
                    ${team.description}
                </p>

            `;


        const teamMembers =
            teamInfo.querySelector(".team-members");


        team.members.forEach((member, index) => {

            const memberDiv =
                document.createElement("div");


            memberDiv.className =
                `team-member member-${index + 1}`;


            memberDiv.innerHTML = `

                    <img
                        src="${member.image}"
                        alt="${member.name}"
                    >

                    <span>
                        ${member.name}
                    </span>

                `;


            teamMembers.appendChild(memberDiv);

        });


        /* =========================
           ROTATION
        ========================= */

        const rotation =
            document.createElement("div");


        rotation.className =
            "team-rotation";


        /*
            Convert:

            "Camellya: BA, Skill"

            into:

            "Camellya: BA"
            "Camellya: Skill"

            before generating the HTML.
        */

        const expandedRotation = [];


        team.rotation.forEach(rotationStep => {

            const separator =
                rotationStep.indexOf(":");


            /*
                No ":" means this is just
                a normal standalone step.
            */

            if (separator === -1) {

                expandedRotation.push(
                    rotationStep
                );

                return;

            }


            const character =
                rotationStep
                    .slice(0, separator)
                    .trim();


            const actions =
                rotationStep
                    .slice(separator + 1)
                    .split(",");


            actions.forEach(action => {

                const cleanAction =
                    action.trim();


                if (cleanAction) {

                    expandedRotation.push(
                        `${character}: ${cleanAction}`
                    );

                }

            });

        });


        /*
            Generate rotation HTML.
        */

        const rotationHTML =
            expandedRotation.map(rotationStep => {

                const separator =
                    rotationStep.indexOf(":");


                if (separator === -1) {

                    return `
                            <span class="rotation-step">
                                ${rotationStep}
                            </span>
                        `;

                }


                const character =
                    rotationStep
                        .slice(0, separator)
                        .trim();


                const action =
                    rotationStep
                        .slice(separator + 1)
                        .trim();


                const memberIndex =
                    team.members.findIndex(
                        member =>
                            member.name === character
                    );


                const color =
                    memberColors[memberIndex]
                    || "#d5d8de";


                return `

                        <span
                            class="rotation-step"
                            style="--character-color: ${color}"
                            title="${character}"
                        >
                            ${action}
                        </span>

                    `;

            }).join(
                '<span class="rotation-arrow">→</span>'
            );


        rotation.innerHTML = `

                <h4>
                    Team Rotation
                </h4>

                <div class="rotation-line">
                    ${rotationHTML}
                </div>

            `;


        teamCard.appendChild(teamInfo);

        teamCard.appendChild(rotation);

        teamsContainer.appendChild(teamCard);

    });

}


/* =========================
   DROPDOWNS
========================= */

const notesButton =
    document.getElementById("notesButton");

const notesPanel =
    document.getElementById("notesPanel");

const notesItem =
    document.getElementById("notesItem");


const creditsButton =
    document.getElementById("creditsButton");

const creditsPanel =
    document.getElementById("creditsPanel");

const creditsItem =
    document.getElementById("creditsItem");


function closeDropdowns() {

    notesPanel.classList.remove("show");

    creditsPanel.classList.remove("show");

    notesItem.classList.remove("active");

    creditsItem.classList.remove("active");

}


notesButton.addEventListener("click", event => {

    event.stopPropagation();


    const isOpen =
        notesPanel.classList.contains("show");


    closeDropdowns();


    if (!isOpen) {

        notesPanel.classList.add("show");

        notesItem.classList.add("active");

    }

});


creditsButton.addEventListener("click", event => {

    event.stopPropagation();


    const isOpen =
        creditsPanel.classList.contains("show");


    closeDropdowns();


    if (!isOpen) {

        creditsPanel.classList.add("show");

        creditsItem.classList.add("active");

    }

});


document.addEventListener("click", event => {

    if (
        !notesItem.contains(event.target) &&
        !creditsItem.contains(event.target)
    ) {

        closeDropdowns();

    }

});


/* =========================
   NAVBAR SCROLL
========================= */

let lastScrollY =
    window.scrollY;


window.addEventListener("scroll", () => {

    const currentScrollY =
        window.scrollY;


    if (
        currentScrollY > lastScrollY &&
        currentScrollY > 60
    ) {

        header.classList.add("hide");

    } else {

        header.classList.remove("hide");

    }


    header.classList.add(
        "scroll-dim"
    );


    clearTimeout(
        window.scrollTimeout
    );


    window.scrollTimeout =
        setTimeout(() => {

            header.classList.remove(
                "scroll-dim"
            );

        }, 300);


    lastScrollY =
        currentScrollY;

});


/* =========================
   INITIAL LOAD
========================= */

displayCharacters();
