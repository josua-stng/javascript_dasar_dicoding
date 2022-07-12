const changeChaption= new Event('changeCaption')

window.addEventListener('load',()=>{
    const tombol = document.querySelector('#tombol');
    tombol.addEventListener('changeCaption',customEventHandler);
    tombol.addEventListener('click',()=>{
        tombol.dispatchEvent(changeChaption)
    })
})

const customEventHandler = (ev)=>{
    console.log('Event' + ev.type + 'telah dijalankan');
    const caption = document.querySelector('#caption');
    caption.innerText='Anda telah membangkitkan custom event'
}