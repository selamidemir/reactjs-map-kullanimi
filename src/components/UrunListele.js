import React from 'react';

function UrunListele() {
    // Ürün listesi
    const urunler = [
        {
            id: 1,
            name: "Domates Salçası",
            price: 39
        },
        {
            id: 2,
            name: "Makarna",
            price: 8
        },
        {
            id: 3,
            name: "Prinç",
            price: 25
        },
        {
            id: 4,
            name: "Mercimek",
            price: 29
        },
        {
            id: 5,
            name: "Un",
            price: 22
        }
    ]

    const urunListesi = () => urunler.map(urun => <li key={urun.id}>{urun.name} - {urun.price}tl</li>);

    return (
        <div>
            <h2>Ürün Listesi</h2>
            <ul>{urunListesi()}</ul>
        </div>
    )
}

export default UrunListele;