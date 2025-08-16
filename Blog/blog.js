// Animação de scroll simples
document.addEventListener('DOMContentLoaded', function() {
    console.log('Blog ByteUp carregado!');
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Validação do formulário de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Obrigado por assinar nossa newsletter!');
                this.reset();
            }
        });
    }
});

// Barra de progresso 
document.addEventListener('DOMContentLoaded', () => {
    const postContent = document.getElementById('post-content');
    const readingTimeEl = document.getElementById('reading-time');
    const progressBar = document.getElementById('progress-bar');

    if (postContent && readingTimeEl) {
        // 1. Cálculo do Tempo de Leitura ---
        const text = postContent.innerText;
        const wordsPerMinute = 200; 
        const wordCount = text.trim().split(/\s+/).length;
        const time = Math.ceil(wordCount / wordsPerMinute);
        readingTimeEl.innerText = `${time} min de leitura`;

        // 2. Lógica da Barra de Progresso ---
        const updateProgressBar = () => {
            const { scrollTop, scrollHeight } = document.documentElement;
            const scrollableHeight = scrollHeight - window.innerHeight;
            const scrolledPercentage = (scrollTop / scrollableHeight) * 100;
            
            if (progressBar) {
                progressBar.style.width = `${scrolledPercentage}%`;
            }
        };

        window.addEventListener('scroll', updateProgressBar);
    }
});

// Lógica para Filter
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');
    const postCards = document.querySelectorAll('.post-card');
    
    const filterPosts = () => {
        const searchTerm = searchInput.value.toLowerCase();
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;

        postCards.forEach(card => {
            const title = card.dataset.title.toLowerCase();
            const category = card.dataset.category;

            const categoryMatch = activeCategory === 'all' || category === activeCategory;

            const titleMatch = title.includes(searchTerm);

            if (categoryMatch && titleMatch) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none';
            }
        });
    };

    // Onclick Event 
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterPosts();
        });
    });
    searchInput.addEventListener('input', filterPosts);
});