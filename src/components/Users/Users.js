import React, { Fragment } from "react";

// UI Component
import {
  Backdrop,
  CircularProgress,  
  Box
} from '@material-ui/core';

// Custom Components
import DataTable from './DataTable';

// Custom Styles
import { 
  spinner,
  dataTable,
} from "./styles";

const Users = ({users, loader}) => { 
  const spinnerCSS = spinner();
  const dataTableCSS = dataTable();  
  
  return (
    <Fragment>
      <Backdrop className={spinnerCSS.backdrop} open={loader}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className={dataTableCSS.customCSS}>
        {users.length ? (
          <DataTable data={users} />
        ) : !loader && (                          
            <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="grey.300">
              <h2>No Records Found !</h2>                
            </Box>            
          )
        }
      </div>
    </Fragment>
  );
};

export default Users;
