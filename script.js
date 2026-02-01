AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});


// // ...existing code...
    
//     // Add this event listener for the file upload
//     const photoUpload = document.getElementById('photoUpload');
    
//     photoUpload.addEventListener('change', function(e) {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
            
//             reader.onload = function(event) {
//                 // Set the uploaded image as the card background
//                 cardBackground.src = event.target.result;
                
//                 // Show the card display section if it's hidden
//                 cardDisplay.style.display = 'block';
                
//                 // Scroll to result
//                 setTimeout(() => {
//                     cardDisplay.scrollIntoView({ behavior: 'smooth' });
//                 }, 100);
//             };
            
//             reader.readAsDataURL(file);
//         }
//     });

//     // Modify the existing 'changeBackgroundBtn' to clear the custom upload
//     changeBackgroundBtn.addEventListener('click', () => {
//         // Clear the file input so user can go back to auto-themes
//         photoUpload.value = ''; 
        
//         // ...existing logic to randomize background from array...
//         const currentMonthData = monthlyThemes[currentThemeIndex];
//         const randomBg = currentMonthData.backgrounds[Math.floor(Math.random() * currentMonthData.backgrounds.length)];
//         cardBackground.src = randomBg;
//     });

// // ...existing code...

// --- Firebase Configuration ---
// TODO: Replace these placeholders with your actual Firebase Project keys
const firebaseConfig = {
  apiKey: "AIzaSyDKVAH0MF5eygD76QJU9JA7yYU3bBTFvbY",
  authDomain: "tolucard-1.firebaseapp.com",
  projectId: "tolucard-1",
  storageBucket: "tolucard-1.firebasestorage.app",
  messagingSenderId: "1051683519212",
  appId: "1:1051683519212:web:92b03a9bf48e418625c3c9"
};

// Initialize Firebase safely
let db;
try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log("Firebase initialized");
} catch (e) {
    console.warn("Firebase config missing or invalid - Save feature will not persist online", e);
}

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
        'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80'
    ],
    9: [
        'https://images.pexels.com/photos/63321/nigeria-flag-national-patriotic-63321.jpeg?w=1600&q=80',
        'https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?w=1600&q=80',
        'https://images.unsplash.com/photo-1534777410147-334bb97522a2?w=1600&q=80',
        'https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?w=1600&q=80',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80',
        'https://images.unsplash.com/photo-1532606777146-f011732342a7?w=1600&q=80',
        'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600&q=80',
        'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1600&q=80',
        'https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?w=1600&q=80',
        'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1600&q=80'
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
        "May this year be your best yet! 🎉",
        "Out with the old, in with the new! 🎊",
        "New year, new dreams to pursue! 💭",
        "May 2026 exceed all expectations! 🌠",
        "Wishing you prosperity and peace! ✌️",
        "Happy New Year! Let's celebrate! 🥂",
        "May good fortune smile upon you! 😊",
        "Here's to 12 amazing months ahead! 📅",
        "New year, new opportunities! 🚀",
        "May your dreams take flight! 🦋",
        "Wishing you endless blessings! 🙏",
        "Happy 2026! Make every moment count! ⏰",
        "Cheers to fresh starts and new chapters! 📖",
        "May this year bring magical moments! ✨"
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
        "Love you more each day! 💓",
        "You're my favorite person! 🥰",
        "My heart belongs to you! 💘",
        "Valentine, you're amazing! 💝",
        "Love conquers all! ❤️",
        "You're my soulmate! 💋",
        "Every day I love you more! 💕",
        "You're my perfect match! 💖",
        "Cupid brought us together! 🏯",
        "Sweet love, sweet Valentine! 🍭",
        "You're my heart's desire! 💗",
        "Love blooms with you! 🌹",
        "You're my one and only! 💑",
        "Happy Valentine's! XOXO! 💌"
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
        "Spring forward with joy! 🌼",
        "March into spring with a smile! 😄",
        "Green is the color of luck! 💚",
        "May the road rise to meet you! 🛷",
        "Spring renewal and fresh starts! 🌿",
        "Pot of gold at rainbow's end! 🌈",
        "Irish eyes are smiling! 😊",
        "Welcome spring with open arms! 🤗",
        "Lucky charms and four-leaf clovers! ☘️",
        "March brings new life! 🌺",
        "Top of the morning to you! ☀️",
        "Spring is nature's way of saying let's party! 🎉",
        "May the wind be at your back! 🍃",
        "Shamrocks and springtime cheer! ☘️"
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
        "Chocolate bunnies and Easter fun! 🍫",
        "Easter joy to you and yours! 🐣",
        "He is risen indeed! Hallelujah! ✝️",
        "Spring into Easter happiness! 🌿",
        "May the Easter bunny visit you! 🐇",
        "Resurrection joy and new hope! 🌟",
        "Peeps, eggs, and Easter treats! 🍭",
        "Easter blessings multiply! 🌼",
        "Celebrate the miracle of Easter! ✨",
        "Hippity hoppity Easter's on its way! 🐰",
        "May your Easter be egg-stra special! 🥚",
        "Spring flowers and Easter showers! 🌷",
        "Easter brings hope and renewal! 🌱",
        "Wishing you an Easter full of love! ❤️"
    ],
    4: [
        "Happy Mother's Day! You're amazing! 💐",
        "To the world's best mom! 🌹",
        "Thank you for everything, Mom! ❤️",
        "You're my superhero mom! 🦸",
        "Happy Mother's Day! Love you! 💕",
        "Mom, you're simply the best! 🌟",
        "Celebrating you today and always! 🎊",
        "Thank you for your endless love! 😊",
        "You're the heart of our family! 💖",
        "Happy Mother's Day, beautiful! 🌷",
        "Best mom in the universe! 🌌",
        "You make motherhood look easy! 😍",
        "Mom, you're my inspiration! ✨",
        "Thanks for being you, Mom! 🤗",
        "Mother's Day hugs and kisses! 💋",
        "You're a blessing, Mom! 🙏",
        "World's greatest mother award! 🏆",
        "Mom, you deserve the world! 🌍",
        "Love you more than words! 💗",
        "Happy Mother's Day, Queen! 👑",
        "Mom, you're my rock! 🪨",
        "Thanks for all the sacrifices! 💐",
        "You're the best mom ever! 🌹",
        "Celebrating the queen of our home! 👑",
        "Mom, you're irreplaceable! 💖"
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
        "Happy Father's Day, champ! 🏅",
        "Dad, you're the man! 👨",
        "Thanks for teaching me everything! 🎯",
        "World's greatest father! 🌍",
        "You're my superhero, Dad! 🦸",
        "Father knows best! Love you! 💙",
        "Happy Father's Day, legend! 🌟",
        "Dad, you're my rock! 🪨",
        "Thanks for being there always! 🤗",
        "To the coolest dad ever! 😎",
        "You're the best, Pops! 👍",
        "Happy Father's Day, King! 👑",
        "Dad, you're amazing! Keep it up! 💪",
        "Love you to the moon and back, Dad! 🌙"
    ],
    6: [
        "Happy 4th of July! God bless America! 🇺🇸",
        "Let freedom ring! 🔔",
        "Happy Independence Day! 🎆",
        "Stars, stripes, and summertime! ⭐",
        "Celebrate with BBQ and fireworks! 🍔",
        "Happy Summer! Enjoy the sunshine! ☀️",
        "Beach days and summer rays! 🏖️",
        "Red, white, and BBQ! 🍖",
        "Summer vibes all around! 🌴",
        "Happy 4th! Let's party! 🎉",
        "Independence and fireworks! 🎇",
        "Summer fun has begun! 😎",
        "Hot dogs, sparklers, and fun! 🌭",
        "American pride and summer vibes! 🦅",
        "July 4th celebrations! 🎆",
        "Freedom and fun in the sun! ☀️",
        "Summertime happiness! 🌻",
        "Happy 4th! Stay cool! 🥤",
        "Patriotic and proud! 🇺🇸",
        "Fireworks and freedom! 🎇",
        "Summer solstice celebrations! 🌞",
        "July brings joy and sunshine! 😊",
        "Beach time and good times! 🏄",
        "Happy Independence Day, America! 🗽",
        "Summer magic and memories! ✨"
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
        "Endless summer days! 🌅",
        "August brings the heat! 🌶️",
        "Dog days of summer! 🐶",
        "Poolside paradise! 🏊",
        "Summer memories being made! 📸",
        "August adventures await! 🏝️",
        "Last call for summer fun! 📣",
        "Sunshine state of mind! ☀️",
        "Beach hair, don't care! 🌊",
        "August is awesome! 🌟",
        "Summer lovin'! 💕",
        "Hot August nights! 🌙",
        "Soak up every moment! 🌻",
        "Summer never ends in our hearts! ❤️"
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
        "Crisp air, don't care! 🍂",
        "September signals fall! 🍁",
        "Back to school vibes! 📚",
        "Autumn leaves and pumpkin please! 🎃",
        "Fall festivities begin! 🎉",
        "September sunshine! 🌞",
        "Cozy season is here! 🧸",
        "Flannel and football weather! 🏈",
        "September serenity! 🌿",
        "Golden hour all day! 🌅",
        "Autumn aesthetics! 🍂",
        "September smiles! 😊",
        "Fall for the season! 🍁",
        "Harvest moon magic! 🌕"
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
        "Freedom and unity! Happy Independence! 🕊️",
        "Giant of Africa! Happy Independence! 🌍",
        "From Sokoto to Calabar, we celebrate! 🇳🇬",
        "Nigerian pride worldwide! 🎊",
        "Arise O compatriots! Happy Oct 1st! 🇬",
        "Nigeria's flag flies high! 🇳🇬",
        "Independence, peace, and progress! 💚",
        "Happy Independence! Naija no dey carry last! 🚀"
    ],
    10: [
        "Happy November! Grateful for you! 🍂",
        "Counting my blessings today! 🙏",
        "Thankful for family and friends! 🍁",
        "May your heart be full of joy! ❤️",
        "Grateful season is here! 🌾",
        "November blessings to you! 🌟",
        "Thankful, blessed, and grateful! 🙏",
        "Gratitude changes everything! ✨",
        "Happy November! Count your blessings! 🍂",
        "Autumn gratitude and love! 🍁",
        "November brings thanksgiving! 🦃",
        "Grateful heart, happy soul! 😊",
        "Blessings overflow in November! 🌾",
        "Thankful for life's gifts! 🎁",
        "November vibes and gratitude! 🍂",
        "Count blessings, not problems! ✨",
        "Thankful for this moment! 🙏",
        "November warmth and love! ❤️",
        "Grateful for every sunrise! 🌅",
        "Thanksgiving spirit! 🦃",
        "November magic begins! 🌟",
        "Blessed beyond measure! 🙏",
        "Happy November! Stay cozy! ☕",
        "Gratitude is the attitude! 🍁",
        "November brings peace and joy! ☀️"
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
        "Warm wishes this Christmas! ☕",
        "Ho ho ho! Merry Christmas! 🎅",
        "'Tis the season to be jolly! 🎊",
        "Christmas cheer for everyone! 🎁",
        "Silent night, holy night! 🕯️",
        "Frosty the snowman! ⛄",
        "Christmas cookies and cocoa! 🍪",
        "Under the mistletoe! 💋",
        "Rudolph the red-nosed reindeer! 🦌",
        "All I want for Christmas is you! ❤️",
        "Christmas tree lights! 🎄",
        "Joyeux Noël! Feliz Navidad! 🌍",
        "Happy holidays and New Year! 🎉",
        "May your days be merry and bright! ✨"
    ]
};

