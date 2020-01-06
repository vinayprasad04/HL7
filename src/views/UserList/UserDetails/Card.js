import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


import uuid from 'uuid/v1';
import moment from 'moment';

const mockData =[
  {
    id: uuid(),
    name: 'Ashif',
    age:'56',
    birthDate:'10/01/165',
    gender:'Male',
    Marital_Status:'Married',
    Medicare_Number:'5616546541',
    Address:'1/222 Block Q, Noida-201203',
    updatedAt: moment().subtract(2, 'hours'),
    more:{
      demographic:{
        Medicare_Number:'5616546541',
        Address:'1/222 Block Q, Noida-201203',
        updatedAt: moment().subtract(2, 'hours'),
      },
      history:{
        birthDate:'10/01/165',
        gender:'Male',
      }
    }
  }
];

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const CardDetails = props => {
  const { className,cardLevel, ...rest } = props;
  const classes = useStyles();
  const [products] = useState(mockData);
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader subtitle={`${products.length} in total`} title={cardLevel}/>
      <Divider />
      <CardContent className={classes.content}>
        <List>
          {products.map((product, i) => (
            <list key={product.id}>
              <ListItem divider={i < products.length - 1} >
                <ListItemText primary={product.name} secondary={`Updated ${product.updatedAt.fromNow()}`}/>
              </ListItem>
              <ListItem divider={i < products.length - 1} key={product.id}>
                <ListItemText primary={product.age} secondary={`Updated ${product.updatedAt.fromNow()}`}/>
              </ListItem>
            </list>
          ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button color="primary" size="small" variant="text"> Edit <ArrowRightIcon /></Button>
      </CardActions>
    </Card>
  );
};

CardDetails.propTypes = {
  className: PropTypes.string
};




export {CardDetails};
