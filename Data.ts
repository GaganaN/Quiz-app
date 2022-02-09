const Data = [
    {
        id: "1",
        QEnglish: '(a-b)^2 = __________',
        QKannada: '(a-b)^2 = __________',

        AEnglish: "'a^2 + b^2 - 2ab'",
        AKannada: "a^2 + b^2 - 2ab'",
        OEnglish: ["a^2 + b^2 + 2ab", "a^2 + b^2 - 2ab", "a^2 - b^2 + 2ab", "0"],
        OKannada: ["a^2 + b^2 + 2ab", "a^2 + b^2 - 2ab", "a^2 - b^2 + 2ab", "0"],
      },
      {
        id: "2",
        QEnglish: "5) How many Harry Potter books are there?",
        QKannada: "5) ಎಷ್ಟು ಹ್ಯಾರಿ ಪಾಟರ್ ಪುಸ್ತಕಗಳ ಸರಣಿ ಇವೆ?",
    
        AEnglish: [" 7"],
        AKannada: [" 7"],
        OEnglish: ["4", " 1", "6", "7"],
        OKannada: ["4", " 1", "6", "7"],
      },
      {
        id: "3",
        QEnglish: "2) 16^2=256?",
        QKannada: "2) 16^2=256?",

        AEnglish: "No",
        AKannada: "ಇಲ್ಲ",
        OEnglish: ["Yes", "No"],
        OKannada: ["ಹೌದು", "ಇಲ್ಲ"],
      },
      {
        id: "4",
        QEnglish: "3) a=10 and a+b=15 then b=______?",
        QKannada: "3) a=10 ಮತ್ತು a+b=15 ನ0ತರ b=______?",

        AEnglish: [" 5 "],
        AKannada: [" 5 "],
      },
      {
        id: "5",
        QEnglish: "4)If a^2=16 then a=?",
        QKannada: "4) ಒ0ದು ವೇಳೆ a^2=16 ನ0ತರ a=?",
    
        AEnglish: [" +4 ",  "-4"],
        AKannada: [" +4", "-4"],
        OEnglish: ["4", " -4", "16", "1"],
        OKannada: ["4", " -4", "16", "1"],
      },
];

export default Data;