const changeTheme = document.getElementById('changeTheme');
const htmlTag = document.getElementsByTagName('html')[0];
if (localStorage.getItem('theme') === 'dark') {
    htmlTag.classList.add('dark');
    changeTheme.checked = true;
}
changeTheme.addEventListener('change', () => {
    if (changeTheme.checked) {
        htmlTag.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        htmlTag.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});