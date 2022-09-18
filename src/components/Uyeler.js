import React from 'react';

function Uyeler() {
    // İsim listesi
    const uyeler = [
        'Ahmet Koşan',
        'Alim Demir',
        'Hasan Şahin',
        'Nuri Özgüven',
        'Selim Çelik'
    ]

    return (
        <div>
            <h2>Üye Listesi</h2>
            <ul>
                {
                    uyeler.map((isim, index) => <li>{isim}</li>)
                }
            </ul>
        </div>
    )
}

export default Uyeler;