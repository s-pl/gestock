import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Inventory from '../components/Inventory/Inventory';
import InventoryStats from '../components/Inventory/InventoryStats';


function Dashboard() {
  const { currentUser } = useAuth();
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };


  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Box sx={{ maxWidth: '1450px', margin: '0 auto', padding: 2 }}>
      <Typography level="h2" sx={{ mb: 3 }}>
        Panel de Control
      </Typography>
      
      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
        <TabList>
          <Tab>Inventario</Tab>
          <Tab>Estadísticas</Tab>
        </TabList>
        <TabPanel value={0}>
          <Inventory />
        </TabPanel>
        <TabPanel value={1}>
          <InventoryStats />
        </TabPanel>
      </Tabs>
    </Box>
  );
}

export default Dashboard;