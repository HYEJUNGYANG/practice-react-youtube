import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Channel() {
  const location = useLocation();
  //   console.log(location.state.channel);
  return <div>Channel</div>;
}
