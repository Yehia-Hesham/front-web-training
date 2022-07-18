var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


function create_para(my_text) {
    var para = document.createElement("p");
    para.innerText = my_text;
    document.body.appendChild(para); 
};

my_form = document.querySelector('form');

my_form.addEventListener('submit',function(e){
    e.preventDefault();
    var my_text =document.getElementById('fname').value;

    console.log(my_text)
    if(format.test(my_text) || my_text === ""){
        alert("String can't contain any special symbols / cant be empty")
    }else{
        create_para(my_text)
    }

document.addEventListener('click', function(e) {

})
});