console.log(localStorage.getItem('JWdairy'));
let dairy = JSON.parse(localStorage.getItem('JWdairy')) ?? [];

export function getData() {
    return dairy ?? [];
}

export function addData({ id, content, date }) {
    dairy.push({ id, content, date });
    localStorage.setItem('JWdairy', JSON.stringify(dairy));
    return dairy;
}

export function deleteData(id) {
    dairy = dairy.filter((item) => item.id !== id);
    localStorage.setItem('JWdairy', JSON.stringify(dairy));
    return dairy;
}