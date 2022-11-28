const $ = document.querySelector.bind(document)
const $$= document.querySelectorAll.bind(document)
const app = {
    dungs: [
        {
            img: './img/product-1.jpg',
            name: 'Hyacinth white stick',
            price: '250.000 đ'
        },
        {
            img: './img/product-2.jpg',
            name: 'Flowers daisy pink stick',
            price: 'cho'
        },
        {
            img: './img/product-3.jpg',
            name: 'Blossom bouquet flower',
            price: 'cho mượn'
        },
        {
            img: './img/product-12.jpg',
            name: 'Rose bouquet white',
            price: '2.000 đ'
        },
        {
            img: './img/product-5.jpg',
            name: 'Flowers daisy pink stick',
            price: 'trả góp'
        },
        {
            img: './img/product-6.jpg',
            name: 'orchid flower red stick',
            price: '10.000 đ'
        },
        {
            img: './img/product-7.jpg',
            name: 'Huacinth white stick',
            price: '10k'
        },
        {
            img: './img/product-8.jpg',
            name: 'Blossom bouquet flower',
            price: '20.000 đ'
        },
        {
            img: './img/product-9.jpg',
            name: 'tên Sản Phẩm9',
            price: '120k'
        },
        {
            img: './img/product-10.jpg',
            name: 'tên Sản Phẩm10',
            price: '2.000.000.000 đ'
        },
        {
            img: './img/product-11.jpg',
            name: 'tên Sản Phẩm11',
            price: 'cho thuê'
        },
        {
            img: './img/product-12.jpg',
            name: 'tên Sản Phẩm12',
            price: 'vất đi'
        },
    ],
    render:function() {
        const htmls = this.dungs.map(dung => {
            return `
                <ul class="conten-nav">
                    <li >
                        <img src="${dung.img}" alt="">
                    </li>
                    <li>
                        <span>${dung.name}</span>
                    </li>
                    <li>
                        <p>${dung.price}</p>
                    </li>
                </ul>              
            `
        })
        $(".conten-item").innerHTML = htmls.join('')
    },
    start:function() {
        this.render()
    }
}
app.start()