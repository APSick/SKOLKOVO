const templateCards = document.querySelector('#card-template').content;
const placesItem = document.querySelector('.card-section');

function createCard(cardData) { 
    const cardElement = templateCards.querySelector('.home_section__box-card').cloneNode(true);
    
    cardElement.querySelector('.title__title-box').textContent = cardData.title_video;
    cardElement.querySelector('.video__main-card').src = cardData.link_video;
    cardElement.querySelector('.video-card__shell-link').id = cardData.link_id;

    return cardElement;
}

function addCard(cardElement) {
    placesItem.append(cardElement);
}

function renderCard() {
    initialCards.forEach(cardData => {
        const cardElement = createCard(cardData);
        addCard(cardElement);
    })
}

renderCard();

document.getElementById('id_video_1').onclick = function() {
    var popup = document.querySelector('.popup_video_1');
    popup.style.display = 'block'; 
}

document.getElementById('id_video_2').onclick = function() {
    var popup = document.querySelector('.popup_video_2');
    popup.style.display = 'block'; 
}

document.getElementById('id_video_3').onclick = function() {
    var popup = document.querySelector('.popup_video_3');
    popup.style.display = 'block'; 
}

document.getElementById('id_video_4').onclick = function() {
    var popup = document.querySelector('.popup_video_4');
    popup.style.display = 'block'; 
}
function close_Btn_popup_video() {
    var popup = document.querySelector('.popup_video_1');
    popup.style.display = 'none'; 
    var popup = document.querySelector('.popup_video_2');
    popup.style.display = 'none'; 
    var popup = document.querySelector('.popup_video_3');
    popup.style.display = 'none'; 
    var popup = document.querySelector('.popup_video_4');
    popup.style.display = 'none'; 
}