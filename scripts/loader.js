async function includeHTML() {
    const components = {
        'header-root': 'header', 'profiles-root': 'profiles', 'trending-root': 'trending',
        'plans-root': 'plans', 'faq-root': 'faq', 'footer-root': 'footer'
    };

    await Promise.all(Object.entries(components).map(async ([id, name]) => {
        const el = document.getElementById(id);
        if (!el) return;
        try {
            const res = await fetch(`./components/${name}.html`);
            el.innerHTML = res.ok ? await res.text() : `Erro: ${name}`;
        } catch (e) {
            console.error(e);
        }
    }));

    document.dispatchEvent(new CustomEvent('renderComplete'));
}

includeHTML();