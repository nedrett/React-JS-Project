import { useState } from "react";

import * as combineService from '../../services/combineService';
import { SearchItem } from './SearchItem/SearchItem';

export const Search = () => {
    const [searchWord, setSearchWord] = useState('');
    const [combines, setCombines] = useState([]);

    const onChange = (e) => {
        setSearchWord(e.target.value);
    }

    const onSubmit = (e) => {
        const result = `LIKE "${searchWord}"`;

        combineService.search(result)
            .then(res => {
                setCombines(res);
                setSearchWord('');
            })
            .catch(err => {
                window.alert(err.message)
            });
    }

    return (
        <>
            <div className="input-group">
                <div type="form" className="search" >
                    <input type="text" id="form1" className="search-input" onChange={onChange} name="search-box" value={searchWord} placeholder="Please input model!"/>
                    <button type="submit" className="btn btn-search" onClick={onSubmit}>
                        Search
                    </button>
                </div>
            </div>
            <div id="search-results" className="search-results">
                {combines.length > 0
                    ? combines.map(combine => <SearchItem combine={combine}/>)
                    : <p className="no-results">No results found!</p>
                }
            </div>
        </>
    )
}