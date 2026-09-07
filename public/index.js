document.addEventListener('DOMContentLoaded', () => {
    const links = {
        School: 'https://tip.edu.ph/',
        Location: '',
        Steam: 'https://steamcommunity.com/profiles/76561198890334799/',
        Github: 'https://github.com/frostishyper',
        Facebook: 'https://www.facebook.com/lee.rc.929316',
        Linkedin: 'https://www.linkedin.com/in/leerc/'
    };

    document.querySelector('.linksNinfo').addEventListener('click', e => {
        const entry = e.target.closest('.InfoEntry');
        
        if (entry && links[entry.id]) {
            window.open(links[entry.id], '_blank', 'noopener,noreferrer');
        }
    });
});