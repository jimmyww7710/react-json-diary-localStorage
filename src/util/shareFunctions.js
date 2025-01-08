let diary = JSON.parse(localStorage.getItem('JWdiary')) ?? [];

export function getData() {
    return diary || [];
}

export function addData({ id, content, date }) {
    diary.push({ id, content, date });
    localStorage.setItem('JWdiary', JSON.stringify(diary));
    return diary;
}

export function deleteData(id) {
    diary = diary.filter((item) => item.id !== id);
    localStorage.setItem('JWdiary', JSON.stringify(diary));
    return diary;
}

export function editData({ id, content }) {
    console.log(id, content);
    diary = diary.map(item => {
        return item.id === id ? { ...item, content: content } : item
    }

    )
    console.log('diary:', diary);
    localStorage.setItem('JWdiary', JSON.stringify(diary));
    return diary;
}