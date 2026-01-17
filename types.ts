import React from 'react';

export interface CategoryCard {
  id: string;
  title: string;
  image: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  image: string;
  color: string;
  icon?: React.ReactNode;
}

export interface StatProps {
  value: string;
  label: string;
}