const monthlyLongWishes = {
    0: [
        "As we step into a brand new year, may you find the courage to chase your dreams, the strength to overcome challenges, and the wisdom to cherish every moment. Here's to new beginnings, fresh starts, and endless possibilities. Happy New Year 2026!",
        "May this new year bring you abundant joy, unwavering health, and unprecedented success. May you discover new passions, achieve your goals, and create beautiful memories with the ones you love. Wishing you a spectacular 2026!",
        "Cheers to another year of growth, learning, and adventure! May 2026 be filled with laughter that echoes through your days, love that warms your heart, and success that exceeds your wildest expectations. Happy New Year!",
        "As the calendar turns to a new page, may you write a story filled with happiness, prosperity, and beautiful moments. May this year bring you closer to your dreams and surround you with love and light. Happy New Year!",
        "Wishing you 365 days of happiness, 52 weeks of success, 12 months of prosperity, and a lifetime of love. May 2026 be your best year yet! Happy New Year!",
        "Welcome to 2026! May this year unlock doors you never knew existed, bring friendships that last a lifetime, and opportunities that change everything. Embrace every moment with open arms and an open heart!",
        "The new year is a blank canvas waiting for your masterpiece. Paint it with bold colors, fill it with joyful moments, and create something beautiful. May 2026 be your greatest work of art yet!",
        "As the clock strikes midnight and fireworks light up the sky, may all your hopes for the future shine just as brightly. Here's to 12 months of love, laughter, and living your best life!",
        "May 2026 bring you peace that surpasses understanding, joy that overflows, and love that never ends. May each day be better than the last, and may all your dreams become reality!",
        "New year, new opportunities, new adventures! May you have the courage to take risks, the wisdom to make good choices, and the strength to never give up. Make 2026 legendary!",
        "As we bid farewell to the old and welcome the new, may you leave behind regrets and embrace possibilities. May this year bring transformation, elevation, and celebration. Happy New Year!",
        "Here's to a fresh start, a clean slate, and a year full of potential! May 2026 surprise you in the best ways possible and exceed every expectation. Let's make it unforgettable!",
        "May the new year bring you clarity in confusion, hope in despair, and light in darkness. May your path be illuminated and your journey be blessed. Welcome 2026 with joy!",
        "Wishing you a year filled with adventures that excite you, people who inspire you, and moments that move you. May 2026 be everything you've hoped for and more!",
        "As fireworks paint the sky and champagne flows freely, may your heart be full of gratitude for the past and excitement for the future. Happy New Year 2026!",
        "May this year bring you success in your endeavors, love in your relationships, and peace in your soul. May every sunrise bring new hope and every sunset bring sweet rest!",
        "The best is yet to come! May 2026 prove that dreams do come true, miracles do happen, and love does conquer all. Here's to your best year ever!",
        "As we step into this new chapter, may you find strength in challenges, joy in simple pleasures, and magic in everyday moments. Make 2026 count!",
        "May your resolutions stick, your goals be achieved, and your wildest dreams come true in 2026. Here's to a year of growth, success, and happiness!",
        "New year, new blessings! May 2026 overflow with opportunities, overflow with joy, and overflow with love. May every month bring something wonderful!",
        "Cheers to leaving behind what no longer serves you and embracing what lifts you higher. May 2026 be your year of transformation and triumph!",
        "May this new year bring you adventures to exciting places, conversations with inspiring people, and experiences that change your perspective. Live boldly in 2026!",
        "As the calendar resets, may your faith be renewed, your hope be restored, and your love be multiplied. Wishing you a blessed and prosperous 2026!",
        "Here's to 365 new chances to get it right, to be better, to love deeper, and to live fuller. May 2026 be your most amazing year yet!",
        "May the new year bring you countless reasons to smile, endless opportunities to grow, and infinite moments of joy. Happy New Year 2026 – make it magnificent!"
    ],
    1: [
        "On this Valentine's Day, I want you to know that you are the reason my heart beats with joy. Your love illuminates my life like the brightest star. Thank you for being my everything. I love you more with each passing day!",
        "Roses are red, violets are blue, but nothing in this world is as beautiful as you. Thank you for filling my life with love, laughter, and endless happiness. You are my forever Valentine. I love you!",
        "Every day with you feels like Valentine's Day because you make my heart skip a beat. Your love is the greatest gift I've ever received. Here's to us and the beautiful journey we're on together. Happy Valentine's Day!",
        "You are my sunshine on cloudy days, my strength when I'm weak, and my happiness when I'm down. Thank you for being the most amazing partner anyone could ask for. I love you today and always. Happy Valentine's Day!",
        "To my beloved Valentine: You make every moment magical, every day brighter, and every dream worthwhile. Your love is the melody that makes my heart sing. I cherish you today and always!",
        "Happy Valentine's Day to the one who holds the key to my heart! Your love has transformed my life in the most beautiful ways. Thank you for being my partner, my best friend, and my soulmate!",
        "Love isn't just a feeling – it's you. It's your smile, your laugh, your kindness, and your heart. Thank you for loving me unconditionally. You are my forever and always. Happy Valentine's Day!",
        "On this day of love, I want to remind you that you are cherished beyond measure. You bring color to my world, music to my soul, and joy to my heart. Happy Valentine's Day, my love!",
        "Every love story is beautiful, but ours is my favorite. Thank you for writing this incredible chapter of life with me. Here's to many more years of love, laughter, and romance. Happy Valentine's Day!",
        "You're not just my Valentine – you're my everything. My morning coffee, my good night kiss, my reason to smile. Thank you for making life so sweet. I love you endlessly!",
        "To the love of my life: Every beat of my heart whispers your name. Every breath I take is filled with love for you. Happy Valentine's Day to my one and only!",
        "Roses wilt, chocolates melt, but my love for you is eternal. Thank you for being the most amazing partner anyone could wish for. Happy Valentine's Day, sweetheart!",
        "Love is patient, love is kind, and love is you. Thank you for showing me what true love looks like every single day. Happy Valentine's Day to my perfect match!",
        "On this Valentine's Day, I want you to know that loving you is the easiest and best thing I've ever done. You complete me in every way. Forever yours!",
        "You are my today and all of my tomorrows. Thank you for filling my life with so much love and happiness. Happy Valentine's Day to the one who makes my heart complete!",
        "To my Valentine: In a world full of temporary things, you are my forever. Thank you for your endless love, patience, and understanding. I love you more than words can express!",
        "Happy Valentine's Day to the person who makes my heart skip, my soul dance, and my life meaningful. You are my greatest blessing and my deepest love!",
        "Every day I'm grateful that our paths crossed and our hearts connected. You are my dream come true, my answered prayer, and my Valentine forever. I love you!",
        "To my dearest love: You are the poetry I never knew how to write and the song I never knew how to sing. Thank you for being my muse and my heart. Happy Valentine's Day!",
        "Love is not about how many days, months, or years we've been together. It's about how much we love each other every single day. And I love you more each day. Happy Valentine's Day!",
        "You are my safe haven, my greatest adventure, and my favorite hello and hardest goodbye. Thank you for being you. Happy Valentine's Day, my forever love!",
        "To the one who owns my heart: Your love is my strength, your smile is my sunshine, and your happiness is my mission. Happy Valentine's Day to my everything!",
        "In your arms, I've found my home. In your eyes, I've found my destiny. In your heart, I've found my love. Happy Valentine's Day to my soulmate!",
        "Thank you for loving me at my worst, celebrating me at my best, and standing by me through everything in between. You are my rock and my Valentine forever!",
        "Happy Valentine's Day to the person who makes ordinary moments extraordinary, tough days bearable, and life absolutely beautiful. I love you beyond measure!"
    ],
    2: [
        "May the luck of the Irish be with you today and always! As spring awakens the earth with new life, may you too experience renewal, growth, and endless blessings. Wishing you a wonderful St. Patrick's Day filled with joy and good fortune!",
        "As the shamrocks bloom and the world turns green, may you find happiness in every moment and luck in every endeavor. May this St. Patrick's Day bring you closer to your dreams and fill your heart with Irish cheer!",
        "Spring has sprung, bringing with it hope, renewal, and the promise of better days ahead. May this season of growth bring you peace, prosperity, and all the colors of happiness. Enjoy the beauty of spring!",
        "May the rainbow lead you to your pot of gold, and may the luck of the Irish guide you on every road. Wishing you a St. Patrick's Day filled with laughter, love, and countless blessings!",
        "On this St. Patrick's Day, may your troubles be less and your blessings be more, and nothing but happiness come through your door! May good luck follow you wherever you go!",
        "As nature awakens from winter's sleep, may you too find renewed energy and fresh perspectives. May this spring season bring growth, joy, and beautiful new beginnings to your life!",
        "May the road rise up to meet you, may the wind be always at your back, and may the sun shine warm upon your face. Happy St. Patrick's Day!",
        "Spring is nature's way of saying 'Let's party!' May this season fill your life with color, fragrance, and joy. May you bloom wherever you're planted!",
        "Wishing you a St. Patrick's Day filled with Irish blessings, lucky charms, and pots of gold! May the luck of the Irish be with you in everything you do!",
        "As the earth renews itself this spring, may you find renewal in your spirit, growth in your endeavors, and joy in every new day. Happy springtime!",
        "May your blessings outnumber the shamrocks that grow, and may trouble avoid you wherever you go. Happy St. Patrick's Day!",
        "Spring brings the promise of new beginnings. May you plant seeds of hope, water them with love, and watch them grow into beautiful realities. Happy spring!",
        "On this St. Patrick's Day, may you be surrounded by good friends, good times, and good luck! May your heart be light and your spirits high!",
        "As flowers bloom and birds sing, may your heart dance to the rhythm of spring. May this season bring you endless reasons to smile and celebrate life!",
        "May the leprechauns dance over your bed and bring you sweet dreams. May the luck of the Irish enfold you and good fortune be yours. Happy St. Patrick's Day!",
        "Spring is the time of plans and projects. May all your plans come to fruition and your projects bring success. Wishing you a wonderful spring season!",
        "Wishing you walls for the wind, a roof for the rain, and tea beside the fire. Laughter to cheer you, those you love near you, and all that your heart might desire!",
        "As spring breathes new life into the world, may you feel refreshed, renewed, and ready to embrace all the wonderful opportunities coming your way!",
        "May your pockets be heavy and your heart be light, may good luck pursue you each morning and night. Happy St. Patrick's Day!",
        "Spring reminds us that there's always a chance to start fresh. May you embrace new opportunities with courage and face new challenges with strength!",
        "On St. Patrick's Day, may you be blessed with good friends, good health, and good times. May the luck of the Irish be with you today and always!",
        "As nature paints the world in vibrant colors this spring, may your life be filled with equally vibrant moments of joy, love, and success!",
        "May your day be touched by a bit of Irish luck, brightened by a song in your heart, and warmed by the smiles of the people you love. Happy St. Patrick's Day!",
        "Spring is proof that beautiful things can bloom after harsh winters. May you bloom magnificently after any hardships you've faced. Happy spring!",
        "Wishing you the luck of the four-leaf clover, the joy of spring flowers, and the warmth of sunshine on your face. May your St. Patrick's Day be magical!"
    ],
    3: [
        "As we celebrate Easter, may you experience the joy of renewal and the promise of new beginnings. May your heart be filled with hope, your life be blessed with love, and your days be bright with happiness. Happy Easter!",
        "Easter reminds us that every day is a chance to start fresh, to believe in miracles, and to celebrate life's beautiful moments. May this Easter bring you peace, love, and all the chocolate you can handle! Have a blessed celebration!",
        "May the resurrection spirit fill your heart with renewed faith and endless hope. As spring blooms all around us, may you too blossom into your best self. Wishing you a beautiful Easter filled with joy and blessings!",
        "Hoppy Easter to you and your loved ones! May this special day be filled with egg hunts, family gatherings, and the sweetest memories. May the Easter Bunny bring you happiness and may your heart be full of joy!",
        "He is risen! Hallelujah! May the miracle of Easter fill your soul with peace, your heart with love, and your life with countless blessings. Celebrate this beautiful day with joy!",
        "Easter is about new life, second chances, and infinite possibilities. May you find hope in today and courage for tomorrow. Wishing you an egg-stra special Easter!",
        "On this holy day, may you feel the warmth of God's love, the joy of His resurrection, and the peace of His presence. Have a blessed and beautiful Easter!",
        "May Easter bring you as much joy as a basket full of chocolate eggs and as much love as a field full of spring flowers. Wishing you a wonderful celebration!",
        "Easter is God's way of reminding us that there's always hope, always a second chance, always a reason to believe. May your Easter be filled with faith and joy!",
        "Wishing you an Easter that's as sweet as peeps, as colorful as Easter eggs, and as joyful as children on an egg hunt! May your day be blessed!",
        "May the glory and promise of Easter fill your heart, home, and life with joy. Wishing you a spring filled with blessings and a year full of happiness!",
        "Happy Easter! May the resurrection remind you that darkness is temporary and light always prevails. May hope spring eternal in your heart!",
        "On this Easter, may you find peace in His promise, strength in His love, and joy in His resurrection. Have a blessed and happy Easter!",
        "Easter is proof that God loves us and gives us second chances. May you embrace this truth and celebrate with a grateful heart. Happy Easter!",
        "May your Easter basket be full, your heart be happy, and your life be blessed. Wishing you a wonderful celebration with family and friends!",
        "He has risen! May the miracle of Easter bring you renewed faith, restored hope, and abundant blessings. Have a glorious Easter Sunday!",
        "Wishing you Easter joy that lasts all year long, faith that sustains you through everything, and love that fills your heart to overflowing!",
        "May the beautiful colors of Easter remind you of life's precious moments, and may the joy of resurrection fill every day of your life. Happy Easter!",
        "Easter blessings to you and your family! May this holy day bring you closer to those you love and closer to the One who loves you most!",
        "On this Easter morning, may you feel the warmth of spring sunshine, the joy of resurrection, and the love of family and friends. Happy Easter!",
        "May Easter bring hope to the hopeless, joy to the sorrowful, and love to all hearts. Wishing you a blessed and beautiful Easter celebration!",
        "Happy Easter! May you celebrate with chocolate bunnies, colorful eggs, and a heart full of gratitude for the greatest gift of all – new life!",
        "As flowers bloom and birds sing praises, may your heart overflow with Easter joy and thanksgiving. Wishing you a blessed resurrection Sunday!",
        "May the hope of Easter shine brightly in your life, today and always. May you be blessed with love, peace, and happiness. Happy Easter!",
        "Easter is a time to rejoice, to give thanks, and to remember that with God, all things are possible. Wishing you a joyful and blessed Easter!"
    ],
    4: [
        "To the most amazing mother in the world: Thank you for your endless love, your unwavering support, and your incredible strength. You are my hero, my inspiration, and my best friend. Happy Mother's Day! I love you more than words can express!",
        "Mom, you are the heart of our family, the glue that holds us together, and the light that guides us home. Your love knows no bounds, and your sacrifices never go unnoticed. Thank you for everything you do. Happy Mother's Day!",
        "On this Mother's Day, I want to celebrate the extraordinary woman you are. Your wisdom has shaped me, your kindness has inspired me, and your love has sustained me through everything. You deserve all the happiness in the world. I love you, Mom!",
        "Happy Mother's Day to the woman who taught me how to love, how to dream, and how to never give up. You are my rock, my cheerleader, and my greatest blessing. Thank you for being the world's best mom!",
        "To my dearest Mom: Your love is the foundation upon which I've built my life. Your strength inspires me daily, and your wisdom guides my every decision. Thank you for being phenomenal. Happy Mother's Day!",
        "Mom, you've worn so many hats – teacher, nurse, chef, counselor, friend. Thank you for playing every role with grace and love. You truly are a superhero in disguise. Happy Mother's Day!",
        "No words can fully express my gratitude for all you've done. From sleepless nights to endless sacrifices, you've given me everything. You're simply the best, Mom. Happy Mother's Day!",
        "Happy Mother's Day to the woman who makes our house a home, our family complete, and my life meaningful. I love you more than all the flowers in the world!",
        "Mom, your prayers have protected me, your love has nurtured me, and your faith has inspired me. Thank you for being my guardian angel on earth. Happy Mother's Day!",
        "To the queen of our home: Your love rules our hearts, your kindness conquers our troubles, and your wisdom lights our path. Happy Mother's Day to the most amazing mom!",
        "Thank you, Mom, for every meal prepared with love, every word spoken with wisdom, and every hug given with warmth. You make life beautiful. Happy Mother's Day!",
        "Mom, you are God's gift to me. Your love reflects His grace, your patience mirrors His mercy, and your care shows His compassion. I'm blessed to call you Mom. Happy Mother's Day!",
        "Happy Mother's Day to the woman who believed in me when I didn't believe in myself, who picked me up when I fell, and who celebrates every victory as if it were her own!",
        "To my first friend, my best friend, my forever friend – Happy Mother's Day, Mom! Thank you for always being there through thick and thin!",
        "Mom, your love is the melody that soothes my soul, the light that brightens my darkest days, and the strength that carries me through. Happy Mother's Day!",
        "No flower is as beautiful as your smile, no perfume as sweet as your love. You are everything beautiful in this world, Mom. Happy Mother's Day!",
        "Thank you for teaching me kindness through your actions, patience through your example, and love through your presence. You're the best teacher I've ever had. Happy Mother's Day!",
        "Mom, you've given me roots to grow and wings to fly. Thank you for balancing guidance with freedom, discipline with love. Happy Mother's Day to my amazing Mom!",
        "To the woman who knows me better than I know myself, who loves me more than I deserve, and who believes in me more than anyone else – Happy Mother's Day!",
        "Happy Mother's Day to my role model, my inspiration, and my hero. Your strength amazes me, your love sustains me, and your wisdom guides me. I love you, Mom!",
        "Mom, you are the heartbeat of our family, the sunshine of my life, and the reason I believe in unconditional love. Thank you for everything. Happy Mother's Day!",
        "To the most selfless person I know: Thank you for putting us first, for loving us unconditionally, and for making every day special. Happy Mother's Day, Mom!",
        "Your hugs heal everything, your words comfort my soul, and your love makes life worth living. Thank you for being you, Mom. Happy Mother's Day!",
        "Happy Mother's Day to the woman who multitasks miracles daily, juggles joy and responsibility effortlessly, and loves unconditionally without fail. You're amazing, Mom!",
        "Mom, in your eyes I see love, in your smile I find joy, in your heart I feel home. Thank you for being my everything. Happy Mother's Day!"
    ],
    5: [
        "Dad, you are my superhero without a cape, my mentor without a classroom, and my best friend without ever trying. Thank you for always being there, for believing in me, and for showing me what true strength looks like. Happy Father's Day!",
        "To the greatest dad in the universe: Thank you for teaching me life's most important lessons, for supporting my dreams, and for always having my back. You are my role model and my inspiration. Happy Father's Day! I love you!",
        "Happy Father's Day to the man who has given me everything and asked for nothing in return. Your love, guidance, and wisdom have shaped me into who I am today. I am forever grateful for you, Dad!",
        "Dad, your strength inspires me, your wisdom guides me, and your love sustains me. Thank you for being the best father anyone could ask for. I hope today is filled with all the things you love. Happy Father's Day!",
        "To my hero, my protector, my Dad: Thank you for working hard to provide for us, for sacrificing your dreams so mine could come true, and for loving us unconditionally. Happy Father's Day!",
        "Dad, you taught me how to be strong yet compassionate, confident yet humble, ambitious yet grateful. Thank you for shaping my character. Happy Father's Day to the best role model!",
        "Happy Father's Day to the man who taught me to ride a bike, to throw a ball, and to reach for the stars. Your patience and love have made all the difference. I love you, Dad!",
        "Dad, you are the foundation of our family, the anchor in our storms, and the compass that keeps us on course. Thank you for being our rock. Happy Father's Day!",
        "To the world's greatest Dad: Your jokes make us laugh, your wisdom makes us think, and your love makes us feel safe. Thank you for being you. Happy Father's Day!",
        "Dad, your handshake taught me integrity, your hug taught me love, and your example taught me how to be a good person. Thank you for everything. Happy Father's Day!",
        "Happy Father's Day to my first hero and my forever hero. You've shown me what it means to be strong, kind, and loving. I'm so proud to be your child!",
        "Dad, you've been there for every milestone, every challenge, every victory, and every defeat. Thank you for your unwavering presence and support. Happy Father's Day!",
        "To the man who taught me that real strength is in character, real wealth is in relationships, and real success is in impact – Happy Father's Day! You're the richest man I know!",
        "Dad, your hard work inspires me, your dedication motivates me, and your love sustains me. Thank you for being an amazing father. Happy Father's Day!",
        "Happy Father's Day to the man who can fix anything – from broken toys to broken hearts. Thank you for always making things better. I love you, Dad!",
        "Dad, you're my mentor in success, my comforter in failure, and my cheerleader in every endeavor. Thank you for believing in me always. Happy Father's Day!",
        "To my Dad: Your wisdom is my guidance, your strength is my inspiration, and your love is my foundation. Thank you for being extraordinary. Happy Father's Day!",
        "Happy Father's Day to the man who taught me to stand tall, walk with dignity, and live with purpose. Your lessons have shaped my life. Thank you, Dad!",
        "Dad, you've given me the best gift – your time, your love, and your presence. No amount of money could buy what you've freely given. Happy Father's Day!",
        "To my first teacher, my lifetime mentor, my forever champion – Happy Father's Day! Thank you for believing in me even when I didn't believe in myself!",
        "Dad, you're the strongest man I know, not because of your muscles, but because of your character, integrity, and heart. Happy Father's Day to my hero!",
        "Happy Father's Day to the man who works hard without complaining, loves deeply without conditions, and gives endlessly without expecting anything in return. You're amazing, Dad!",
        "Dad, your sacrifices haven't gone unnoticed, your love hasn't gone unappreciated, and your impact hasn't gone unfelt. Thank you for being the best Dad. Happy Father's Day!",
        "To the man who taught me how to tie my shoes, how to ride a bike, and how to face life's challenges – thank you, Dad. Happy Father's Day!",
        "Dad, you are my rock, my refuge, and my reason to believe that good men exist. Thank you for setting the bar so high. Happy Father's Day!"
    ],
    6: [
        "Happy Independence Day! Today we celebrate the freedom that so many have fought to protect. May we never take for granted the liberties we enjoy and may we always strive to make our nation a place of justice, equality, and opportunity for all. God bless America!",
        "As fireworks light up the sky, let's remember the brave men and women who have defended our freedom. May this 4th of July be filled with family, friends, good food, and grateful hearts. Happy Independence Day!",
        "On this Independence Day, let us celebrate the spirit of freedom that makes our nation great. May the stars and stripes forever wave as a symbol of hope, courage, and unity. Wishing you a safe and joyful 4th of July!",
        "Happy 4th of July! May the spirit of patriotism fill your heart, may the BBQ be delicious, and may the fireworks be spectacular. Here's to celebrating the land of the free and the home of the brave!",
        "As we celebrate America's birthday, let's remember the values that make us strong – liberty, justice, and unity. May this Independence Day remind us of our shared heritage and hopeful future!",
        "Happy 4th of July! Today we celebrate not just fireworks and BBQs, but the ideals of freedom and democracy that define us. May God continue to bless America!",
        "On this Independence Day, may we honor those who fought for our freedom, respect those who protect it, and celebrate the privileges we enjoy. Happy 4th of July!",
        "From sea to shining sea, may the spirit of freedom reign in our hearts. Wishing you a spectacular 4th of July filled with pride, joy, and celebration!",
        "Happy Independence Day! May the red remind us of valor, the white of purity, and the blue of justice. May we always strive to live up to these ideals!",
        "On this 4th of July, let's celebrate the American dream, honor our veterans, and look forward to a future as bright as the fireworks that light our sky tonight!",
        "Happy Summer! May this season bring you sunshine adventures, beach memories, and lazy afternoons. May your days be long, your drinks be cold, and your worries be few!",
        "Summer is here with its golden sunshine and endless possibilities! May you make the most of every warm day, create beautiful memories, and enjoy life's simple pleasures!",
        "Wishing you a summer filled with beach days, BBQs, and blissful moments. May the warm weather bring warmth to your heart and joy to your soul!",
        "Happy summer! May your vacation be relaxing, your adventures be thrilling, and your memories be unforgettable. Here's to the best season of the year!",
        "As the sun shines brighter and days grow longer, may you find more reasons to smile, more opportunities to relax, and more moments to cherish. Happy summer!",
        "Summer is the time to slow down, soak up the sun, and savor life's sweetest moments. May this season bring you peace, joy, and plenty of ice cream!",
        "Wishing you a summer filled with sandy toes, sun-kissed nose, and a heart full of happiness. May every day be an adventure worth remembering!",
        "Happy summer! May you find paradise wherever you are, whether on a tropical beach or in your own backyard. Enjoy every sunny moment!",
        "As summer unfolds, may you discover new places, try new things, and create memories that last a lifetime. Here's to a season of fun and adventure!",
        "May your summer be filled with lazy mornings, exciting afternoons, and peaceful evenings. May you rest, recharge, and return refreshed!",
        "Happy summer! May the warm breeze carry away your worries, the sunshine brighten your days, and the good times fill your heart with joy!",
        "Wishing you a summer of laughter with friends, quality time with family, and moments of peaceful solitude. May this season nourish your soul!",
        "Summer is nature's invitation to celebrate life! May you accept the invitation fully and enjoy every moment of this beautiful season!",
        "Happy summer! May your days be filled with golden sunshine, your nights with starry skies, and your heart with contentment and joy!",
        "As summer paints the world in brilliant colors, may your life be equally vibrant and full of beautiful moments. Enjoy this magical season!"
    ],
    7: [
        "Summer is here, bringing with it endless sunshine, warm nights, and unforgettable memories waiting to be made. May your summer be filled with beach days, ice cream cones, and adventures that take your breath away. Enjoy every moment!",
        "Wishing you a summer filled with lazy days, spontaneous road trips, and the kind of laughter that makes your stomach hurt. May the sun shine bright on all your endeavors and may you create memories that last a lifetime!",
        "As the temperature rises, may your worries melt away and your happiness soar. May this summer bring you relaxation, adventure, and all the vitamin sea you need. Here's to the best summer yet!",
        "Happy Summer! May your days be filled with sunshine, your nights with starlight, and your heart with contentment. Take time to rest, play, and enjoy the simple pleasures that make this season so special!",
        "August brings the peak of summer! May you soak up every ray of sunshine, create endless memories, and live each day to the fullest. Enjoy the warmth while it lasts!",
        "Wishing you an August filled with beachside adventures, poolside relaxation, and summertime fun. May every moment be golden and every memory be precious!",
        "Happy August! May the dog days of summer bring you joy rather than exhaustion. May you find time to relax, recharge, and enjoy life's simple pleasures!",
        "As August unfolds, may you experience the perfect balance of adventure and relaxation. May your days be filled with sunshine and your nights with cool breezes!",
        "Summer is fading but the memories you make now will last forever! Make this August count with adventures, laughter, and quality time with loved ones!",
        "Wishing you an August that's as bright as the summer sun and as refreshing as a cool breeze. May this month bring you joy, peace, and beautiful moments!",
        "Happy August! May you find paradise in your own backyard, adventure in nearby places, and happiness in simple moments. Enjoy the summer while it lasts!",
        "As we reach the height of summer, may your spirits soar just as high! May August bring you sunny days, starry nights, and memories worth treasuring!",
        "August is the perfect time to live in the moment! May you put aside worries, embrace joy, and create memories that warm your heart all year long!",
        "Wishing you an August filled with golden sunshine, refreshing swims, and laughter that echoes through warm summer nights. Make it unforgettable!",
        "Happy August! May you find time to slow down, breathe deeply, and appreciate the beauty of summer. May this month bring peace to your soul!",
        "As August arrives, may you experience the magic of summer nights, the joy of spontaneous adventures, and the peace of lazy afternoons. Enjoy every moment!",
        "Wishing you an August that sparkles with possibilities! May every day bring new adventures and every night bring sweet rest. Happy summer!",
        "Happy August! May this month be your best yet – filled with sunshine, laughter, love, and all the ice cream you can eat! Enjoy summer's grand finale!",
        "As we celebrate August, may you find joy in warm weather, peace in nature's beauty, and happiness in the company of loved ones. Make it memorable!",
        "Wishing you an August that's hot with fun, cool with breezes, and perfect in every way. May your summer end on the highest note!",
        "Happy August! May you make a splash, soak up the sun, and create memories that shine brighter than the summer sun itself!",
        "As August unfolds, may you find adventure in every day, magic in every sunset, and joy in every sunrise. Make this summer month count!",
        "Wishing you an August filled with beach trips, BBQs, and beautiful moments. May you end your summer with a heart full of happy memories!",
        "Happy August! May this final stretch of summer bring you relaxation, rejuvenation, and reasons to smile. Enjoy every golden moment!",
        "As we savor the last full month of summer, may you live fully, love deeply, and create memories that last a lifetime. Happy August!"
    ],
    8: [
        "As autumn leaves begin to fall and the air turns crisp, may you find beauty in the changing seasons and comfort in cozy moments. May this fall bring you peace, prosperity, and pumpkin-spiced everything! Happy Autumn!",
        "Fall reminds us that change can be beautiful. As nature transforms around us, may you too embrace growth and new beginnings. Wishing you a season filled with colorful moments, warm sweaters, and grateful hearts!",
        "Welcome autumn with open arms! May this season of harvest bring you abundance in all areas of your life. May you find joy in falling leaves, comfort in warm drinks, and happiness in every moment. Happy Fall!",
        "As the leaves turn golden and the days grow shorter, may you find magic in every moment. May this fall season bring you closer to your goals, your loved ones, and your true self. Enjoy the beauty of autumn!",
        "Happy September! As summer transitions to fall, may you embrace the change with grace. May this month bring you harvest blessings and autumn joy!",
        "Wishing you a September filled with crisp mornings, colorful afternoons, and cozy evenings. May the changing season bring beautiful changes to your life too!",
        "As September arrives, may you find peace in the changing seasons, joy in autumn's beauty, and gratitude for summer's memories. Happy fall!",
        "Happy September! May the harvest season bring abundance to your life – abundant joy, abundant love, and abundant blessings in all you do!",
        "As leaves begin their colorful transformation, may you too experience positive changes. May September bring growth, success, and happiness to your life!",
        "Wishing you a September filled with pumpkin patches, apple orchards, and all the cozy vibes that make autumn special. Enjoy the season!",
        "Happy September! May you find beauty in falling leaves, comfort in cooler weather, and joy in this transitional season. Welcome autumn!",
        "As September unfolds, may you harvest the fruits of your labor, enjoy the beauty of changing seasons, and embrace new beginnings. Happy fall!",
        "Wishing you a September that's as colorful as autumn leaves and as comforting as a warm blanket. May this month bring you peace and joy!",
        "Happy September! As nature prepares for winter, may you find time to prepare, reflect, and appreciate. May this month bring you contentment!",
        "As September brings cooler days and longer nights, may you find warmth in relationships, comfort in home, and joy in simple pleasures. Happy autumn!",
        "Wishing you a September filled with hayrides, bonfires, and all things cozy. May the arrival of fall bring you happiness and peace!",
        "Happy September! May the changing leaves remind you that transformation is beautiful. May this month bring positive changes to your life!",
        "As summer fades and fall arrives, may you celebrate both – grateful for warm memories and excited for cozy times ahead. Happy September!",
        "Wishing you a September that tastes like apple cider, feels like soft flannel, and looks like a landscape painting. Enjoy every autumn moment!",
        "Happy September! May this transitional month bring you clarity, purpose, and excitement for what's ahead. Embrace the change!",
        "As September paints the world in warm colors, may your life be equally vibrant. May this month bring you joy, peace, and beautiful moments!",
        "Wishing you a September filled with harvest moons, falling stars, and grateful hearts. May autumn bring you countless blessings!",
        "Happy September! May you find magic in misty mornings, beauty in golden afternoons, and peace in cool evenings. Enjoy fall's arrival!",
        "As September ushers in autumn, may it also usher in new opportunities, fresh perspectives, and abundant blessings. Happy fall!",
        "Wishing you a September that's perfectly balanced – not too hot, not too cold, just right in every way. May this month bring you happiness!"
    ],
    9: [
        "Independence Day Nigeria! Today we celebrate 66 years of freedom, unity, and progress. As we honor our heroes past, let us commit to building a better Nigeria for generations to come. From Sokoto to Calabar, from Lagos to Maiduguri, we are one nation bound in freedom, peace, and unity. God bless the Federal Republic of Nigeria! 🇳🇬",
        "On this special day, we celebrate the birth of our great nation. Nigeria, our motherland, we pledge to thee our strength and service. May the green and white flag forever wave as a symbol of our independence, our diversity, and our collective dreams. Happy 66th Independence Day to all Nigerians at home and abroad! 💚🤍💚",
        "As we mark another year of independence, let us remember the sacrifices of our founding fathers and the resilience of the Nigerian spirit. From the Niger to the Benue, from the Atlantic coast to the Sahel, we are united in our love for this great nation. May Nigeria continue to rise and shine on the global stage. Happy Independence Day! 🇳🇬",
        "Happy Independence Day to the Giant of Africa! Today we celebrate not just our freedom from colonial rule, but our rich culture, our vibrant people, and our endless potential. Whether you're Igbo, Yoruba, Hausa, or any of our beautiful tribes, we are all Nigerians. Together we stand, together we rise. Naija to the world! 🌍🇳🇬",
        "On October 1st, 1960, Nigeria became free and independent. Today, 66 years later, we celebrate how far we've come and look forward to the bright future ahead. May God continue to bless Nigeria with peace, progress, and prosperity. Happy Independence Day to every Nigerian! 💚🤍💚",
        "Happy Independence Day, Nigeria! Today we celebrate our sovereignty, our diversity, and our unity. From the bustling streets of Lagos to the serene landscapes of Jos, we are one people, one nation, one destiny. Naija pride forever!",
        "On this October 1st, we remember those who fought for our freedom and honor those who continue to build our nation. May Nigeria's flag fly high and her people prosper. Happy Independence Day!",
        "Celebrating 66 years of Nigerian independence! Our journey has been challenging but rewarding. Together, we've overcome obstacles and achieved greatness. Here's to many more years of progress and unity! 🇳🇬",
        "Happy Independence Day to all proud Nigerians! Whether you're in Abuja, Port Harcourt, or abroad, today we celebrate our motherland. May Nigeria continue to be a beacon of hope in Africa!",
        "On this special day, we celebrate not just independence, but our rich heritage, diverse cultures, and incredible potential. Nigeria, we believe in you! Happy Independence Day!",
        "From the savannas of the North to the rainforests of the South, from East to West, we celebrate Nigeria's independence! United in our diversity, strong in our unity. Happy October 1st! 🇳🇬",
        "Happy Independence Day, Nigeria! Today we honor our past, celebrate our present, and envision a brighter future. May our green-white-green flag forever symbolize hope, peace, and unity!",
        "Sixty-six years of independence! Sixty-six years of growth! Nigeria, you are a nation of warriors, dreamers, and achievers. Happy Independence Day to the Giant of Africa!",
        "On this Independence Day, let us renew our commitment to building a Nigeria where every child has opportunity, every voice is heard, and every dream is possible. Naija to the world! 🌍",
        "Happy October 1st! Today we celebrate the spirit of Nigeria – resilient, vibrant, and full of potential. May our nation continue to rise and shine on the global stage!",
        "Independence Day reminds us that freedom is precious and unity is powerful. As Nigerians, we are diverse yet united, different yet one. Happy Independence Day!",
        "From Tafawa Balewa to today's leaders, from Zik to modern heroes, we celebrate those who've shaped Nigeria. Happy Independence Day! May we continue their legacy of courage and vision!",
        "Happy Independence Day, Nigeria! Your music inspires the world, your people amaze everyone, your spirit is unbreakable. Proudly Nigerian today and always! 🇳🇬",
        "On this October 1st, we celebrate 66 years of freedom, resilience, and progress. Nigeria, you've faced challenges but emerged stronger. Here's to your bright future! Happy Independence Day!",
        "Happy Independence Day to every Nigerian! Whether Hausa, Igbo, Yoruba, Ijaw, Fulani, or any of our 250+ ethnic groups, today we are simply Nigerian. United we stand!",
        "Celebrating Nigeria's independence means celebrating our jollof rice, our Nollywood, our Afrobeats, our football, our fashion, and our phenomenal people! Happy October 1st! 🎉",
        "On this Independence Day, we remember that Nigeria's strength lies in her people. From entrepreneurs to artists, from teachers to doctors, we are building a great nation together! 🇳🇬",
        "Happy Independence Day, Nigeria! May the green represent our fertile land, the white represent peace, and our collective spirit represent unstoppable progress. Naija for life! 💚🤍💚",
        "Sixty-six years ago, Nigeria gained her independence. Today, we celebrate not just freedom from colonial rule, but freedom to dream, to achieve, and to be great. Happy Independence Day!",
        "Happy October 1st to all Nigerians! Our nation has incredible potential, beautiful diversity, and an indomitable spirit. Together, we'll make Nigeria the pride of Africa! 🇳🇬🌟"
    ],
    10: [
        "This November, I'm filled with gratitude for all the blessings in my life, and you're at the top of that list. May this month bring you peace, joy, and countless reasons to smile. Thank you for being such an important part of my journey. Wishing you a wonderful November!",
        "As autumn leaves fall and the year draws to a close, let us take a moment to appreciate all the good things in our lives. May you be surrounded by love, blessed with health, and filled with gratitude. Happy November!",
        "In this season of thanksgiving and reflection, may you count your blessings and find joy in the simple things. May your heart overflow with gratitude and your days be filled with warmth and happiness. Wishing you a blessed November!",
        "November reminds us to pause and give thanks for all we have. May you find peace in quiet moments, joy in family gatherings, and gratitude in every sunrise. Thank you for being part of my life. Happy Novembergiving!",
        "Thanksgiving is a time to reflect on all the good in our lives. May you find joy in simple pleasures, peace in quiet moments, and love in the company of those who matter most. Wishing you a blessed Thanksgiving!",
        "As we gather around the table this Thanksgiving, let's remember to be grateful not just for the feast before us, but for the love around us. May your holiday be filled with warmth, laughter, and countless blessings!",
        "Happy November! As we enter the month of gratitude, may you find countless reasons to be thankful. May your heart be full and your blessings be abundant!",
        "Wishing you a November filled with cozy sweaters, warm drinks, and grateful hearts. May this month bring you peace, love, and happiness!",
        "As November arrives, may you take time to reflect on life's blessings, express gratitude for what you have, and spread thankfulness wherever you go!",
        "Happy November! May the spirit of thanksgiving fill your heart, your home be filled with warmth, and your table be surrounded by loved ones!",
        "In this month of gratitude, may you recognize how blessed you are, appreciate those who love you, and give thanks for every precious moment. Happy November!",
        "Wishing you a November that reminds you of life's simple joys – family, friends, health, and love. May gratitude fill every day!",
        "Happy November! As leaves fall and temperatures drop, may your heart remain warm with thankfulness and your spirit bright with hope!",
        "May this November bring you moments worth treasuring, people worth celebrating, and blessings worth sharing. Happy month of thanksgiving!",
        "As November unfolds, may you find beauty in autumn's colors, comfort in cozy moments, and gratitude in every experience. Wishing you a blessed month!",
        "Happy November! May you count your blessings instead of your troubles, focus on abundance instead of lack, and give thanks in all circumstances!",
        "Wishing you a November filled with family gatherings, delicious feasts, and hearts overflowing with gratitude. May thanksgiving be every day!",
        "As we enter the season of gratitude, may you realize how much you have to be thankful for. May November bring you peace, joy, and countless blessings!",
        "Happy November! May the falling leaves remind you to let go of worries, and may the spirit of thanksgiving remind you to count your blessings!",
        "Wishing you a November where every sunset reminds you of beauty, every sunrise brings new hope, and every moment fills you with gratitude!",
        "As November brings cooler weather, may it also bring warm feelings of gratitude, love, and appreciation for all life's gifts. Happy thanksgiving month!",
        "Happy November! May you be blessed with good health, surrounded by loved ones, and filled with gratitude for all the wonderful things in your life!",
        "Wishing you a November that teaches you to appreciate what you have, cherish who you love, and be grateful for every single day. Happy month of blessings!",
        "As November arrives with its autumn beauty, may your heart be beautiful with gratitude, your home be filled with love, and your life be blessed with joy!",
        "Happy November! May this month of thanksgiving remind you that you are blessed beyond measure and loved beyond words. Count your blessings daily!"
    ],
    11: [
        "May your Christmas sparkle with moments of love, laughter and goodwill. May the year ahead be full of contentment and joy. Have a Merry Christmas!",
        "Wishing you a magical and blissful holiday season! May this festive season bring you closer to all those you treasure in your heart. Merry Christmas!",
        "May the spirit of Christmas bring you peace, the gladness of Christmas give you hope, and the warmth of Christmas grant you love. Have a wonderful holiday!",
        "Sending you warm wishes for a wonderful Christmas filled with love, laughter, and all the things that make this season special. May your heart be filled with joy!",
        "Merry Christmas! May your home be filled with the sounds of laughter, your tree be surrounded by loved ones, and your heart be overflowing with holiday cheer!",
        "Wishing you a Christmas that's merry and bright! May the twinkling lights remind you of life's magic and the Christmas spirit fill your soul with peace and joy!",
        "May this Christmas bring you closer to those you love, remind you of blessings you have, and fill your life with hope for the year ahead. Merry Christmas!",
        "Happy Christmas! May Santa bring you everything you wished for, may your stockings overflow with joy, and may your heart be warm with love!",
        "Wishing you a season of blessings, a heart full of love, and a new year filled with promise. May this Christmas be your merriest yet!",
        "Merry Christmas! May the wonder of the season fill your home, the joy of giving fill your heart, and the love of family surround you always!",
        "May your Christmas be wrapped in happiness, tied with love, and sealed with faith. Wishing you a blessed and beautiful holiday season!",
        "Happy Christmas! May every carol sung bring you joy, every ornament hung bring you memories, and every moment shared bring you love!",
        "Wishing you a Christmas filled with childlike wonder, festive joy, and the warmth of loved ones gathered near. May your holidays be magical!",
        "Merry Christmas! May the spirit of Christmas Past remind you of cherished memories, Christmas Present fill you with joy, and Christmas Future bring you hope!",
        "May your Christmas tree shine bright, your Christmas dinner be delicious, and your Christmas memories last forever. Wishing you a wonderful holiday!",
        "Happy Christmas! May you experience the true meaning of the season – love, peace, hope, and joy. May these gifts stay with you all year!",
        "Wishing you a Christmas that's as special as you are! May it be filled with surprises, delights, and moments that make your heart sing!",
        "Merry Christmas! May the bells ring with joy, the snow fall gently, and the love in your heart grow stronger with each passing holiday moment!",
        "May this Christmas season bring you peace that passes understanding, joy that knows no bounds, and love that lasts forever. Happy holidays!",
        "Happy Christmas! May your heart be light, your spirits bright, and your celebrations filled with everything that makes this season wonderful!",
        "Wishing you a Christmas surrounded by family, filled with laughter, blessed with love, and remembered forever. Merry Christmas and Happy New Year!",
        "Merry Christmas! May the magic of the season transform ordinary moments into extraordinary memories. May your holidays be truly blessed!",
        "May your Christmas be filled with the warmth of fireplaces, the sweetness of cookies, the joy of carols, and the love of family. Happy holidays!",
        "Happy Christmas! May you receive all you've wished for, give all you can offer, and experience the true joy that this season brings!",
        "Wishing you a Christmas that sparkles with joy, glows with love, and shines with hope. May the new year bring you endless blessings. Merry Christmas!"
    ]
};

