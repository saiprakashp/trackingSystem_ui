import React from 'react';

const CustomPagination = (props) =>{
    return (
       <div className='container-fluid'>
            <ul className='pagination'>
                <li className='page-item'><a class="page-link" href="#">Previous</a></li>
                <li className='page-item'><a class="page-link" href="#">1</a></li>
                <li className='page-item'><a class="page-link" href="#">2</a></li>
                <li className='page-item'><a class="page-link" href="#">3</a></li>
                <li className='page-item'><a class="page-link" href="#">4</a></li>
                <li className='page-item'><a class="page-link" href="#">5</a></li>
                <li className='page-item'><a class="page-link" href="#">Next</a></li>
            </ul>
        </div>
    )
};

export default CustomPagination;