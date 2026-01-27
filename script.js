AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

const monthlyThemes = {
    0: {
        name: "New Year",
        colors: {
            primary: "#FFD700",
            secondary: "#000080",
            accent: "#C0C0C0",
            gradientStart: "rgba(0, 0, 128, 0.85)",
            gradientEnd: "rgba(255, 215, 0, 0.85)"
        },
        icons: {
            brand: "fa-champagne-glasses",
            heroBadge: "fa-champagne-glasses",
            floating: ["fa-champagne-glasses", "fa-firework", "fa-clock"]
        },
        particles: "fireworks",
        heroBadgeText: "New Year 2026",
        heroOccasion: "New Year Cards",
        heroSubtitle: "Celebrate new beginnings and fresh starts with personalized New Year greetings"
    },
    1: {
        name: "Valentine's Day",
        colors: {
            primary: "#FF1493",
            secondary: "#DC143C",
            accent: "#FFB6C1",
            gradientStart: "rgba(220, 20, 60, 0.85)",
            gradientEnd: "rgba(255, 20, 147, 0.85)"
        },
        icons: {
            brand: "fa-heart",
            heroBadge: "fa-heart",
            floating: ["fa-heart", "fa-rose", "fa-gift"]
        },
        particles: "hearts",
        heroBadgeText: "Valentine's Day 2026",
        heroOccasion: "Valentine Cards",
        heroSubtitle: "Express your love and affection with romantic Valentine's Day greetings"
    },
    2: {
        name: "Spring & St. Patrick's",
        colors: {
            primary: "#228B22",
            secondary: "#32CD32",
            accent: "#FFD700",
            gradientStart: "rgba(34, 139, 34, 0.85)",
            gradientEnd: "rgba(50, 205, 50, 0.85)"
        },
        icons: {
            brand: "fa-clover",
            heroBadge: "fa-clover",
            floating: ["fa-clover", "fa-rainbow", "fa-leaf"]
        },
        particles: "clovers",
        heroBadgeText: "Spring & St. Patrick's 2026",
        heroOccasion: "Spring Cards",
        heroSubtitle: "Celebrate the luck of the Irish and the beauty of spring with festive greetings"
    },
    3: {
        name: "Easter & Spring",
        colors: {
            primary: "#FF69B4",
            secondary: "#9370DB",
            accent: "#FFD700",
            gradientStart: "rgba(147, 112, 219, 0.85)",
            gradientEnd: "rgba(255, 105, 180, 0.85)"
        },
        icons: {
            brand: "fa-egg",
            heroBadge: "fa-egg",
            floating: ["fa-egg", "fa-rabbit", "fa-flower"]
        },
        particles: "petals",
        heroBadgeText: "Easter 2026",
        heroOccasion: "Easter Cards",
        heroSubtitle: "Share the joy of Easter and spring renewal with beautiful greeting cards"
    },
    4: {
        name: "Mother's Day",
        colors: {
            primary: "#FF69B4",
            secondary: "#FFB6C1",
            accent: "#FFD700",
            gradientStart: "rgba(255, 182, 193, 0.85)",
            gradientEnd: "rgba(255, 105, 180, 0.85)"
        },
        icons: {
            brand: "fa-heart",
            heroBadge: "fa-heart",
            floating: ["fa-heart", "fa-flower", "fa-gift"]
        },
        particles: "flowers",
        heroBadgeText: "Mother's Day 2026",
        heroOccasion: "Mother's Day Cards",
        heroSubtitle: "Honor and celebrate the special mothers in your life with heartfelt messages"
    },
    5: {
        name: "Father's Day & Eid",
        colors: {
            primary: "#4169E1",
            secondary: "#1E90FF",
            accent: "#FFD700",
            gradientStart: "rgba(30, 144, 255, 0.85)",
            gradientEnd: "rgba(65, 105, 225, 0.85)"
        },
        icons: {
            brand: "fa-user-tie",
            heroBadge: "fa-user-tie",
            floating: ["fa-trophy", "fa-star", "fa-gift"]
        },
        particles: "stars",
        heroBadgeText: "Father's Day 2026",
        heroOccasion: "Father's Day & Celebrations",
        heroSubtitle: "Celebrate fathers, graduations, and special June occasions"
    },
    6: {
        name: "Summer & Celebrations",
        colors: {
            primary: "#FFD700",
            secondary: "#FFA500",
            accent: "#FF6347",
            gradientStart: "rgba(255, 165, 0, 0.85)",
            gradientEnd: "rgba(255, 215, 0, 0.85)"
        },
        icons: {
            brand: "fa-sun",
            heroBadge: "fa-sun",
            floating: ["fa-sun", "fa-umbrella-beach", "fa-ice-cream"]
        },
        particles: "sunshine",
        heroBadgeText: "Summer 2026",
        heroOccasion: "Summer Celebration",
        heroSubtitle: "Share the warmth and joy of summer with bright cheerful greetings"
    },
    7: {
        name: "Summer",
        colors: {
            primary: "#FFD700",
            secondary: "#FFA500",
            accent: "#FF6347",
            gradientStart: "rgba(255, 165, 0, 0.85)",
            gradientEnd: "rgba(255, 215, 0, 0.85)"
        },
        icons: {
            brand: "fa-sun",
            heroBadge: "fa-sun",
            floating: ["fa-sun", "fa-umbrella-beach", "fa-ice-cream"]
        },
        particles: "sunshine",
        heroBadgeText: "Summer 2026",
        heroOccasion: "Summer Cards",
        heroSubtitle: "Share the warmth and joy of summer with bright and cheerful greetings"
    },
    8: {
        name: "Fall",
        colors: {
            primary: "#D2691E",
            secondary: "#8B4513",
            accent: "#FFD700",
            gradientStart: "rgba(139, 69, 19, 0.85)",
            gradientEnd: "rgba(210, 105, 30, 0.85)"
        },
        icons: {
            brand: "fa-leaf",
            heroBadge: "fa-leaf",
            floating: ["fa-leaf", "fa-book", "fa-apple-whole"]
        },
        particles: "leaves",
        heroBadgeText: "Fall 2026",
        heroOccasion: "Autumn Cards",
        heroSubtitle: "Embrace the changing season with beautiful autumn greeting cards"
    },
    9: {
        name: "Nigerian Independence Day",
        colors: {
            primary: "#008751",
            secondary: "#FFFFFF",
            accent: "#008751",
            gradientStart: "rgba(0, 135, 81, 0.85)",
            gradientEnd: "rgba(255, 255, 255, 0.85)"
        },
        icons: {
            brand: "fa-flag",
            heroBadge: "fa-flag",
            floating: ["fa-flag", "fa-star", "fa-dove"]
        },
        particles: "stars",
        heroBadgeText: "Nigerian Independence Day 2026",
        heroOccasion: "Independence Day Cards",
        heroSubtitle: "Celebrate Nigeria's freedom and unity with patriotic greetings"
    },
    10: {
        name: "November Celebration",
        colors: {
            primary: "#D2691E",
            secondary: "#8B4513",
            accent: "#FFD700",
            gradientStart: "rgba(139, 69, 19, 0.85)",
            gradientEnd: "rgba(210, 105, 30, 0.85)"
        },
        icons: {
            brand: "fa-leaf",
            heroBadge: "fa-heart",
            floating: ["fa-leaf", "fa-wheat-awn", "fa-heart"]
        },
        particles: "leaves",
        heroBadgeText: "November 2026",
        heroOccasion: "Gratitude & Blessings",
        heroSubtitle: "Express gratitude and share blessings with loved ones"
    },
    11: {
        name: "Christmas",
        colors: {
            primary: "#C41E3A",
            secondary: "#165B33",
            accent: "#FFD700",
            gradientStart: "rgba(22, 91, 51, 0.85)",
            gradientEnd: "rgba(196, 30, 58, 0.85)"
        },
        icons: {
            brand: "fa-snowflake",
            heroBadge: "fa-gift",
            floating: ["fa-snowflake", "fa-star", "fa-gift"]
        },
        particles: "snowflakes",
        heroBadgeText: "Christmas 2026",
        heroOccasion: "Christmas Cards",
        heroSubtitle: "Share joy, spread love, and create unforgettable memories with festive greetings"
    }
};

