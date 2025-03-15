import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import MenuButton from '@mui/joy/MenuButton';
import Dropdown from '@mui/joy/Dropdown';
import { Outlet, Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import CustomModal from '../Modal/Modal';
import { TermsContent, PrivacyContent, CookiesContent } from '../Modal/ModalContents';
import gestockLogo from '../../assets/gestock-logo.svg';



const Layout = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = React.useState('');
  const [openTerms, setOpenTerms] = React.useState(false);
  const [openPrivacy, setOpenPrivacy] = React.useState(false);
  const [openCookies, setOpenCookies] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
 
  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      setError('Error al cerrar sesión');
      console.error(error);
    }
  }

  return (
    <CssVarsProvider>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
       
        <Sheet
          component="nav"
          sx={{
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 1100,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src={gestockLogo} alt="Gestock Logo" style={{ width : '40px'}} />
            </Link>
          </Box>

         
          <List
            role="menubar"
            orientation="horizontal"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <ListItem>
              <Link component={RouterLink} to="/" underline="none">
                Inicio
              </Link>
            </ListItem>
            <ListItem>
              <Link component={RouterLink} to="/about" underline="none">
                Nosotros
              </Link>
            </ListItem>
            {currentUser && (
              <>
                <ListItem>
                  <Link component={RouterLink} to="/dashboard" underline="none">
                    Dashboard
                  </Link>
                </ListItem>
              </>
            )}
            <ListItem>
              <Link component={RouterLink} to="/contact" underline="none">
                Contacto
              </Link>
            </ListItem>
          </List>

          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          
            <Box sx={{ display: { xs: 'flex', md: 'none' }, marginRight: { xs: 1, sm: 2 } }}>
              <Dropdown open={mobileMenuOpen} onOpenChange={(_, isOpen) => setMobileMenuOpen(isOpen)}>
                <MenuButton
                  slots={{ root: IconButton }}
                  slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
                  sx={{ border: 'none' }}
                >
                  <Box sx={{ width: 24, height: 20, position: 'relative' }}>
                    <Box
                      sx={{
                        width: '100%',
                        height: '2px',
                        bgcolor: 'text.primary',
                        position: 'absolute',
                        top: mobileMenuOpen ? '50%' : '0',
                        transform: mobileMenuOpen ? 'rotate(45deg)' : 'none',
                        transition: 'transform 0.3s, top 0.3s'
                      }}
                    />
                    <Box
                      sx={{
                        width: '100%',
                        height: '2px',
                        bgcolor: 'text.primary',
                        position: 'absolute',
                        top: '50%',
                        opacity: mobileMenuOpen ? 0 : 1,
                        transition: 'opacity 0.3s'
                      }}
                    />
                    <Box
                      sx={{
                        width: '100%',
                        height: '2px',
                        bgcolor: 'text.primary',
                        position: 'absolute',
                        bottom: mobileMenuOpen ? '50%' : '0',
                        transform: mobileMenuOpen ? 'rotate(-45deg)' : 'none',
                        transition: 'transform 0.3s, bottom 0.3s'
                      }}
                    />
                  </Box>
                </MenuButton>
                <Menu
                  placement="bottom-end"
                  sx={{
                    minWidth: 180,
                    mt: 1,
                    zIndex: 1200,
                    position: 'absolute',
                    right: 0,
                    maxHeight: '80vh',
                    overflowY: 'auto'
                  }}
                >
                  <MenuItem component={RouterLink} to="/">
                    Inicio
                  </MenuItem>
                  <MenuItem component={RouterLink} to="/about">
                    Acerca de
                  </MenuItem>
                  {currentUser && (
                    <MenuItem component={RouterLink} to="/dashboard">
                      Dashboard
                    </MenuItem>
                  )}
                  <MenuItem component={RouterLink} to="/contact">
                    Contacto
                  </MenuItem>
                </Menu>
              </Dropdown>
            </Box>

           
            {currentUser ? (
              <>
                <Typography level="body-sm" sx={{ alignSelf: 'center', mr: 2 }}>
                  {currentUser.email}
                </Typography>
                <Button variant="outlined" color="neutral" onClick={handleLogout}>
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="outlined" 
                  color="neutral" 
                  component={RouterLink} 
                  to="/login"
                >
                  Iniciar sesión
                </Button>
                <Button component={RouterLink} to="/signup">
                  Registrarse
                </Button>
              </>
            )}
          </Box>
        </Sheet>

        
        <Box component="main" sx={{ flex: 1, p: 3 }}>
          <Outlet />
        </Box>

   
        <Sheet
          component="footer"
          sx={{
            p: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box className="footer-brand">
              <Typography level="body-sm">
                © {new Date().getFullYear()} <a href='https://www.github.com/s-pl'>Samuel Ponce Luna</a>. Todos los derechos reservados.
              </Typography>
            </Box>

            <List
              role="menubar"
              orientation="horizontal"
              sx={{ display: 'flex', gap: 2 }}
            >
              <ListItem>
                <Link 
                  component="button" 
                  onClick={() => setOpenTerms(true)} 
                  underline="none" 
                  level="body-sm"
                >
                  Términos
                </Link>
              </ListItem>
              <ListItem>
                <Link 
                  component="button" 
                  onClick={() => setOpenPrivacy(true)} 
                  underline="none" 
                  level="body-sm"
                >
                  Privacidad
                </Link>
              </ListItem>
              <ListItem>
                <Link 
                  component="button" 
                  onClick={() => setOpenCookies(true)} 
                  underline="none" 
                  level="body-sm"
                >
                  Cookies
                </Link>
                
              </ListItem>
              <ListItem>
                <Link 
                  component="button" 
                  onClick={() => window.location = "/news"} 
                  underline="none" 
                  level="body-sm"
                >
                  Canal de noticias
                </Link>
                
              </ListItem>
            </List>
          </Box>
        </Sheet>

        
        <CustomModal 
          open={openTerms} 
          onClose={() => setOpenTerms(false)} 
          title="Términos y Condiciones"
        >
          <TermsContent />
        </CustomModal>

        <CustomModal 
          open={openPrivacy} 
          onClose={() => setOpenPrivacy(false)} 
          title="Política de Privacidad"
        >
          <PrivacyContent />
        </CustomModal>

        <CustomModal 
          open={openCookies} 
          onClose={() => setOpenCookies(false)} 
          title="Política de Cookies"
        >
          <CookiesContent />
        </CustomModal>
      </Box>
    </CssVarsProvider>
  );
};

export default Layout;