let stone = () => {
    var cValue = Math.random() * 3;
    var Result;
    if (cValue >= 1 && cValue < 2) {
        Result = 'Stone';
        console.log('Try Again');
        document.getElementById('paper').style.backgroundColor = 'white';
        document.getElementById('cPaper').style.backgroundColor = 'white';
        document.getElementById('scissor').style.backgroundColor = 'white';
        document.getElementById('cScissor').style.backgroundColor = 'white';
        document.getElementById('stone').style.backgroundColor = 'yellow';
        document.getElementById('cStone').style.backgroundColor = 'yellow';
        document.querySelector('input').value = 'Both Select Stone 🤪';
        document.querySelector('input').style.color = 'yellow';
        document.querySelector('#stone').style.cursor = 'not-allowed';
        document.querySelector('#paper').style.cursor = 'not-allowed';
        document.querySelector('#scissor').style.cursor = 'not-allowed';
        document.querySelector('#stone').disabled = 'true';
        document.querySelector('#paper').disabled = 'true';
        document.querySelector('#scissor').disabled = 'true';
        document.querySelector('#retry').style.display = 'block';
        document.querySelector('.container').style.boxShadow = '0px 0px 19px 9px yellow';
        document.querySelector('.container').style.border = '2px solid yellow';
    }
    else if (cValue >= 2 && cValue < 3) {
        Result = 'Paper';
        console.log('You Lost');
        document.getElementById('paper').style.backgroundColor = 'white';
        document.getElementById('scissor').style.backgroundColor = 'white';
        document.getElementById('cScissor').style.backgroundColor = 'white';
        document.getElementById('cStone').style.backgroundColor = 'white';
        document.getElementById('stone').style.backgroundColor = 'red';
        document.getElementById('cPaper').style.backgroundColor = 'green';
        document.querySelector('input').value = 'Computer Won 😔';
        document.querySelector('input').style.color = 'red';
        document.querySelector('#stone').style.cursor = 'not-allowed';
        document.querySelector('#paper').style.cursor = 'not-allowed';
        document.querySelector('#scissor').style.cursor = 'not-allowed';
        document.querySelector('#stone').disabled = 'true';
        document.querySelector('#paper').disabled = 'true';
        document.querySelector('#scissor').disabled = 'true';
        document.querySelector('#retry').style.display = 'block';
        document.querySelector('.container').style.boxShadow = '0px 0px 19px 9px red';
        document.querySelector('.container').style.border = '2px solid red';

    }
    else {
        Result = 'Scissor'
        console.log('You Won');
        document.getElementById('paper').style.backgroundColor = 'white';
        document.getElementById('scissor').style.backgroundColor = 'white';
        document.getElementById('cStone').style.backgroundColor = 'white';
        document.getElementById('cPaper').style.backgroundColor = 'white';
        document.getElementById('stone').style.backgroundColor = 'green';
        document.getElementById('cScissor').style.backgroundColor = 'red';
        document.querySelector('input').value = 'You Won 🎉';
        document.querySelector('input').style.color = 'green';
        document.querySelector('#stone').style.cursor = 'not-allowed';
        document.querySelector('#paper').style.cursor = 'not-allowed';
        document.querySelector('#scissor').style.cursor = 'not-allowed';
        document.querySelector('#stone').disabled = 'true';
        document.querySelector('#paper').disabled = 'true';
        document.querySelector('#scissor').disabled = 'true';
        document.querySelector('#retry').style.display = 'block';
        document.querySelector('.container').style.boxShadow = '0px 0px 19px 9px green';
        document.querySelector('.container').style.border = '2px solid green';

    }
}

