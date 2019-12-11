import React from "react"; 
import { render } from 'react-dom';
import { getFunName } from "../helpers";


class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="store name" defaultValue={getFunName()}/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker; 