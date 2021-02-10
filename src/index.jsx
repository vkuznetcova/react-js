import React from 'react';
import ReactDom from 'react-dom';

const container = document.querySelector('#app');

let arr = ['Хорошо ','Отлично ','Плохо '];

document.querySelector('.btn').onclick = () => {
    arr.push('Нормально ');
    ReactDom.render(
        <div>
            { arr }
        </div>
        , container);
}

ReactDom.render(
    <div>
        { arr }
    </div>
    , container);