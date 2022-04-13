import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div>
                <div class="product-view">
                    <img src="%PUBLIC_URL%/img/calca-masculina.png" alt="" class="img-product"/>
                    <div class="product-price">
                        <p class="price-label">R$250,00</p>
                    </div>
                </div>
                <div class="product-label">
                    <h2 class="product-name">Calça Preta</h2>
                    <p class="product-category">Calça</p>
                </div>
            </div>
        );
    }
}

export default Card();