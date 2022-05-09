import { rowDataLoad } from "./actions"
import { useEffect } from "react";
import { ReactReduxContext, useSelector } from 'react-redux'
import { useContext } from 'react';

export default function RowData(row) { 
    const storeContext = useContext(ReactReduxContext);
    const msg = useSelector(state => state.table.message)
    // const [msg, setMsg] = useState('');
    useEffect(() => {
        storeContext.store.dispatch(rowDataLoad());
    }, [])
    return (<div style={{ padding: "20px" }}>
        <em>
            {msg}
        </em>
    </div>);
}