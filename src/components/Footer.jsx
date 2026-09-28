function Footer() {

  const anio = new Date().getFullYear();

  return (
    <footer className="text-center py-3 siga-footer">
      <p className="mb-0">&copy; {anio} SIGA — Todos los derechos reservados</p>
    </footer>
  );
}

export default Footer;