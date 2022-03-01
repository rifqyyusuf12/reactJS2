import React, { Component } from 'react';
import Table from './common/table';
import Like from './common/like';


class MoviesTable extends Component {
 columns = [
     { path: 'title', label:'Title' },
     { path: 'genre.name', label:'Genre' },
     { path: 'numberInStock', label:'Stock' },
     { path: 'dailyRentalRate', label:'Rate' },
     { 
        key : 'Like', 
     content: movie => (
     <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} /> 
     )
    },
     { key: 'Delete', 
     content: movie => (
     <button 
     onClick={() => this.props.onDelete(movie)}  
     className="btn btn-danger btn-sm"
     >
         Delete 
     </button>
     )
    }
 ];

    raiseSort = path => {

    };

    render() { 
            const { movies, onSort, sortColumn} = this.props

            return ( 
                <Table 
                    columns={this.columns} 
                    data={movies} 
                    sortColumn={sortColumn} 
                    onSort={onSort} 
                />
             );
        
    }
}
 
export default MoviesTable;

