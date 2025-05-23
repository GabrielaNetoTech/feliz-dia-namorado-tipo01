     const introSection = document.querySelector('.intro-section');
        const envelope = document.getElementById('envelope');
        const declaration = document.getElementById('declaration');
        const heartsContainer = document.getElementById('hearts');
        const heartButton = document.getElementById('heartButton');
        
        
        envelope.addEventListener('click', function() {
            introSection.classList.add('hidden');
            setTimeout(() => {
                declaration.classList.add('visible');
                createHearts();
            }, 1000);
        });

        
        function createHearts() {
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.classList.add('heart');
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
                    heart.style.animationDelay = (Math.random() * 5) + 's';
                    heartsContainer.appendChild(heart);
                }, i * 1000);
            }
        }

        
        function createRisingHearts() {
            const numberOfHearts = 15;
            
            for (let i = 0; i < numberOfHearts; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.classList.add('rising-heart');
                    heart.textContent = '❤️';
                    
                   
                    heart.style.left = Math.random() * window.innerWidth + 'px';
                    heart.style.bottom = '0px';
                    
                    
                    const size = Math.random() * 20 + 15;
                    heart.style.fontSize = size + 'px';
                    
                    
                    heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
                    
                    document.body.appendChild(heart);
                    
                    
                    setTimeout(() => {
                        if (heart.parentNode) {
                            heart.parentNode.removeChild(heart);
                        }
                    }, 4000);
                }, i * 100);
            }
        }

     
        function createHeartExplosion(x, y) {
            const explosion = document.createElement('div');
            explosion.classList.add('heart-explosion');
            explosion.style.left = x + 'px';
            explosion.style.top = y + 'px';
            
           
            for (let i = 0; i < 8; i++) {
                const heart = document.createElement('div');
                heart.classList.add('explosion-heart');
                heart.textContent = '💖';
                
               
                const angle = (i / 8) * 2 * Math.PI;
                const distance = 50;
                heart.style.left = Math.cos(angle) * distance + 'px';
                heart.style.top = Math.sin(angle) * distance + 'px';
                
                explosion.appendChild(heart);
            }
            
            document.body.appendChild(explosion);
            
            
            setTimeout(() => {
                if (explosion.parentNode) {
                    explosion.parentNode.removeChild(explosion);
                }
            }, 2000);
        }

        
        heartButton.addEventListener('click', function(e) {
            
            const rect = heartButton.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            createHeartExplosion(centerX, centerY);
            
         
            createRisingHearts();
            
            heartButton.style.animation = 'none';
            setTimeout(() => {
                heartButton.style.animation = '';
            }, 100);
        });

        
        document.addEventListener('click', function(e) {
           
            if (e.target.closest('.heart-button')) return;
            
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.classList.add('rising-heart');
                    heart.textContent = '💕';
                    heart.style.left = (e.clientX + Math.random() * 40 - 20) + 'px';
                    heart.style.top = e.clientY + 'px';
                    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
                    heart.style.animationDuration = '2s';
                    
                    document.body.appendChild(heart);
                    
                    setTimeout(() => {
                        if (heart.parentNode) {
                            heart.parentNode.removeChild(heart);
                        }
                    }, 2000);
                }, i * 50);
            }
        });