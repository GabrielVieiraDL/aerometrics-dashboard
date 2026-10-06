const tabs = ['dashboard', 'insights', 'sobre'];
        const activeClasses   = ['border-white', 'bg-white/15', 'text-white', 'font-bold'];
        const inactiveClasses = ['border-transparent', 'text-white/70', 'font-medium', 'hover:bg-white/10', 'hover:text-white'];

        function switchTab(tabId) {
            // Oculta/Mostra Footer dependendo da aba
            const footer = document.getElementById('main-footer');
            if (footer) {
                if (tabId === 'dashboard') {
                    footer.classList.add('hidden');
                } else {
                    footer.classList.remove('hidden');
                }
            }

            // Oculta todas as seções
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.getElementById('tab-' + tabId).classList.add('active');

            // Reseta todos os botões para inativo
            tabs.forEach(id => {
                const btn = document.getElementById('btn-' + id);
                activeClasses.forEach(c   => btn.classList.remove(c));
                inactiveClasses.forEach(c => btn.classList.add(c));
            });

            // Ativa o botão clicado
            const activeBtn = document.getElementById('btn-' + tabId);
            inactiveClasses.forEach(c => activeBtn.classList.remove(c));
            activeClasses.forEach(c   => activeBtn.classList.add(c));
        }