const monthlyBackgrounds = {
    0: [
        'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1600&q=80',
        'https://images.unsplash.com/photo-1514649923863-ceaf75b7ec40?w=1600&q=80',
        'https://images.unsplash.com/photo-1481570906522-5c2c27ff63c0?w=1600&q=80',
        'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1600&q=80',
        'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?w=1600&q=80',
        'https://images.unsplash.com/photo-1545016776-d2d155f97406?w=1600&q=80',
        'https://images.unsplash.com/photo-1420745981456-b95fe23f5753?w=1600&q=80',
        'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1600&q=80',
        'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&q=80',
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1600&q=80'
    ],
    1: [
        'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1600&q=80',
        'https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=1600&q=80',
        'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=1600&q=80',
        'https://images.unsplash.com/photo-1515466022460-73da9f48d7b2?w=1600&q=80',
        'https://images.unsplash.com/photo-1519750180807-d7c0e0eee792?w=1600&q=80',
        'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1600&q=80',
        'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=1600&q=80',
        'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1600&q=80',
        'https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?w=1600&q=80',
        'https://images.unsplash.com/photo-1522673607181-0b4e361db9c5?w=1600&q=80'
    ],
    2: [
        'https://images.unsplash.com/photo-1488330890490-c291ecf62571?w=1600&q=80',
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=80',
        'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&q=80',
        'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1600&q=80',
        'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1600&q=80',
        'https://images.unsplash.com/photo-1458419948946-19fb2cc296af?w=1600&q=80',
        'https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?w=1600&q=80',
        'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=1600&q=80',
        'https://images.unsplash.com/photo-1502301197179-65228ab57f78?w=1600&q=80',
        'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80'
    ],
    3: [
        'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&q=80',
        'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1600&q=80',
        'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1600&q=80',
        'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=1600&q=80',
        'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=1600&q=80',
        'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1600&q=80',
        'https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?w=1600&q=80',
        'https://images.unsplash.com/photo-1505835845718-82a0e4817d7c?w=1600&q=80',
        'https://images.unsplash.com/photo-1463852247062-1bbca38f7805?w=1600&q=80',
        'https://images.unsplash.com/photo-1496947850313-7743325fa58c?w=1600&q=80'
    ],
    4: [
        'https://images.unsplash.com/photo-1477554193778-9562c28588c0?w=1600&q=80',
        'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&q=80',
        'https://images.unsplash.com/photo-1469259943454-aa100abba749?w=1600&q=80',
        'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1600&q=80',
        'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1600&q=80',
        'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=1600&q=80',
        'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1600&q=80',
        'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=1600&q=80',
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600&q=80',
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1600&q=80'
    ],
    5: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80',
        'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1600&q=80',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
        'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1600&q=80',
        'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1600&q=80',
        'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1600&q=80',
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80'
    ],
    6: [
        'https://images.unsplash.com/photo-1499334650092-7c674b20762c?w=1600&q=80',
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80',
        'https://images.unsplash.com/photo-1528127269322-539801943592?w=1600&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80',
        'https://images.unsplash.com/photo-1499334650092-7c674b20762c?w=1600&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
        'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1600&q=80',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80',
        'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1600&q=80',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80'
    ],
    7: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80',
        'https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=1600&q=80',
        'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1600&q=80',
        'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1600&q=80',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80',
        'https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=1600&q=80',
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1600&q=80',
        'https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?w=1600&q=80',
        'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1600&q=80'
    ],
    8: [
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80',
        'https://images.unsplash.com/photo-1507371341162-763b5e419408?w=1600&q=80',
        'https://images.unsplash.com/photo-1484506583085-5e6a66e5e313?w=1600&q=80',
        'https://images.unsplash.com/photo-1515268064-67b3b72a8f76?w=1600&q=80',
        'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=1600&q=80',
        'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1600&q=80',
        'https://images.unsplash.com/photo-1529333241959-ade7c67ea3e2?w=1600&q=80',
        'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80',
        'https://images.unsplash.com/photo-1494548162494-384bba4ab999?w=1600&q=80',
        'https://images.unsplash.com/photo-1505744386214-51dba16a26fc
        'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=1600&q=80',
        'https://images.unsplash.com/photo-1505483531331-fc3cf89fd382?w=1600&q=80',
        'https://images.unsplash.com/photo-1508020963102-c6c723be5764?w=1600&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80',
        'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=1600&q=80'
    ],
    10: [
        'https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?w=1600&q=80',
        'https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=1600&q=80',
        'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=1600&q=80',
        'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?w=1600&q=80',
        'https://images.unsplash.com/photo-1507371341162-763b5e419408?w=1600&q=80',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80',
        'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=1600&q=80',
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1600&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80'
    ],
    11: [
        'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1600&q=80',
        'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1600&q=80',
        'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?w=1600&q=80',
        'https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=1600&q=80',
        'https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?w=1600&q=80',
        'https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?w=1600&q=80',
        'https://images.unsplash.com/photo-1544273677-9f2e3f6d5e38?w=1600&q=80',
        'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=1600&q=80',
        'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1600&q=80',
        'https://images.unsplash.com/photo-1514649923863-ceaf75b7ec40?w=1600&q=80',
        'https://images.unsplash.com/photo-1481570906522-5c2c27ff63c0?w=1600&q=80',
        'https://images.unsplash.com/photo-1514649961441-049f2223b651?w=1600&q=80'
    ]
};

