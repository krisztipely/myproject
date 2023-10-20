document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('nav li');
    const contentSections = document.querySelectorAll('#content > div');

    document.getElementById('home-content').classList.remove('hidden');

    menuItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.add('hidden');
            });

            // Display the selected content section
            contentSections[index].classList.remove('hidden');
        });
    });
});