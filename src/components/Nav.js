import React from 'react';
import qs from 'qs';

const Nav = ({ params, companies, products }) => {

    return (
        <nav>
            <a href={`#${qs.stringify({ view: 'products' })}`}
                className={params === 'products' ? 'selected' : ''}>
                Products({products.length})
                </a>

            <a href={`#${qs.stringify({ view: 'companies' })}`}
                className={params === 'companies' ? 'selected' : ''}>
                Companies({companies.length})
            </a>
        </nav >
    )
}


export default Nav;