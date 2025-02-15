(function () {
    const scriptTag = document.currentScript;
    const params = {
        width: scriptTag.getAttribute('data-width') || '300px',
        height: scriptTag.getAttribute('data-height') || '100px',
        position: scriptTag.getAttribute('data-position') || 'top',
    };

    fetch('http://localhost/banner_project/public/api/banner')
        .then(response => response.json())
        .then(data => {
            const banner = document.createElement('a');
            banner.href = data.link;
            banner.target = '_blank';

            const img = document.createElement('img');
            img.src = data.image_url;
            img.alt = data.alt_text;
            img.style.width = params.width; //configurable
            img.style.height = params.height; //configurable
            img.style.position = 'fixed';
            img.style[params.position] = '10px';
            img.style.left = '50%';
            img.style.transform = 'translateX(-50%)';
            img.style.zIndex = '1000';

            banner.appendChild(img);
            document.body.appendChild(banner);
        })
        .catch(err => console.error('Banner error:', err));
})();
