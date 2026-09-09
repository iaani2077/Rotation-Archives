/* =========================
   CHARACTER DATA
========================= */

const charactersData = {

    Havoc: [

        {
            id: "camellya",
            name: "Camellya",
            image: "./characters/camellya.png",
            description: "Camellya rotations."
        },

        {
            id: "yyxl",
            name: "Yangyang: Xuanling",
            image: "./characters/yyxl.png",
            description: "Yangyang: Xuanling rotations."
        }

    ],

    Electro: [

        {
            id: "xly",
            name: "Xiangli Yao",
            image: "./characters/xly.png",
            description: "Xiangli Yao rotations."
        },

        {
            id: "augusta",
            name: "Augusta",
            image: "./characters/augusta.png",
            description: "Augusta rotations."
        },

        {
            id: "rebecca",
            name: "Rebecca",
            image: "./characters/rebecca.png",
            description: "Rebecca rotations."
        }

    ],

    Aero: [

        {
            id: "jiyan",
            name: "Jiyan",
            image: "./characters/jiyan.png",
            description: "Jiyan rotations."
        },

        {
            id: "cartethiya",
            name: "Cartethiya",
            image: "./characters/cartethiya.png",
            description: "Cartethiya rotations."
        },

        {
            id: "sigrika",
            name: "Sigrika",
            image: "./characters/sigrika.png",
            description: "Sigrika rotations."
        },

        {
            id: "qingxiao",
            name: "Qingxiao",
            image: "./characters/qingxiao.png",
            description: "Qingxiao rotations."
        }

    ],

    Glacio: [

        {
            id: "carlotta",
            name: "Carlotta",
            image: "./characters/carlotta.png",
            description: "Carlotta rotations."
        },

        {
            id: "hiyuki",
            name: "Hiyuki",
            image: "./characters/hiyuki.png",
            description: "Hiyuki rotations."
        }

    ],

    Fusion: [

        {
            id: "changli",
            name: "Changli",
            image: "./characters/changli.png",
            description: "Changli rotations."
        },

        {
            id: "brant",
            name: "Brant",
            image: "./characters/brant.png",
            description: "Brant rotations."
        },

        {
            id: "lupa",
            name: "Lupa",
            image: "./characters/lupa.png",
            description: "Lupa rotations."
        },

        {
            id: "galbrena",
            name: "Galbrena",
            image: "./characters/galbrena.png",
            description: "Galbrena rotations."
        },

        {
            id: "aemeath",
            name: "Aemeath",
            image: "./characters/aemeath.png",
            description: "Aemeath rotations."
        },

        {
            id: "jingran",
            name: "Jingran",
            image: "./characters/jingran.png",
            description: "Jingran rotations."
        }

    ],

    Spectro: [

        {
            id: "jinshi",
            name: "Jinshi",
            image: "./characters/jinshi.png",
            description: "Jinshi rotations."
        },

        {
            id: "zani",
            name: "Zani",
            image: "./characters/zani.png",
            description: "Zani rotations."
        },

        {
            id: "luuk",
            name: "Luuk",
            image: "./characters/luuk.png",
            description: "Luuk rotations."
        },

        {
            id: "lucy",
            name: "Lucy",
            image: "./characters/lucy.png",
            description: "Lucy rotations."
        }

    ]

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

const teams = {

    camellya: [

        {
            name: "Team 1",

            members: [

                {
                    name: "Camellya",
                    image: "./characters/camellya.png"
                },

                {
                    name: "Sanhua",
                    image: "./characters/sanhua.png"
                },

                {
                    name: "Shorekeeper",
                    image: "./characters/shorekeeper.png"
                }

            ],

            description:
                "Assuming sanhua is s6 n SK on concerto weapon",

            rotation: [

                "Camellya: BA, Skill, placeholder",

                "Sanhua: Skill, Lib, HA on Forte",

                "Shorekeeper: BA12, Lib, BA12, Skill, BA, Dash, HA, Outro",

                "Camellya: Intro, Lib, Echo",

                "Sanhua: Skill, Outro",

                "Camellya: (full concerto) Skill, Hold BA (until forte depletes), Echo, Skill, Outro",

                "Sanhua: Intro"

            ]

        }

    ],


    yyxl: [

        {

            name: "Team 1 - [Basic 123]",

            members: [

                {
                    name: "Yangyang XL",
                    image: "./characters/yyxl.png"
                },

                {
                    name: "Chisa",
                    image: "./characters/chisa.png"
                },

                {
                    name: "Suisui",
                    image: "./characters/suisui.png"
                }

            ],

            description: "**placeholder**",

            rotation: [

                "Yangyang XL: placeholder, placeholder",

                "Suisui: placeholder",

                "Chisa: placeholder, BA",

                "Yangyang XL: Intro"

            ]

        }

    ],


// ***************************** HIYUKI *************************

    hiyuki: [

        {
            name: "4 Lai",

            members: [
                {
                    name: "Hiyuki",
                    image: "./characters/hiyuki.png"
                },

                {
                    name: "Lucilla",
                    image: "./characters/lucilla.png"
                },

                {
                    name: "Suisui",
                    image: "./characters/suisui.png"
                }
            ],

            description: "Use this, atleast.",

            rotation: [
                "Hiyuki: Skill",
                "Suisui: BA123, Skill, Skill, BA1234, Lib, Echo, Outro",
                "Lucilla: Intro, Skill (Hold until Yellow Circle), Lib, BA (HOLD), Echo, Outro",
                "Hiyuki: BA123, Dash, BA123, Jump, Skill (Hold), 2 Lai (BA12), TB, BA, Dash, BA123, Jump Skill (Hold), 2 Lai (BAx2), HA, Lib, Echo, Outro"
            ]
        },

        {
            name: "3 Lai Quickswap < 25s",
            members: [
                {
                    name: "Hiyuki",
                    image: "./characters/hiyuki.png"
                },
                {
                    name: "Lynae",
                    image: "./characters/lynae.png"
                },
                {
                    name: "Chisa",
                    image: "./characters/chisa.png"
                }
            ],

            description: "This is probably my fav rot. Its hella fun",

            rotation: [
                "Chisa: Skill, BA12",
                "Lynae: Skill",
                "Hiyuki: BA12, Dash",
                "Chisa: BA",
                "Lynae: Lib",
                "Hiyuki: BA12, Skill",
                "Chisa: BA, Lib, Skill(Enhanced)",
                "Hiyuki: BA, HA, Lib, BA123",
                "Chisa: BA12",
                "Hiyuki: BA12, Skill",
                "Chisa: BA, Outro",
                "Lynae: BA (Hold untill Full Forte), Jump x 3, BA (Plunge), Outro",
                "Hiyuki: BA12, Jump, Skill (Hold), 3 Lai (BA123), HA, Lib, Echo, Outro"
            ]
        },
        {
            name: "Basic 123",

            members: [
                {
                    name: "Hiyuki",
                    image: "./characters/hiyuki.png"
                },

                {
                    name: "Lucilla",
                    image: "./characters/lucilla.png"
                },

                {
                    name: "Suisui",
                    image: "./characters/suisui.png"
                }
            ],

            description:
                "Honetly don't use this rot, its stupid.",

            rotation: [

                "Hiyuki: Skill",
                "Suisui: BA123, Skill, Skill, BA1234, Lib, Echo, Outro",
                "Lucilla: Intro, Skill (Hold Until Yellow Circle), Lib, BA (HOLD), Echo, Outro",
                "Hiyuki: Intro, BA, HA, Lib, Skill x 2, Echo, BA12345, Dash, Skill x 3 (Lai), HA, Lib, Outro"
            ]
        }
    ]

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