const monthlyBodyBackgrounds = {
    0: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1920&q=80',
    1: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1920&q=80',
    2: 'https://images.unsplash.com/photo-1488330890490-c291ecf62571?w=1920&q=80',
    3: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80',
    4: 'https://images.unsplash.com/photo-1477554193778-9562c28588c0?w=1920&q=80',
    5: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    6: 'https://images.unsplash.com/photo-1499334650092-7c674b20762c?w=1920&q=80',
    7: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    8: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80',
    9: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=1920&q=80',
    10: 'https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?w=1920&q=80',
    11: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1920&q=80'
};

const monthlyShortWishes = {
    0: [
        "Happy New Year! May 2026 bring you joy! 🎉",
        "Cheers to new beginnings and fresh starts! 🥂",
        "Wishing you a year full of possibilities! ✨",
        "May your resolutions come true! 🌟",
        "Happy New Year! Make it amazing! 🎊",
        "Here's to a fabulous 2026! 🍾",
        "New year, new adventures await! 🎆",
        "May success follow you all year! 💫",
        "Happy New Year! Shine bright! ⭐",
        "Wishing you 365 days of happiness! 😊",
        "Cheers to health, wealth, and joy! 🥳",
        "May this year be your best yet! 🎉"
    ],
    1: [
        "Happy Valentine's Day! You're loved! 💕",
        "Sending you love and roses today! 🌹",
        "You make my heart smile! 😊",
        "Love you to the moon and back! 🌙",
        "Happy Valentine's! You're my everything! ❤️",
        "Roses are red, my love is true! 💝",
        "You're the best thing ever! 💖",
        "Sending hugs and kisses! 😘",
        "Happy Valentine's Day, sweetheart! 💗",
        "You complete me! 💑",
        "Forever and always yours! 💞",
        "Love you more each day! 💓"
    ],
    2: [
        "Happy St. Patrick's Day! May luck find you! 🍀",
        "Wishing you Irish blessings today! 🌈",
        "May the luck of the Irish be with you! ☘️",
        "Happy Spring! Bloom wherever you're planted! 🌸",
        "Luck, love, and laughter! 💚",
        "Kiss me, I'm Irish! 💋",
        "May your troubles be less! 🍀",
        "Spring is here! Time to grow! 🌱",
        "Happy St. Patty's Day! 🎩",
        "May your blessings outnumber the clovers! 🍀",
        "Sláinte! Here's to good health! 🍺",
        "Spring forward with joy! 🌼"
    ],
    3: [
        "Happy Easter! He is risen! 🐣",
        "Wishing you an egg-cellent Easter! 🥚",
        "Hoppy Easter to you! 🐰",
        "May your Easter basket overflow! 🧺",
        "Celebrate new life and renewal! 🌷",
        "Easter blessings to you and yours! ✨",
        "Enjoy the Easter egg hunt! 🥚",
        "Spring brings new beginnings! 🌸",
        "Happy Easter! Let's celebrate! 🎉",
        "May joy bloom in your heart! 🌺",
        "Wishing you a blessed Easter! 🙏",
        "Chocolate bunnies and Easter fun! 🍫"
    ],
    4: [
        "Happy Mother's Day! You're amazing! 💐",
        "Thanks for everything, Mom! 🌹",
        "You're the best mom ever! 💕",
        "Love you more than words can say! ❤️",
        "Happy Mother's Day to a super mom! 🦸‍♀️",
        "Thanks for your endless love! 💝",
        "You're my inspiration! 🌟",
        "Celebrating you today, Mom! 🎉",
        "Grateful for you always! 🙏",
        "To the world's best mother! 👑",
        "You deserve all the flowers! 💐",
        "Love you, Mom! You rock! 🎸"
    ],
    5: [
        "Happy Father's Day! You're my hero! 🦸‍♂️",
        "Thanks for being the best dad! 💙",
        "You're awesome, Dad! 🌟",
        "Happy Father's Day to the greatest! 🏆",
        "Love you, old man! 😊",
        "Thanks for all you do, Dad! 💪",
        "You're my role model! ⭐",
        "Celebrating you today, Father! 🎉",
        "Best dad in the universe! 🌌",
        "You're simply the best! 🥇",
        "Grateful for you, Dad! 🙏",
        "Happy Father's Day, champ! 🏅"
    ],
    6: [
        "Happy 4th of July! God bless America! 🇺🇸",
        "Celebrate freedom today! 🎆",
        "Let freedom ring! 🔔",
        "Happy Independence Day! 🎉",
        "Proud to be American! 🦅",
        "Stars, stripes, and fireworks! ✨",
        "Land of the free! 🗽",
        "Happy 4th! Enjoy the BBQ! 🍔",
        "Red, white, and boom! 💥",
        "Celebrate liberty! 🎊",
        "America the beautiful! 🌟",
        "Happy Birthday, USA! 🎂"
    ],
    7: [
        "Happy Summer! Soak up the sun! ☀️",
        "Sunshine and good times! 🌞",
        "Summer vibes all around! 🏖️",
        "Make a splash this summer! 🌊",
        "Life's a beach! Enjoy it! 🏝️",
        "Hot fun in the summertime! 🔥",
        "Chill out and relax! 😎",
        "Ice cream weather! 🍦",
        "Summer nights and city lights! 🌃",
        "Vitamin Sea needed! 🌊",
        "Sandy toes and sun-kissed nose! 👣",
        "Endless summer days! 🌅"
    ],
    8: [
        "Happy Fall! Let the leaves fall! 🍂",
        "Autumn is here! Time for cozy! ☕",
        "Fall in love with autumn! 🍁",
        "Pumpkin spice and everything nice! 🎃",
        "Sweater weather is better! 🧥",
        "Leaves are falling, autumn is calling! 🍃",
        "Happy Fall, y'all! 🍂",
        "Embrace the changing seasons! 🌾",
        "Apple picking season! 🍎",
        "Falling for you this autumn! 💛",
        "Harvest blessings! 🌽",
        "Crisp air, don't care! 🍂"
    ],
    9: [
        "Happy Independence Day Nigeria! 🇳🇬",
        "Proud to be Nigerian! Happy October 1st! 💚",
        "Green White Green! Nigeria at 66! 🎊",
        "Celebrating our great nation! 🇳🇬",
        "Happy Independence Day! Naija to the world! ✨",
        "One Nigeria, one destiny! Happy Independence! 🌟",
        "God bless Nigeria! Happy Oct 1st! 🙏",
        "Proud Nigerian! Celebrating freedom! 💚🤍💚",
        "Happy Independence Day! Nigeria we hail thee! 🇳🇬",
        "Naija for life! Happy Independence! 🎉",
        "Unity in diversity! Happy Oct 1st! ⭐",
        "Long live Nigeria! Happy Independence Day! 🦅",
        "From Lagos to Kano, happy Independence! 🎊",
        "Celebrating our heroes past! 🇳🇬",
        "Green white green forever! 💚🤍💚",
        "Happy 66th Independence Day Nigeria! 🎂",
        "Naija spirit strong! Happy October 1st! 💪",
        "Freedom and unity! Happy Independence! 🕊️"
    ],
    10: [
        "Happy November! Grateful for you! 🍂",
        "Counting my blessings today! 🙏",
        "Thankful for family and friends! 🍁",
        "May your heart be full of joy! ❤️",
        "Thankful, grateful, blessed! ✨",
        "Wishing you abundant blessings! 💛",
        "Gratitude fills my heart! 🧡",
        "Happy November! Time for reflection! 🌾",
        "Blessed beyond measure! 🙏",
        "Appreciating all the good things! 🍂",
        "Give thanks always! 💖",
        "November brings gratitude! 🍁"
    ],
    11: [
        "Merry Christmas! Joy to the world! 🎄",
        "Have a holly jolly Christmas! 🎅",
        "May your holidays sparkle! ✨",
        "Christmas magic is in the air! 🌟",
        "Peace, love, and joy! ❤️",
        "Let it snow! ❄️",
        "Wishing you a merry little Christmas! 🎁",
        "Jingle all the way! 🔔",
        "Santa Claus is coming to town! 🎅",
        "Deck the halls! 🎄",
        "Believe in Christmas miracles! ⭐",
        "Warm wishes this Christmas! ☕"
    ]
};

