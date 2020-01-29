import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Products from './components/Products';
import Companies from './components/Companies';
import Nav from './components/Nav';
import qs from 'qs';

const API = 'https://acme-users-api-rev.herokuapp.com/api'
const getHash = () => window.location.hash.slice(1)
function App() {
  const [products, setProducts] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [params, setParams] = useState(qs.parse(getHash()));

  useEffect(() => {
    axios.get(`${API}/companies`)
      .then(response => setCompanies(response.data));
  }, []);

  useEffect(() => {
    axios.get(`${API}/products`)
      .then(response => setProducts(response.data));
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setParams(qs.parse(getHash()))
    })
  }, [])

  // if (!['products', 'companies'].includes(getHash())) {
  //   window.location.hash = 'products'
  // }

  return (
    <div>
      <Nav
        products={products}
        companies={companies}
        view={params}
        setView={setParams}
      />
      <main>
        {params.view === 'products' && <Products products={products} />}
        {params.view === 'companies' && <Companies params={params} companies={companies} />}
      </main>
    </div>
  );
}

export default App;
