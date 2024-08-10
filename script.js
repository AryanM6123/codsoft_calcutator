document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id === 'clear') {
                display.innerText = '0';
            } else if (button.id === 'equals') {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
            }else if (button.id === 'backspace') {
                if (display.innerText.length > 1) {
                    display.innerText = display.innerText.slice(0, -1);
                } else {
                    display.innerText = '0';
                }
            }
             else {
                if (display.innerText === '0' && button.dataset.value !== '.') {
                    display.innerText = button.dataset.value;
                } else {
                    display.innerText += button.dataset.value;
                }
            }
        });
    });
});