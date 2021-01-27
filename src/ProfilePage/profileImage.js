const selectedImage = document.getElementById('profileImageSelection')
selectedImage.addEventListener('click', (e) => {
    e.preventDefault();
    var input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => {
        files = e.target.files;
        reader.onload = function () {
            document.getElementById('productImg').src = reader.result;
        }
        reader.readAsDataURL(files[0]);
    }
    input.click();
    console.log("Selection is ready");
})
