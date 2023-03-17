import Table from 'react-bootstrap/Table';
import"./table3.css"
function Table3() {
  return (
    <Table striped bordered hover >
      <thead>
        <tr className='thead'>
          <th>Simpático</th>
          <th>Parassimpático</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>neurônio pré-ganglionar c/ axônio curto</td>
          <td>neurônio pré-ganglionar c/axônio longo</td>
          
        </tr>
        <tr>
          <td>neurônio pós-ganglionar c/ axônio longo</td>
          <td>neurônio pós-ganglionar c/axônio curto</td>
        </tr>
        <tr>
           <td>gânglios próximos à medula espinal</td>
           <td>gânglios muito próximos ou dentro do órgão efetor</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Table3;