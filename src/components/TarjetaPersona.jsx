import Card from 'react-bootstrap/Card';

// Recibe UNA persona por props y dibuja su tarjeta
function TarjetaPersona({ persona }) {
  const { nombre, rol, propiedades, contrato, dni, tel } = persona;

  // "381-1234567" -> "5493811234567" (formato que pide wa.me)
  const numeroWhatsapp = '549' + tel.replace(/\D/g, '');

  return (
    <Card as="article" className="persona-card h-100 shadow-sm">
      <Card.Body>
        <Card.Title as="h3" className="h5">{nombre}</Card.Title>
        <Card.Text className="mb-1 text-muted">{rol}</Card.Text>

        {/* Los propietarios tienen "propiedades"; los inquilinos, "contrato" */}
        {propiedades !== undefined && (
          <Card.Text className="mb-1">Propiedades: {propiedades}</Card.Text>
        )}
        {contrato !== undefined && (
          <Card.Text className="mb-1">Contrato #{contrato}</Card.Text>
        )}

        <Card.Text className="mb-1">DNI: {dni}</Card.Text>
        <Card.Text className="mb-0">Tel: {tel}</Card.Text>

        
         <a href={`https://wa.me/${numeroWhatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-whatsapp-custom mt-2"
        >
          📱 WhatsApp
        </a>
      </Card.Body>
    </Card>
  );
}

export default TarjetaPersona;