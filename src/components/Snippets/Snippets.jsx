import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
                            </TabList>
                            <TabPanel value={0} sx={{ p: 2, backgroundColor: '#282A36', borderRadius: '0 0 8px 8px' }}>
                                <Typography
                                    level="body-sm"
                                    sx={{
                                        fontFamily: 'monospace',
                                        whiteSpace: 'pre-wrap',
                                        color: '#d4d4d4'
                                    }}
                                >
                                    <SyntaxHighlighter language="javascript" style={dracula}>
                                        {`import GestockAPI from "gestock";

const api = new GestockAPI();

// Obtener lista de productos
async function fetchProducts() {
  try {
    const products = await api.getProducts("YOUR API KEY");
    console.log("Products:", products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts();

// Crear un producto
async function addProduct() {
  try {
    const newProduct = await api.createProduct("YOUR API KEY", "New Product", 100);
    console.log("Product created:", newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
  }
}

addProduct();`}
                                    </SyntaxHighlighter>
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