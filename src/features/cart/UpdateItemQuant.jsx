import React from 'react';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuant, getItemQuant, increaseQuant } from './cartSlice';

export default function UpdateItemQuant({ id }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getItemQuant(id));
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type={'round'} onClick={() => dispatch(decreaseQuant(id))}>
        -
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button type={'round'} onClick={() => dispatch(increaseQuant(id))}>
        +
      </Button>
    </div>
  );
}