const monthlyLongWishes = {
    0: [
        "As we step into a brand new year, may you find the courage to chase your dreams, the strength to overcome challenges, and the wisdom to cherish every moment. Here's to new beginnings, fresh starts, and endless possibilities. Happy New Year 2026!",
        "May this new year bring you abundant joy, unwavering health, and unprecedented success. May you discover new passions, achieve your goals, and create beautiful memories with the ones you love. Wishing you a spectacular 2026!",
        "Cheers to another year of growth, learning, and adventure! May 2026 be filled with laughter that echoes through your days, love that warms your heart, and success that exceeds your wildest expectations. Happy New Year!",
        "As the calendar turns to a new page, may you write a story filled with happiness, prosperity, and beautiful moments. May this year bring you closer to your dreams and surround you with love and light. Happy New Year!",
        "Wishing you 365 days of happiness, 52 weeks of success, 12 months of prosperity, and a lifetime of love. May 2026 be your best year yet! Happy New Year!"
    ],
    1: [
        "On this Valentine's Day, I want you to know that you are the reason my heart beats with joy. Your love illuminates my life like the brightest star. Thank you for being my everything. I love you more with each passing day!",
        "Roses are red, violets are blue, but nothing in this world is as beautiful as you. Thank you for filling my life with love, laughter, and endless happiness. You are my forever Valentine. I love you!",
        "Every day with you feels like Valentine's Day because you make my heart skip a beat. Your love is the greatest gift I've ever received. Here's to us and the beautiful journey we're on together. Happy Valentine's Day!",
        "You are my sunshine on cloudy days, my strength when I'm weak, and my happiness when I'm down. Thank you for being the most amazing partner anyone could ask for. I love you today and always. Happy Valentine's Day!"
    ],
    2: [
        "May the luck of the Irish be with you today and always! As spring awakens the earth with new life, may you too experience renewal, growth, and endless blessings. Wishing you a wonderful St. Patrick's Day filled with joy and good fortune!",
        "As the shamrocks bloom and the world turns green, may you find happiness in every moment and luck in every endeavor. May this St. Patrick's Day bring you closer to your dreams and fill your heart with Irish cheer!",
        "Spring has sprung, bringing with it hope, renewal, and the promise of better days ahead. May this season of growth bring you peace, prosperity, and all the colors of happiness. Enjoy the beauty of spring!",
        "May the rainbow lead you to your pot of gold, and may the luck of the Irish guide you on every road. Wishing you a St. Patrick's Day filled with laughter, love, and countless blessings!"
    ],
    3: [
        "As we celebrate Easter, may you experience the joy of renewal and the promise of new beginnings. May your heart be filled with hope, your life be blessed with love, and your days be bright with happiness. Happy Easter!",
        "Easter reminds us that every day is a chance to start fresh, to believe in miracles, and to celebrate life's beautiful moments. May this Easter bring you peace, love, and all the chocolate you can handle! Have a blessed celebration!",
        "May the resurrection spirit fill your heart with renewed faith and endless hope. As spring blooms all around us, may you too blossom into your best self. Wishing you a beautiful Easter filled with joy and blessings!",
        "Hoppy Easter to you and your loved ones! May this special day be filled with egg hunts, family gatherings, and the sweetest memories. May the Easter Bunny bring you happiness and may your heart be full of joy!"
    ],
    4: [
        "To the most amazing mother in the world: Thank you for your endless love, your unwavering support, and your incredible strength. You are my hero, my inspiration, and my best friend. Happy Mother's Day! I love you more than words can express!",
        "Mom, you are the heart of our family, the glue that holds us together, and the light that guides us home. Your love knows no bounds, and your sacrifices never go unnoticed. Thank you for everything you do. Happy Mother's Day!",
        "On this Mother's Day, I want to celebrate the extraordinary woman you are. Your wisdom has shaped me, your kindness has inspired me, and your love has sustained me through everything. You deserve all the happiness in the world. I love you, Mom!",
        "Happy Mother's Day to the woman who taught me how to love, how to dream, and how to never give up. You are my rock, my cheerleader, and my greatest blessing. Thank you for being the world's best mom!"
    ],
    5: [
        "Dad, you are my superhero without a cape, my mentor without a classroom, and my best friend without ever trying. Thank you for always being there, for believing in me, and for showing me what true strength looks like. Happy Father's Day!",
        "To the greatest dad in the universe: Thank you for teaching me life's most important lessons, for supporting my dreams, and for always having my back. You are my role model and my inspiration. Happy Father's Day! I love you!",
        "Happy Father's Day to the man who has given me everything and asked for nothing in return. Your love, guidance, and wisdom have shaped me into who I am today. I am forever grateful for you, Dad!",
        "Dad, your strength inspires me, your wisdom guides me, and your love sustains me. Thank you for being the best father anyone could ask for. I hope today is filled with all the things you love. Happy Father's Day!"
    ],
    6: [
        "Happy Independence Day! Today we celebrate the freedom that so many have fought to protect. May we never take for granted the liberties we enjoy and may we always strive to make our nation a place of justice, equality, and opportunity for all. God bless America!",
        "As fireworks light up the sky, let's remember the brave men and women who have defended our freedom. May this 4th of July be filled with family, friends, good food, and grateful hearts. Happy Independence Day!",
        "On this Independence Day, let us celebrate the spirit of freedom that makes our nation great. May the stars and stripes forever wave as a symbol of hope, courage, and unity. Wishing you a safe and joyful 4th of July!",
        "Happy 4th of July! May the spirit of patriotism fill your heart, may the BBQ be delicious, and may the fireworks be spectacular. Here's to celebrating the land of the free and the home of the brave!"
    ],
    7: [
        "Summer is here, bringing with it endless sunshine, warm nights, and unforgettable memories waiting to be made. May your summer be filled with beach days, ice cream cones, and adventures that take your breath away. Enjoy every moment!",
        "Wishing you a summer filled with lazy days, spontaneous road trips, and the kind of laughter that makes your stomach hurt. May the sun shine bright on all your endeavors and may you create memories that last a lifetime!",
        "As the temperature rises, may your worries melt away and your happiness soar. May this summer bring you relaxation, adventure, and all the vitamin sea you need. Here's to the best summer yet!",
        "Happy Summer! May your days be filled with sunshine, your nights with starlight, and your heart with contentment. Take time to rest, play, and enjoy the simple pleasures that make this season so special!"
    ],
    8: [
        "As autumn leaves begin to fall and the air turns crisp, may you find beauty in the changing seasons and comfort in cozy moments. May this fall bring you peace, prosperity, and pumpkin-spiced everything! Happy Autumn!",
        "Fall reminds us that change can be beautiful. As nature transforms around us, may you too embrace growth and new beginnings. Wishing you a season filled with colorful moments, warm sweaters, and grateful hearts!",
        "Welcome autumn with open arms! May this season of harvest bring you abundance in all areas of your life. May you find joy in falling leaves, comfort in warm drinks, and happiness in every moment. Happy Fall!",
        "As the leaves turn golden and the days grow shorter, may you find magic in every moment. May this fall season bring you closer to your goals, your loved ones, and your true self. Enjoy the beauty of autumn!"
    ],
    9: [Independence Day Nigeria! Today we celebrate 66 years of freedom, unity, and progress. As we honor our heroes past, let us commit to building a better Nigeria for generations to come. From Sokoto to Calabar, from Lagos to Maiduguri, we are one nation bound in freedom, peace, and unity. God bless the Federal Republic of Nigeria! 🇳🇬",
        "On this special day, we celebrate the birth of our great nation. Nigeria, our motherland, we pledge to thee our strength and service. May the green and white flag forever wave as a symbol of our independence, our diversity, and our collective dreams. Happy 66th Independence Day to all Nigerians at home and abroad! 💚🤍💚",
        "As we mark another year of independence, let us remember the sacrifices of our founding fathers and the resilience of the Nigerian spirit. From the Niger to the Benue, from the Atlantic coast to the Sahel, we are united in our love for this great nation. May Nigeria continue to rise and shine on the global stage. Happy Independence Day! 🇳🇬",
        "Happy Independence Day to the Giant of Africa! Today we celebrate not just our freedom from colonial rule, but our rich culture, our vibrant people, and our endless potential. Whether you're Igbo, Yoruba, Hausa, or any of our beautiful tribes, we are all Nigerians. Together we stand, together we rise. Naija to the world! 🌍🇳🇬",
        "On October 1st, 1960, Nigeria became free and independent. Today, 66 years later, we celebrate how far we've come and look forward to the bright future ahead. May God continue to bless Nigeria with peace, progress, and prosperity. Happy Independence Day to every Nigerian! 💚🤍💚
        "Happy Halloween! May your jack-o'-lanterns glow bright, your costume win prizes, and your candy stash be legendary. Here's to a night of harmless scares and delightful frights. Have a spook-tacular celebration!"
    ],This November, I'm filled with gratitude for all the blessings in my life, and you're at the top of that list. May this month bring you peace, joy, and countless reasons to smile. Thank you for being such an important part of my journey. Wishing you a wonderful November!",
        "As autumn leaves fall and the year draws to a close, let us take a moment to appreciate all the good things in our lives. May you be surrounded by love, blessed with health, and filled with gratitude. Happy November!",
        "In this season of thanksgiving and reflection, may you count your blessings and find joy in the simple things. May your heart overflow with gratitude and your days be filled with warmth and happiness. Wishing you a blessed November!",
        "November reminds us to pause and give thanks for all we have. May you find peace in quiet moments, joy in family gatherings, and gratitude in every sunrise. Thank you for being part of my life. Happy Novembergiving!",
        "Thanksgiving is a time to reflect on all the good in our lives. May you find joy in simple pleasures, peace in quiet moments, and love in the company of those who matter most. Wishing you a blessed Thanksgiving!",
        "As we gather around the table this Thanksgiving, let's remember to be grateful not just for the feast before us, but for the love around us. May your holiday be filled with warmth, laughter, and countless blessings!"
    ],
    11: [
        "May your Christmas sparkle with moments of love, laughter and goodwill. May the year ahead be full of contentment and joy. Have a Merry Christmas!",
        "Wishing you a magical and blissful holiday season! May this festive season bring you closer to all those you treasure in your heart. Merry Christmas!",
        "May the spirit of Christmas bring you peace, the gladness of Christmas give you hope, and the warmth of Christmas grant you love. Have a wonderful holiday!",
        "Sending you warm wishes for a wonderful Christmas filled with love, laughter, and all the things that make this season special. May your heart be filled with joy!"
    ]
};

