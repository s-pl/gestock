import * as React from 'react';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Divider from '@mui/joy/Divider';

export const TermsContent = () => (
  <>
    <Typography level="body-md" sx={{ mb: 2 }}>
      Al utilizar Gestock, aceptas los siguientes términos y condiciones:
    </Typography>
    
    <Typography level="title-md" sx={{ mt: 2, mb: 1 }}>
      1. Uso del Servicio
    </Typography>
    <Typography level="body-md" sx={{ mb: 2 }}>
      Gestock proporciona una plataforma para la gestión de inventarios. El uso de este servicio está sujeto a la aceptación y cumplimiento de estos términos.
    </Typography>
    
    <Typography level="title-md" sx={{ mt: 2, mb: 1 }}>
      2. Cuentas de Usuario
    </Typography>
    <Typography level="body-md" sx={{ mb: 2 }}>
      Para utilizar Gestock, debes crear una cuenta con información precisa y completa. Eres responsable de mantener la confidencialidad de tu contraseña y de todas las actividades que ocurran bajo tu cuenta.
    </Typography>
    
    <Typography level="title-md" sx={{ mt: 2, mb: 1 }}>
      3. Contenido del Usuario
    </Typography>
    <Typography level="body-md" sx={{ mb: 2 }}>
      Cualquier dato o información que subas a Gestock sigue siendo de tu propiedad. Sin embargo, nos otorgas una licencia para almacenar y procesar dicha información con el fin de proporcionarte el servicio.
    </Typography>
    
    <Typography level="title-md" sx={{ mt: 2, mb: 1 }}>
      4. Limitación de Responsabilidad
    </Typography>
    <Typography level="body-md" sx={{ mb: 2 }}>
      Gestock se proporciona "tal cual" y "según disponibilidad". No garantizamos que el servicio sea ininterrumpido, seguro o libre de errores.
    </Typography>
    
    <Typography level="title-md" sx={{ mt: 2, mb: 1 }}>
      5. Modificaciones
    </Typography>
    <Typography level="body-md" sx={{ mb: 2 }}>
      Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio.
    </Typography>
    
 
  </>
);

export const PrivacyContent = () => (
  <>
    <Typography level="body-md" sx={{ mb: 2 }}>
      En Gestock, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos tu información.
    </Typography>
    
    <Typography level="title-md" sx={{ mt: 2, mb: 1 }}>
      1. Información que Recopilamos
    </Typography>
    <Typography level="body-md" sx={{ mb: 2 }}>
      Recopilamos información que proporcionas directamente, como tu nombre, correo electrónico y datos de inventario. También recopilamos automáticamente cierta información sobre tu dispositivo y uso del servicio.
    </Typography>
    
    <Typography level="title-md" sx={{ mt: 2, mb: 1 }}>
      2. Uso de la Información
    </Typography>
    <Typography level="body-md" sx={{ mb: 2 }}>
      Utilizamos tu información para proporcionar, mantener y mejorar nuestros servicios, comunicarnos contigo y personalizar tu experiencia.
    </Typography>
    
    <Typography level="title-md" sx={{ mt: 2, mb: 1 }}>
      3. Compartir Información
    </Typography>
    <Typography level="body-md" sx={{ mb: 2 }}>
      No vendemos ni alquilamos tus datos personales a terceros. Podemos compartir información con proveedores de servicios que nos ayudan a operar Gestock, siempre bajo estrictas obligaciones de confidencialidad.
    </Typography>
    
    <Typography level="title-md" sx={{ mt: 2, mb: 1 }}>
      4. Seguridad de Datos
    </Typography>
    <Typography level="body-md" sx={{ mb: 2 }}>
      Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra acceso no autorizado, alteración, divulgación o destrucción.
    </Typography>
    
    <Typography level="title-md" sx={{ mt: 2, mb: 1 }}>
      5. Tus Derechos
    </Typography>
    <Typography level="body-md" sx={{ mb: 2 }}>
      Tienes derecho a acceder, corregir, eliminar y exportar tus datos personales. También puedes oponerte al procesamiento de tus datos en ciertas circunstancias.
    </Typography>
    
    <Typography level="body-md" sx={{ mt: 3, fontStyle: 'italic' }}>
      Última actualización: {new Date().toLocaleDateString()}
    </Typography>
  </>
);

export const CookiesContent = () => (
  <>
    <Typography level="body-md" sx={{ mb: 2 }}>
      Gestock utiliza cookies y tecnologías similares para mejorar tu experiencia, analizar el tráfico y personalizar el contenido.
    </Typography>
    
    <Typography level="title-md" sx={{ mt: 2, mb: 1 }}>
      1. ¿Qué son las Cookies?
    </Typography>
    <Typography level="body-md" sx={{ mb: 2 }}>
      Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Ayudan a recordar tus preferencias y a mejorar tu experiencia de navegación.
    </Typography>
    
    <Typography level="title-md" sx={{ mt: 2, mb: 1 }}>
      2. Tipos de Cookies que Utilizamos
    </Typography>
    <List sx={{ listStyleType: 'disc', pl: 2 }}>
      <ListItem sx={{ display: 'list-item' }}>
        <Typography level="body-md">
          <strong>Cookies Esenciales:</strong> Necesarias para el funcionamiento básico del sitio.
        </Typography>
      </ListItem>
      <ListItem sx={{ display: 'list-item' }}>
        <Typography level="body-md">
          <strong>Cookies de Preferencias:</strong> Permiten recordar tus preferencias y configuraciones.
        </Typography>
      </ListItem>
      <ListItem sx={{ display: 'list-item' }}>
        <Typography level="body-md">
          <strong>Cookies Analíticas:</strong> Nos ayudan a entender cómo interactúas con el sitio.
        </Typography>
      </ListItem>
    </List>
    
    <Typography level="title-md" sx={{ mt: 2, mb: 1 }}>
      3. Control de Cookies
    </Typography>
    <Typography level="body-md" sx={{ mb: 2 }}>
      Puedes gestionar las cookies a través de la configuración de tu navegador. Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio.
    </Typography>
    
    <Typography level="title-md" sx={{ mt: 2, mb: 1 }}>
      4. Cookies de Terceros
    </Typography>
    <Typography level="body-md" sx={{ mb: 2 }}>
      Algunos de nuestros socios pueden establecer cookies en tu dispositivo. Estas cookies nos ayudan a analizar el uso del sitio y a proporcionar funcionalidades adicionales.
    </Typography>
  
  </>
);