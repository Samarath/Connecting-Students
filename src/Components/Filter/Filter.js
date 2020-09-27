import React from 'react';
import './Filter.css';

import FilterSearch from '../Filter Search/FilterSearch';
import FilterSearchResult from '../Filter Search Result/FilterSearchResult';
import NavbarAfterVerification from '../Navbar/Navbar after verification';
import Footer from '../Footer/Footer';


const Filter = () => {
    return (
        <div>
            <div>
                <NavbarAfterVerification />
            </div>

            <div className='mainfilter'>
                <div>
                    <h3>Total 350 cocahings</h3>
                </div>

                <div className='filterDisplay'>

                   <div>
                      <FilterSearch />
                   </div>
                   <div className='filterDispaly2'>
                      <FilterSearchResult />
                   </div> 
                   
                </div>
            </div>

            <div>
                <Footer />
            </div>

        </div>
    );
}

export default Filter;