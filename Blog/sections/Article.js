document.addEventListener('DOMContentLoaded', () => {
    const tocContainer = document.getElementById('table-of-contents');
    const content = document.querySelector('.article-content');

    if (tocContainer && content) {
        const headings = content.querySelectorAll('h2, h3');
        const tocList = document.createElement('ul');

        headings.forEach(heading => {
            if (!heading.id) {
                heading.id = heading.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
            }

            const listItem = document.createElement('li');
            const link = document.createElement('a');

            link.href = `#${heading.id}`;
            link.textContent = heading.textContent;
            
            if (heading.tagName === 'H3') {
                link.style.paddingLeft = '20px';
            }

            listItem.appendChild(link);
            tocList.appendChild(listItem);
        });

        if (tocList.children.length > 0) {
            tocContainer.appendChild(tocList);
        } else {
            tocContainer.parentElement.style.display = 'none';
        }
    }
});