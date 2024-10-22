document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('.input');
    const buttons = document.querySelectorAll('.button');
    let memory = 0;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.textContent;

            if (value === 'C') {
                input.value = '';
            } else if (value === '=') {
                try {
                    input.value = eval(input.value);
                } catch {
                    input.value = 'Error';
                }
            } else if (value === 'M+') {
                memory += parseFloat(input.value) || 0;
                input.value = '';
            } else if (value === 'M-') {
                memory -= parseFloat(input.value) || 0;
                input.value = '';
            } else if (value === '%') {
                input.value = (parseFloat(input.value) / 100) || '';
            } else {
                input.value += value;
            }
        });
    });
});