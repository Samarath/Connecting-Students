import React from 'react';
import './FilterSearch.css';

const FilterSearch = () => {
    return(
        <>
          <div className='filterSearch'>
              <div className='filtersearchStyle'>

                  <div>
                     <label htmlFor='category'>Category:</label> 
                  </div>
                  <div>
                    <select id='category'>
                      <option value="generealcompetition">General Competition</option>
                      <option value="iit">I.I.T.</option>
                      <option value="ITI">I.T.I.</option>
                      <option value="upsc">UPSC</option>
                      <option value="bpsc">BPSC</option>
                   </select>  
                  </div>
                  
              </div>
              <div className='filtersearchStyle'>

                  <div>
                    <label htmlFor='location'>Location:</label>
                  </div>
                  <div>
                    <input type='text' placeholder='location' id='location'/>  
                  </div> 

              </div>
              <div className='filtersearchStyle'>

                  <div>
                    <label htmlFor='fee'>Fee:</label>  
                  </div>
                  <div>
                    <input type='range' id='fee' className='slider' />  
                  </div>
                  
              </div>
          </div> 
        </>
    );
}

export default FilterSearch;