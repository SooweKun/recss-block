const block = document.getElementById('block');
change = document.getElementById('changecss');


change.addEventListener('keypress', (e) => styles(e));

const styles = (e) => {

    if (e.key === "Enter") {
        const { value } = change;
        block.style.backgroundColor = value;
        block.style.borderRadius = value;
    }

}