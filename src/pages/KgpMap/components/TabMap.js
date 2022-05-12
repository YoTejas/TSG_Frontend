import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import GuideMap from './GuideMap';
import GoogleMaps from './GoogleMap';

export default function TabMap() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered style={{fontWeight:"600"}}>
            <Tab label="Guide Map" value="1" />
            <Tab label="Google Map" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><GuideMap /> </TabPanel>
        <TabPanel value="2"><GoogleMaps /></TabPanel>
      </TabContext>
    </Box>
  );
}
