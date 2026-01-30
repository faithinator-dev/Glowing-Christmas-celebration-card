// --- Streak Counter System ---
function updateStreakCounter() {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('lastVisit');
    let streak = parseInt(localStorage.getItem('visitStreak')) || 0;
    
    if (lastVisit !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastVisit === yesterday.toDateString()) {
            streak += 1; // Consecutive day
        } else {
            streak = 1; // Reset streak
        }
        
        localStorage.setItem('visitStreak', streak);
        localStorage.setItem('lastVisit', today);
        
        // Show streak notification
        if (streak >= 3) {
            showStreakNotification(streak);
        }
    }
}

function showStreakNotification(streak) {
    const notification = document.createElement('div');
    notification.style.cssText = 'position: fixed; top: 100px; right: 20px; background: linear-gradient(135deg, #FF6B6B, #FF8E53); color: white; padding: 15px 25px; border-radius: 15px; z-index: 2000; box-shadow: 0 8px 25px rgba(0,0,0,0.3); animation: slideIn 0.5s ease;';
    notification.innerHTML = `<i class="fas fa-fire"></i> <strong>${streak} Day Streak!</strong><br><small>Keep it up! Visit daily to unlock rewards.</small>`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// Initialize streak counter when page loads
document.addEventListener('DOMContentLoaded', () => {
    updateStreakCounter();
});

// --- Enhanced Share Buttons for Group Cards ---
function shareGroupCard(platform, groupUrl) {
    const message = encodeURIComponent(`🎉 I created a group card! Add your message and wishes too: ${groupUrl}`);
    
    const shareUrls = {
        whatsapp: `https://wa.me/?text=${message}`,
        twitter: `https://twitter.com/intent/tweet?text=${message}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(groupUrl)}`,
        email: `mailto:?subject=Add Your Message to Our Group Card&body=${message}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank');
    }
}

// Add quick share buttons when group link is created
document.addEventListener('click', (e) => {
    if (e.target.closest('#inviteGroupBtn')) {
        setTimeout(() => {
            // Add share buttons after link is copied
            const existingBanner = document.querySelector('.group-share-banner');
            if (!existingBanner) {
                const banner = document.createElement('div');
                banner.className = 'group-share-banner';
                banner.style.cssText = 'position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, #9C27B0, #673AB7); color: white; padding: 20px; border-radius: 15px; z-index: 2000; box-shadow: 0 8px 30px rgba(0,0,0,0.4); max-width: 500px; width: 90%;';
                banner.innerHTML = `
                    <div style="text-align: center;">
                        <p style="margin-bottom: 15px; font-weight: bold;">📤 Share Group Card Link:</p>
                        <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                            <button onclick="shareGroupCard('whatsapp', window.lastGroupUrl)" style="background: #25D366; border: none; padding: 10px 20px; border-radius: 25px; color: white; cursor: pointer; font-weight: bold;">
                                <i class="fab fa-whatsapp"></i> WhatsApp
                            </button>
                            <button onclick="shareGroupCard('twitter', window.lastGroupUrl)" style="background: #1DA1F2; border: none; padding: 10px 20px; border-radius: 25px; color: white; cursor: pointer; font-weight: bold;">
                                <i class="fab fa-twitter"></i> Twitter
                            </button>
                            <button onclick="shareGroupCard('email', window.lastGroupUrl)" style="background: #EA4335; border: none; padding: 10px 20px; border-radius: 25px; color: white; cursor: pointer; font-weight: bold;">
                                <i class="fas fa-envelope"></i> Email
                            </button>
                            <button onclick="this.closest('.group-share-banner').remove()" style="background: rgba(255,255,255,0.2); border: none; padding: 10px 20px; border-radius: 25px; color: white; cursor: pointer;">
                                Close
                            </button>
                        </div>
                    </div>
                `;
                document.body.appendChild(banner);
            }
        }, 500);
    }
});

// --- More Quote Categories ---
const quoteCategoriesEnhanced = {
    motivational: [
        { text: 'Hustle smart, shine bright.', author: 'Naija Motivation' },
        { text: 'Your level don change, no go back!', author: 'Street Wisdom' },
        { text: 'Na who give up lose.', author: 'Pidgin Proverb' },
        { text: 'E go be, e must be!', author: 'Naija Determination' },
        { text: 'Shine your eye, opportunity dey everywhere.', author: 'Success Mindset' },
        { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
        { text: 'Pressure burst pipe, but diamond form for pressure.', author: 'Motivational Pidgin' }
    ],
    romantic: [
        { text: 'You are my today and all of my tomorrows.', author: 'Leo Christopher' },
        { text: 'My love for you na like Jollof rice - e no dey finish!', author: 'Naija Romance' },
        { text: 'You make my heart do kpatakpata.', author: 'Pidgin Love' },
        { text: 'In all the world, there is no heart for me like yours.', author: 'Maya Angelou' },
        { text: 'You are the finest thing wey ever happen to me.', author: 'Romantic Pidgin' },
        { text: 'Love is not just looking at each other, it\'s looking in the same direction.', author: 'Antoine de Saint-Exupéry' }
    ],
    funny: [
        { text: 'Make your village people sleep well tonight.', author: 'Naija Humor' },
        { text: 'Las las, everybody go chop breakfast.', author: 'Street Philosophy' },
        { text: 'Breakfast is for champions, lunch na rest, dinner na enjoyment!', author: 'Food Wisdom' },
        { text: 'You too dey do like say problem senior you.', author: 'Motivational Pidgin' },
        { text: 'If yawa don gas, make we find generator.', author: 'Problem Solving 101' },
        { text: 'Life no be beans, but e fit be rice.', author: 'Nigerian Philosophy' }
    ],
    wisdom: [
        { text: 'Do good, e go pay.', author: 'African Proverb' },
        { text: 'Small small, e go full basket.', author: 'African Proverb' },
        { text: 'Water no get enemy.', author: 'Fela Kuti' },
        { text: 'If you want to go fast, go alone. If you want to go far, go together.', author: 'African Proverb' },
        { text: 'No condition is permanent.', author: 'Nigerian Optimism' },
        { text: 'The best time to plant a tree was 20 years ago. The second best time is now.', author: 'Chinese Proverb' }
    ]
};

// Rotate through different categories each day
function getDailyQuoteFromCategory() {
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const categories = Object.keys(quoteCategoriesEnhanced);
    const categoryIndex = dayOfYear % categories.length;
    const category = categories[categoryIndex];
    const quotes = quoteCategoriesEnhanced[category];
    const quoteIndex = dayOfYear % quotes.length;
    
    return quotes[quoteIndex];
}
