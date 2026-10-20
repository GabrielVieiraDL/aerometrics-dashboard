const tabs = ['dashboard', 'insights', 'sobre'];
const activeClasses   = ['border-white', 'bg-white/15', 'text-white', 'font-bold'];
const inactiveClasses = ['border-transparent', 'text-white/70', 'font-medium', 'hover:bg-white/10', 'hover:text-white'];

// ID da página "Visão Executiva" no Power BI
const EXECUTIVE_PAGE_NAME = '1fd2e575804416b1de79';

function sendPageToReport(pageName) {
    const iframe = document.getElementById('pbi-iframe');
    if (iframe && iframe.contentWindow) {
        try {
            iframe.contentWindow.postMessage(JSON.stringify({
                action: 'setPage',
                pageName: pageName
            }), '*');
        } catch (e) {
            // Silencia erro caso haja restrição de cross-origin
        }
    }
}

// Garante que o relatório abra sempre na Visão Executiva
function initExecutiveView() {
    [400, 1000, 2000, 4000].forEach(delay => {
        setTimeout(() => sendPageToReport(EXECUTIVE_PAGE_NAME), delay);
    });
}

window.addEventListener('load', initExecutiveView);
document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('pbi-iframe');
    if (iframe) {
        iframe.addEventListener('load', initExecutiveView);
    }
});

function switchTab(tabId) {
    // Oculta todas as seções
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    const targetSection = document.getElementById('tab-' + tabId);
    if (targetSection) {
        targetSection.classList.add('active');
        // Reseta o scroll para o topo ao trocar de aba em telas móveis
        targetSection.scrollTop = 0;
    }

    // Reseta todos os botões para inativo
    tabs.forEach(id => {
        const btn = document.getElementById('btn-' + id);
        if (btn) {
            activeClasses.forEach(c   => btn.classList.remove(c));
            inactiveClasses.forEach(c => btn.classList.add(c));
        }
    });

    // Ativa o botão clicado
    const activeBtn = document.getElementById('btn-' + tabId);
    if (activeBtn) {
        inactiveClasses.forEach(c => activeBtn.classList.remove(c));
        activeClasses.forEach(c   => activeBtn.classList.add(c));
    }
}

// Suporte para exibição em Tela Cheia no Smartphone (Ideal para bancas e recrutadores)
function toggleFullScreen() {
    const iframe = document.getElementById('pbi-iframe');
    if (!iframe) return;

    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
}
