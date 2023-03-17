import Table from 'react-bootstrap/Table';
import"./table2.css"
function Table2() {
  return (
    <Table striped bordered hover className='table'>
      <thead>
        <tr className='thead'>
          <th>Sistema nervoso somático</th>
          <th>Sistema nervoso visceral</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>aferente: sensitivo </td>
          <td>aferente: sensitivo visceral</td>
          
        </tr>
        <tr>
          <td>eferente: motor</td>
          <td>eferente: motor visceral (autônomo)</td>
         
        </tr>
      </tbody>
    </Table>
  );
}

export default Table2;