// ===== OCCASION-BASED WISHES (Independent of Month) =====
const occasionWishes = {
    birthday: {
        short: [
            "Happy Birthday! 🎂 Wishing you an amazing day!",
            "Cheers to another year of wonderful you! 🥳",
            "May all your wishes come true today! 🌟",
            "Happy Birthday! Enjoy your special day! 🎁",
            "Another year older, wiser, and more amazing! ✨",
            "Sending you birthday love and hugs! 🤗",
            "May your day be as wonderful as you are! 💖",
            "Happy Birthday! Make it unforgettable! 🎆",
            "Celebrating you today and always! 🎉",
            "Wishing you joy, love, and cake! 🎂",
            "Have a brilliant birthday! 🌈",
            "May this year bring you happiness! 😊",
            "Happy Birthday! Stay blessed! 🙏",
            "Here's to your best year yet! 🥂",
            "Wishing you endless celebrations! 🎊",
            "Happy Birthday! Shine bright! ⭐",
            "May your day sparkle with happiness! ✨",
            "Celebrate like there's no tomorrow! 🎈",
            "Happy Birthday! You deserve the world! 🌍",
            "Wishing you a day full of surprises! 🎁",
            "Happy Birthday! Keep being awesome! 💫",
            "May your birthday be filled with laughter! 😄",
            "Another trip around the sun! 🌞",
            "Happy Birthday! Live it up! 🎉",
            "Wishing you the happiest of birthdays! 🎂"
        ],
        long: [
            "Happy Birthday! May this special day bring you endless joy and may the year ahead be filled with prosperity, good health, and wonderful surprises. You deserve all the happiness in the world!",
            "Wishing you a spectacular birthday filled with love, laughter, and unforgettable moments. May this new chapter of your life be the most amazing one yet!",
            "On your special day, I wish you good health, happiness, and prosperity. May all your dreams come true and may you continue to inspire everyone around you!",
            "Happy Birthday! May your day be filled with sunshine and smiles, laughter and love. Here's to celebrating you and all the joy you bring into our lives!",
            "Sending you warmest wishes on your birthday! May this year bring you closer to your dreams and fill your life with beautiful moments and cherished memories!",
            "Happy Birthday! Another year of amazing experiences, growth, and achievements. May the year ahead exceed all your expectations and bring you immense joy!",
            "Wishing you a birthday as wonderful as you are! May your special day be filled with love, laughter, and everything your heart desires!",
            "Happy Birthday! May you be blessed with good health, true happiness, and all the success you deserve. Here's to another fantastic year of your life!",
            "On this special day, I celebrate you! May your birthday be just the beginning of a year full of happy moments and wonderful memories!",
            "Happy Birthday! May your day be filled with love from family and friends, and may the year ahead bring you countless reasons to smile!",
            "Wishing you a birthday celebration worthy of the amazing person you are! May this year bring you new adventures and beautiful experiences!",
            "Happy Birthday! May your special day be surrounded by happiness, filled with laughter, wrapped in pleasure, and blessed with love!",
            "Another year wiser, stronger, and more incredible! Happy Birthday! May this year be your best one yet, filled with endless possibilities!",
            "Happy Birthday! May you continue to inspire others with your kindness and light up every room you enter. Wishing you a year of blessings!",
            "On your birthday, I wish you abundant happiness, good health, and all the success in the world. May all your birthday wishes come true!",
            "Happy Birthday! May this milestone year bring you everything you've been hoping for and more. Celebrate big – you deserve it!",
            "Wishing you a birthday filled with sweet moments, cherished memories, and all your favorite things. May the year ahead be absolutely extraordinary!",
            "Happy Birthday! May your day be as bright as your smile, as sweet as your heart, and as wonderful as the joy you bring to others!",
            "Another year of being fabulous! Happy Birthday! May you continue to grow, shine, and achieve all your heart's desires!",
            "Happy Birthday! May the candles on your cake be outnumbered by the blessings in your life. Here's to a year full of love and laughter!",
            "Wishing you a birthday that's just the beginning of a year filled with happy memories, wonderful moments, and shining dreams!",
            "Happy Birthday! May you be surrounded by good friends, great food, and endless laughter today and always!",
            "On your special day, may you be blessed with everything that brings you joy. Happy Birthday to someone who makes the world brighter!",
            "Happy Birthday! May this year bring you new opportunities, exciting adventures, and all the happiness your heart can hold!",
            "Wishing you a birthday celebration as amazing as you are! May your special day be filled with love, joy, and unforgettable moments!"
        ]
    },
    wedding: {
        short: [
            "Congratulations on your wedding! 💒",
            "Wishing you a lifetime of love and happiness! 💕",
            "May your love story be eternal! 💑",
            "Best wishes on your special day! 💍",
            "Congratulations to the happy couple! 🎊",
            "May your marriage be blessed! 🙏",
            "Wishing you endless love and joy! ❤️",
            "Here's to your happily ever after! ✨",
            "Congratulations on finding your forever! 💖",
            "May your union be filled with love! 💝",
            "Wishing you a beautiful journey together! 🌹",
            "Congratulations on your big day! 🎉",
            "May your love grow stronger each day! 💪",
            "Best wishes for a happy marriage! 😊",
            "Celebrating your love today! 🥂",
            "May you always cherish each other! 💑",
            "Congratulations on tying the knot! 🎀",
            "Wishing you a lifetime of romance! 💐",
            "May your marriage be magical! 🪄",
            "Here's to love and laughter! 💕",
            "Wishing you both forever happiness! ♾️",
            "Congratulations! Love wins! 🏆",
            "May your wedding day be perfect! 🌟",
            "Wishing you endless blessings! ✨",
            "Congratulations on your union! 👰🤵"
        ],
        long: [
            "Congratulations on your wedding day! May your marriage be filled with all the right ingredients: love, humor, understanding, and forgiveness. Wishing you a lifetime of happiness together!",
            "As you begin this beautiful journey together, may your love for each other grow stronger with each passing day. Wishing you a marriage filled with joy, laughter, and endless love!",
            "On this special day, two hearts become one. May your union be blessed with unconditional love, understanding, and companionship. Congratulations and best wishes for a wonderful life together!",
            "Wishing you both a lifetime of love and happiness as you embark on this wonderful journey of marriage. May your bond grow stronger and your love deeper with each passing year!",
            "Congratulations on finding your perfect match! May your marriage be filled with beautiful moments, cherished memories, and a love that lasts forever. Wishing you all the happiness in the world!",
            "On your wedding day, I wish you a lifetime of love, laughter, and happily ever after. May your marriage be everything you've dreamed of and more!",
            "Congratulations! Today marks the beginning of your forever. May your love continue to bloom and your commitment to each other remain unshakeable. Wishing you endless joy!",
            "Wishing you a marriage filled with love that grows stronger, laughter that never ends, and companionship that lasts a lifetime. Congratulations on your wedding!",
            "May your wedding day be just the beginning of a long and happy life together. Congratulations on finding your soulmate and best friend!",
            "Congratulations on your wedding! May your marriage be blessed with love, joy, and companionship for all the years of your lives!",
            "As you exchange your vows today, may you always remember the love and commitment you share. Wishing you a beautiful marriage filled with precious moments!",
            "Congratulations! May your marriage be filled with all the right ingredients for lasting happiness: respect, trust, understanding, and loads of love!",
            "Wishing you both a lifetime of love and happiness. May your marriage be filled with all the special things that make life worth living!",
            "Congratulations on your wedding! May your love for each other be modern enough to survive the times and old-fashioned enough to last forever!",
            "On your wedding day, I wish you a lifetime of happiness, a smaller amount of worries, and a truck load of big dreams coming true!",
            "Congratulations! May your marriage be filled with laughter, surrounded by love, and blessed with happiness today and always!",
            "Wishing you a wonderful wedding day and a lifetime of happy tomorrows. May your love story be filled with chapters of joy and adventure!",
            "Congratulations on your wedding! May you always find in each other the love, laughter, and happiness that only partners in life can share!",
            "As you start this new journey together, may you always find reasons to smile, things to celebrate, and love that continues to grow. Congratulations!",
            "Wishing you both an incredible wedding day and a marriage filled with love, laughter, and all the wonderful things life has to offer!",
            "Congratulations! May your marriage be blessed with understanding, compassion, and unconditional love. Here's to your beautiful future together!",
            "On your wedding day, may you begin a lifetime of making wonderful memories together. Wishing you endless love and happiness!",
            "Congratulations on your wedding! May your love shine brighter and your companionship grow richer with each passing year!",
            "Wishing you a marriage full of love, laughter, and happily ever after moments. May you always find joy in each other's arms. Congratulations!",
            "Congratulations! May your wedding day be the beginning of a long, happy marriage filled with special moments and treasured memories!"
        ]
    },
    anniversary: {
        short: [
            "Happy Anniversary! Celebrating your love! 💕",
            "Wishing you many more years together! 💑",
            "Happy Anniversary to a wonderful couple! 🎊",
            "May your love continue to flourish! 🌹",
            "Celebrating your beautiful journey! ✨",
            "Happy Anniversary! Here's to forever! 💍",
            "Wishing you continued happiness! 😊",
            "May your love story never end! 📖",
            "Happy Anniversary! Stay blessed! 🙏",
            "Cheers to your lasting love! 🥂",
            "Celebrating your special bond! 💖",
            "Happy Anniversary! Love always! ❤️",
            "May your bond grow stronger! 💪",
            "Wishing you endless romance! 💐",
            "Happy Anniversary! Stay in love! 💝",
            "Celebrating years of togetherness! 🎉",
            "May your love shine bright! ⭐",
            "Happy Anniversary! Forever yours! 💑",
            "Wishing you timeless love! ⏰",
            "Celebrating your commitment! 💍",
            "Happy Anniversary! Still going strong! 💪",
            "Wishing you many more memories! 📸",
            "Happy Anniversary! You inspire us! 🌟",
            "Celebrating your love today! 🥳",
            "Happy Anniversary! Keep loving! ❤️"
        ],
        long: [
            "Happy Anniversary! Your love story is an inspiration to all who know you. May you continue to build a beautiful life together filled with love, understanding, and endless joy!",
            "Wishing you a wonderful anniversary celebration! Your relationship is a testament to true love and commitment. May you continue to create beautiful memories together for many years to come!",
            "Happy Anniversary to an amazing couple! Your love has stood the test of time and grown stronger with each passing year. Wishing you continued happiness and many more anniversaries to celebrate!",
            "Celebrating another year of your beautiful journey together! May your love continue to blossom and may you always find joy in each other's company. Happy Anniversary!",
            "Happy Anniversary! Your commitment to each other is truly admirable. May this special day remind you of all the wonderful moments you've shared and the many more beautiful memories yet to come!",
            "Wishing you both a Happy Anniversary! May your love continue to grow deeper, your laughter louder, and your bond stronger with each passing year!",
            "Happy Anniversary! You two are the perfect example of what true love looks like. May you continue to inspire others with your beautiful relationship!",
            "Congratulations on another year of love, laughter, and togetherness! May your anniversary be filled with beautiful memories and your future with endless happiness!",
            "Happy Anniversary! May you continue to walk hand in hand through life's journey, supporting each other and growing together in love and harmony!",
            "Wishing you a Happy Anniversary filled with romantic moments and cherished memories. May your love story continue to be an inspiration to everyone around you!",
            "Happy Anniversary! Your love has only grown more beautiful with time. Here's to many more years of happiness, love, and togetherness!",
            "Celebrating your anniversary and the wonderful bond you share! May your love continue to flourish and bring you joy for years to come!",
            "Happy Anniversary! May this special day be a reminder of the love that brought you together and the commitment that keeps you strong!",
            "Wishing you both a Happy Anniversary! Your relationship is proof that true love exists and that with commitment, anything is possible!",
            "Happy Anniversary! May you continue to create beautiful memories, overcome challenges together, and strengthen your bond with each passing day!",
            "Congratulations on another year of love and partnership! May your anniversary be as special as the love you share and as beautiful as your journey together!",
            "Happy Anniversary! Your love story gets better with each chapter. Wishing you many more years of happiness, love, and wonderful adventures together!",
            "Wishing you a Happy Anniversary filled with reflection on beautiful memories and excitement for the future. May your love continue to grow stronger!",
            "Happy Anniversary! May you always find reasons to celebrate your love and may your bond continue to deepen with each passing year!",
            "Congratulations on your anniversary! Your commitment to each other is truly inspiring. Wishing you many more years of love, laughter, and happiness!",
            "Happy Anniversary! May your love continue to be a shining example of what a strong, committed relationship looks like. Here's to many more years together!",
            "Wishing you both a wonderful anniversary celebration! May your love story continue to inspire and your commitment to each other remain unbreakable!",
            "Happy Anniversary! Another year of love, growth, and beautiful memories. May your journey together continue to be filled with joy and blessings!",
            "Congratulations on your anniversary! May you continue to love, cherish, and support each other through all of life's adventures. Here's to forever!",
            "Happy Anniversary! Your love has weathered every storm and celebrated every joy. Wishing you continued strength, happiness, and endless love!"
        ]
    },
    graduation: {
        short: [
            "Congratulations Graduate! 🎓",
            "You did it! So proud of you! 🎉",
            "Wishing you success in your future! 🌟",
            "Congratulations on your achievement! 🎊",
            "Your hard work paid off! 💪",
            "Happy Graduation Day! 🎓",
            "The future is yours! ✨",
            "Congratulations on this milestone! 🏆",
            "Wishing you endless possibilities! 🚀",
            "You're going to do great things! 🌈",
            "Proud of your accomplishment! 👏",
            "Congratulations! Dream big! 💭",
            "Your journey begins now! 🛤️",
            "Happy Graduation! Shine on! ⭐",
            "Celebrating your success! 🥳",
            "The world awaits you! 🌍",
            "Congratulations! Well deserved! 🏅",
            "Your future is bright! 💡",
            "Happy Graduation! Soar high! 🦅",
            "Wishing you amazing adventures! 🗺️",
            "Congratulations! You're amazing! 🌟",
            "Celebrating your achievement! 🎉",
            "Happy Graduation! Go conquer! 👑",
            "Wishing you boundless success! 🎯",
            "Congratulations! You made it! 🎊"
        ],
        long: [
            "Congratulations on your graduation! This is a momentous achievement that marks the beginning of an exciting new chapter. May your future be filled with success, happiness, and endless opportunities!",
            "Your graduation is a testament to your hard work, dedication, and perseverance. As you step into the next phase of your journey, may you continue to reach for the stars and achieve all your dreams!",
            "Happy Graduation! Your achievement today is just the beginning of a bright and successful future. May you continue to learn, grow, and make a positive impact wherever you go!",
            "Congratulations on reaching this important milestone! Your education has prepared you for great things ahead. Wishing you courage, confidence, and success in all your future endeavors!",
            "As you graduate today, remember that this is not the end but the beginning of an incredible journey. May you find fulfillment and success in everything you pursue. Congratulations!",
            "Congratulations Graduate! Your hard work, determination, and dedication have brought you to this proud moment. May your future be as bright as your potential!",
            "Happy Graduation! You've proven that with commitment and perseverance, anything is possible. Wishing you all the best as you embark on your next adventure!",
            "Congratulations on this amazing achievement! May your graduation be the springboard to a future filled with exciting opportunities and remarkable success!",
            "As you celebrate this milestone, remember that your education is a gift that will keep giving throughout your life. Congratulations and best wishes for your future!",
            "Happy Graduation! May you take pride in how far you've come and have faith in how far you can go. The world is waiting for your unique talents!",
            "Congratulations! Your graduation is proof that dreams backed by hard work become reality. May you continue to dream big and achieve even bigger!",
            "Wishing you congratulations on your graduation! May this accomplishment be the first of many successes in your life. The future is bright!",
            "Happy Graduation! You've completed an important chapter, but your story is just beginning. May the next chapters be filled with success and happiness!",
            "Congratulations Graduate! Your achievement is a reflection of your intelligence, dedication, and character. May you continue to excel in all you do!",
            "On your graduation day, celebrate your accomplishments and look forward to a future full of possibilities. Congratulations and best wishes!",
            "Happy Graduation! May you use your knowledge and skills to make a difference in the world. Your potential is limitless!",
            "Congratulations on your graduation! This is your time to shine. May you find success, happiness, and fulfillment in all your future pursuits!",
            "Wishing you congratulations on this incredible milestone! May your graduation open doors to amazing opportunities and wonderful experiences!",
            "Happy Graduation! Your hard work has paid off beautifully. Now go out there and show the world what you're capable of achieving!",
            "Congratulations! Your graduation marks the end of one journey and the beginning of another. May your path be filled with success and joy!",
            "Happy Graduation! May you always stay curious, keep learning, and continue to grow. Your best days are still ahead of you!",
            "Congratulations on your graduation! You've earned this achievement through determination and hard work. May your future be everything you hope for!",
            "Wishing you a very Happy Graduation! May this be the beginning of a successful and fulfilling career. The world needs your talents!",
            "Congratulations Graduate! Your education has equipped you with the tools for success. Now go build the future of your dreams!",
            "Happy Graduation! May you find joy in your journey, success in your endeavors, and happiness in all you do. Congratulations on this amazing achievement!"
        ]
    },
    newbaby: {
        short: [
            "Congratulations on your new arrival! 👶",
            "Welcome to the world, little one! 🍼",
            "Wishing you joy with your bundle! 💕",
            "Congratulations on your baby! 🎊",
            "May baby bring endless joy! 😊",
            "Welcome to parenthood! 🌟",
            "Congratulations! Baby is perfect! 👣",
            "Wishing you beautiful moments! 💖",
            "Your family is now complete! 👨‍👩‍👧",
            "Congratulations on your blessing! 🙏",
            "May baby bring you happiness! 🎈",
            "Welcome little angel! 👼",
            "Congratulations! Enjoy every moment! ⏰",
            "Wishing you sleepless but happy nights! 🌙",
            "Your baby is adorable! 💝",
            "Congratulations on your miracle! ✨",
            "May baby fill your home with love! 🏠",
            "Welcome to your new adventure! 🚼",
            "Congratulations! Baby is a blessing! 🎁",
            "Wishing you precious memories! 📸",
            "Congratulations on baby! So happy for you! 🥳",
            "Welcome to the world, precious one! 🌍",
            "Congratulations! A beautiful baby! 💗",
            "Wishing you sweet cuddles! 🤗",
            "Congratulations on your little one! 👣"
        ],
        long: [
            "Congratulations on the arrival of your precious baby! May this little bundle of joy bring you endless happiness, sleepless but wonderful nights, and a lifetime of beautiful memories!",
            "Welcome to the wonderful world of parenthood! Your baby is truly a blessing and a miracle. Wishing you all the love, patience, and joy as you embark on this incredible journey!",
            "Congratulations on your new baby! May your little one grow healthy, happy, and surrounded by love. Wishing your family countless moments of joy and laughter!",
            "A baby is a blessing, a gift from heaven above. Congratulations on your beautiful new arrival! May your days be filled with tiny fingers, little toes, and endless love!",
            "Congratulations on becoming parents! Your baby is absolutely precious and perfect. May this new chapter of your life be filled with wonder, love, and countless cherished moments!",
            "Welcome to parenthood! Your lives are about to change in the most amazing ways. Wishing you strength, patience, and boundless joy as you raise your little one!",
            "Congratulations on your new baby! May your home be filled with laughter, your hearts with love, and your lives with the incredible joy that only a child can bring!",
            "What a beautiful blessing! Congratulations on the arrival of your baby. May this precious little one bring light, love, and happiness to your family!",
            "Congratulations! Your family has grown by two feet and one heart. Wishing you all the best as you navigate this beautiful journey of parenthood!",
            "Welcome to your newborn! May every moment with your baby be filled with wonder, every milestone bring you pride, and every day bring new joy!",
            "Congratulations on your bundle of joy! Babies are life's greatest gift, and yours is absolutely perfect. Wishing you endless love and unforgettable moments!",
            "A new baby is like the beginning of all things - wonder, hope, and a dream of possibilities. Congratulations on this beautiful new beginning!",
            "Congratulations on your new arrival! May your baby bring you sunshine when skies are gray, laughter when days are long, and love that lasts forever!",
            "Welcome to parenthood! Your baby is lucky to have parents like you. Wishing you patience, joy, and countless precious moments in the years ahead!",
            "Congratulations! May your new baby fill your home with joy, your hearts with love, and your lives with countless blessings. Enjoy every precious moment!",
            "What wonderful news! Congratulations on your new baby! May your little one be blessed with health, happiness, and a lifetime of love!",
            "Congratulations on the newest addition to your family! May your baby bring you more joy than you ever imagined possible!",
            "Welcome to the adventure of a lifetime! Congratulations on your new baby! May your journey be filled with sweet moments and precious memories!",
            "Congratulations! Your baby is a precious gift that will bring you immeasurable joy. Wishing you love, laughter, and beautiful memories!",
            "A new little life to call your own - how exciting! Congratulations on your baby! May parenthood bring you more happiness than you've ever known!",
            "Congratulations on your beautiful baby! May every coo, every smile, and every little moment bring you overwhelming joy and love!",
            "Welcome to your precious newborn! May your baby grow surrounded by love, guided by wisdom, and blessed with health and happiness!",
            "Congratulations! Your family is now complete with the arrival of your beautiful baby. Wishing you a lifetime of love, laughter, and happiness together!",
            "What a blessing! Congratulations on your new baby! May your little one bring you more love and joy than you ever thought possible!",
            "Congratulations on becoming parents! Your new baby is absolutely perfect. Wishing you sleepless nights filled with love and days filled with wonder!"
        ]
    },
    congratulations: {
        short: [
            "Congratulations on your achievement! 🏆",
            "You earned it! Well done! 👏",
            "Celebrating your success! 🎉",
            "Congratulations! You're amazing! ⭐",
            "Your hard work paid off! 💪",
            "Way to go! So proud! 🌟",
            "Congratulations! Keep shining! ✨",
            "You deserve this success! 🎊",
            "Bravo! Outstanding achievement! 👍",
            "Congratulations! You did it! 🥳",
            "Your success inspires us! 💡",
            "Well deserved congratulations! 🏅",
            "Celebrating you today! 🎈",
            "Congratulations! Aim higher! 🎯",
            "Your dedication shows! 💫",
            "Congratulations on winning! 🏆",
            "You're a champion! 🥇",
            "Celebrating your victory! 🥈",
            "Congratulations! Stay awesome! 😎",
            "Your success is inspiring! 🌈",
            "Congratulations! You rock! 🎸",
            "Well done! Brilliant work! 🌟",
            "Congratulations! You made it! 🎉",
            "Celebrating your win! 🏅",
            "Congratulations! Keep soaring! 🚀"
        ],
        long: [
            "Congratulations on your outstanding achievement! Your dedication, hard work, and perseverance have led you to this moment of success. May this be the first of many accomplishments in your journey!",
            "Your achievement is a testament to your talent, determination, and unwavering commitment to excellence. Congratulations on this well-deserved success! May you continue to reach new heights!",
            "Congratulations! Your success is an inspiration to everyone around you. Your hard work and dedication have truly paid off. Wishing you continued success in all your future endeavors!",
            "What an incredible achievement! Your commitment and perseverance have brought you to this moment of triumph. Congratulations and may you continue to excel in everything you do!",
            "Congratulations on this remarkable achievement! Your success is well-earned and truly deserved. May this accomplishment be a stepping stone to even greater things ahead!",
            "Your hard work, determination, and passion have paid off beautifully! Congratulations on this amazing achievement! May your success continue to grow!",
            "Congratulations! You've proven that with dedication and hard work, anything is possible. Your achievement is truly remarkable. Wishing you continued success!",
            "What wonderful news! Congratulations on your achievement! Your success is a reflection of your talent and hard work. May this be just the beginning!",
            "Congratulations! Your achievement is an inspiration to others. May this success open doors to even greater opportunities and accomplishments!",
            "Well done! Your achievement is the result of your dedication and commitment. Congratulations and may you continue to achieve great things!",
            "Congratulations on this well-deserved success! Your hard work has paid off, and your achievement is truly impressive. Wishing you continued excellence!",
            "What an amazing accomplishment! Congratulations! Your success is a testament to your abilities and determination. May you reach even greater heights!",
            "Congratulations! Your achievement shows what can be accomplished with hard work and dedication. May your success inspire you to reach for even bigger goals!",
            "Your success is truly deserved! Congratulations on this remarkable achievement! May it bring you satisfaction and open doors to new opportunities!",
            "Congratulations! Your achievement is proof that perseverance and hard work lead to success. Wishing you continued prosperity and accomplishments!",
            "What a fantastic achievement! Congratulations! Your dedication and commitment have brought you well-deserved success. May you continue to excel!",
            "Congratulations on your success! Your achievement is inspiring and well-earned. May this be the beginning of even greater accomplishments!",
            "Your hard work has paid off! Congratulations on this amazing achievement! May your success continue to grow and bring you satisfaction!",
            "Congratulations! Your achievement is a reflection of your talent, dedication, and hard work. Wishing you continued success in all you do!",
            "What an incredible accomplishment! Congratulations! Your success is truly deserved. May it bring you joy and lead to even greater achievements!",
            "Congratulations on your outstanding achievement! Your dedication and perseverance have led to this well-deserved success. Keep reaching for the stars!",
            "Your success is an inspiration! Congratulations on this remarkable achievement! May you continue to accomplish great things and inspire others!",
            "Congratulations! Your achievement shows what determination and hard work can accomplish. Wishing you continued success and happiness!",
            "What a wonderful achievement! Congratulations! Your success is well-earned and truly impressive. May it be the first of many accomplishments!",
            "Congratulations on your success! Your achievement is a testament to your abilities and dedication. May you continue to reach new heights of excellence!"
        ]
    },
    thankyou: {
        short: [
            "Thank you so much! 🙏",
            "Grateful for your kindness! 💖",
            "Thank you! You're amazing! ⭐",
            "Appreciate you greatly! 💝",
            "Thanks for everything! 🌟",
            "You're so thoughtful! Thank you! 💕",
            "Thank you for being wonderful! 😊",
            "Grateful for your support! 🤗",
            "Thanks a million! 💫",
            "You're the best! Thank you! 🌈",
            "Appreciate your generosity! 🎁",
            "Thank you for caring! ❤️",
            "Grateful beyond words! 🙌",
            "Thanks for being there! 💪",
            "You're appreciated! Thank you! 🌺",
            "Thank you for your help! 🤝",
            "Grateful for you! 💗",
            "Thanks for your kindness! 🌻",
            "You made a difference! Thank you! ✨",
            "Thankful for you! 🎉",
            "Thank you! You're a blessing! 🙏",
            "Appreciate everything! 💖",
            "Thanks for your support! 👏",
            "You're wonderful! Thank you! 🌟",
            "Grateful and blessed! Thank you! 💝"
        ],
        long: [
            "Thank you so much for your kindness and generosity! Your thoughtfulness has truly touched my heart. I'm incredibly grateful to have you in my life!",
            "I want to express my sincere gratitude for everything you've done. Your support and kindness mean more to me than words can express. Thank you from the bottom of my heart!",
            "Thank you for your amazing support and encouragement! Your kindness has made such a difference in my life. I'm truly blessed to know someone as wonderful as you!",
            "Words cannot fully express how grateful I am for your help and support. Thank you for being such an incredible person and for always being there when I need you!",
            "Thank you for your thoughtfulness and generosity! Your kindness has brightened my days and warmed my heart. I'm so fortunate to have you in my life!",
            "I'm deeply grateful for your kindness and support. Thank you for being such a caring and generous person. Your thoughtfulness means the world to me!",
            "Thank you for everything you've done! Your kindness and generosity have made such a positive impact. I'm truly blessed to know you!",
            "Your kindness and support have meant so much to me. Thank you for being such an amazing friend and for always being there. I'm truly grateful!",
            "Thank you from the bottom of my heart! Your generosity and kindness have touched me deeply. I'm so lucky to have you in my life!",
            "I can't thank you enough for your incredible support and kindness. You've made such a difference in my life. I'm truly grateful!",
            "Thank you for your wonderful support and encouragement! Your kindness has been a blessing. I appreciate you more than words can say!",
            "Your thoughtfulness and generosity have meant the world to me. Thank you for being such an amazing person. I'm truly grateful for you!",
            "Thank you so much for your kindness! Your support and encouragement have been invaluable. I'm blessed to have you in my life!",
            "I'm incredibly grateful for your support and kindness. Thank you for always being there and for being such a wonderful person!",
            "Thank you for your amazing generosity and thoughtfulness! Your kindness has made such a positive impact on my life. I'm truly blessed!",
            "Your kindness and support have meant everything to me. Thank you for being such a caring and generous person. I appreciate you so much!",
            "Thank you from the heart! Your thoughtfulness and generosity have touched me deeply. I'm so grateful to have you in my life!",
            "I want to express my heartfelt thanks for your kindness and support. You've made such a difference, and I'm truly grateful!",
            "Thank you for your incredible support! Your kindness and generosity have been a blessing. I appreciate you more than you know!",
            "Your thoughtfulness has meant so much to me. Thank you for your kindness and for always being there. I'm truly grateful!",
            "Thank you so much for everything! Your support and kindness have made such a positive impact. I'm blessed to know you!",
            "I'm deeply thankful for your generosity and kindness. Thank you for being such a wonderful person and friend. You're appreciated!",
            "Thank you for your amazing support and encouragement! Your kindness has been a blessing in my life. I'm truly grateful!",
            "Your generosity and thoughtfulness have touched my heart. Thank you for being such an incredible person. I appreciate you so much!",
            "Thank you for everything you've done! Your kindness and support mean the world to me. I'm truly blessed to have you in my life!"
        ]
    },
    newmonth: {
        short: [
            "Happy New Month! 🎊",
            "Wishing you a blessed month! 🙏",
            "May this month bring joy! 🌟",
            "Happy New Month! Stay blessed! ✨",
            "New month, new blessings! 💫",
            "Wishing you a prosperous month! 💰",
            "Happy New Month! Shine on! ⭐",
            "May this month be amazing! 🎉",
            "Happy New Month! Stay positive! 😊",
            "Wishing you success this month! 🏆",
            "Happy New Month! Be blessed! 💖",
            "May good things come your way! 🍀",
            "Happy New Month! Dream big! 💭",
            "Wishing you a fruitful month! 🌺",
            "Happy New Month! Stay inspired! 💡",
            "May this month exceed expectations! 🚀",
            "Happy New Month! Embrace it! 🤗",
            "Wishing you a wonderful month! 🌈",
            "Happy New Month! Make it count! ⏰",
            "May this month be your best! 🎯",
            "Happy New Month! New opportunities! 🌟",
            "Wishing you abundant blessings! 🙌",
            "Happy New Month! Stay motivated! 💪",
            "May this month bring favor! ✨",
            "Happy New Month! Cheers to new beginnings! 🥂"
        ],
        long: [
            "Happy New Month! As we step into this new month, may it bring you fresh opportunities, renewed hope, and countless blessings. Wishing you success and happiness in all your endeavors!",
            "Welcome to a brand new month! May these days ahead be filled with joy, prosperity, and wonderful surprises. May all your plans come to fruition and your dreams move closer to reality!",
            "Happy New Month! May this month be a turning point in your life, bringing you closer to your goals and filling your days with purpose, passion, and positivity!",
            "As this new month begins, may it open doors to new opportunities and bring you abundant blessings. Wishing you a month filled with success, good health, and happiness!",
            "Happy New Month! May this month be filled with beautiful moments, achieved goals, and answered prayers. Here's to a month of progress, peace, and prosperity!",
            "Welcome to a fresh new month! May it bring you new reasons to smile, new opportunities to explore, and new blessings to count. Wishing you an amazing month ahead!",
            "Happy New Month! May this month exceed all your expectations and bring you closer to your dreams. Wishing you favor, success, and countless reasons to celebrate!",
            "As we enter this new month, may you find strength to overcome challenges, wisdom to make good decisions, and joy in every moment. Happy New Month!",
            "Happy New Month! May this month be filled with productivity, progress, and positive energy. Wishing you success in all your endeavors!",
            "Welcome to a new month of possibilities! May you seize every opportunity, overcome every challenge, and achieve every goal you set. Happy New Month!",
            "Happy New Month! May this month bring you everything you've been hoping for and more. Wishing you abundant blessings and endless opportunities!",
            "As this month unfolds, may you experience growth, success, and happiness in all areas of your life. Happy New Month and may your blessings multiply!",
            "Happy New Month! May this month be your breakthrough month, filled with answered prayers, achieved goals, and exceeded expectations. Wishing you the best!",
            "Welcome to a month of new beginnings! May you find success in your work, joy in your relationships, and peace in your heart. Happy New Month!",
            "Happy New Month! May every day of this month bring you closer to your dreams and every moment fill you with joy and gratitude!",
            "As we start this new month, may you be surrounded by love, blessed with success, and filled with happiness. Wishing you an amazing month ahead!",
            "Happy New Month! May this month be a season of favor, prosperity, and supernatural breakthroughs. Wishing you nothing but the best!",
            "Welcome to a fresh month! May it bring you new opportunities to shine, new reasons to smile, and new blessings to be thankful for. Happy New Month!",
            "Happy New Month! May your efforts be rewarded, your goals be achieved, and your dreams come true this month. Wishing you abundant success!",
            "As this new month begins, may you find the courage to chase your dreams, the strength to overcome obstacles, and the wisdom to make great choices. Happy New Month!",
            "Happy New Month! May this month be filled with positive vibes, great achievements, and beautiful memories. Wishing you all the best!",
            "Welcome to a month of endless possibilities! May you make the most of every opportunity and experience breakthrough in every area. Happy New Month!",
            "Happy New Month! May this month bring you peace that surpasses understanding, joy that overflows, and love that never fails. Wishing you blessings!",
            "As we enter this new month, may you experience divine favor, supernatural provision, and uncommon success. Happy New Month and stay blessed!",
            "Happy New Month! May this month mark the beginning of great things in your life. Wishing you success, happiness, and abundant blessings!"
        ]
    }
};