let selectedMonth = new Date().getMonth();
let currentBgIndex = 0;
let recipientName = '';
let wishType = 'short';

const nameForm = document.getElementById('nameForm');
const recipientInput = document.getElementById('recipientName');
const cardDisplay = document.getElementById('cardDisplay');
const cardBackground = document.getElementById('cardBackground');
const cardMessage = document.getElementById('cardMessage');
const cardRecipient = document.getElementById('cardRecipient');
const loadingSpinner = document.getElementById('loadingSpinner');
const themeSelect = document.getElementById('themeSelect');

function updateParticles(particleType) {
    const container = document.getElementById('snowflakes-container');
    if (!container) return;
    
    container.innerHTML = '';
    const count = window.innerWidth > 768 ? 50 : 30;
    const particleMap = {
        'snowflakes': '❄',
        'hearts': '💕',
        'clovers': '🍀',
        'petals': '🌸',
        'flowers': '🌺',
        'stars': '⭐',
        'sunshine': '☀️',
        'leaves': '🍂',
        'bats': '🦇',
        'fireworks': '✨'
    };
    
    const icon = particleMap[particleType] || '❄';
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'snowflake';
        particle.innerHTML = icon;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.opacity = Math.random();
        particle.style.fontSize = (Math.random() * 1 + 0.5) + 'em';
        container.appendChild(particle);
    }
}

