// import logo from './logo.svg';
import './App.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { useSelector, useDispatch } from 'react-redux';
import RowData from './RowData';



const columns = [
  {
    Header: "First Name",
    accessor: "firstName"
  },
  {
    Header: "Last Name",
    accessor: "lastName"
  },
  {
    Header: "Age",
    accessor: "age"
  },
  {
    Header: "Gender",
    accessor: "gender"
  }
];

export default function App() {
    const data = useSelector(state => state.table.data);
    return(
      <div >
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={10}
        className="-striped -highlight"
        SubComponent={(row) => {
          return <RowData row={row} />
        }}
      />
    </div>
    )
}