let selectedMonth = new Date().getMonth();
let currentBgIndex = 0;
let recipientName = '';
let wishType = 'short';
let selectedOccasion = null; // New: track occasion selection

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
    let wishes;
    
    // If an occasion is selected, use occasion wishes
    if (selectedOccasion && occasionWishes[selectedOccasion]) {
        wishes = wishType === 'short' 
            ? occasionWishes[selectedOccasion].short 
            : occasionWishes[selectedOccasion].long;
    } else {
        // Otherwise, use month-based wishes
        wishes = wishType === 'short' ? monthlyShortWishes[monthIndex] : monthlyLongWishes[monthIndex];
    }
    
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
        if (e.target.value === 'auto') {
            selectedMonth = new Date().getMonth();
        } else {
            selectedMonth = parseInt(e.target.value);
        }
        applyTheme(selectedMonth);
    });
}

if (nameForm) {
    // Handle occasion selector
    const occasionSelect = document.getElementById('occasionSelect');
    if (occasionSelect) {
        occasionSelect.addEventListener('change', (e) => {
            selectedOccasion = e.target.value || null;
        });
    }

    // Handle custom message toggle
    const wishTypeRadios = document.querySelectorAll('input[name="wishType"]');
    const customMessageContainer = document.getElementById('customMessageContainer');
    
    wishTypeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'custom' && customMessageContainer) {
                customMessageContainer.style.display = 'block';
            } else if (customMessageContainer) {
                customMessageContainer.style.display = 'none';
            }
        });
    });

    // --- ADD THIS DATA STRUCTURE FOR PIDGIN & FUNNY WISHES ---
    const specialWishes = {
        pidgin: [
            "How far! I just say make I wish you confirm season. Enjoy correct enjoyment!",
            "Omo, this celebration go loud o! Make sure say you chop life before life chop you.",
            "Benefits go follow you this season. No shaking, God dey your back!",
            "See as you fresh! This season go favour you pass anything. Tuale!",
            "Abeg chill with cold zobo and enjoy your day. You too much!",
            "No wahala, just enjoyment. Blessing go locate you sharp sharp.",
            "I hail o! Make everything soft for you this period. Cheers!",
            "Who dey breeet? Na you o! Shine your eye, blessings dey come."
        ],
        funny: [
            "I was going to buy you a gift, but I realized I am the gift. You're welcome!",
            "Happy festive season! Please send your account number... just kidding!",
            "May your calories not count this holiday season. Eat everything!",
            "I love you more than Jollof Rice... okay maybe that's a lie, but close!",
            "Sending you this card to distract you from the fact that I didn't get you a present.",
            "Congratulations on surviving another year with me as a friend!",
            "May your village people fall asleep while you succeed this month.",
            "Enjoy the season, but remember to save small money for January o!"
        ]
    };

    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        recipientName = recipientInput.value.trim();
        wishType = document.querySelector('input[name="wishType"]:checked').value;
        
        if (recipientName) {
            // Updated Wish Logic
            let messageText = "";
            if (wishType === 'custom') {
                // Use custom message if provided
                const customMsgInput = document.getElementById('customMessage');
                messageText = customMsgInput && customMsgInput.value.trim() 
                    ? customMsgInput.value.trim() 
                    : "Wishing you all the best!";
            } else if (wishType === 'pidgin') {
                messageText = specialWishes.pidgin[Math.floor(Math.random() * specialWishes.pidgin.length)];
            } else if (wishType === 'funny') {
                messageText = specialWishes.funny[Math.floor(Math.random() * specialWishes.funny.length)];
            } else {
                messageText = getRandomWish(selectedMonth); // Uses the global wishType set above for short/long
            }

            if (cardMessage) cardMessage.textContent = messageText;
            if (cardRecipient) cardRecipient.textContent = recipientName;
            
            // Set random background from theme
            currentBgIndex = Math.floor(Math.random() * (monthlyBackgrounds[selectedMonth]?.length || 5));
            loadBackground(selectedMonth, currentBgIndex);

            // --- UPDATED STICKER LOGIC ---
            const stickerInput = document.querySelector('input[name="sticker"]:checked');
            const stickerValue = stickerInput ? stickerInput.value : "";
            const stickerEl = document.getElementById('cardSticker');
            
            // Reset classes
            if (stickerEl) {
                stickerEl.className = 'card-sticker'; 
                stickerEl.style.display = 'none';

                if (stickerValue) {
                    stickerEl.style.display = 'block';
                    stickerEl.classList.add(`sticker-${stickerValue}`);
                    
                    // Set Text with new English labels
                    const stickerTexts = {
                        'party': '🎉 PARTY TIME',
                        'champion': '👑 CHAMPION',
                        'bestie': '💙 BEST FRIEND',
                        'celebrate': '🥳 CELEBRATE',
                        'special': '⭐ SPECIAL ONE',
                        'amazing': '✨ AMAZING',
                        'blessed': '🙏 BLESSED',
                        'superstar': '🌟 SUPERSTAR'
                    };
                    
                    stickerEl.innerText = stickerTexts[stickerValue] || '';
                }
            }
            // -----------------------------
            
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
        const occasionName = selectedOccasion 
            ? selectedOccasion.charAt(0).toUpperCase() + selectedOccasion.slice(1)
            : (monthlyThemes[selectedMonth]?.name || "Seasonal");
        const msg = `🎉 Wow! Check out this amazing ${occasionName} card I just created for ${recipientName}! ✨\n\n💝 You can create your own personalized greeting cards too - it's FREE and super easy!\n\n👉 Try it now: ${window.location.href}\n\nJoin me and spread joy with beautiful custom cards! 🎨`;
        window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
    });
}

