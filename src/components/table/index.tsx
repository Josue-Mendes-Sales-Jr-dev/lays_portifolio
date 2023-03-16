import Table from 'react-bootstrap/Table';
import './table1.css'
function Table1() {
  return (
    <Table striped bordered hover size="sm">
      <thead >
        <tr className='thead'>
          <th>TIPO CELULAR</th>
          <th>LOCALIZAÇÃO</th>
          <th>PRINCIPAL FUNÇÃO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>monócito</td>
          <td>sangue</td>
          <td>precursor dos macrófagos</td>
        </tr>
        <tr>
          <td>célula de Kupffer</td>
          <td>fígado</td>
          <td>igual aos macrófagos</td>
          
        </tr>
        <tr>
          <td>micróglia</td>
          <td>sistema nervoso central e periférico</td>
          <td>igual aos macrófagos</td>
        </tr>
        <tr>
          <td>célula de Langerhans </td>
          <td>"pele" </td>
          <td>processamento e apresentação de antígeno</td>
        </tr>
        <tr>
          <td> célula dendrítica </td>
          <td> linfonodo </td>
          <td>processamento e apresentação de antígeno</td>
        </tr>
        <tr>
          <td>célula dendrítica</td>
          <td>linfonodo</td>
          <td>processamento e apresentação de antígeno</td>
        </tr>
        <tr>
          <td>célula dendrítica</td>
          <td>linfonodo</td>
          <td>processamento e apresentação de antígeno</td>
        </tr>
        <tr>
          <td>osteoclasto</td>
          <td>	
osso (fusão de vários macrófagos
         </td>
          <td>digestão do osso</td>
        </tr>
        <tr>
          <td>célula gigante multinucleada</td>
          <td>tec. conjuntivo (fusão de vários macrófagos</td>
          <td>segregação e digestão de corpos estranhos</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Table1;