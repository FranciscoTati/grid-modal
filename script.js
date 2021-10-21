let fullimgBox = document.querySelector('#fullimgBox')
let fullimg = document.querySelector('#fullimg')

function openimg(pic){
    fullimgBox.style.display = 'flex';
    fullimg.src = pic;
}
function closed(){
    fullimgBox.style.display = 'none';
}