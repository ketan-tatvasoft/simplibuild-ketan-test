import { makeStyles } from "@material-ui/core/styles";

const spinner = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

const dataTable = makeStyles(theme => ({
  customCSS: {
    marginTop: "100px"    
  }
}));

export { 
  spinner, 
  dataTable  
};