const shareFacebook = document.getElementById('shareFacebook');
if (shareFacebook) {
    shareFacebook.addEventListener('click', () => {
        const url = `${window.location.href}?ref=facebook&invite=true`;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent('Create beautiful personalized greeting cards for FREE! Join me on ToluCards 🎨✨')}`, '_blank');
    });
}

const shareTwitter = document.getElementById('shareTwitter');
if (shareTwitter) {
    shareTwitter.addEventListener('click', () => {
        const occasionName = selectedOccasion 
            ? selectedOccasion.charAt(0).toUpperCase() + selectedOccasion.slice(1)
            : (monthlyThemes[selectedMonth]?.name || "Seasonal");
        const text = `🎉 Just created an amazing ${occasionName} card for ${recipientName} on ToluCards! ✨\n\n💝 Create your own FREE personalized cards - it's super easy! Join me! 🎨`;
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
        
        // Add SEO watermark before capturing
        const watermark = document.createElement('div');
        watermark.style.cssText = 'position: absolute; bottom: 10px; right: 15px; background: rgba(0,0,0,0.6); color: white; padding: 5px 10px; border-radius: 5px; font-size: 11px; font-family: Arial; z-index: 100;';
        watermark.innerHTML = '🎨 Create Free Cards at <strong>tolutekcard.vercel.app</strong>';
        container.appendChild(watermark);
        
        html2canvas(container, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: null
        }).then(canvas => {
            // Remove watermark after capture
            container.removeChild(watermark);
            
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
    copyLink.addEventListener('click', async () => {
        // Change button to loading state
        const originalText = copyLink.innerHTML;
        copyLink.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating invite link...';
        copyLink.disabled = true;

        try {
            const cardId = await saveCard();
            if (cardId) {
                const shareUrl = `${window.location.origin}${window.location.pathname}?id=${cardId}&invite=true`;
                await navigator.clipboard.writeText(shareUrl);
                copyLink.innerHTML = '<i class="fas fa-check"></i> Invite Link Copied!';
                alert("🎉 Perfect! Your invite link is copied!\n\n💝 Share it with friends and invite them to create their own beautiful cards too!\n\nThey'll love it! 😊");
            }
        } catch (err) {
            console.error(err);
            copyLink.innerHTML = '<i class="fas fa-times"></i> Error';
            // Fallback for offline testing
            const inviteMsg = `🎨 Create beautiful personalized greeting cards FREE at ToluCards!\n${window.location.href}`;
            navigator.clipboard.writeText(inviteMsg);
            copyLink.innerHTML = '<i class="fas fa-check"></i> Invite Message Copied!';
        }

        setTimeout(() => {
            copyLink.innerHTML = originalText;
            copyLink.disabled = false;
        }, 3000);
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

/* --- Firebase Surprise & Logic Functions --- */

// Save current card to Firestore
async function saveCard() {
    if (!db) return null; 

    // Check custom photos
    let backgroundUrl = document.getElementById('cardBackground').src;
    
    // If it's a Base64 string (uploaded photo)
    if (backgroundUrl.startsWith('data:image')) {
        // Option 1: Restrict sharing for custom photos to save space/cost
        const userChoice = confirm("Custom photos cannot be saved to the shared link on the free plan (they require cloud storage).\n\nClick OK to share using the default theme background instead.\nClick Cancel to go back and download the image directly.");
        
        if (!userChoice) {
            throw new Error("User cancelled share for custom photo");
        }
        
        // Revert to theme background for the shared link
        const themeIndex = document.getElementById('themeSelect').value;
        const fallbackBg = monthlyBackgrounds[themeIndex] ? monthlyBackgrounds[themeIndex][0] : "https://images.unsplash.com/photo-1512389142860-9c1a17737d26";
        backgroundUrl = fallbackBg;
    }

    console.log('Attempting to save card...'); 
    const cardData = {
        recipient: document.getElementById('cardRecipient').innerText,
        message: document.getElementById('cardMessage').innerText,
        background: backgroundUrl, // Use the proper URL (Unsplash or Theme Default)
        theme: document.getElementById('themeSelect').value,
        userId: currentUser ? currentUser.uid : 'anonymous',
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    try {
        const docRef = await db.collection('cards').add(cardData);
        console.log('Card saved with ID: ', docRef.id);
        return docRef.id;
    } catch (e) {
        console.error('Error adding document: ', e);
        return null;
    }
}

// Load a specific card from Firestore
async function loadSurpriseCard(cardId) {
    if (!db) return;

    const overlay = document.getElementById('surpriseOverlay');
    overlay.style.display = 'flex'; // Show overlay immediately
    
    // Setup gift box interaction
    const giftBox = document.getElementById('giftBox');
    const giftBoxContainer = document.querySelector('.gift-box-container');
    const surpriseContent = document.getElementById('surpriseContent');

    giftBoxContainer.addEventListener('click', async () => {
        // Animation
        giftBox.style.transform = 'scale(1.2) rotate(5deg)';
        setTimeout(async () => {
             // Hide box, show content
            giftBoxContainer.style.display = 'none';
            surpriseContent.style.display = 'block';
            
            // Fetch data
            try {
                const doc = await db.collection('cards').doc(cardId).get();
                if (doc.exists) {
                    const data = doc.data();
                    document.getElementById('surpriseRecipient').innerText = data.recipient;
                    document.getElementById('surpriseMessage').innerText = data.message;
                    document.getElementById('surpriseCardBg').src = data.background;
                    
                    // Trigger confetti for celebration
                    createSnowflakes(); 
                } else {
                    document.getElementById('surpriseMessage').innerText = 'This card seems to have gotten lost in the snow!';
                }
            } catch (error) {
                console.error('Error getting card:', error);
            }
        }, 500);
    });
}

// Check URL for ID on load
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cardId = urlParams.get('id');
    
    if (cardId) {
        // It's a surprise link! 
        loadSurpriseCard(cardId);
    }
});


/* --- Firebase Auth & Storage Logic --- */


const auth = firebase.auth();
let currentUser = null;
// No storage used to keep it strictly free/simple as requested

// Auth State Listener
auth.onAuthStateChanged(user => {
    currentUser = user;
    const authNavItem = document.getElementById('authNavItem');
    const userProfileNavItem = document.getElementById('userProfileNavItem');
    const navUsername = document.getElementById('navUsername');
    
    if (user) {
        // User is signed in
        if(authNavItem) authNavItem.classList.add('d-none');
        if(userProfileNavItem) userProfileNavItem.classList.remove('d-none');
        if(navUsername) navUsername.innerText = user.displayName || user.email.split('@')[0];
        
        // Close modal if open
        const modalEl = document.getElementById('authModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
    } else {
        // User is signed out
        if(authNavItem) authNavItem.classList.remove('d-none');
        if(userProfileNavItem) userProfileNavItem.classList.add('d-none');
    }
});

// Sign Up Handler
document.getElementById('signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const name = document.getElementById('signupName').value;
    
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Update profile with name
            userCredential.user.updateProfile({
                displayName: name
            }).then(() => {
                alert('Account created successfully! Welcome, ' + name);
                window.location.reload(); // Refresh to update UI completely
            });
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// Login Handler
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            const modalEl = document.getElementById('authModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
             // Manually trigger UI update locally if needed
        })
        .catch((error) => {
            alert('Login Failed: ' + error.message);
        });
});

// Logout Handler
document.getElementById('logoutBtn')?.addEventListener('click', () => {
    auth.signOut().then(() => {
        alert('Logged out successfully');
    });
});

// --- Music Player Logic ---
const musicBtn = document.getElementById('musicBtn');
const bgAudio = document.getElementById('bgAudio');
const musicStatus = document.getElementById('musicStatus');
let isMusicPlaying = false;

// Optional: Different music for Christmas month (11)
const tunes = {
    default: 'https://cdn.pixabay.com/audio/2022/10/25/audio_2910795c6a.mp3', // Upbeat Generic
    christmas: 'https://cdn.pixabay.com/audio/2022/12/16/audio_10672e8504.mp3' // Holiday
};

if (musicBtn && bgAudio) {
    // Attempt Auto-play on load
    window.addEventListener('load', () => {
        const promise = bgAudio.play();
        if (promise !== undefined) {
            promise.then(_ => {
                // Autoplay started!
                const icon = musicBtn.querySelector('i');
                if (icon) icon.className = 'fas fa-volume-high';
                musicBtn.classList.add('playing');
                isMusicPlaying = true;
            }).catch(error => {
                // Autoplay was prevented
                console.log("Autoplay prevented. User interaction required.");
                const icon = musicBtn.querySelector('i');
                if (icon) icon.className = 'fas fa-volume-xmark'; // "Pause and Cancel" (Speaker with X)
                musicBtn.classList.remove('playing');
                isMusicPlaying = false;
            });
        }
    });

    musicBtn.addEventListener('click', () => {
        if (isMusicPlaying) {
            bgAudio.pause();
            const icon = musicBtn.querySelector('i');
            if (icon) icon.className = 'fas fa-volume-xmark'; // "Pause and Cancel" (Speaker with X)
            musicBtn.classList.remove('playing');
            isMusicPlaying = false;
        } else {
            // Check current theme to pick song
            const themeSelect = document.getElementById('themeSelect');
            const currentTheme = themeSelect ? themeSelect.value : 'auto';
            const song = (currentTheme == 11) ? tunes.christmas : tunes.default;
            
            // Only change src if it's different, to avoid reloading if just paused
            if (!bgAudio.src.includes(song)) bgAudio.src = song;
            
            bgAudio.play()
                .then(() => {
                    const icon = musicBtn.querySelector('i');
                    if (icon) icon.className = 'fas fa-volume-high'; // "Speaker"
                    musicBtn.classList.add('playing');
                    isMusicPlaying = true;
                })
                .catch(err => {
                    console.log('Playback error', err);
                });
        }
    });
}


// --- 3D Tilt Effect Logic ---
const cardContainer = document.getElementById('cardContainer');
if (cardContainer) {
    // Add wrapper class for perspective
    const wrapper = document.createElement('div');
    wrapper.className = 'card-3d-wrapper';
    cardContainer.parentNode.insertBefore(wrapper, cardContainer);
    wrapper.appendChild(cardContainer);

    wrapper.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg rotation
        const rotateY = ((x - centerX) / centerX) * 10;

        cardContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    wrapper.addEventListener('mouseleave', () => {
        cardContainer.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
}