function applyTheme(monthIndex) {
    const theme = monthlyThemes[monthIndex];
    if (!theme) return;
    
    document.documentElement.style.setProperty('--primary-color', theme.colors.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.colors.secondary);
    document.documentElement.style.setProperty('--accent-color', theme.colors.accent);
    
    document.body.style.backgroundImage = `url('${monthlyBodyBackgrounds[monthIndex]}')`;
    
    updateParticles(theme.particles);
    
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) {
        heroBadge.innerHTML = `<i class="fas ${theme.icons.heroBadge}"></i> ${theme.heroBadgeText}`;
    }
    
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        heroTitle.textContent = theme.heroOccasion;
    }
    
    const heroSubtitle = document.querySelector('.hero p');
    if (heroSubtitle) {
        heroSubtitle.textContent = theme.heroSubtitle;
    }
}

function getRandomWish(monthIndex) {
    const wishes = wishType === 'short' ? monthlyShortWishes[monthIndex] : monthlyLongWishes[monthIndex];
    if (!wishes || wishes.length === 0) return "Wishing you all the best!";
    const randomIndex = Math.floor(Math.random() * wishes.length);
    return wishes[randomIndex];
}

function loadBackground(monthIndex, bgIndex) {
    if (loadingSpinner) loadingSpinner.style.display = 'block';
    
    const backgrounds = monthlyBackgrounds[monthIndex] || monthlyBackgrounds[11];
    const actualIndex = bgIndex % backgrounds.length;
    
    const img = new Image();
    img.onload = () => {
        if (cardBackground) cardBackground.src = backgrounds[actualIndex];
        if (loadingSpinner) loadingSpinner.style.display = 'none';
    };
    img.onerror = () => {
        currentBgIndex = (actualIndex + 1) % backgrounds.length;
        loadBackground(monthIndex, currentBgIndex);
    };
    img.src = backgrounds[actualIndex];
}