let paper = () => {
    var cValue = Math.random() * 3;
    var Result;
    if (cValue >= 1 && cValue < 2) {
        Result = 'Stone';
        console.log('You Won');
        document.getElementById('stone').style.backgroundColor = 'white';
        document.getElementById('scissor').style.backgroundColor = 'white';
        document.getElementById('cScissor').style.backgroundColor = 'white';
        document.getElementById('cPaper').style.backgroundColor = 'white';
        document.getElementById('paper').style.backgroundColor = 'green';
        document.getElementById('cStone').style.backgroundColor = 'red';
        document.querySelector('input').value = 'You Won 🎉';
        document.querySelector('input').style.color = 'green';
        document.querySelector('#stone').style.cursor = 'not-allowed';
        document.querySelector('#paper').style.cursor = 'not-allowed';
        document.querySelector('#scissor').style.cursor = 'not-allowed';
        document.querySelector('#stone').disabled = 'true';
        document.querySelector('#paper').disabled = 'true';
        document.querySelector('#scissor').disabled = 'true';
        document.querySelector('#retry').style.display = 'block';
        document.querySelector('.container').style.boxShadow = '0px 0px 19px 9px green';
        document.querySelector('.container').style.border = '2px solid green';

    }
    else if (cValue >= 2 && cValue < 3) {
        Result = 'Paper';
        console.log('Try Again');
        document.getElementById('stone').style.backgroundColor = 'white';
        document.getElementById('scissor').style.backgroundColor = 'white';
        document.getElementById('cScissor').style.backgroundColor = 'white';
        document.getElementById('cStone').style.backgroundColor = 'white';
        document.getElementById('paper').style.backgroundColor = 'yellow';
        document.getElementById('cPaper').style.backgroundColor = 'yellow';
        document.querySelector('input').value = 'Both Select Paper 🤪';
        document.querySelector('input').style.color = 'yellow';
        document.querySelector('#stone').style.cursor = 'not-allowed';
        document.querySelector('#paper').style.cursor = 'not-allowed';
        document.querySelector('#scissor').style.cursor = 'not-allowed';
        document.querySelector('#stone').disabled = 'true';
        document.querySelector('#paper').disabled = 'true';
        document.querySelector('#scissor').disabled = 'true';
        document.querySelector('#retry').style.display = 'block';
        document.querySelector('.container').style.boxShadow = '0px 0px 19px 9px yellow';
        document.querySelector('.container').style.border = '2px solid yellow';
    }
    else {
        Result = 'Scissor'
        console.log('You Lost');
        document.getElementById('stone').style.backgroundColor = 'white';
        document.getElementById('scissor').style.backgroundColor = 'white';
        document.getElementById('cStone').style.backgroundColor = 'white';
        document.getElementById('cPaper').style.backgroundColor = 'white';
        document.getElementById('paper').style.backgroundColor = 'red';
        document.getElementById('cScissor').style.backgroundColor = 'green';
        document.querySelector('input').value = 'Computer Won 😔';
        document.querySelector('input').style.color = 'red';
        document.querySelector('#stone').style.cursor = 'not-allowed';
        document.querySelector('#paper').style.cursor = 'not-allowed';
        document.querySelector('#scissor').style.cursor = 'not-allowed';
        document.querySelector('#stone').disabled = 'true';
        document.querySelector('#paper').disabled = 'true';
        document.querySelector('#scissor').disabled = 'true';
        document.querySelector('#retry').style.display = 'block';
        document.querySelector('.container').style.boxShadow = '0px 0px 19px 9px red';
        document.querySelector('.container').style.border = '2px solid red';

    }
}

