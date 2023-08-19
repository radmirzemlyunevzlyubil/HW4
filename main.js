document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const race = document.getElementById('race').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;

        const userData = {
            first_name: firstName,
            last_name: lastName,
            race: race,
            gender: gender
        };

        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                alert('Данные успешно отправлены.');
            } else {
                alert('Ошибка при регистрации.');
            }
        } catch (error) {
            console.error('Произошла ошибка:', error);
            alert('Произошла ошибка при регистрации.');
        }
    });
});
