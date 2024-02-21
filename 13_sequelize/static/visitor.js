const tbody = document.querySelector('tbody');
console.log(tbody);
function registVisitor() {              // 등록 - /visitor로 post
    const form = document.forms['visitor-form'];
    console.log(form);
    if (form.name.value.length === 0 || form.comment.value.lenght === 0) {
        alert('이름과 내용을 모두 입력해주세요.');
        return;
    }

    if(form.name.value.length > 6) {
        alert('이름은 최대 6글자를 넘을 수 없습니다.');
        return;
    }

    axios({
        method:'post',
        url:'/visitors',
        data: {
            name: form.name.value,
            comment:form.comment.value
        }
    }).then(function(res) {
        const {data} = res;
        const html = `
        <tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.comment}</td>
            <td><button type="button" onclick="editVisitor(${data.id})">수정</button></td>
            <td><button type="button" onclick="deleteVisitor(this,${data.id})">삭제</button></td>
        </tr>
        `;

        tbody.insertAdjacentHTML('beforeend',html);
    });
}

function deleteVisitor(button,id) {              // 삭제 - /visitor로 delete
    axios({
        method:'delete',
        url:'/visitors',
        data:{ id: id }
    }).then(function(res) {
        console.log(res.data);
        alert(res.data);

        button.parentElement.parentElement.remove();
        // .closest(`#tr_${id}`)
    })
}

function editVisitor(id) {                // 수정 - /visitor로 patch
    axios({
        method:'get',
        url:`/visitors/${id}`,
        // params: {id: id}
    }).then(function(res) {
        console.log(res.data);
        const form = document.forms['visitor-form']
        form.name.value = data.name;
        form.comment.value = data.comment;
    });
    const html = `
    <button type="button" onclick="editDo(${id})"></button>
    <button type="button" onclick="editNo()"></button>
    `;
    // .innerHTML = html;
}

function editDo(id) {
    const form = document.forms['visitor-form'];
    axios ({
        method:'patch',
        url:'/visitors',
        data: {
            id: id,
            name: form.name.value,
            comment: form.comment.value
        }
    }).then(function(res) {
        const child = document.querySelector(``)
        editNo();
    })
}

function editNo() {

}