let scissor = () => {
    let cValue = Math.random() * 3;
    let Result;
    if (cValue >= 1 && cValue < 2) {
        Result = 'Stone';
        console.log('You Lost');
        document.getElementById('stone').style.backgroundColor = 'white';
        document.getElementById('paper').style.backgroundColor = 'white';
        document.getElementById('cScissor').style.backgroundColor = 'white';
        document.getElementById('cPaper').style.backgroundColor = 'white';
        document.getElementById('scissor').style.backgroundColor = 'red';
        document.getElementById('cStone').style.backgroundColor = 'green';
        document.querySelector('input').value = 'Computer Won 😔';
        document.querySelector('input').style.color = 'red';
        document.querySelector('#stone').style.cursor = 'not-allowed';
        document.querySelector('#paper').style.cursor = 'not-allowed';
        document.querySelector('#scissor').style.cursor = 'not-allowed';
        document.querySelector('#stone').disabled = 'true';
        document.querySelector('#paper').disabled = 'true';
        document.querySelector('#scissor').disabled = 'true';
        document.querySelector('#retry').style.display = 'block';
        document.querySelector('.container').style.boxShadow = '0px 0px 19px 9px red';
        document.querySelector('.container').style.border = '2px solid red';
    }
    else if (cValue >= 2 && cValue < 3) {
        Result = 'Paper';
        console.log('You Won');
        document.getElementById('stone').style.backgroundColor = 'white';
        document.getElementById('paper').style.backgroundColor = 'white';
        document.getElementById('cScissor').style.backgroundColor = 'white';
        document.getElementById('cStone').style.backgroundColor = 'white';
        document.getElementById('scissor').style.backgroundColor = 'green';
        document.getElementById('cPaper').style.backgroundColor = 'red';
        document.querySelector('input').value = 'You Won 🎉';
        document.querySelector('input').style.color = 'green';
        document.querySelector('#stone').style.cursor = 'not-allowed';
        document.querySelector('#paper').style.cursor = 'not-allowed';
        document.querySelector('#scissor').style.cursor = 'not-allowed';
        document.querySelector('#stone').disabled = 'true';
        document.querySelector('#paper').disabled = 'true';
        document.querySelector('#scissor').disabled = 'true';
        document.querySelector('#retry').style.display = 'block';
        document.querySelector('.container').style.boxShadow = '0px 0px 19px 9px green';
        document.querySelector('.container').style.border = '2px solid green';

    }
    else {
        Result = 'Scissor'
        console.log('Try Again');
        document.getElementById('stone').style.backgroundColor = 'white';
        document.getElementById('paper').style.backgroundColor = 'white';
        document.getElementById('cStone').style.backgroundColor = 'white';
        document.getElementById('cPaper').style.backgroundColor = 'white';
        document.getElementById('cScissor').style.backgroundColor = 'yellow';
        document.getElementById('scissor').style.backgroundColor = 'yellow';
        document.querySelector('input').value = 'Both Select Scissor 🤪';
        document.querySelector('input').style.color = 'yellow';
        document.querySelector('#stone').style.cursor = 'not-allowed';
        document.querySelector('#paper').style.cursor = 'not-allowed';
        document.querySelector('#scissor').style.cursor = 'not-allowed';
        document.querySelector('#stone').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissor').disabled = true;
        document.querySelector('#retry').style.display = 'block';
        document.querySelector('.container').style.boxShadow = '0px 0px 19px 9px yellow';
        document.querySelector('.container').style.border = '2px solid yellow';

    }
}
let retry = () => {
    document.querySelector('#stone').disabled = false;
    document.querySelector('#paper').disabled = false;
    document.querySelector('#scissor').disabled = false;
    document.querySelector('#stone').style.cursor = 'pointer';
    document.querySelector('#paper').style.cursor = 'pointer';
    document.querySelector('#scissor').style.cursor = 'pointer';
    document.querySelector('#stone').style.backgroundColor = 'white';
    document.querySelector('#paper').style.backgroundColor = 'white';
    document.querySelector('#scissor').style.backgroundColor = 'white';
    document.querySelector('#cStone').style.backgroundColor = 'white';
    document.querySelector('#cPaper').style.backgroundColor = 'white';
    document.querySelector('#cScissor').style.backgroundColor = 'white';
    document.querySelector('#retry').style.display = 'none';
    document.querySelector('input').value = '';
    document.querySelector('.container').style.boxShadow = 'none';
    document.querySelector('.container').style.border = '2px solid white';
}