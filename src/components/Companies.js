import React, { useState, useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';

const API = 'https://acme-users-api-rev.herokuapp.com/api'

const Profits = ({ id }) => {
    const [profits, setProfits] = useState([])

    useEffect(() => {
        axios.get(`${API}/companies/${id}/companyProfits`)
            .then(response => setProfits(response.data))
    }, [id])
    return (
        <ul>
            {
                profits.map(profit => {
                    return (
                        <li key={profit.id}>
                            Profit: {profit.amount.toFixed(2)}
                            &nbsp;Year:  {profit.fiscalYear}
                        </li>
                    )
                })
            }
        </ul>
    )
}
const Company = ({ company }) => {
    return (
        <ul>
            <li>Phone: {company.phone}</li>
            <li>Catch Phrase: {company.catchPhrase}</li>

        </ul>
    )
}

const Companies = ({ companies, params }) => {
    const company = companies.find(c => c.id === params.id);
    console.log(company)
    return (
        <div>
            {
                !!company && <Company company={company} />
            }
            {
                !!params.id && <Profits id={params.id} />
            }
            <h1>Companies</h1>
            <ul>
                {
                    companies.map(company => {
                        return (
                            <li key={company.id}>
                                <a href={`#${qs.stringify({ view: 'companies', id: company.id })}`}>
                                    {company.name}</a>
                            </li>
                        );
                    })

                }

            </ul>
        </div>
    )
}



export default Companies;