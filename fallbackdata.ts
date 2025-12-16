import { text } from "stream/consumers";

export const fallbackData   =  {
  
   data: [{
    local: true,
    
       hero: {
                backgroundImg : {
                    url : "/hero.jpg"
                },
                overskrift: "Elitepudseren, vi gør dit vidue beskidt",
                underskrift:  "Alle nyopstartede aftaler får inkluderet en førstegangs grundrens i prisen. Her fjernes klistermærker, pletter, malingrester og andet snavs fra alle vinduer."
                
            },
        
        link: [ 
            {href: " #HvemErVi", text: "Om os"},
             {href: " #kontakt", text: "Kontakt os"},
             {href: " #story", text: "vores historie "}
        ],
        textBackgroundSection : {
            id: 1,
    
    image: {
        url: "/hero.jpg"
    },
    text : [
        {
         type: "heading",
    level: 1,
    children:[ {
        text: "´Vi startede småt men ender stort´"
    }]}, 
    {
        type: "text",
        children: [{
            text: "Det begyndte med en enkelt spand, en skraber og en ambition om at levere kvalitet hver eneste gang. I dag har vi udviklet os til et professionelt vinduespudserfirma, der dækker både private hjem og erhverv i hele området."
        }]
    },
     {
        type: "text",
        children: [{
            text: "Vores mål har altid været det samme: skinnende rene ruder, god service og tilfredse kunder. Med dygtige medarbejdere, moderne udstyr og en stærk passion for faget er vi klar til at tage næste skridt – og fortsætte med at vokse sammen med vores kunder."
        }]
    },

    {
        type: "text",
        children: [{
            text: "For hos os handler det ikke kun om at pudse vinduer. Det handler om at skabe klarhed, udsyn og tillid – hver gang."
        }]
    },
     {
        type: "text",
        children: [{
            text: "dygtige medarbejdere, moderne udstyr og en stærk passion for faget er vi klar til at tage næste skridt – og fortsætte med at vokse sammen med vores kunder."
        }]
    }

    ]
        },

        textImageSection: {
            id: 2,
            image: {
                url : "/hero.jpg"
            },
            text : [
        {
         type: "heading",
    level: 1,
    children:[ {
        text: "Vinduespudsning på fast aftale – helt uden binding"
    }]}, 
    {
        type: "text",
        children: [{
            text: "Hos Elitepudseren gør vi det nemt at holde dine vinduer skinnende rene året rundt. Med en fast aftale får du regelmæssig vinduespudsning i det interval, der passer dig – hver 4., 8. eller 12. uge. Du bestemmer selv, og du kan altid ændre eller aflyse, når det passer dig."
        }]
    },
     {
        type: "text",
        children: [{
            text: "Vi tror på fleksibilitet og god service. Derfor har vi ingen bindingsperiode, ingen skjulte gebyrer og ingen overraskelser. Bare rene ruder, professionelt udført af erfarne vinduespudsere, der møder op til tiden og leverer et flot resultat hver gang."
        }]
    },

    {
        type: "text",
        children: [{
            text: "Ønsker du både udvendig og indvendig pudsning? Eller kun det udvendige? Valget er dit. Vi tilpasser aftalen til dine behov, så du får præcis den løsning, der passer til dit hjem eller din virksomhed."
        }]
    },
     {
        type: "text",
        children: [{
            text: "Læn dig tilbage – Elitepudseren klarer resten.   "
        }]
    },
     {
        type: "text",
        children: [{
            text: "Friske vinduer, fast aftale, nul binding. "
        }]
    }

    ]

        },
        footerList: [{
            id: 3,
    heading: "Information",
    footerItem: [{
        text: ""}
    ]}]
        
    
    
    
    }
        
        ]
        
    
}