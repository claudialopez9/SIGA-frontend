import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function ItemPago({ pago, onPagar }) {
  const { id, contrato, mes, fecha, pagado } = pago;

  return (
    <ListGroup.Item
      className={`pago ${pagado ? '' : 'pendiente'} d-flex flex-wrap justify-content-between align-items-center gap-2`}
    >
      <span>Contrato #{contrato} — {mes}</span>
      <span>{pagado ? 'Pagado' : 'Vence'}: {fecha}</span>
      <Badge bg={pagado ? 'success' : 'danger'}>
        {pagado ? 'Pagado' : 'Pendiente'}
      </Badge>
      {!pagado && (
        <Button variant="outline-success" size="sm" onClick={() => onPagar(id)}>
          Marcar como pagado
        </Button>
      )}
    </ListGroup.Item>
  );
}

export default ItemPago;