if (themeSelect) {
    themeSelect.addEventListener('change', (e) => {
        selectedMonth = parseInt(e.target.value);
        applyTheme(selectedMonth);
    });
}

if (nameForm) {
    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        recipientName = recipientInput.value.trim();
        wishType = document.querySelector('input[name="wishType"]:checked').value;
        
        if (recipientName) {
            if (cardMessage) cardMessage.textContent = getRandomWish(selectedMonth);
            if (cardRecipient) cardRecipient.textContent = recipientName;
            currentBgIndex = Math.floor(Math.random() * (monthlyBackgrounds[selectedMonth]?.length || 5));
            loadBackground(selectedMonth, currentBgIndex);
            if (cardDisplay) {
                cardDisplay.style.display = 'block';
                setTimeout(() => {
                    cardDisplay.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    });
}

const changeBackgroundBtn = document.getElementById('changeBackgroundBtn');
if (changeBackgroundBtn) {
    changeBackgroundBtn.addEventListener('click', () => {
        const backgrounds = monthlyBackgrounds[selectedMonth] || monthlyBackgrounds[11];
        currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
        loadBackground(selectedMonth, currentBgIndex);
    });
}

const randomizeWishBtn = document.getElementById('randomizeWishBtn');
if (randomizeWishBtn) {
    randomizeWishBtn.addEventListener('click', () => {
        if (cardMessage) {
            cardMessage.style.opacity = '0';
            setTimeout(() => {
                cardMessage.textContent = getRandomWish(selectedMonth);
                cardMessage.style.opacity = '1';
            }, 300);
        }
    });
}

const changeNameBtn = document.getElementById('changeNameBtn');
if (changeNameBtn) {
    changeNameBtn.addEventListener('click', () => {
        if (cardDisplay) cardDisplay.style.display = 'none';
        if (recipientInput) {
            recipientInput.value = '';
            recipientInput.focus();
        }
        const generator = document.getElementById('generator');
        if (generator) generator.scrollIntoView({ behavior: 'smooth' });
    });
}

const shareWhatsApp = document.getElementById('shareWhatsApp');
if (shareWhatsApp) {
    shareWhatsApp.addEventListener('click', () => {
        const themeName = monthlyThemes[selectedMonth]?.name || "Seasonal";
        const msg = `Check out this beautiful ${themeName} card I created for ${recipientName}! ✨\n\nCreate yours: ${window.location.href}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
    });
}

const shareFacebook = document.getElementById('shareFacebook');
if (shareFacebook) {
    shareFacebook.addEventListener('click', () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
    });
}

const shareTwitter = document.getElementById('shareTwitter');
if (shareTwitter) {
    shareTwitter.addEventListener('click', () => {
        const themeName = monthlyThemes[selectedMonth]?.name || "Seasonal";
        const text = `I created a beautiful ${themeName} card for ${recipientName}! ✨`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
    });
}

const downloadCard = document.getElementById('downloadCard');
if (downloadCard) {
    downloadCard.addEventListener('click', () => {
        const container = document.getElementById('cardContainer');
        if (!container) return;
        
        if (loadingSpinner) loadingSpinner.style.display = 'block';
        const themeName = monthlyThemes[selectedMonth]?.name.replace(/\s+/g, '_') || "Card";
        
        html2canvas(container, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: null
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `${themeName}_${recipientName.replace(/\s+/g, '_')}_2026.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            if (loadingSpinner) loadingSpinner.style.display = 'none';
        });
    });
}

const copyLink = document.getElementById('copyLink');
if (copyLink) {
    copyLink.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            const original = copyLink.innerHTML;
            copyLink.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => copyLink.innerHTML = original, 2000);
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(26, 26, 46, 0.98)';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.background = 'rgba(26, 26, 46, 0.95)';
            nav.style.boxShadow = 'none';
        }
    }
});

applyTheme(selectedMonth);

if (monthlyBackgrounds[selectedMonth]) {
    monthlyBackgrounds[selectedMonth].forEach(src => {
        const img = new Image();
        img.src = src;
    });
}
