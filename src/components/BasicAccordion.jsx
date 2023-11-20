import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

function BasicAccordion({ pharmas, childToParent }) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Selecionar Farmácia</Accordion.Header>
        <Accordion.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Selecionar</th>
                <th>#</th>
                <th>Farmácia</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {pharmas.length > 0 ? (
                pharmas.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="radio"
                        value={item.name} // ou qualquer outra propriedade que identifique a farmácia
                        onClick={childToParent}
                        name="selectedPharmacy" />
                    </td>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>R$ {item.updateValue}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Nenhum item para exibir</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
      {/* Se desejar adicionar mais itens no Accordion, descomente e personalize conforme necessário */}
      {/* <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Conteúdo do segundo item do Accordion
        </Accordion.Body>
      </Accordion.Item> */}
    </Accordion>
  );
}

export default BasicAccordion;
