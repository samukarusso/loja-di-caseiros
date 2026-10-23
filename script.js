//
document.addEventListener('DOMContentLoaded', function() {
    // Menu suave
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Adicionar ao carrinho
    document.querySelectorAll('.btn-adicionar').forEach(button => {
        button.addEventListener('click', function() {
            const produto = this.closest('.produto');
            const nome = produto.querySelector('h3').textContent;
            
            // Feedback visual
            this.textContent = 'Adicionado!';
            this.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                this.textContent = 'Adicionar ao Carrinho';
                this.style.backgroundColor = '';
            }, 2000);
            
            alert(`${nome} adicionado ao carrinho!`);
        });
    });
    
    // Formulário de contato
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        this.reset();
    });
});
