const toggleBtn = document.querySelector('#register')
const login= document.querySelector('.login')

function ChangeBtn(){
    login.innerHTML='signin'

}

toggleBtn.addEventListener('click',function myFunction(){
    ChangeBtn()
}
)