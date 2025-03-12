function showDetails(name, role, mssv, studentClass, phone, email, github) {
    document.getElementById("modal-name").textContent = name;
    document.getElementById("modal-role").textContent = role;
    document.getElementById("modal-mssv").textContent = mssv;
    document.getElementById("modal-class").textContent = studentClass;
    document.getElementById("modal-phone").textContent = phone;
    document.getElementById("modal-email").textContent = email;
    document.getElementById("modal-github").innerHTML = `<a href="${github}" target="_blank">${github}</a>`;

    // Thêm avatar vào modal
    let avatar = document.createElement("img");
    avatar.src = `avatar${name.split(' ')[0].toLowerCase()}.jpg`; // Giả sử avatar đặt tên theo tên đầu tiên
    avatar.alt = name;

    let modalContent = document.querySelector(".modal-content");
    let existingImg = modalContent.querySelector("img");

    // Xóa ảnh cũ nếu có, rồi thêm ảnh mới
    if (existingImg) existingImg.remove();
    modalContent.insertBefore(avatar, modalContent.firstChild);

    document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}
