import React from 'react';
import { Container } from './styles';

interface InputOptionsProps {
  title: string;
  children: React.ReactNode;
}

export function InputOptions({ title, children }: InputOptionsProps)  {
  return (
    <Container> 
      <label>{title}</label>
      <select>{children}</select>
    </Container>
  )
}