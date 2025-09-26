 document.addEventListener('DOMContentLoaded', function() {
            // Animation for book cards when scrolling
            const bookCards = document.querySelectorAll('.book-card');
            
            const animateCards = () => {
                bookCards.forEach((card, index) => {
                    const cardPosition = card.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (cardPosition < screenPosition) {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 150);
                    }
                });
            };
            
            // Initial animation setup
            bookCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            window.addEventListener('scroll', animateCards);
            animateCards(); // Trigger on load
            
            // Parallax effect for hero section
            const hero = document.querySelector('.hero');
            window.addEventListener('scroll', function() {
                const offset = window.pageYOffset;
                hero.style.backgroundPositionY = offset * 0.7 + 'px';
            });
        });


         window.watsonAssistantChatOptions = {
    integrationID: "cb71667d-3651-4ff1-a502-8e5c9e137935", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "033a2a68-a984-4671-a056-922fa8cb62f7", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });