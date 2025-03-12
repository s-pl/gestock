import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

function Snippets() {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{
            maxWidth: '1450px',
            margin: '0 auto',
            padding: 2
        }}>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid xs={12} md={5}>
                    <Box sx={{ p: 2 }}>
                        <Typography level="h4" sx={{ mb: 2 }}>
                            API Potente y Fácil de Usar
                        </Typography>
                        <Typography level="body-lg">
                            Nuestra API RESTful te permite integrar la gestión de inventario en cualquier aplicación de forma sencilla y segura.
                        </Typography>
                        <Typography level="body-md" sx={{ mt: 2 }}>
                            Con nuestra API podrás:
                        </Typography>
                        <Box component="ul" sx={{ pl: 2 }}>
                            <Typography component="li">Crear, actualizar y eliminar productos</Typography>
                            <Typography component="li">Gestionar categorías y proveedores</Typography>
                            <Typography component="li">Controlar stock y movimientos de inventario</Typography>
                            <Typography component="li">Obtener estadísticas y reportes detallados</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} md={7}>
                    <Sheet
                        variant="outlined"
                        sx={{
                            borderRadius: 'md',
                            overflow: 'hidden',
                            backgroundColor: 'background.level1'
                        }}
                    >
                        <Tabs value={tabValue} onChange={handleTabChange}>
                            <TabList>
                                <Tab>JavaScript</Tab>
                                <Tab>Python</Tab>
                                <Tab>cURL</Tab>
                            </TabList>
                            <TabPanel value={0} sx={{ p: 2, backgroundColor: '#1e1e1e', borderRadius: '0 0 8px 8px' }}>
                                <Typography
                                    level="body-sm"
                                    sx={{
                                        fontFamily: 'monospace',
                                        whiteSpace: 'pre-wrap',
                                        color: '#d4d4d4'
                                    }}
                                >
                                    {`// Inicializar el cliente de API
const gestockAPI = new GestockAPI('YOUR_API_KEY');

// Obtener lista de productos
async function getProducts() {
  try {
    const products = await gestockAPI.inventory.list({
      limit: 10,
      offset: 0,
      sort: 'stock_level'
    });
    
    console.log(\`Total productos: \${products.total}\`);
    products.data.forEach(product => {
      console.log(\`\${product.id}: \${product.name} (Stock: \${product.stock})\`);
    });
  } catch (error) {
    console.error('Error al obtener productos:', error);
  }
}`}
                                </Typography>
                            </TabPanel>
                            <TabPanel value={1} sx={{ p: 2, backgroundColor: '#1e1e1e', borderRadius: '0 0 8px 8px' }}>
                                <Typography
                                    level="body-sm"
                                    sx={{
                                        fontFamily: 'monospace',
                                        whiteSpace: 'pre-wrap',
                                        color: '#d4d4d4'
                                    }}
                                >
                                    {`# Inicializar el cliente de API
from gestock import GestockAPI

api = GestockAPI("YOUR_API_KEY")

# Registrar un nuevo producto
try:
    new_product = api.inventory.create(
        name="Monitor LED 24 pulgadas",
        sku="MON-LED-24",
        category="Electrónica",
        price=149.99,
        stock=25,
        supplier_id="SUP-001"
    )
    
    print(f"Producto creado: {new_product.id}")
    print(f"SKU: {new_product.sku}, Stock inicial: {new_product.stock}")
    
except Exception as e:
    print(f"Error al crear producto: {str(e)}")
`}
                                </Typography>
                            </TabPanel>
                            <TabPanel value={2} sx={{ p: 2, backgroundColor: '#1e1e1e', borderRadius: '0 0 8px 8px' }}>
                                <Typography
                                    level="body-sm"
                                    sx={{
                                        fontFamily: 'monospace',
                                        whiteSpace: 'pre-wrap',
                                        color: '#d4d4d4'
                                    }}
                                >
                                    {`# Actualizar el stock de un producto
curl -X PATCH https://api.gestock.com/v1/inventory/products/prod_123 \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "stock": 42,
    "stock_status": "in_stock"
  }'

# Obtener movimientos de inventario
curl -X GET https://api.gestock.com/v1/inventory/movements \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "product_id": "prod_123",
    "date_from": "2023-01-01",
    "date_to": "2023-12-31"
  }'
`}
                                </Typography>
                            </TabPanel>
                        </Tabs>
                    </Sheet>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Snippets;