document.getElementById('busca-lista').addEventListener('input', function() {
    const query = this.value.toLowerCase().split(' ');
    const items = document.querySelectorAll('.event_item');
    let hasResults = false;

    items.forEach(item => {
        const name = item.getAttribute('data-name').toLowerCase();
        const data = item.getAttribute('data-data').toLowerCase();
        const combinedText = name + ' ' + data;
        let match = true;

        query.forEach(q => {
            if (!combinedText.includes(q)) {
                match = false;
            }
        });

        if (match) {
            item.classList.remove('hidden');
            item.classList.add('flex');
            hasResults = true;
        } else {
            item.classList.remove('flex');
            item.classList.add('hidden');
        }
    });

    if (!hasResults) {
        const noResults = document.querySelector('.no-results');
        if (noResults) {
            noResults.classList.remove('hidden'); 
        }
    } else {
        const noResults = document.querySelector('.no-results');
        if (noResults) {
            noResults.classList.add('hidden'); 
        }
    }
});
