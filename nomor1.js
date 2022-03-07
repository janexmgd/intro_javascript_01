// //nomer1
const biodata = {
    name: "Denny Wahyu Prasetyo", //string
    age: 21, //number
    hobbies: ["Bermain Game", "Mendengarkan Musik", "Menonton Anime"], //array
    IsMarried: false, //booelean
    schoolList: [ //array of object
        {
            name: "SDN BOGOHARJO 1",
            yearIn: 2007,
            yearOut: 2013,
            major: null,
        },
        {
            name: "SMPN 1 NGADIROJO",
            yearIn: 2013,
            yearOut: 2016,
            major: null,
        },
        {
            name: "SMKN NGADIROJO",
            yearIn: 2016,
            yearOut: 2019,
            major: "Teknik Komputer dan Jaringan",
        }
    ],
    skills: [ //array of object
        {
            skillName: "Javascript",
            level: "beginner",
        },
        {
            skillName: "Mathematics",
            level: "advandced",
        },
        {
            skillName: "Swimming",
            level: "expert"
        }
    ],
    interestInCoding: true, //boolean
};
console.log(biodata);