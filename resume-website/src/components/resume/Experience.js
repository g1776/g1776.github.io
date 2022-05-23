import { Grid, Link, Typography } from "@material-ui/core";
import theme from "../../theme";

const Experience = (props) => {
    
    // decontruct props
    let {
      group,
      position,
      dateStart,
      dateEnd,
      bullets,
      image = undefined,
      imgHeight = undefined,
      imgWidth = undefined,
    } = props;

    let datePair = undefined;

    if (position !== undefined) {
      position = " - " + position;
    }
    if ((dateStart !== undefined) & (dateEnd !== undefined)) {
      datePair = dateStart + " - " + dateEnd;
    }

    return (
      <Grid
        container
        style={{
          justifyContent: "space-between",
          paddingBottom: theme.spacing(7),
        }}
        spacing={4}
      >
        <Grid item xs={12} md={7}>
          <Typography variant="h5">
            <b>{group}</b>
            {position}
          </Typography>
        </Grid>
        <Grid item container xs={12} md={5} justify="flex-end">
          <Typography variant="h6">{datePair}</Typography>
        </Grid>
        <Grid item xs={12} md={image === undefined ? 12 : 8}>
          {bullets.map((b, i) => (
            <Typography
              variant="h6"
              style={{ paddingBottom: theme.spacing(2) }}
            >
              - {b}
            </Typography>
          ))}
        </Grid>
        {image !== undefined && (
          <Grid
            container
            item
            xs={12}
            md={4}
            style={{ alignItems: "center", justifyContent: "flex-end" }}
          >
            <img
              src={process.env.PUBLIC_URL + image}
              width={imgWidth}
              height={imgHeight}
            ></img>
          </Grid>
        )}
      </Grid>
    );
  };

export default Experience;