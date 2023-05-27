import { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Loading from '../loading/Loading'
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Paper, CardActionArea, CardMedia, Grid, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Button, CircularProgress } from "@material-ui/core";
import image from "./bg1.png";
import { DropzoneArea } from 'material-ui-dropzone';
import { common } from '@material-ui/core/colors';
import Clear from '@material-ui/icons/Clear';
import './service.css'


const REACT_APP_API_URL = 'http://localhost:8000/predict'

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(common.white),
    backgroundColor: common.white,
    '&:hover': {
      backgroundColor: '#ffffff7a',
    },
  },
}))(Button);
const axios = require("axios").default;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  clearButton: {
    width: "-webkit-fill-available",
    borderRadius: "15px",
    padding: "15px 22px",
    color: "#000000a6",
    fontSize: "20px",
    fontWeight: 900,
  },
  root: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media: {
    height: 400,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  gridContainer: {
    justifyContent: "center",
    padding: "4em 1em 0 1em",
  },
  mainContainer: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: "93vh",
    margin: "0",
  },
  imageCard: {
    margin: "auto",
    marginTop: '5em',
    maxWidth: 400,
    height: 500,
    backgroundColor: 'transparent',
    boxShadow: '0px 9px 70px 0px rgb(0 0 0 / 30%) !important',
    borderRadius: '15px',
  },
  imageCardEmpty: {
    height: 'auto',
  },
  noImage: {
    margin: "auto",
    width: 400,
    height: "400 !important",
  },
  input: {
    display: 'none',
  },
  uploadIcon: {
    background: 'white',
  },
  tableContainer: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none !important',
  },
  table: {
    backgroundColor: 'transparent !important',
  },
  tableHead: {
    backgroundColor: 'transparent !important',
  },
  tableRow: {
    backgroundColor: 'transparent !important',
  },
  tableCell: {
    fontSize: '22px',
    backgroundColor: 'transparent !important',
    borderColor: 'transparent !important',
    color: '#000000a6 !important',
    fontWeight: 'bolder',
    padding: '1px 24px 1px 16px',
  },
  tableCell1: {
    fontSize: '14px',
    backgroundColor: 'transparent !important',
    borderColor: 'transparent !important',
    color: '#000000a6 !important',
    fontWeight: 'bolder',
    padding: '1px 24px 1px 16px',
  },
  tableBody: {
    backgroundColor: 'transparent !important',
  },
  text: {
    color: 'white !important',
    textAlign: 'center',
  },
  buttonGrid: {
    maxWidth: "416px",
    width: "100%",
  },
  detail: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  appbar: {
    background: '#84ad40',
    boxShadow: 'none',
    color: 'white'
  },
  loader: {
    color: '#84ad40 !important',
  },
  dropZone: {
    backgroundColor: 'none',
    color: 'black',
    opacity: 0.8,
  }
}));
export default function Service() {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState();
  const [image, setImage] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [serviceSelected, setServiceSeleted] = useState('notSelected');
  const [irrigationData, setIrrigationData] = useState('')
  let confidence = 0;

  const clearData = () => {
    setData(null);
    setImage(false);
    setSelectedFile(null);
    setPreview(null);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    const sendFile = async () => {
      if (image) {
        let formData = new FormData();
        formData.append("file", selectedFile);
        let res = await axios({
          method: "post",
          url: REACT_APP_API_URL,
          data: formData,
        });
        if (res.status === 200) {
          setData(res.data);
        }
        setIsloading(false);
      }
    }

    if (!preview) {
      return;
    }

    setIsloading(true);
    sendFile();
  }, [preview])

  const onSelectFile = (files) => {
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      setImage(false);
      setData(undefined);
      return;
    }
    setSelectedFile(files[0]);
    setData(undefined);
    setImage(true);
  };

  if (data) {
    confidence = (parseFloat(data.confidence) * 100).toFixed(2);
  }

  const handleIrrigation = async (e) => {
    e.preventDefault();
    setIsloading(true);
    setIrrigationData('');
    setTimeout(async () => {
      const form = document.getElementById('landInfo');
      const formData = new FormData(form); // Create a new FormData object and pass the form element
      await fetch('http://127.0.0.1:5000/fuzzy_logic', {
        method: 'POST',
        body: formData,
      })
        .then(data => data.text()).then(data => {
          setIrrigationData(data)
        })
        .catch(error => {
          console.error(error);
        });
      setIsloading(false)
    }, Math.floor(Math.random(6000) + 3000));
  }

  return (
    <div className="services--container">
      {
        serviceSelected === 'notSelected' &&
        <div className="serviceCard--container">
          <div className="serviceCard">
            <img className="serviceCard--img" src='/images/background/2.webp' alt="poster" />
            <h2 style={{ textAlign: 'center', marginTop: '1em', textDecoration: 'underline' }}>Disease Detection</h2>
            <p className="servicePara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus praesentium consequuntur a iste delectus adipisci nihil molestias perferendis totam. Id possimus numquam enim ipsa voluptatem officia earum sit aliquam!</p>
            <div className="serviceBtn--container">
              <button onClick={() => setServiceSeleted('diseaseSelected')} className="serviceBtn">Disease Detection</button>
            </div>
          </div>
          <div className="serviceCard" style={{height: '80vh', backgroundColor: '#4158D0', backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)' }}>
            <img className="serviceCard--img" src='/images/background/1.jpg' alt="poster" />
            <h2 style={{ textAlign: 'center', marginTop: '1em', textDecoration: 'underline' }}>Smart Irrigation</h2>
            <p className="servicePara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus praesentium consequuntur a iste delectus adipisci nihil molestias perferendis totam. Id possimus numquam enim ipsa voluptatem officia earum sit aliquam!</p>
            <div className="serviceBtn--container" style={{marginTop: '3em'}}>
              <button onClick={() => setServiceSeleted('irrigationSelected')} className="serviceBtn">Smart Irrigation</button>
            </div>
          </div>
        </div>
      }
      {
        serviceSelected === 'diseaseSelected' &&
        < React.Fragment >
          <Container maxWidth={false} className={classes.mainContainer} disableGutters={true}>
            <Grid
              className={classes.gridContainer}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12}>
                <Card className={`${classes.imageCard} ${!image ? classes.imageCardEmpty : ''}`}>
                  {image && <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={preview}
                      component="image"
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                  }
                  {!image && <CardContent className={classes.content}>
                    <DropzoneArea
                      dropzoneClass={classes.dropZone}
                      acceptedFiles={['image/*']}
                      dropzoneText={"Drag and drop an image of a plant leaf to process"}
                      onChange={onSelectFile}
                    />
                  </CardContent>}
                  {data && <CardContent className={classes.detail}>
                    <TableContainer component={Paper} className={classes.tableContainer}>
                      <Table className={classes.table} size="small" aria-label="simple table">
                        <TableHead className={classes.tableHead}>
                          <TableRow className={classes.tableRow}>
                            <TableCell className={classes.tableCell1}>Label:</TableCell>
                            <TableCell align="right" className={classes.tableCell1}>Confidence:</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody className={classes.tableBody}>
                          <TableRow className={classes.tableRow}>
                            <TableCell component="th" scope="row" className={classes.tableCell}>
                              {data.class}
                            </TableCell>
                            <TableCell align="right" className={classes.tableCell}>{confidence}%</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>}
                  {isLoading && <CardContent className={classes.detail}>
                    <CircularProgress color="secondary" className={classes.loader} />
                    <Typography className={classes.title} variant="h6" noWrap>
                      Processing
                    </Typography>
                  </CardContent>}
                </Card>
              </Grid>
              {data &&
                <Grid item className={classes.buttonGrid} >

                  <ColorButton variant="contained" className={classes.clearButton} color="primary" component="span" size="large" onClick={clearData} startIcon={<Clear fontSize="large" />}>
                    Clear
                  </ColorButton>
                </Grid>}
            </Grid >
          </Container >
        </React.Fragment >
      }
      {
        serviceSelected === 'irrigationSelected' &&
        <div className="irrigationPage--container">
          <div className="irrigation--container">
            <form className="box" id="landInfo" method="post" onSubmit={(e) => handleIrrigation(e)}>
              <h1 style={{ color: 'black' }}>Land Informations</h1>
              <input type="text" name="moist" placeholder="Temperature" />
              <input type="text" name="temp" placeholder="Moisture of land" />
              <input type="submit" name="" value="Submit" />
            </form>
            {
              isLoading &&
              <div className="irrigation--loading">
                <Loading />
              </div>
            }
            {
              irrigationData != '' &&
              <div className="">
                <div className="irrigation--result--container">
                  {
                    irrigationData === 'Do not water land' &&
                    <img className="irrigation--img" src="/images/background/doNotWater.svg" alt="do not water land" />
                  }
                  {
                    irrigationData === 'You should water land' &&
                    <img className="irrigation--img" src="/images/background/water.svg" alt="water land" />
                  }
                  <div className="irrigation--result">{irrigationData}</div>
                </div>
              </div>
            }
          </div>
        </div>
      }
    </div >
  );
};
