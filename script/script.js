// Mostrar o botão quando o usuário descer 100px da página
window.onscroll = function() {
    const scrollTopButton = document.getElementById('scrollTopButton');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

// Função para voltar ao topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
