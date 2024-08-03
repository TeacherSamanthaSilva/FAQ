const headers = document.querySelectorAll(".sanfona-header")
const sanfonaitem = document.querySelectorAll(".sanfona-item")

headers.forEach(function(header){

    header.addEventListener("click", function(){

        const item = this.parentNode;

       const isActive  = item.classList.contains(".sanfona-item-active")

       sanfonaitem.forEach(function(item){

        item.classList.remove("sanfona-item-active")
        item.classList.add("sanfona-item-closed")
       })

       if(!isActive){

        item.classList.add("sanfona-item-active")
        item.classList.remove("sanfona-item-closed")
       }
    })
})