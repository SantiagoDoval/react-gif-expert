import {useState} from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Audi' ]);

    console.log(categories);
    
    const onAddCategory = ( inputValue ) => {
        if ( categories.includes(inputValue) ) return;
        setCategories([inputValue,...categories])
        //setCategories( item => ['Moderm House',...categories])
        
    }

    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                //setCategories={ setCategories } 
                onNewCategory={e => onAddCategory(e) }
            />         
            {categories.map(item=> <GifGrid key={ item } category={ item } /> )}                
            
        </>
    )
}