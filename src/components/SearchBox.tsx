import React from 'react';

function SearchBox(props: any) {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search cats'
                onChange={props.searchChange}
            />
        </div>
    );
}

// const SearchBox = (searchChange: any) => {
//     return (
//       <div className='pa2'>
//         <input
//           className='pa3 ba b--green bg-lightest-blue'
//           type='search'
//           placeholder='search robots'
//           onChange={searchChange}
//         />
//       </div>
//     );
//   }

export default SearchBox;