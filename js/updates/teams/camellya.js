
/* =========================================================
   CAMELLYA TEAMS
========================================================= */

const camellyaTeams = [

    {
        name: "Team 1",

        members: [

            {
                name: "Camellya",
                image: "characters/camellya.png"
            },

            {
                name: "Sanhua",
                image: "characters/sanhua.png"
            },

            {
                name: "Shorekeeper",
                image: "characters/shorekeeper.png"
            }

        ],


        /* =================================================
           TEAM DESCRIPTION
        ================================================= */

        description:
            "Assuming Sanhua is S6 and Shorekeeper is on the Concerto weapon.",


        /* =================================================
           ROTATION
        ================================================= */

        rotation: {


            /* =============================================
               OPENER
            ============================================= */

            opener: [

                {
                    character: "Camellya",

                    actions: [

                        "BA",
                        "Skill"

                    ]

                },


                {
                    character: "Sanhua",

                    actions: [

                        "Skill",
                        "Lib",
                        "HA"

                    ]

                },


                {
                    character: "Shorekeeper",

                    actions: [

                        "BA12",
                        "Lib",
                        "Skill",
                        "Dash",
                        "HA"

                    ]

                },


                {
                    character: "Camellya",

                    actions: [

                        "Intro",
                        "Lib",
                        "Echo",

                        {
                            action: "Skill",
                            note: "Hold BA until Forte depletes",
                            color: "#00c8ff"
                        }

                    ]

                },


                {
                    character: "Sanhua",

                    actions: [

                        "Intro"

                    ]

                }

            ],


            /* =============================================
               LOOP
            ============================================= */

            loop: [

                {
                    character: "Camellya",

                    actions: [

                        "Intro",
                        "Lib",
                        "Echo",

                        {
                            action: "Skill",
                            note: "Hold BA until Forte depletes",
                            color: "#00c8ff"
                        }

                    ]

                },


                {
                    character: "Sanhua",

                    actions: [

                        "Intro",
                        "Skill",
                        "Lib",

                        {
                            action: "HA",
                            note: "Use when Forte is ready",
                            color: "#ffd400"
                        }

                    ]

                },


                {
                    character: "Shorekeeper",

                    actions: [

                        "Intro",
                        "Skill",
                        "Dash",
                        "HA"

                    ]

                }

            ]

        }

    }

]
