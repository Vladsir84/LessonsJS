const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');
const userIdInputElem = document.querySelector('.id-form__input');
const userRepoInputElem = document.querySelector('.repo-form__input');
const userDaysInputElem = document.querySelector('.days-form__input');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
userAvatarElem.src = defaultAvatar;

const fetchUserData = userName => {
    return fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
}

const renderUserData = userData => {

    const { avatar_url, name } = userData;
    userAvatarElem.src = avatar_url;
    userNameElem.textContent = name;

};

const onSearchUser = () => {
    const userName = userIdInputElem.value;
    fetchUserData(userName)
        .then(userData => renderUserData(userData));
};

showUserBtnElem.addEventListener('click', onSearchUser);


const getUserObject = () => { // Значения из инпутов.
    const userId = userIdInputElem.value;
    const repoId = userRepoInputElem.value;
    const days = userDaysInputElem.value;
    getMostActiveDevs({ userId, repoId, days });
};

showUserBtnElem.addEventListener('click', getUserObject);


export function getMostActiveDevs({ userId, repoId, days }) { // Значения в основной функции как объект
    const commits = { userId, repoId, days };
    let counter = 0;
    const startDate = new Date(new Date().setDate(new Date().getDate() - commits.days));
    fetch(`https://api.github.com/repos/${commits.userId}/${commits.repoId}/commits?per_page=100`) // Запрос
        .then(response => response.json()) // Преобразование с помощью json
        .then(arr => {
            let result = arr.map(({ commit: { author: { name, email, date } } }) => ({ name, email, date }))
                .filter(item => new Date(item.date) > startDate)
                .reduce((acc, { email, name }) => {

                    const oldCount = acc[email] ? acc[email].count : 0;
                    return {...acc,
                        [email]: { name, email, count: oldCount + 1 }
                    };
                }, {})



        })

}