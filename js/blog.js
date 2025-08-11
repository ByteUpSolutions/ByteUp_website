// Menu Mobile (para ser implementado posteriormente)
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar funcionalidade de menu mobile aqui
    console.log('Blog ByteUp carregado!');
    
    // Animação suave para links
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
                // Aqui você pode adicionar a lógica para enviar o e-mail
                alert('Obrigado por assinar nossa newsletter!');
                this.reset();
            }
        });
    }
});